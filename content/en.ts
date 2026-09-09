import type { Dictionary } from "./types";

/**
 * English content dictionary.
 * TODO(owner): replace sample testimonials with real reviews once collected,
 * and swap placeholder gallery items for real job photos (PRD §8).
 */
export const en: Dictionary = {
  locale: "en",
  meta: {
    defaultTitle: "Good Choice Furniture Home Services — Furniture, Repair, Moving & Disposal in Qatar",
    defaultDescription:
      "Furniture & curtain sales, sofa repair, installation, home moving and junk disposal across Doha and Qatar. Message us on WhatsApp for a same-day quote.",
  },
  nav: {
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    about: "About",
    blog: "Tips",
    disposal: "Disposal",
    quote: "Get a Quote",
    contact: "Contact",
  },
  common: {
    getQuote: "Get a Quote",
    whatsappUs: "WhatsApp Us",
    callNow: "Call Now",
    learnMore: "Learn more",
    viewAll: "View all",
    readMore: "Read more",
    before: "Before",
    after: "After",
    ourProcess: "How it works",
    faqHeading: "Frequently asked questions",
    areasHeading: "Areas we serve",
    areasAllQatar: "Everywhere in Qatar",
    relatedServices: "Related services",
    backToServices: "All services",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "العربية",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    ratingLabel: "5 out of 5 stars",
    breadcrumbLabel: "Breadcrumb",
    filtersLabel: "Filter by service",
    primaryNavLabel: "Primary",
  },
  header: {
    tagline: "Home services across Qatar",
  },
  footer: {
    blurb:
      "Furniture & curtains, repairs, installation, moving and disposal — one trusted team for your home in Qatar.",
    servicesTitle: "Services",
    companyTitle: "Company",
    contactTitle: "Contact",
    hoursTitle: "Working hours",
    hours: "Saturday – Thursday, 8:00 AM – 8:00 PM",
    rights: "All rights reserved.",
  },
  floating: {
    label: "Chat with us on WhatsApp",
    message: "Hello Good Choice Furniture! I'd like to ask about your home services.",
  },
  areas: {
    doha: "Doha",
    alRayyan: "Al Rayyan",
    alWakrah: "Al Wakrah",
    lusail: "Lusail",
    thePearl: "The Pearl",
    alKhor: "Al Khor",
    ummSalal: "Umm Salal",
  },
  home: {
    metaTitle: "Home Services in Doha & Qatar — Repair, Moving, Installation | Good Choice Furniture",
    metaDescription:
      "One call for furniture & curtains, sofa repair, TV & kitchen installation, home moving and junk disposal across Doha, Al Rayyan, Lusail and beyond. WhatsApp us for a same-day quote.",
    heroEyebrow: "Doha · Al Rayyan · Lusail · Al Wakrah",
    heroTitle: "One team for everything your home needs",
    heroSubtitle:
      "Furniture & curtains, sofa repair, installations, moving and junk disposal — booked in minutes over WhatsApp, done right the first time.",
    heroNote: "Same-day quotes · No obligation · Arabic & English speaking team",
    heroImageLabel:
      "Living room fitted with made-to-measure curtains, seating and a built-in TV unit",
    heroChat: {
      headerName: "Good Choice Furniture",
      // Response-time claim, and it has to stay true — this is the same rule
      // that got the invented star rating pulled. It deliberately matches the
      // "same-day quotes" promise already made in heroNote.
      headerStatus: "Same-day replies · Arabic & English",
      greeting: "Hi! Tell us what your home needs and we'll send a quote the same day.",
      greetingTime: "09:41",
      photoCaption: "Furniture, curtains and fitted units — measured and installed.",
      chipsLabel: "Tap one to start the chat",
      // Written first-person: these land pre-typed in the visitor's own
      // WhatsApp, so they have to sound like the customer, not like us.
      chips: [
        {
          id: "repair",
          label: "My sofa needs repair",
          message: "Hi Good Choice — my sofa needs repair. Could you take a look?",
        },
        {
          id: "sales",
          label: "I need curtains measured",
          message: "Hi Good Choice — I'd like curtains measured and fitted. What are the next steps?",
        },
        {
          id: "moving",
          label: "I'm moving home next month",
          message: "Hi Good Choice — I'm moving home next month and need a quote for the move.",
        },
        {
          id: "installation",
          label: "Mount my TV on the wall",
          message: "Hi Good Choice — I'd like a TV mounted on the wall. When are you available?",
        },
        {
          id: "disposal",
          label: "Clear out old furniture",
          message: "Hi Good Choice — I have old furniture to clear out. Can you collect it?",
        },
        {
          id: "other",
          label: "Something else",
          message: "Hi Good Choice — I have a question about your services.",
        },
      ],
    },
    videoHeading: "See us at work",
    videoTitle: "Good Choice Furniture — how we work",
    videoPlayLabel: "Play the video",
    // TODO(owner): "1,500+" and "24h" are unverified — confirm both or change
    // them before launch. The other two are structural facts about the site
    // (five services, seven listed areas) and are safe. A jobs-completed count
    // nobody has counted is the kind of claim that is trivially challenged,
    // and it sits next to testimonials that are still samples.
    stats: [
      { value: "1,500+", label: "Jobs completed" },
      { value: "5", label: "Services under one roof" },
      { value: "7", label: "Areas covered in Qatar" },
      { value: "24h", label: "Average quote turnaround" },
    ],
    servicesEyebrow: "What we do",
    servicesHeading: "Five services, one WhatsApp message away",
    servicesIntro:
      "Send us a photo of what you need — we'll reply with a clear price and the earliest available slot.",
    whyEyebrow: "Why Good Choice Furniture",
    whyHeading: "The crew Qatar homes call first",
    whyIntro:
      "We show up on time, protect your floors and walls, and leave the place cleaner than we found it.",
    whyPoints: [
      {
        title: "One team, five trades",
        text: "No juggling contractors — sales, repair, installation, moving and disposal handled by one coordinated crew.",
      },
      {
        title: "Priced before we start",
        text: "Photo-based quotes over WhatsApp. The price we agree is the price you pay.",
      },
      {
        title: "Careful in your home",
        text: "Floor protection, wrapped furniture, tidy work areas — your home is treated like our own.",
      },
      {
        title: "Bilingual & local",
        text: "Arabic and English speaking team, serving every municipality in Qatar.",
      },
    ],
    areasEyebrow: "Coverage",
    areasText:
      "Based in Doha and working across Qatar. Not sure if we cover your area? Message us — we probably do.",
    testimonialsEyebrow: "Word of mouth",
    testimonialsHeading: "What our customers say",
    galleryEyebrow: "Recent work",
    galleryHeading: "Real jobs, real results",
    galleryCta: "Browse the full gallery",
    faqHeading: "Quick answers",
    faqs: [
      {
        q: "How do I get a price?",
        a: "Send us a photo and a short description on WhatsApp. For most jobs we reply with a fixed price the same day; larger moves or installations may need a quick site visit.",
      },
      {
        q: "Which areas do you cover?",
        a: "Everywhere in Qatar. Wherever you are in the country, message us and we will come to you.",
      },
      {
        q: "Do you work on Fridays?",
        a: "Our regular hours are Saturday to Thursday, 8 AM to 8 PM. Urgent jobs on Fridays can sometimes be arranged — message us on WhatsApp.",
      },
      {
        q: "Can you take old furniture when delivering new items?",
        a: "Yes — our disposal service can remove your old sofa, wardrobes or appliances during the same visit. Just mention it when booking.",
      },
    ],
    tickerItems: [
      "Furniture & curtains, made to measure",
      "Sofas repaired, not replaced",
      "TV units, kitchens & flooring installed",
      "Homes & offices moved",
      "And we take the junk away too",
    ],
    steps: [
      { title: "Message us", text: "Send a photo of what you need over WhatsApp or call us directly." },
      { title: "Get your price", text: "We reply with a clear quote and the earliest available slot — no obligation." },
      { title: "We get it done", text: "Our team shows up on time, does the job right, and cleans up after." },
    ],
    ctaTitle: "Ready when you are",
    ctaText:
      "Send a photo, get a price, pick a time. It really is that simple.",
  },
  servicesIndex: {
    metaTitle: "Our Services — Furniture, Repair, Installation, Moving, Disposal | Good Choice Furniture",
    metaDescription:
      "Explore Good Choice Furniture's five home services in Qatar: furniture & curtain sales, sofa repair, installations, home & office moving, and junk disposal.",
    eyebrow: "Services",
    heading: "Everything your home needs, under one roof",
    intro:
      "Pick a service to see what's included, how we work, and what it costs. Every page has a WhatsApp button pre-filled for that service — just add your photo.",
  },
  services: {
    sales: {
      slug: "sales",
      subcategories: [
        {
          slug: "furniture-sales",
          label: "Furniture Sales",
          description:
            "Sofas, beds, majlis seating and dining sets — delivered and assembled across Qatar.",
        },
        {
          slug: "curtains-draping",
          label: "Curtains & Draping",
          description:
            "Made-to-measure curtains, blackout linings and sheers, measured and fitted in your home.",
        },
        {
          slug: "decor-accessories",
          label: "Decor & Accessories",
          description:
            "Rugs, cushions, wall pieces and the finishing touches that pull a room together.",
        },
      ],
      name: "Furniture & Curtain Sales",
      tagline: "Made-to-measure curtains and furniture that fits your space",
      cardDescription:
        "Curtains, sofas, majlis sets and more — measured, supplied and fitted by our own team.",
      metaTitle: "Curtains & Furniture Sales in Doha | Good Choice Furniture",
      metaDescription:
        "Made-to-measure curtains, sofas and furniture supplied and fitted across Qatar. Send us a photo of your space on WhatsApp for a same-day quote.",
      heroSubtitle:
        "From blackout curtains for the bedroom to a full majlis refresh — we measure, supply and install, so everything fits the first time.",
      overview: [
        "Choosing furniture and curtains in Qatar usually means visiting showrooms, arranging delivery, then finding someone else to install. We do all three. The typical Qatar home moves through four or five apartments or villas over a decade — each with different window shapes, wall heights, and layout challenges. Off-the-shelf curtains and sofas are designed for standard spaces, which is why so many end up unused, rearranged, or sold on. Made-to-measure changes that equation.",
        "Send us photos of your room and rough measurements on WhatsApp. We'll suggest fabrics and styles that suit your space and Qatar's climate — blackout for sun-facing bedrooms and nurseries, sheer for privacy while letting light through, thermal linings for summer cooling — and give you a clear price. Our installers fit everything in a single visit: rails, brackets, and furniture all level, secure, and finished. Most projects from quote to installed takes two to three weeks, with free measuring visits included.",
        "Our fabric range spans budget-friendly polyester and linen-blends to premium velvet and leather. For sofas and majlis seating, we work with custom makers across the region or can supply from showroom stock — whatever fits your budget and timeline. We handle everything: design, fabrication, delivery, and installation."
      ],
      features: [
        {
          title: "Made-to-measure curtains",
          description: "Blackout, sheer, wave, pencil pleat and eyelet styles — measured to the millimetre and sewn to order. Thermal, soundproof and fire-retardant options available.",
        },
        {
          title: "Custom sofas & majlis",
          description: "Modern sectionals, traditional floor seating, and bespoke shapes. Choose frame type (hardwood or metal), foam density, and fabric — everything custom-made for your space.",
        },
        {
          title: "Complimentary measuring visit",
          description: "We come to you with a laser measure, fabric sample book, and colour-matched suggestions. Every window and wall is measured to the millimetre. We bring samples in your lighting.",
        },
        {
          title: "In-house installation team",
          description: "The same carpenters who measure your space install it. No subcontractors. Every rail is level, every corner square, every finish perfect.",
        },
      ],
      process: [
        {
          title: "Share your space",
          description: "Send WhatsApp photos from different angles — we need to see the light, existing furniture, and wall condition.",
        },
        {
          title: "Get fabric samples",
          description: "We visit with a swatch book, measure precisely, and show you options in your own light. You choose style, fabric and finishes.",
        },
        {
          title: "Fabrication & production",
          description: "Items are made to your exact measurements (usually 5–10 days for curtains, 3–4 weeks for custom sofas).",
        },
        {
          title: "Delivered & installed",
          description: "Our crew brings everything, installs it level and secure, fits all hardware, and removes all packaging. You don't lift a finger.",
        },
      ],
      showcase: [
        { title: "Living room curtains", caption: "Wave sheer + blackout combo" },
        { title: "Majlis seating", caption: "Traditional floor seating" },
      ],
      faqs: [
        {
          q: "Can I see fabric samples before ordering?",
          a: "Yes — we bring a full sample book during the free measuring visit so you can see colours in your own light. We also bring swatch cards you can take home to see how fabrics look at different times of day.",
        },
        {
          q: "How long do made-to-measure curtains take?",
          a: "Typically 5–10 working days from confirming fabric and measurements, depending on the style and current order queue. Express 3-day turnaround is available for a small upcharge.",
        },
        {
          q: "Do you install curtain rails and tracks too?",
          a: "Yes, we supply and fit rails, tracks, pelmets and all hardware. We drill into concrete, gypsum, or block walls and ensure everything is level and secure.",
        },
        {
          q: "What's the price range for made-to-measure curtains?",
          a: "It depends on fabric choice and window size. A typical bedroom window in basic polyester costs QAR 500–800 fitted; premium linen or velvet can be QAR 1,500–2,500. We always give a fixed quote after measuring.",
        },
        {
          q: "Can you match my sofa fabric exactly?",
          a: "We can get very close using our swatch book and colour-matching service. Bring a small piece of your existing upholstery to our showroom, or send a high-quality photo and we'll source a match.",
        },
        {
          q: "Do you deliver outside Doha?",
          a: "Yes — we cover all of Qatar including Al Khor, Umm Salal, and Al Wakrah. Delivery cost depends on distance but is included in your quote.",
        },
        {
          q: "What if I move again — can I take the curtains?",
          a: "Yes. Made-to-measure curtains are yours to keep. If your next home has similar window widths, we can rehang them for free; if the measurements change significantly, we can adjust or add panels.",
        },
        {
          q: "Do you offer financing for furniture purchases?",
          a: "We can arrange flexible payment plans for orders over QAR 5,000. Speak to our team about options when you call for your quote.",
        },
      ],
      selectorDetails: [
        "Browse our curated furniture collection with expert guidance",
        "Free delivery and setup included in most purchases",
      ],
      selectorTrending: "Minimalist design, modular sofas, and sustainable materials",
      whatsappMessage:
        "Hello Good Choice Furniture! I'm interested in furniture and curtains. I'm attaching photos of my space — please send me a quote.",
      ctaLabel: "Send a photo of your space",
      relatedBlogSlugs: ["choosing-right-sofa-size", "smart-furniture-trends", "curtain-styles-qatar"],
      relatedServiceSlugs: ["installation", "repair"],
    },
    repair: {
      slug: "repair",
      subcategories: [
        {
          slug: "sofa-repair",
          label: "Sofa & Couch Repair",
          description:
            "Sagging seats, broken frames and worn cushions repaired at your home or in our workshop.",
        },
        {
          slug: "upholstery-restoration",
          label: "Upholstery Restoration",
          description:
            "New fabric or leather over your existing frame — choose from our swatch book.",
        },
        {
          slug: "frame-structure",
          label: "Frame & Structure",
          description:
            "Wobbly legs, cracked joints and split timber rebuilt so the piece lasts again.",
        },
      ],
      name: "Sofa & Furniture Repair",
      tagline: "Re-upholstery, frame repair and foam replacement",
      cardDescription:
        "Sagging seats, torn fabric, broken frames — we repair and re-upholster sofas and furniture.",
      metaTitle: "Sofa & Furniture Repair in Doha | Good Choice Furniture",
      metaDescription:
        "Sofa repair, re-upholstery, foam replacement and furniture restoration across Qatar. WhatsApp a photo of the damage for a fixed quote.",
      heroSubtitle:
        "A good sofa is worth saving. Send us a photo of the damage and we'll tell you honestly whether repair or replacement makes more sense.",
      overview: [
        "Sofas in Qatar work hard — majlis gatherings, kids, pets, and moves between apartments. Qatar's heat and humidity also weaken foam and glue over time, causing sagging and joint deterioration faster than in cooler climates. Before you spend three or four thousand riyals on a replacement, let us assess yours. We've rebuilt sofas that families have owned for fifteen years.",
        "We repair frames using hardwood dowels and wood glue (stronger than the original joints), replace foam with high-density alternatives (QAR 800–2,000 depending on size), and re-upholster in any fabric you choose. Most jobs are collected from your home, repaired in our workshop over 5–7 days, and returned delivered and placed exactly where it was. We also handle leather restoration, zipper replacement, and cushion rebuilding.",
        "The economics are straightforward: a three-seater re-upholstery costs QAR 1,500–2,500 in most fabrics. A new three-seater starts at QAR 4,000–5,000. The repaired sofa will outlast the new one if the frame is solid wood. We tell you upfront if repair doesn't make sense — if the frame is particle-board or the structure is compromised, we'll say so."
      ],
      features: [
        {
          title: "Full & partial re-upholstery",
          description: "Complete re-cover in fabric, leather or microsuede. We also do partial repairs: reupholster just the worn seat cushions, keep the back as-is.",
        },
        {
          title: "Foam & spring restoration",
          description: "High-density foam (QAR 60–80/kg), new spring systems, and zoned support. We rebuild to the original comfort level or firmer on request.",
        },
        {
          title: "Frame & structural repair",
          description: "Hardwood joint reconstruction, corner block reinforcement, leg stabilization and re-gluing. We test-sit every piece before return.",
        },
        {
          title: "Delivery & placement",
          description: "We collect using a protective cover, bring it back on our truck, and place it exactly where it was. You don't lift a finger.",
        },
      ],
      process: [
        {
          title: "Send photos & details",
          description: "WhatsApp clear photos of the damage (torn seams, stains, sagging, frame issues). Tell us the sofa type (three-seater, L-shaped, etc.).",
        },
        {
          title: "Workshop assessment",
          description: "We inspect the frame, foam, and springs. If repair makes sense, we quote a fixed price. We'll tell you if it's not worth repairing.",
        },
        {
          title: "Pick your fabric & collect",
          description: "Choose from our swatch book or send a photo of a fabric you like. We collect at a time that suits you (usually next few days).",
        },
        {
          title: "Repaired & delivered",
          description: "Full workshop rebuild, quality testing, steam cleaning, and careful delivery back to your home — usually 5–7 days.",
        },
      ],
      showcase: [
        { title: "Three-seater re-upholstery", caption: "Full re-cover in linen blend" },
        { title: "Foam replacement", caption: "Seat cushions rebuilt" },
        { title: "Armchair frame repair", caption: "Cracked frame rebuilt and re-covered" },
      ],
      faqs: [
        {
          q: "Is my sofa worth repairing?",
          a: "If the frame is solid hardwood, repair almost always beats buying new. Particle-board frames are usually not worth repairing. Send us photos and we'll give you a straight answer based on what we see.",
        },
        {
          q: "How much does re-upholstery cost?",
          a: "A three-seater costs QAR 1,500–2,500 depending on fabric choice. L-shaped sectionals and large pieces cost more. Photos get you a fixed quote the same day.",
        },
        {
          q: "Do you repair office furniture?",
          a: "Yes — we repair office chairs, reception seating, and boardroom furniture for businesses across Doha. Bulk repairs for offices qualify for discounts.",
        },
        {
          q: "Can you match my existing fabric?",
          a: "We can get very close. Bring a small swatch of your sofa or send a high-resolution photo. If an exact match isn't available, we suggest alternatives that complement your décor.",
        },
        {
          q: "How long does repair take?",
          a: "Most jobs take 5–7 days from collection to delivery. Rush jobs (3-day turnaround) are available for an extra 20% fee.",
        },
        {
          q: "Do you offer warranty on repaired furniture?",
          a: "Yes — all repaired sofas come with a 2-year warranty on foam and springs, and 1 year on stitching and seams. Frame repairs are guaranteed indefinitely.",
        },
        {
          q: "Can you clean my sofa after repair?",
          a: "Yes, steam cleaning is included as part of the repair process. We remove stains (non-permanent) and sanitize the fabric before delivery.",
        },
        {
          q: "What if I want to change the sofa style — can you do that?",
          a: "Partial changes are possible: we can reshape cushions, change the firmness, or recolour separate pieces. Full structural changes (arm height, seat depth) depend on the frame."
        },
      ],
      selectorDetails: [
        "Expert repair for sofas, chairs, and upholstery",
        "Colour matching and fabric restoration available",
      ],
      selectorTrending: "Premium fabric repairs, vintage furniture restoration",
      whatsappMessage:
        "Hello Good Choice Furniture! I have a sofa that needs repair. I'm attaching photos of the damage — please quote me.",
      ctaLabel: "Send a photo of the damage",
      relatedBlogSlugs: ["sofa-care-qatar-heat", "when-to-repair-vs-replace"],
      relatedServiceSlugs: ["sales", "moving"],
    },
    installation: {
      slug: "installation",
      subcategories: [
        {
          slug: "curtain-installation",
          label: "Curtain Installation",
          description:
            "Rails, tracks and rods fitted level and secure — including high and awkward windows.",
        },
        {
          slug: "kitchen-cabinets",
          label: "Kitchen Cabinets",
          description:
            "Full kitchen fit-outs and cabinet replacements, measured twice and installed once.",
        },
        {
          slug: "tv-unit",
          label: "TV Units",
          description:
            "TV consoles and media walls built in, with the cables run out of sight.",
        },
        {
          slug: "furniture-assembly",
          label: "Furniture Assembly",
          description:
            "Flat-pack and imported furniture assembled properly, with the packaging taken away.",
        },
        {
          slug: "wall-mounting",
          label: "Wall Mounting",
          description:
            "TVs, shelves, mirrors and cabinets anchored safely into concrete or plasterboard.",
        },
      ],
      name: "Installation Services",
      tagline: "TV units, wall cabinets, kitchens and flooring",
      cardDescription:
        "TV mounting, wall units, kitchen cabinets and flooring — installed level, secure and tidy.",
      metaTitle: "TV, Kitchen & Flooring Installation in Doha | Good Choice Furniture",
      metaDescription:
        "Professional installation of TV units, wall cabinets, kitchen cabinets and flooring across Qatar. Get a fixed quote on WhatsApp.",
      heroSubtitle:
        "From wall-mounting a TV to fitting a full kitchen — measured twice, installed once, cleaned up after.",
      overview: [
        "A bad installation shows every day: crooked cabinets, wobbling TV mounts, flooring that clicks or squeaks, shelves that sag. Most of these failures happen because installers treat mounting as a straight-forward job when Qatar's building standards and wall types require precision. Concrete blocks, rebar, gypsum board, and hybrid walls each need different fixings and techniques. Our installers are carpenters trained to work with Qatar's specific conditions.",
        "We handle everything from a single TV mount (QAR 300–600) to full kitchen renovations, built-in wardrobes, and apartment-wide flooring. Before we arrive, we photograph your walls, confirm all measurements, and source every fixing. When we show up, installation usually takes one day; complex kitchens might be two. Everything leaves level, square, and working perfectly.",
        "Qatar's climate also matters: we use fixings that resist salt-air corrosion if your home is near the coast, and we apply sealants that handle temperature swings (14°C in winter, 50°C+ in summer). That's why a DIY job or a contractor unfamiliar with Qatar often fails within two years."
      ],
      features: [
        {
          title: "TV & media wall mounting",
          description: "Wall-mounted TVs, floating shelves and full media walls. Cables hidden, wiring run through the wall or trunking — no spaghetti behind the set.",
        },
        {
          title: "Built-in cabinets & wardrobes",
          description: "Flat-pack or bespoke cabinets, assembled and installed level and plumb. Tall units are wall-braced for safety. Soft-close hinges and quality handles.",
        },
        {
          title: "Kitchen installation",
          description: "Base units, wall units, and countertops installed level and aligned. Backsplash tiling, appliance connections, and worktop sealing all included.",
        },
        {
          title: "Flooring (all types)",
          description: "Laminate, vinyl (SPC), parquet and stone installed with proper underlayment, trims and thresholds. Moisture barriers applied where needed.",
        },
      ],
      process: [
        {
          title: "Send photos & dimensions",
          description: "Photos of the items, walls (to show material type), room dimensions, and any existing fixtures that need to stay.",
        },
        {
          title: "Site assessment & fixed quote",
          description: "We photograph your walls, check for obstacles (pipes, electrics), and reply with a complete price — labour, fixings, trims and tidy-up all included.",
        },
        {
          title: "Pre-installation prep",
          description: "We source and stage all materials, confirm wall types and locations with you, and schedule installation.",
        },
        {
          title: "Installation & final check",
          description: "Floors and furniture protected, careful work, every mount and seam tested, and all waste removed before we finish.",
        },
      ],
      faqs: [
        {
          q: "Can you mount a TV on a gypsum (drywall) wall?",
          a: "Yes — using toggle anchors or a backing plate. We'll tell you the weight limit for your wall type. Very heavy TVs or mounted above a fireplace may need additional reinforcement.",
        },
        {
          q: "Do you assemble IKEA and other flat-pack furniture?",
          a: "Yes, we assemble and install all major flat-pack brands. Tall units (wardrobes over 180cm) are always wall-braced for stability and safety, especially important in households with children.",
        },
        {
          q: "How long does flooring installation take?",
          a: "A bedroom typically takes 4–8 hours. A full two-bedroom apartment takes 1–2 days depending on room count and trim complexity. We can often complete in a single weekend.",
        },
        {
          q: "Do you install kitchens from start to finish?",
          a: "Yes — we install base and wall units, fit countertops, backsplash, and appliance connections (plumbing and electrics are coordinated with your building's maintenance team).",
        },
        {
          q: "What if my walls aren't straight?",
          a: "Concrete blocks in older buildings often aren't perfectly straight. We use shims and spacers to ensure everything looks level and plumb even if the walls aren't perfect.",
        },
        {
          q: "Do you hide cables and wiring?",
          a: "Yes — we run cables through the wall (with proper conduit) or use professional cable trays and trunking. Nothing hangs visible unless you request it.",
        },
        {
          q: "What if something goes wrong after installation?",
          a: "All our installation work comes with a 2-year warranty on craftsmanship. If a mount fails or a cabinet sags, we fix it for free.",
        },
        {
          q: "How much does a TV wall mount cost?",
          a: "A single TV mount (labour + fixings) is QAR 300–600 depending on TV size and wall type. Built-in shelving systems cost QAR 1,500–3,000+. Flooring and kitchens are quoted per project."
        },
      ],
      selectorDetails: [
        "Professional installation for TVs, cabinets, and shelving",
        "Wall assessment and safety protocols included",
      ],
      selectorTrending: "Wall-mounted entertainment systems, custom shelving",
      whatsappMessage:
        "Hello Good Choice Furniture! I need installation help (TV / cabinets / kitchen / flooring). I'm attaching photos of the items and room — please quote me.",
      ctaLabel: "Get an installation quote",
      relatedBlogSlugs: ["tv-wall-mount-installation", "kitchen-cabinet-installation"],
      relatedServiceSlugs: ["sales", "repair"],
    },
    moving: {
      slug: "moving",
      subcategories: [
        {
          slug: "furniture-moving",
          label: "Furniture Moving",
          description:
            "Villa and apartment moves with disassembly, padding and reassembly at the other end.",
        },
        {
          slug: "packing-services",
          label: "Packing Services",
          description:
            "Boxes, wrapping and labelling for the whole home — or hand us the fragile items only.",
        },
        {
          slug: "relocation-support",
          label: "Relocation Support",
          description:
            "Office and staff moves planned around your working hours to keep downtime short.",
        },
      ],
      name: "Moving & Shifting",
      tagline: "Home and office moves, packed and protected",
      cardDescription:
        "Apartment, villa and office moves across Qatar — packing, dismantling, transport and reassembly.",
      metaTitle: "Home & Office Moving in Doha, Qatar | Good Choice Furniture",
      metaDescription:
        "Careful home and office moving across Qatar. Packing, dismantling, transport and reassembly by one crew. Get a moving quote on WhatsApp.",
      heroSubtitle:
        "Moving in Qatar usually means a deadline — end of lease, new handover, a flight date. We plan around yours.",
      overview: [
        "Moving in Qatar is uniquely challenging. You're often juggling Kahramaa disconnection dates, building entry permits, a landlord inspection, and a flight back home all in the same week. One mistake — a late disconnection, a blocked elevator, furniture that doesn't fit the new apartment — can spiral into thousands of riyals in extra hotel nights or storage fees. We handle the entire move: packing materials, protective wrapping, dismantling furniture, transport, reassembly, and disposal of packaging. Your crew leader walks through both properties with you before we start and after we finish — no surprises.",
        "We've moved families from studio apartments to multi-story villas, and we've relocated offices while tenants worked the next room. We work weekends and evenings for office moves, plan lift access weeks in advance, and coordinate with building management. Most importantly, we've moved enough households to Qatar that we know the common pitfalls: furniture that doesn't fit stairwells, doorways that need frame removal, items that were never going to make the trip.",
        "For a studio apartment, moves cost QAR 1,500–2,500. For a three-bedroom villa with full packing, expect QAR 4,000–6,000. We always quote fixed prices after a phone assessment, and we're transparent about everything included: boxes, tape, bubble wrap, labour, transport, and reassembly."
      ],
      features: [
        {
          title: "Full packing & protection",
          description: "All boxes, bubble wrap, wardrobe cartons and packing materials supplied. Mirrors, glass and artwork wrapped and crated. Furniture wrapped in padding.",
        },
        {
          title: "Furniture dismantling & reassembly",
          description: "Beds, wardrobes, wall units and sectional sofas taken apart with every bolt and screw labelled, then rebuilt in the new home.",
        },
        {
          title: "Studio to villa moves",
          description: "From one-room studios to three-story villas. We coordinate lift access, building permits, and stairwell measurements to ensure nothing gets stuck.",
        },
        {
          title: "Office relocation",
          description: "Evening and weekend moves for businesses. Desks, files, IT equipment and furniture moved while the office is closed. Computer labelling and cable tracking included.",
        },
      ],
      process: [
        {
          title: "Tell us the move",
          description: "From, to, rough date, and photos or a quick video walkthrough on WhatsApp.",
        },
        {
          title: "Survey & fixed quote",
          description: "For larger moves we do a short site visit, then confirm an all-in price.",
        },
        {
          title: "Moving day",
          description: "Floors and lifts protected, everything wrapped, loaded and transported.",
        },
        {
          title: "Settled in",
          description: "Furniture reassembled and placed where you want it; packing waste removed.",
        },
      ],
      faqs: [
        {
          q: "What affects the move price?",
          a: "Volume, distance between properties, number of floors (if no lift), and whether we pack. A video walkthrough on WhatsApp usually gives us enough to quote accurately. Larger moves (3+ bedrooms or villas) benefit from a quick site visit.",
        },
        {
          q: "How far in advance should I book?",
          a: "A week is ideal, especially for villa moves or end-of-month crunch. We handle 48-hour moves routinely, and emergency same-day moves sometimes fit if we're free. Message us with your date and we'll confirm.",
        },
        {
          q: "Can you move into storage?",
          a: "Yes — we deliver to self-storage facilities and can retrieve items when your new place is ready. Storage companies sometimes have restricted access (Friday evenings, early mornings), so we coordinate timing with them.",
        },
        {
          q: "Do you move fragile items like art and electronics?",
          a: "Yes — art, glassware, computers and AV equipment are wrapped and crated. Antiques and high-value items are wrapped extra carefully. You can brief us on what's precious and we'll take extra care.",
        },
        {
          q: "What about building permits and lift bookings?",
          a: "We handle coordination with building management for lift bookings, entry times, and move-out permits. You just confirm the building details (name, your apartment number) and we take it from there.",
        },
        {
          q: "Can you move on Friday or weekends?",
          a: "Yes — we often schedule weekend and Friday moves since offices and schools are closed. There's sometimes a small surcharge for Friday/weekend moves, but we'll confirm that in your quote.",
        },
        {
          q: "Do you reassemble furniture in the new place?",
          a: "Yes — beds, wardrobes, wall units, and sectionals are fully reassembled and placed where you want them before we leave. Broken hardware is replaced.",
        },
        {
          q: "What if I'm not sure what to throw away before moving?",
          a: "Message us during your quote process — our crew can help identify items worth keeping and arrange disposal of everything else in a single pickup."
        },
      ],
      selectorDetails: [
        "Safe furniture moving with professional packing",
        "Assembly and disassembly services included",
      ],
      selectorTrending: "Corporate relocations, apartment moves within Doha",
      whatsappMessage:
        "Hello Good Choice Furniture! I'm planning a move. From: ___ To: ___ Approximate date: ___ — please send me a quote.",
      ctaLabel: "Get a moving quote",
      relatedBlogSlugs: ["moving-costs-breakdown", "furniture-assembly-after-moving"],
      relatedServiceSlugs: ["disposal", "installation"],
    },
    disposal: {
      slug: "disposal",
      subcategories: [
        {
          slug: "furniture-disposal",
          label: "Furniture Disposal",
          description:
            "Old sofas, beds and wardrobes collected and taken to the right facility.",
        },
        {
          slug: "fabric-recycling",
          label: "Fabric Waste Recycling",
          description:
            "Offcuts, old upholstery and textile waste separated out for recycling.",
        },
        {
          slug: "bulk-removal",
          label: "Bulk Removal",
          description:
            "Whole-property clear-outs before handover, loaded and hauled in a single visit.",
        },
      ],
      name: "Junk & Waste Disposal",
      tagline: "Old furniture and household junk, removed responsibly",
      cardDescription:
        "Sofas, wardrobes, appliances and household junk collected and disposed of the right way.",
      metaTitle: "Furniture Removal & Junk Disposal in Doha | Good Choice Furniture",
      metaDescription:
        "Responsible disposal of old furniture, appliances and household junk across Qatar, following Ministry of Municipality waste-segregation guidance. WhatsApp for pickup.",
      heroSubtitle:
        "Clearing a flat, replacing a sofa, or emptying a villa before handover — we collect it, segregate it, and dispose of it properly.",
      // TODO(owner): this page makes four claims nobody has confirmed yet —
      // the named facilities (Ain Khaled, Al Wakrah), the QAR price ranges,
      // "we hold documentation of disposal", and the reuse-centre routing.
      // These are operational and legal statements about how the business
      // actually handles waste; verify each before launch or soften it.
      // PRD §8 already asks the owner to confirm accepted waste types.
      overview: [
        "Leaving furniture by the bins risks building fines, a delayed deposit refund, or simply having items dumped illegally in the desert. Our disposal service collects items from inside your home, handles the heavy lifting, and takes everything to the correct municipal facilities across Qatar. We're familiar with Doha's Ain Khaled landfill, Al Wakrah's waste segregation centre, and specialized handlers for electronics and appliances.",
        "Items in good condition are documented and directed to reuse centres where possible; everything else is segregated into metals, wood, plastic and general waste as per Ministry of Municipality guidelines. A full villa clear-out costs QAR 2,500–4,500 depending on volume; a single sofa removal is QAR 500–800. All quotes are fixed prices before we arrive.",
        "Most customers use disposal services during three moments: apartment handover (landlord requires empty, clean property), mid-move (deciding what fits the new place), or after major renovations (old cabinets, flooring offcuts). We've cleared entire villas in a single day and disposed of renovation debris responsibly."
      ],
      compliance: {
        heading: "Disposed of properly, every time",
        body: "All collections follow Ministry of Municipality waste-segregation guidance: metals, wood, plastic and general waste separated and taken to appropriate municipal facilities. We hold documentation of disposal for your records if needed (important for property handovers and audit trails). Nothing is ever dumped, burned or left at the curb.",
      },
      accepted: [
        "Sofas, beds, wardrobes, dressers and tables",
        "Home appliances: fridges, washing machines, ovens, ACs, dishwashers",
        "Carpets, curtains, blinds and mattresses",
        "Desks, office chairs and filing cabinets",
        "Wood, metal and plastic furniture and offcuts",
        "General household junk and complete clear-outs",
      ],
      notAccepted: [
        "Construction and demolition waste (concrete, bricks, rubble)",
        "Chemicals, paint, solvents and aerosols",
        "Medical, biological or hazardous waste",
        "Vehicle batteries, tyres and car parts",
        "Asbestos or friable materials",
      ],
      notAcceptedNote:
        "For construction waste, hazardous materials or specialised disposal, we'll refer you to a licensed handler — just ask during your quote.",
      features: [
        {
          title: "Collection from inside your property",
          description: "We carry items out of flats, villas and offices — no need to drag anything to the curb. Stairs, lifts and tight corners handled professionally.",
        },
        {
          title: "Same-week or same-day pickups",
          description: "Most collections scheduled within 48 hours; same-day slots often available in Doha and Al Rayyan.",
        },
        {
          title: "Complete property clear-outs",
          description: "Before a handover, mid-move, or renovation? We clear entire apartments, villas or offices in one visit.",
        },
        {
          title: "Ministry-compliant segregation",
          description: "Metals, wood, plastic and waste separated and delivered to the correct municipal facilities — never dumped.",
        },
      ],
      process: [
        {
          title: "Send photos & location",
          description: "WhatsApp photos of the items and your building name/area. Tell us if it's a full clear-out or specific items.",
        },
        {
          title: "Instant fixed quote",
          description: "We reply with an all-in price: collection, loading, transport and proper disposal included. No surprises.",
        },
        {
          title: "Pick your time",
          description: "Choose from available slots — most are within 2 days. We confirm before arriving.",
        },
        {
          title: "Collection & proper disposal",
          description: "Our crew collects everything, segregates it on-site if needed, and delivers to municipal facilities. You get a receipt if requested.",
        },
      ],
      faqs: [
        {
          q: "What items can't you take?",
          a: "We don't handle construction debris, paint, chemicals, medical waste, batteries or tyres. If you're unsure, describe the item when you message and we'll let you know.",
        },
        {
          q: "Can you handle a heavy sofa or large appliance from an upper floor without a lift?",
          a: "Yes — our crew is trained for stair carries and uses equipment to manage heavy items safely. Mention the floor number and building type when you book.",
        },
        {
          q: "Do you clear whole apartments and villas?",
          a: "Yes — this is one of our most common jobs. Full apartment clear-outs take 2–4 hours; villas take a full day depending on size.",
        },
        {
          q: "What's the price range for disposal?",
          a: "A single item (sofa, fridge) costs QAR 500–1,000. A full apartment clear-out is typically QAR 2,000–3,500. A villa is QAR 3,500–6,000. Photos get you a fixed quote.",
        },
        {
          q: "Do you provide documentation for property handovers?",
          a: "Yes — if you need proof of disposal for a landlord or property handover, we can provide dated photos and a disposal certificate.",
        },
        {
          q: "What if some items are worth money — will you take them?",
          a: "If items are sellable (furniture in good condition, working appliances), we'll mention it and can arrange collection/resale on your behalf — you'll get a portion of proceeds.",
        },
        {
          q: "Can you schedule disposal during a move?",
          a: "Absolutely — this is common. We clear old items before the move or after furniture is delivered to the new place. We coordinate timing with your moving crew.",
        },
        {
          q: "Do you work on weekends or Friday?",
          a: "Yes — we schedule weekend and Friday pickups. There's sometimes a small surcharge, but we'll confirm in your quote."
        },
      ],
      selectorDetails: [
        "Eco-friendly furniture disposal with proper recycling",
        "Compliance with local environmental standards",
      ],
      selectorTrending: "Sustainable waste management, bulk removals",
      whatsappMessage:
        "Hello Good Choice Furniture! I need junk/furniture disposal. I'm attaching photos of the items and my location — please quote me for pickup.",
      ctaLabel: "Book a pickup",
      relatedBlogSlugs: [],
      relatedServiceSlugs: ["moving", "sales"],
    },
  },
  subcategoryPage: {
    breadcrumbHome: "Home",
    benefits: [
      "Professional and experienced team",
      "Quick and reliable service",
      "Transparent pricing, quoted up front",
      "Same-day slots when we have them",
    ],
    whyHeading: "Why choose us",
    whyText:
      "One team for curtains, repairs, installation, moving and clear-outs across Doha and the surrounding municipalities.",
    ctaTitle: "Ready to get started?",
    ctaText:
      "Get in touch today. We're available on WhatsApp or by phone for immediate assistance.",
    exploreHeading: "Explore this service",
    trendingLabel: "Trending now:",
  },
  disposalPage: {
    eyebrow: "Responsible disposal",
    featuresHeading: "Why choose our disposal service",
    acceptedHeading: "What we take",
    notAcceptedHeading: "What we can't take",
    ctaTitle: "Need a clear-out?",
    ctaText:
      "Send a photo of what needs to go and we'll come back with a price and the earliest slot.",
    imageAlt: "Waste container ready for a furniture clear-out",
  },
  gallery: {
    metaTitle: "Our Work — Before & After Gallery | Good Choice Furniture",
    // TODO(owner): the heading/intro/metaDescription below were reworded to
    // describe the SERVICES rather than assert documented jobs, because the
    // gallery currently shows stock illustrations. Restore wording like
    // "Real jobs from real homes" once real job photos are in place.
    metaDescription:
      "Curtain fittings, sofa repairs, installations, moves and clear-outs across Qatar — see the work we do, before and after.",
    eyebrow: "Gallery",
    heading: "The work we do",
    intro:
      "Examples of the work we take on across Doha and beyond. Filter by service.",
    filterAll: "All",
    emptyState: "No photos in this category yet — check back soon.",
    // TODO(owner): replace placeholder items with real job photos (PRD §8).
    //
    // Titles here are deliberately GENERIC — the service, no district, no
    // job specifics. The two pairs that carry photos are stock illustrations
    // of the service, not documented jobs (see the warning in lib/images.ts),
    // so a title like "…, West Bay" would assert a job that cannot be shown.
    // Restore the specific titles only together with real photos of that job.
    items: [
      { id: "g1", service: "repair", title: "Sofa re-upholstery", kind: "pair", beforeImage: "gallery-sofa-before", afterImage: "gallery-sofa-after" },
      { id: "g2", service: "sales", title: "Wave curtains with blackout lining", kind: "single", image: "gallery-curtains" },
      { id: "g3", service: "installation", title: "Floating shelf installation", kind: "single", image: "gallery-shelves" },
      { id: "g4", service: "moving", title: "Villa move, furniture wrapped", kind: "single", image: "gallery-wrapped" },
      { id: "g5", service: "repair", title: "Majlis foam replacement", kind: "single", image: "gallery-cushions" },
      { id: "g6", service: "disposal", title: "Apartment clear-out before handover", kind: "single", image: "gallery-handover" },
      { id: "g7", service: "installation", title: "Kitchen cabinet refit", kind: "single", image: "gallery-kitchen" },
      { id: "g8", service: "sales", title: "Custom majlis seating", kind: "single", image: "gallery-majlis" },
      { id: "g9", service: "moving", title: "Office relocation", kind: "single", image: "gallery-office" },
      { id: "g10", service: "installation", title: "SPC flooring installation", kind: "single", image: "gallery-flooring" },
      { id: "g11", service: "disposal", title: "Garden and garage clear-out", kind: "single", image: "gallery-garage" },
      { id: "g12", service: "repair", title: "Leather armchair restoration", kind: "pair", beforeImage: "gallery-armchair-before", afterImage: "gallery-armchair-after" },
    ],
  },
  // TODO(owner): sample testimonials for layout only — replace with real
  // reviews (name + area) once collected. No star ratings per PRD §5.
  testimonials: [
    {
      name: "Mohammed A.",
      areaKey: "alRayyan",
      quote:
        "They re-upholstered our majlis in five days. It looks better than when we bought it — and they collected and returned it themselves.",
    },
    {
      name: "Sarah K.",
      areaKey: "thePearl",
      quote:
        "Booked over WhatsApp with photos, got a price the same evening. The curtains were measured and fitted within the week. Zero hassle.",
    },
    {
      name: "Ahmed R.",
      areaKey: "lusail",
      quote:
        "Moved our three-bedroom apartment in one day. Everything wrapped, nothing scratched, and they rebuilt the beds before leaving.",
    },
    {
      name: "Fatima N.",
      areaKey: "alWakrah",
      quote:
        "They cleared my late father's villa before the handover — respectful, fast, and everything was disposed of properly.",
    },
  ],
  about: {
    metaTitle: "About Good Choice Furniture — Home Services Team in Doha, Qatar",
    metaDescription:
      "Meet the Doha-based team behind Good Choice Furniture: one crew for furniture, repair, installation, moving and disposal across Qatar.",
    eyebrow: "About us",
    heading: "The team your neighbours already call",
    intro: [
      "Good Choice Furniture started with a simple observation: getting work done on your home in Qatar meant juggling five different numbers — a curtain shop, a carpenter, a mover, a truck for junk. We built one team that does it all.",
      "Today our crew handles everything from made-to-measure curtains to full villa moves across Doha and the surrounding municipalities. Most of our work comes from repeat customers and their WhatsApp groups — which is exactly how we like it.",
    ],
    valuesHeading: "How we work",
    values: [
      {
        title: "Straight prices",
        text: "A photo gets you a fixed quote. No call-out surprises, no 'we'll see when we arrive'.",
      },
      {
        title: "Respect for your home",
        text: "Shoes covered, floors protected, packaging removed. We leave rooms ready to use.",
      },
      {
        title: "One accountable crew",
        text: "The people who quote the job are the people who do the job. No subcontractor roulette.",
      },
      {
        title: "Proper disposal",
        text: "Waste is segregated and taken to municipal facilities — never dumped, never left at the curb.",
      },
    ],
    teamHeading: "Based in Doha, on the road daily",
    teamText:
      "Our carpenters, installers and drivers live all over the country, which is how we offer same-week slots just about anywhere in Qatar.",
    licensingHeading: "Licensed & registered",
    licensingText:
      "Good Choice Furniture operates under a valid Qatar commercial registration. Registration number and licensing documents available on request.",
    workshopImageAlt: "Our restorer stripping back a chair frame in the workshop",
    dohaImageAlt: "The Doha skyline at dusk — Qatar, where we work every day",
  },
  blog: {
    metaTitle: "Home Tips & Guides — Qatar | Good Choice Furniture",
    metaDescription:
      "Practical guides for Qatar homes: moving checklists, curtain measuring, sofa care, and waste segregation rules explained.",
    eyebrow: "Tips & guides",
    heading: "Useful reading for your home",
    intro:
      "Short, practical guides from our crew — written for homes in Qatar, in plain language.",
    byServicePrefix: "Related service",
    posts: [
      {
        slug: "moving-checklist-qatar",
        title: "The Qatar Moving Checklist: 8 Steps for a Painless Move",
        excerpt:
          "End of lease coming up? From DEWA… sorry, Kahramaa — to building access permits, here's the exact order to do things.",
        metaTitle: "Qatar Moving Checklist — 8 Steps | Good Choice Furniture",
        metaDescription:
          "Moving home in Qatar? A practical 8-step checklist covering Kahramaa disconnection, building permits, packing and handover cleaning.",
        date: "2026-01-15",
        category: "Moving",
        relatedService: "moving",
        blocks: [
          {
            type: "p",
            text: "Most moves in Qatar are deadline moves — a lease ends, a handover is booked, a flight is leaving. The difference between a smooth move and a miserable one is almost never the moving day itself. It's the week before it.",
          },
          { type: "h2", text: "Two weeks out" },
          {
            type: "ul",
            items: [
              "Book your movers — good crews fill up at month-end",
              "Notify your landlord or building management and ask about move-out permits and lift bookings",
              "Start Kahramaa disconnection (or transfer) for the old place and connection for the new one",
              "Declutter: anything you wouldn't pay to move should be sold, donated or disposed of now",
            ],
          },
          { type: "h2", text: "The final week" },
          {
            type: "ul",
            items: [
              "Confirm internet and TV transfer dates — these have the longest lead times",
              "Pack a 'first night' box: chargers, documents, bedding, kettle, basic tools",
              "Photograph meter readings and the condition of the old property for your deposit",
              "Defrost the fridge 24 hours before the move",
            ],
          },
          { type: "h2", text: "Moving day" },
          {
            type: "p",
            text: "Walk through the old property with your crew leader before anything is loaded, and again after it's empty. At the new place, have beds reassembled first — everything else can wait until tomorrow. Finally, schedule your clear-out: most moves leave behind a room's worth of items that shouldn't make the trip. A disposal pickup on the same day saves a second headache.",
          },
        ],
      },
      {
        slug: "how-to-measure-curtains",
        title: "How to Measure Your Windows for Curtains (the Right Way)",
        excerpt:
          "Curtains that puddle, gap or hang short are almost always measuring mistakes. Here's the five-minute method our installers use.",
        metaTitle: "How to Measure Windows for Curtains | Good Choice Furniture",
        metaDescription:
          "Learn to measure windows for curtains like a pro: rail height, fullness, drop and the mistakes that ruin made-to-measure curtains.",
        date: "2026-02-02",
        category: "Curtains",
        relatedService: "sales",
        blocks: [
          {
            type: "p",
            text: "Made-to-measure curtains live or die by three numbers: width, drop, and fullness. Get them right and your curtains hang like the showroom photos. Get them wrong and no fabric can save them.",
          },
          { type: "h2", text: "The three measurements" },
          {
            type: "ul",
            items: [
              "Width: measure the rail or track — not the window. Add 15–20 cm each side if the rail isn't fitted yet, so the stack-back clears the glass",
              "Drop: measure from the rail to where you want the curtain to end. For floor-length, subtract 1–2 cm so fabric doesn't drag",
              "Fullness: for a rich gather, plan on 2 to 2.5 times the rail width in fabric",
            ],
          },
          { type: "h2", text: "Mistakes we fix most often" },
          {
            type: "ul",
            items: [
              "Measuring the window instead of the rail",
              "Forgetting the AC unit above the window and the skirting below it when choosing the drop",
              "Too little fullness — 1.5x looks flat and skimpy once hung",
              "Ignoring ceiling type: concrete and gypsum need different fixings for the rail",
            ],
          },
          {
            type: "p",
            text: "If you'd rather skip the tape measure entirely: our measuring visit is free, and we bring the fabric samples with us. Send a photo of your windows on WhatsApp and we'll take it from there.",
          },
        ],
      },
      {
        slug: "repair-or-replace-sofa",
        title: "Repair or Replace? An Honest Guide for a Tired Sofa",
        excerpt:
          "Sagging seats and worn arms don't always mean a new sofa. Here's how to tell a repairable frame from a lost cause.",
        metaTitle: "Sofa Repair or Replace? Honest Guide | Good Choice Furniture",
        metaDescription:
          "Should you repair or replace your sofa? How to judge the frame, foam and fabric — and when re-upholstery beats buying new.",
        date: "2026-02-20",
        category: "Repair",
        relatedService: "repair",
        blocks: [
          {
            type: "p",
            text: "We repair sofas for a living, so you'd expect us to say 'repair everything'. We don't. Roughly one in five sofas we're shown isn't worth saving — and we say so, because a repaired bad sofa is still a bad sofa.",
          },
          { type: "h2", text: "Usually worth repairing" },
          {
            type: "ul",
            items: [
              "Solid hardwood frames (heavy, no wobble when you lift a corner)",
              "Sagging or flattened seat cushions — foam replacement is quick and transforms comfort",
              "Worn or torn fabric on an otherwise sound sofa — re-upholstery costs a fraction of equivalent new",
              "Quality pieces older than 10 years — they're often built better than today's mid-range",
            ],
          },
          { type: "h2", text: "Usually worth replacing" },
          {
            type: "ul",
            items: [
              "Creaking, flexing frames — especially softwood or chipboard",
              "Broken springs plus a weak frame: the repair bill approaches the price of new",
              "Cheap flat-pack sofas under 3–4 years old — they were built to be temporary",
            ],
          },
          {
            type: "p",
            text: "Still not sure? Send us three photos — the whole sofa, the damage, and underneath if you can. We'll tell you which category yours is in, and what each option costs. If the answer is 'replace it', we'll even take the old one away when we deliver.",
          },
        ],
      },
      {
        slug: "waste-segregation-qatar",
        title: "Getting Rid of Bulky Waste in Qatar: What Goes Where",
        excerpt:
          "Old sofa, broken fridge, renovation offcuts — Qatar's waste rules treat them very differently. A plain-language guide.",
        metaTitle: "Bulky Waste & Segregation Rules in Qatar | Good Choice Furniture",
        metaDescription:
          "Qatar's waste-segregation rules explained in plain language: what household junk you can dispose of, and what needs a licensed handler.",
        date: "2026-03-05",
        category: "Disposal",
        relatedService: "disposal",
        blocks: [
          {
            type: "p",
            text: "Qatar's Ministry of Municipality has been steadily tightening waste-segregation guidance, and for good reason: a huge share of what reaches landfill is recyclable or reusable. For households, the rules boil down to knowing your categories.",
          },
          { type: "h2", text: "The four piles that matter" },
          {
            type: "ul",
            items: [
              "General household waste — the everyday black-bag stream",
              "Recyclables — clean paper, cardboard, plastics, metals and glass",
              "Bulky items — furniture, mattresses and appliances; these need a proper collection, not the communal bin",
              "Hazardous & construction waste — paint, chemicals, rubble; licensed handlers only",
            ],
          },
          { type: "h2", text: "Where people get caught out" },
          {
            type: "ul",
            items: [
              "Leaving furniture beside the bins — it can attract fines and often isn't collected",
              "Mixing renovation debris into household junk — construction waste follows different rules",
              "Assuming appliances are general waste — fridges and AC units contain refrigerants that need proper handling",
            ],
          },
          {
            type: "p",
            text: "Our disposal service exists for exactly this: we collect bulky household items from inside your home, segregate them, and take them to the correct municipal facilities. For construction or hazardous material, we'll refer you to a licensed specialist — no guesswork, no fines.",
          },
        ],
      },
      {
        slug: "tv-wall-mount-installation",
        title: "TV Wall Mount Installation in Qatar: Common Mistakes & How to Avoid Them",
        excerpt:
          "Wall-mounting a TV is deceptively simple — until it isn't. Here's how to get it right (or why to hire someone who will).",
        metaTitle: "TV Wall Mount Installation Qatar | Mistakes to Avoid | Good Choice Furniture",
        metaDescription:
          "Guide to TV wall mounting in Qatar: wall types, finding studs/anchors, cable routing, and why professional installation beats DIY.",
        date: "2026-03-12",
        category: "Installation",
        relatedService: "installation",
        blocks: [
          {
            type: "p",
            text: "A TV mounted professionally looks clean and solid. The same TV installed poorly looks worried, wobbles when you walk past, and puts expensive hardware at risk. Most DIY failures come from not understanding Qatar's wall types — concrete block doesn't have studs like wooden frames, gypsum (drywall) anchors differently than solid concrete, and modern hybrid walls fool most people.",
          },
          { type: "h2", text: "Common mounting mistakes" },
          {
            type: "ul",
            items: [
              "Using studs finders on concrete — they don't work. Concrete walls need heavy-duty anchors or backing plates rated for the TV weight.",
              "Mounting directly below a split AC unit — condensation and drip from the indoor unit lands on the screen and works into the wall fixings",
              "Running cables outside the wall in plain sight — Qatar homes use professional cable trunking or run cables through conduit",
              "Not accounting for HDMI cable length — running cables up a wall to a TV requires routing before mounting",
              "Mounting to a single stud or anchor point — TV mounts need at least two anchor points for safety",
            ],
          },
          { type: "h2", text: "Getting it right" },
          {
            type: "ul",
            items: [
              "Identify your wall type: concrete block (most common), gypsum, or hybrid with pipes/conduit inside",
              "Choose the right anchor or backing plate for that wall type and your TV weight (heavier TVs need heavier fixings)",
              "Route cables before mounting — drill conduit runs horizontally, drop down to the unit",
              "Mount at eye level when seated — TVs mounted too high cause neck strain within hours",
              "Use a laser level — even small tilts are visible from across the room",
              "Test with all weight before mounting permanently — make sure the bracket holds and doesn't flex",
            ],
          },
          {
            type: "p",
            text: "If you're comfortable with a drill and a laser level, single TV mounts are doable. For larger setups, media walls with shelving, or hidden cable runs, hire a professional. Qatar's building codes and wall types make this one worth getting right the first time.",
          },
        ],
      },
      {
        slug: "kitchen-cabinet-installation-qatar",
        title: "Kitchen Cabinet Installation in Qatar: Building Codes & Space Challenges",
        excerpt:
          "Qatar's older buildings and concrete-heavy construction mean kitchen installations have quirks. Here's what installers know.",
        metaTitle: "Kitchen Cabinet Installation Qatar | Codes & Challenges",
        metaDescription:
          "Kitchen cabinet installation in Qatar: navigating concrete walls, building codes, appliance connections, and common space problems.",
        date: "2026-03-19",
        category: "Installation",
        relatedService: "installation",
        blocks: [
          {
            type: "p",
            text: "Qatar's buildings are mostly concrete block, which is excellent for structural integrity but tricky for kitchens. You can't find studs the way you would in North America, concrete anchors need to be the right type and size, and running water/electrical to appliances requires coordination with your building's maintenance team. A straightforward kitchen cabinet installation here is more complex than a similar install elsewhere.",
          },
          { type: "h2", text: "Wall types and anchoring" },
          {
            type: "ul",
            items: [
              "Concrete block walls: need heavy-duty wedge anchors or expansion bolts rated for your cabinet load. A single upper cabinet can weigh 30–50 kg — that's not DIY territory.",
              "Hybrid walls in newer buildings: concrete with steel rebar inside. Anchors need to avoid rebar — a metal detector can help, but a professional knows the common patterns.",
              "Interior gypsum walls: sometimes used for kitchens to hide pipes. These collapse under cabinet weight without additional backing.",
              "Uneven surfaces: older buildings' concrete is often not perfectly flat or plumb. Cabinets need shims and spacers, not just level.",
            ],
          },
          { type: "h2", text: "Connection challenges" },
        {
            type: "ul",
            items: [
              "Water supply for sinks: requires coordination with building maintenance and your landlord. You usually can't tap new lines yourself.",
              "Drainage: older buildings have limited drain locations. A new sink position might require rerouting, which needs a plumber and building approval.",
              "Electrics for appliances: the kitchen outlet placement is often far from where you need it. Running new circuits requires a licensed electrician.",
              "Gas (if applicable): some older villas have gas lines for cooking. These must be handled by certified gas fitters.",
            ],
          },
          { type: "h2", text: "Space — the real challenge" },
          {
            type: "ul",
            items: [
              "Qatar kitchens in apartments are often tiny — 2–3 metres wide. Appliances, sink, and storage fight for space.",
              "Ceiling height: older villas sometimes have lower ceilings, limiting tall cabinet options",
              "Column placement: structural columns inside kitchens are common. Cabinets have to work around them.",
              "Appliance sizes: a standard 60 cm oven or dishwasher might not fit the gap your kitchen has. Customising or downsizing is necessary.",
            ],
          },
          {
            type: "p",
            text: "Professional installation isn't a luxury — it's a necessity. We handle wall preparation, appliance connections (coordinating with your building), and the small adjustments that make cramped kitchens actually work.",
          },
        ],
      },
      {
        slug: "furniture-assembly-moving",
        title: "Furniture Assembly After Moving: The Checklist That Saves Sanity",
        excerpt:
          "Your sofa's in pieces, the bed has no legs, and nothing goes where it's supposed to. Here's the smart way to reassemble.",
        metaTitle: "Furniture Assembly After Moving | Checklist | Good Choice Furniture",
        metaDescription:
          "Post-move furniture assembly checklist: organizing hardware, identifying parts, avoiding mistakes, and when to call a pro.",
        date: "2026-03-26",
        category: "Moving",
        relatedService: "moving",
        blocks: [
          {
            type: "p",
            text: "Moving day is chaos. Furniture comes apart, hardware goes into bags, instructions disappear, and three days later you're staring at a pile of sofa frame pieces wondering which screw goes where. A systematic approach saves hours of frustration and keeps important pieces from getting damaged.",
          },
          { type: "h2", text: "The night before reassembly" },
          {
            type: "ul",
            items: [
              "Sort hardware into containers by furniture piece — tape the original labels or photos to each container so you know what's what",
              "Photograph each piece of disassembled furniture (especially complex items like sectionals) — screenshots become your instructions later",
              "Clear the room where assembly will happen — pushing furniture around a cluttered space doubles the time",
              "Lay down floor protection — hardwood and tile scratch easily when you're sliding sofas and wardrobes across",
            ],
          },
          { type: "h2", text: "Assembly order matters" },
          {
            type: "ul",
            items: [
              "Heavy items first: bed frame, sofa, wardrobes — get these done before fatigue sets in",
              "Tall pieces next: wall-mounted cabinets should be anchored before the room fills with smaller furniture",
              "Delicate assembly last: chairs, side tables, anything with legs that can scratch neighbouring pieces",
              "Leave plugging in electronics until everything is positioned — cables get tangled otherwise",
            ],
          },
          { type: "h2", text: "Common assembly mistakes" },
          {
            type: "ul",
            items: [
              "Installing a sofa back before realizing it's now too wide for the door — test fit before final assembly",
              "Drawer runners installed backwards — they look similar but only work one way",
              "Bolts tightened loose — screw everything half-tight first, then go back and tighten fully when everything aligns",
              "Forgetting leg levelling — uneven legs cause wobbles and tippy furniture. Invest in adjustable feet.",
            ],
          },
          {
            type: "p",
            text: "If you're moving more than 3–4 large pieces, hiring an assembler (even for just the first day) saves your sanity and your furniture's finish. We offer assembly-only services — your crew handles disassembly before the move, and we do reassembly at the new place.",
          },
        ],
      },
      {
        slug: "choosing-sofa-size-qatar",
        title: "Choosing the Right Sofa Size for Your Qatar Home: A Practical Guide",
        excerpt:
          "A sofa that fits the space beautifully in the showroom looks cramped at home. Here's how to measure and choose wisely.",
        metaTitle: "Sofa Size Guide for Qatar Homes | Practical Tips | Good Choice Furniture",
        metaDescription:
          "How to choose the right sofa size for Qatar apartments and villas: measuring doorways, stairwells, and living space.",
        date: "2026-04-02",
        category: "Furniture",
        relatedService: "sales",
        blocks: [
          {
            type: "p",
            text: "The most common sofa regret isn't the colour or fabric — it's the size. It's either too big for the space, can't fit through doorways, or disappears into a cavernous villa living room. Qatar's mix of small apartments and sprawling villas means there's no one right size, but there's definitely a wrong size for your specific space.",
          },
          { type: "h2", text: "Measure doorways and stairwells first" },
          {
            type: "ul",
            items: [
              "Main entry door width and height: a 3-seater sofa 2.8m wide might not fit if your door is 80cm",
              "Stairwell turns (if you're on an upper floor): measure the narrow points of any turns, not just the stairwell width",
              "Elevator dimensions: if your building has one, check the interior width/depth — many gulf elevators are surprisingly tight",
              "Your actual living room: a sectional that fits the showroom feels wrong in a 3 x 4 metre space",
            ],
          },
          { type: "h2", text: "Apartment vs. villa considerations" },
          {
            type: "ul",
            items: [
              "Apartments: smaller sofas (2-seaters or compact 3-seaters) often work better. Corner units should be U-shaped, not oversized",
              "Villas: larger spaces can carry bigger sectionals, but a tiny sofa in a cavernous living room looks wrong. Match the room scale.",
              "Future moves: you'll probably move again in 5 years. A sofa that fits your current apartment might not fit the next.",
            ],
          },
          { type: "h2", text: "Qatar-specific factors" },
          {
            type: "ul",
            items: [
              "Airflow: oversized sofas block AC circulation in small spaces, making rooms feel stuffier",
              "Glare: lighter fabrics in sun-facing rooms fade quickly in Qatar's intense heat",
              "Majlis use: if you do large gatherings, understand that floor seating and standing space matter more than a huge sofa",
            ],
          },
          {
            type: "p",
            text: "Our free measuring visit includes space assessment — we see the room, the doors, the storage, and suggest sizes and shapes that actually work. It's one conversation that prevents years of 'this was a mistake'.",
          },
        ],
      },
      {
        slug: "space-saving-furniture-trends",
        title: "Smart Furniture for Qatar Homes: Space-Saving Trends That Actually Work",
        excerpt:
          "Smaller apartments, bigger lives — furniture that multitasks, stores, and adapts to living in tight spaces.",
        metaTitle: "Space-Saving Furniture Trends & Ideas | Qatar | Good Choice Furniture",
        metaDescription:
          "Smart furniture for Qatar apartments: multifunctional pieces, storage solutions, and compact designs that maximize small spaces.",
        date: "2026-04-09",
        category: "Furniture",
        relatedService: "sales",
        blocks: [
          {
            type: "p",
            text: "Most rentals in Qatar are apartments, and most apartments are built for efficiency over space. A bed, a sofa, a dining table, and a desk somehow have to coexist in 90 square metres. The shortcut — cramming in more stuff — makes rooms feel tight and claustrophobic. The solution is furniture that works harder.",
          },
          { type: "h2", text: "Trends that work in Qatar apartments" },
          {
            type: "ul",
            items: [
              "Sectional sofas with storage underneath: you get seating plus a home for blankets, pillows, or documents",
              "Nesting tables: three tables that slide under each other, used separately when needed, stacked away when not",
              "Wall-mounted shelving: vertical space is free. Shelves, cabinets and desks that fold down from walls save metres of floor space",
              "Ottoman beds and storage benches: your seating is also your storage and sometimes your extra bed for guests",
              "Slender console tables: work as desks, dining surfaces, or entry tables without the footprint of traditional furniture",
              "Modular systems: wall units that adapt as your needs change — add shelves, swap layouts, remove pieces",
            ],
          },
          { type: "h2", text: "What actually fits in a Qatar apartment" },
          {
            type: "ul",
            items: [
              "Maximum sofa width: 2.5–2.8m for most apartment living rooms. Anything wider leaves less than 1m walkway",
              "Dining table: a 1.2m round table seats 4–5 and looks less aggressive than a rectangular 1.5m table in a small space",
              "Bedroom furniture: a bed + a single nightstand + a small dresser is realistic. A full wardrobe and vanity is a squeeze.",
              "Desk/work space: 80cm wide is a full-size work desk in a small flat. Wall-mounted or folding options save floor space",
            ],
          },
          {
            type: "p",
            text: "We work with custom furniture makers across the region — we can design pieces sized exactly for your space, with storage built in, in colours and styles that suit your home. Storage-smart furniture often costs less than buying a smaller piece plus separate storage.",
          },
        ],
      },
      {
        slug: "sofa-care-qatar-heat",
        title: "Sofa Care in Qatar's Heat & Humidity: Keep Your Furniture Looking New",
        excerpt:
          "High heat, intense sun, and humidity take a toll. Here's how to protect your investment.",
        metaTitle: "Sofa Care Guide for Qatar Climate | Maintenance Tips | Good Choice Furniture",
        metaDescription:
          "Caring for sofas and upholstered furniture in Qatar: protecting from sun damage, humidity, heat, and how to extend lifespan.",
        date: "2026-04-16",
        category: "Maintenance",
        relatedService: "repair",
        blocks: [
          {
            type: "p",
            text: "Sofas in Qatar age faster than they do elsewhere. Sunlight bleaches fabrics, humidity weakens glue and wood joints, high temperatures soften foams, and salt-air corrosion (if you're near the coast) eats at metal springs. A sofa that would last 15 years in London might last 8 years here without care.",
          },
          { type: "h2", text: "Sun and light protection" },
          {
            type: "ul",
            items: [
              "Use sheer curtains or UV-blocking film on large windows: direct afternoon sun fades fabric and weakens dyes within months",
              "Rotate cushions weekly: even fading happens unevenly if one side gets more sun",
              "Light-coloured fabrics fade faster: if your sofa gets strong afternoon light, choose darker tones or patterned fabrics that hide fading",
            ],
          },
          { type: "h2", text: "Humidity management" },
          {
            type: "ul",
            items: [
              "Use a dehumidifier in summer (or year-round if you're near the coast): humidity softens wood joints and encourages mildew",
              "Allow airflow around the sofa: don't push it against walls where air can't circulate",
              "Vacuum regularly: moisture and dust are a recipe for mould growth in seams and underneath",
            ],
          },
          { type: "h2", text: "Heat-related care" },
          {
            type: "ul",
            items: [
              "Avoid placing sofas in direct line with AC vents: the temperature swings soften foam prematurely",
              "Check wooden frames and legs annually: heat causes wood to shrink, creating gaps in joints. Tightening bolts annually prevents wobbling.",
            ],
          },
          {
            type: "p",
            text: "A sofa that's well-cared-for can last 12–15 years in Qatar. If you see fading, sagging, or loose joints, get it serviced sooner — small repairs prevent major problems.",
          },
        ],
      },
      {
        slug: "moving-costs-budget-guide",
        title: "Moving in Qatar: What Actually Costs What — A Transparent Breakdown",
        excerpt:
          "Movers quote by the job, not the hour. Here's what you're paying for, so no quotes surprise you.",
        metaTitle: "Qatar Moving Costs Breakdown | Budget Guide | Good Choice Furniture",
        metaDescription:
          "Transparent guide to moving costs in Qatar: what affects the price, typical costs for studios to villas, and how to get an accurate quote.",
        date: "2026-04-23",
        category: "Moving",
        relatedService: "moving",
        blocks: [
          {
            type: "p",
            text: "Moving quotes vary wildly because volume, distance, and complexity vary wildly. A studio move is basically a van and four hours. A villa move might be two trucks, stairs, lifts, and a full day of reassembly. Understanding what you're paying for helps you get a fair quote.",
          },
          { type: "h2", text: "What's included in a moving quote?" },
          {
            type: "ul",
            items: [
              "Labour: the crew (driver + 2–4 helpers depending on move size). A studio might need 2 people; a villa needs 4–5.",
              "Vehicle: a small truck for apartments, a larger truck or two trucks for villas",
              "Packing materials: boxes, bubble wrap, wardrobe cartons, tape, padding — all supplied",
              "Transport: fuel and toll fees included in the quote",
              "Assembly: basic reassembly at the new place (beds, wardrobes) — full assembly might be extra",
              "Disposal: packing waste removed (a big one — most movers dump this on you)",
            ],
          },
          { type: "h2", text: "Typical costs (2026 rates)" },
          {
            type: "ul",
            items: [
              "Studio apartment: QAR 1,500–2,500 (3–4 hours, one truck, 2 crew)",
              "1-bedroom apartment: QAR 2,000–3,500 (5–6 hours, one truck, 3 crew)",
              "2-bedroom apartment: QAR 3,000–4,500 (6–8 hours, one truck, 3–4 crew)",
              "3-bedroom villa: QAR 4,000–6,500 (full day, possibly two trucks, 4–5 crew)",
              "Large villa or full clearance: QAR 6,500–10,000+ (depends on volume and complexity)",
            ],
          },
          { type: "h2", text: "What makes a move more expensive?" },
          {
            type: "ul",
            items: [
              "Upper floors without lifts: extra time, more crew needed for stair carries",
              "Long distance (e.g. Doha to Al Wakrah or Al Khor): adds fuel and time",
              "Building access fees: some new buildings charge for booking lifts; you pay this, not us, but it's a real cost",
              "Fragile items: art, antiques, or high-value electronics need extra wrapping and handling",
              "Storage layover: if you're moving into a place before your new one is ready, storage adds cost",
              "Tight building access: a narrow stairwell or small door might require additional crew or creative positioning",
            ],
          },
          {
            type: "p",
            text: "Get 2–3 quotes with actual site visits or detailed video walkthroughs — a vague quote is usually wrong. Our quotes are fixed-price after assessment: no surprises on the day.",
          },
        ],
      },
      {
        slug: "curtain-styles-care",
        title: "Curtain Styles for Qatar Homes: Choosing Function & Beauty",
        excerpt:
          "Blackout vs. sheer, wave tracks vs. eyelet rings — here's how to pick what actually works for your home.",
        metaTitle: "Curtain Styles & Care for Qatar Homes | Guide | Good Choice Furniture",
        metaDescription:
          "Guide to choosing curtain styles for Qatar: blackout, sheer, thermal, and maintenance for heat/sun protection.",
        date: "2026-04-30",
        category: "Curtains",
        relatedService: "sales",
        blocks: [
          {
            type: "p",
            text: "Curtains are surprisingly functional. In Qatar, where you're paying to cool 50°C heat outside, the right curtains can drop your electricity bill 10–15%. The wrong ones don't block sun, let your privacy disappear at night, or fade within a year. Choosing well means understanding what each style does.",
          },
          { type: "h2", text: "Styles and what they do" },
          {
            type: "ul",
            items: [
              "Blackout (thermal-lined): blocks light and heat. Essential for bedrooms and south-facing rooms in Qatar. Reduces summer AC load noticeably.",
              "Sheer: lets light through but blocks direct view in/out. Best for living areas where you want daylight and privacy at the same time.",
              "Blackout + sheer combo: two tracks or layers. Blackout for night/heat, sheer for day. Common in Qatar apartments.",
              "Wave tracks and pencil pleat: wave tracks (no rings, smooth glide) look modern. Pencil pleat (gathered heading) looks more traditional. Both work equally well.",
              "Eyelet rings (contemporary): simpler than other styles but harder to extend or modify if you move.",
              "Thermal-lined sheers: filter light without blocking it, but add insulation. Compromise between blackout and regular sheer.",
            ],
          },
          { type: "h2", text: "Maintenance in Qatar's heat" },
          {
            type: "ul",
            items: [
              "Blackout linings fade from the outside — rotate or close your outside-facing blackout monthly to even out sun exposure",
              "Vacuuming regularly removes dust that traps heat against the fabric",
              "Professional steam cleaning annually keeps sheers and light fabrics fresh (heat and humidity encourage dust accumulation)",
              "Avoid over-washing: the more you wash, the faster dyes fade and linings break down",
            ],
          },
          {
            type: "p",
            text: "The right curtain combination for most Qatar homes is blackout in bedrooms and south-facing windows, sheer in living areas, and thermal options if you want to reduce cooling costs. Our measuring visit includes style advice based on your room orientation and windows.",
          },
        ],
      },
    ],
  },
  quote: {
    metaTitle: "Get a Quote — Same-Day Prices on WhatsApp | Good Choice Furniture",
    metaDescription:
      "Get a same-day quote for furniture, repair, installation, moving or disposal anywhere in Qatar. Fill the form or message us directly on WhatsApp.",
    eyebrow: "Get a quote",
    heading: "Your quote is one message away",
    intro:
      "Fill in the form and it opens WhatsApp with everything pre-written — just hit send. Prefer to talk? Call us directly.",
    stepsHeading: "What happens next",
    steps: [
      {
        title: "We reply with a price",
        text: "Usually the same day. For bigger jobs we'll arrange a quick site visit first.",
      },
      {
        title: "Pick a slot",
        text: "Choose a time that suits you — same-week availability in most areas.",
      },
      {
        title: "Job done, place tidy",
        text: "Our crew arrives, does the work, and leaves the area clean.",
      },
    ],
    form: {
      name: "Your name",
      namePlaceholder: "e.g. Ahmed Al-Thani",
      phone: "Phone number",
      phonePlaceholder: "e.g. +974 5555 1234",
      service: "Which service do you need?",
      servicePlaceholder: "Select a service",
      photo: "Attach a photo (optional)",
      photoHint:
        "You'll be able to attach the photo directly in the WhatsApp chat after it opens.",
      message: "Anything else we should know? (optional)",
      messagePlaceholder: "e.g. third floor, no lift — sofa is 220 cm wide",
      submit: "Send via WhatsApp",
      submitEmail: "Prefer email? Send it by email instead",
      whatsappNote:
        "This opens WhatsApp with your details pre-filled. Nothing is sent until you press send in WhatsApp.",
      validation: "Please fill in your name, phone number and choose a service.",
    },
  },
  contact: {
    metaTitle: "Contact Good Choice Furniture — Phone, WhatsApp & Service Areas",
    metaDescription:
      "Call or WhatsApp Good Choice Furniture for home services across Doha, Al Rayyan, Al Wakrah, Lusail, The Pearl, Al Khor and Umm Salal. Open Saturday to Thursday.",
    eyebrow: "Contact",
    heading: "Talk to a real person, today",
    intro:
      "WhatsApp is fastest — send photos and get a price without a phone call. But if you'd rather talk, we answer.",
    callTitle: "Call us",
    callText: "Saturday – Thursday, 8:00 AM – 8:00 PM",
    whatsappTitle: "WhatsApp",
    whatsappText: "Fastest response — send photos for a same-day quote",
    emailTitle: "Email",
    hoursTitle: "Working hours",
    hours: "Saturday – Thursday\n8:00 AM – 8:00 PM",
    mapTitle: "Good Choice Furniture service area — Doha, Qatar",
    formHeading: "Send us the details",
    formIntro: "Fill this in and it opens WhatsApp with your message ready to send.",
  },
  notFound: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist or has moved.",
    cta: "Back to homepage",
  },
};
