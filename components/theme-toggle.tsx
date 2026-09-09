'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

/** Shared with the pre-paint script in app/[lang]/layout.tsx. Keep in step. */
const STORAGE_KEY = 'theme';

/** Fired on toggle so every mounted button re-reads, not just the clicked one. */
const THEME_EVENT = 'themechange';

/**
 * Light/dark toggle.
 *
 * Three states exist in globals.css, not two: `data-theme="light"`,
 * `data-theme="dark"`, and *no attribute at all*, which is the default and
 * lets the `prefers-color-scheme` block decide. The previous version
 * collapsed that to two — on a first visit it found nothing in localStorage,
 * fell back to 'light', and wrote both the attribute and the stored value.
 * A visitor whose system is set to dark was therefore forced into light mode
 * and silently opted in to it forever, which is the exact case the CSS
 * media query was written to handle.
 *
 * So: nothing is written until the visitor actually clicks. Until then the
 * effective theme is *read* — from storage if they have chosen before,
 * otherwise from the media query — and only ever used to pick the icon.
 *
 * useSyncExternalStore rather than useState + useEffect because the theme
 * lives outside React (documentElement, localStorage, matchMedia). Reading it
 * in an effect meant a setState on mount, cascading renders, and a `mounted`
 * flag that made the button pop in after hydration; this reads the external
 * value directly and re-renders when any of the three sources change.
 */
export function ThemeToggle({
  toDarkLabel,
  toLightLabel,
}: {
  toDarkLabel: string;
  toLightLabel: string;
}) {
  const theme = useSyncExternalStore(subscribe, readTheme, getServerTheme);
  const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
  // The label and icon describe the *action*, not the current state — a Moon
  // on a light page means "go dark". Naming the current state instead leaves
  // the button ambiguous with no other on-screen cue to disambiguate it.
  const label = nextTheme === 'dark' ? toDarkLabel : toLightLabel;

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      aria-label={label}
      title={label}
      className="inline-flex items-center justify-center size-9 rounded-lg text-ink/60 hover:text-maroon hover:bg-sand/50 transition-colors border border-border/50"
    >
      {nextTheme === 'dark' ? <Moon className="size-5" /> : <Sun className="size-5" />}
    </button>
  );
}

function setTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Private mode / blocked storage: the theme still applies for this page
    // view, it just will not survive a navigation. Not worth failing over.
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

function readTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // fall through to the system preference
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Server snapshot. There is no way to know the visitor's preference while
 * prerendering, so this guesses light; React swaps in the real value right
 * after hydration. It only ever selects an icon — the page itself is already
 * painted correctly by then, by the CSS media query or the pre-paint script.
 */
function getServerTheme(): Theme {
  return 'light';
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener('change', onChange);
  // Two of these buttons are mounted at once (header + mobile menu), and the
  // theme can also change in another tab; both need to stay in step.
  window.addEventListener(THEME_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    media.removeEventListener('change', onChange);
    window.removeEventListener(THEME_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}
