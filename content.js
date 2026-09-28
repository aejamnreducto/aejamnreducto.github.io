/* =====================================================================
   PORTFOLIO CONTENT  ·  Al Aejamn Reducto
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit for routine updates.
   Everything on the website is drawn from this object.

   Rules of thumb (see docs/EDITING-GUIDE.md for step-by-step help):
   - Keep the structure: text goes between quotes, lists go in [ ].
   - Every entry ends with a comma, except it is fine to leave one
     after the last item too.
   - Only put figures here that are cleared for public use. Anything
     in this file is visible to anyone who views the page source.
     Figures awaiting approval live in _private/EVIDENCE-REGISTER.md.
   - Leave a field as "" (empty) or [] to hide it on the site.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- Site settings ---------- */
  meta: {
    siteTitle: "Al Aejamn Reducto",
    description: "SEM Specialist running Google Ads and Meta Ads for lead generation, measured in CRM-verified leads.",
    lastUpdated: "{{lastUpdated}}",
    // Year shown in the footer.
    year: "2026"
  },

  /* =====================================================================
     NUMBERS · update these when the accounts grow.
     Change a figure here once and it updates everywhere: the headline
     stats, About, Experience, case studies, Skills, the Results bars,
     and the resume PDF. In any text on this page, {{name}} is replaced
     with the figure of that name, e.g. "{{primeLeads}} leads" → "500+ leads".
     Write figures exactly as they should appear ("500+", "29%+", "9.9%").
     A trailing + draws the bar as a minimum.
     ===================================================================== */
  numbers: {
    since:          "Mar 16, 2026",   // start of the PRIME / GreatWork figures
    lastUpdated:    "September 2026", // shown in the footer

    campaignsTotal: "60+",       // all Google Ads campaigns, every account
    primeCampaigns: "46+",
    gwCampaigns:    "13+",

    primeLeads:     "500+",      // Salesforce, Google Ads leads
    gwLeads:        "400+",      // Salesforce, Google Ads + Website leads
    primeQualRate:  "50%+",
    gwQualRate:     "29%+",

    primeClicks:    "30,000+",
    gwClicks:       "20,000+",
    primeImpr:      "300,000+",
    gwImpr:         "250,000+",
    primeCtr:       "9.9%",
    gwCtr:          "8.3%"
  },

  /* =====================================================================
     MONTHLY DATA · feeds the "by month" chart on Results.
     To add a month: add it to the end of "months", then add one number
     to the end of every row below it (use null if there is no figure).
     Every row must have the same number of entries as "months".
     ===================================================================== */
  monthly: {
    months:       ["2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09"],
    note:         "Monthly figures are actual counts. March covers March 16 to 31 and September covers September 1 to 27. PRIME has no Google Ads-tagged leads before April, when click-ID capture started. GreatWork excludes July 11 to 13, 2026.",
    leads: {
      prime:      [null,  7,    34,   67,   76,   123,  109],
      greatwork:  [1,     33,   54,   89,   103,  28,   52]
    },
    qualified: {
      prime:      [null,  5,    12,   39,   46,   56,   51],
      greatwork:  [null,  14,   11,   29,   17,   13,   22]
    },
    clicks: {
      prime:      [2670,  5669,  5560,  2404,  4348,  7049,  4411],
      greatwork:  [2086,  5596,  5408,  2935,  2271,  322,   1071]
    },
    impressions: {
      prime:      [24092, 53891, 56355, 26939, 56920, 65282, 40058],
      greatwork:  [20356, 54591, 63215, 40995, 37205, 4977,  15419]
    },
    ctr: {
      prime:      [11.1,  10.5,  9.9,   8.9,   7.6,   10.8,  11.0],
      greatwork:  [10.2,  10.3,  8.6,   7.2,   6.1,   6.5,   6.9]
    }
  },

  /* ---------- Identity & contact ---------- */
  person: {
    name: "Al Aejamn Reducto",
    shortName: "Aejamn",
    initials: "AR",
    title: "SEM Specialist",
    focus: "Paid Search, Performance Max & Meta Ads",
    location: "Quezon City, Philippines",
    // Your photo. Upload a square JPG named headshot.jpg to site/assets/img/
    // (on GitHub: open assets/img > Add file > Upload files). Uploading a new
    // file with the same name replaces the photo. Until a file exists there,
    // your initials show instead.
    photo: "assets/img/headshot.jpg",
    photoAlt: "Portrait of Al Aejamn Reducto",
    email: "aejamnreducto@outlook.com",
    // Phone shown in Contact. Leave "" to hide it.
    phone: "0956-199-1646",
    phoneIntl: "+639561991646",
    linkedin: "https://www.linkedin.com/in/aejamn-reducto/",
    // Path to the public resume PDF. Leave "" to hide the download button.
    resume: "assets/resume/Al-Aejamn-Reducto-Resume.pdf",
    // Add other approved profiles here: { label: "GitHub", url: "https://..." }
    otherLinks: []
  },

  /* ---------- Home ---------- */
  hero: {
    // One-sentence positioning statement, reused on the resume and LinkedIn.
    positioning: "SEM Specialist who plans, builds, and tracks Google Ads and Meta Ads campaigns for lead generation, measured by CRM-verified leads rather than ad-platform conversions alone.",
    lede: "I plan, build, and track paid campaigns on Google Ads and Meta Ads for businesses in commercial real estate, flexible workspace, automotive services, and logistics. I judge the work by the leads that get confirmed and qualified in the CRM, not only by what the ad platform reports.",
    // The small trace line under the intro. Each item is one step.
    trace: ["search query", "ad click", "form submit", "Salesforce lead", "qualified"],
    // Headline figures. Only cleared figures belong here.
    stats: [
      { value: "{{campaignsTotal}}", label: "Google Ads campaigns managed across multiple accounts", note: "PRIME Philippines, GreatWork, and freelance client work" },
      { value: "{{primeLeads}}", label: "Google Ads leads confirmed in Salesforce, PRIME Philippines", note: "Counted in the CRM, not the ad platform" },
      { value: "{{gwLeads}}", label: "Google Ads and website leads in Salesforce, GreatWork", note: "Counted in the CRM, not the ad platform" },
      { value: "{{primeQualRate}}", label: "of PRIME's Google Ads leads reached qualified status", note: "Qualified in Salesforce by sales" }
    ]
  },

  /* ---------- About ---------- */
  about: {
    paragraphs: [
      "I manage Google Ads Search and Performance Max across two accounts under PRIME Philippines Group: PRIME Philippines, a commercial real estate consultancy covering office, retail, industrial, warehouse, lot, and investment property, and GreatWork, its flexible workspace brand serving both business and individual clients. Together with my freelance client work, I have managed {{campaignsTotal}} Google Ads campaigns.",
      "The work covers the full search lifecycle: campaign builds, keyword research, search term and negative keyword audits, asset creation, bid and budget management, and conversion tracking through Google Ads, Google Tag Manager, and GA4. I also build the WordPress landing pages that PRIME's campaigns send traffic to, including on-page SEO, so paid clicks land on a page built to convert.",
      "What I care about most is measurement. A Google Ads conversion is a form submit; a lead is only real once it shows up in Salesforce and moves through qualification. I built a 15-point audit and reporting routine that checks both sides on a weekly, monthly, and periodic cadence, and I use Claude connected read-only to Google Ads and Salesforce to automate the reporting.",
      "Before PRIME I spent six years in the UAE, first running digital marketing and Meta Ads for a Dubai cargo company, then in digital catalog and content operations at InstaShop in Abu Dhabi, where I also took on a freelance website and Google Ads project for an auto repair business."
    ],
    focusAreas: [
      { label: "Paid search", text: "Google Ads Search, Performance Max, and Display for B2B and B2C lead generation." },
      { label: "Paid social", text: "Meta Ads campaign creation, launch, and conversion tracking setup." },
      { label: "Measurement", text: "Conversion tracking in GTM and GA4, checked against Salesforce lead records." },
      { label: "Landing pages", text: "WordPress pages and on-page SEO matched to ad intent." },
      { label: "Reporting", text: "A documented audit cadence and AI-assisted, read-only reporting workflows." }
    ],
    lookingFor: "Paid Ads and SEM roles at teams that judge ad spend by CRM-verified outcomes, not platform metrics alone."
  },

  /* ---------- Experience (newest first) ---------- */
  experience: [
    {
      id: "prime",
      role: "SEM Specialist",
      org: "PRIME Philippines Group",
      orgDetail: "PRIME Philippines and GreatWork",
      location: "Quezon City, Philippines",
      start: "Mar 2026",
      end: "Present",
      summary: "Full ownership of Google Ads strategy across two accounts: PRIME Philippines (commercial real estate, B2B) and GreatWork (flexible workspace, B2B and B2C).",
      highlights: [
        "Built and managed {{campaignsTotal}} Google Ads Search, Performance Max, and Display campaigns across both accounts.",
        "{{primeLeads}} Google Ads leads for PRIME Philippines and {{gwLeads}} Google Ads and website leads for GreatWork, confirmed in Salesforce.",
        "{{primeQualRate}} of PRIME Philippines' Google Ads leads reached qualified status in Salesforce."
      ],
      responsibilities: [
        "Run keyword research, search term analysis, and negative keyword audits to tighten targeting and cut wasted spend.",
        "Build location- and property-specific campaigns for PRIME's office, retail, industrial, warehouse, lot, and investment segments.",
        "Set up lead-generation and direct-purchase campaigns for GreatWork, each with its own conversion tracking.",
        "Implement and troubleshoot conversion tracking in Google Ads, Google Tag Manager, and GA4, including Enhanced Conversions, working with developers on lead-form tracking and attribution.",
        "Optimize Meta Ads campaigns and fix conversion tracking for PRIME Philippines.",
        "Build WordPress landing pages with on-page SEO for PRIME Philippines and work with IT on site issues.",
        "Review Performance Max asset performance and placement exclusions; use Auction Insights to guide bids and budget.",
        "Designed and run a 15-point SEM audit and reporting framework across both accounts.",
        "Train and manage one marketing intern, from digital marketing fundamentals to hands-on Google Ads work."
      ],
      tools: ["Google Ads", "Performance Max", "Meta Ads", "Google Tag Manager", "GA4", "Enhanced Conversions", "Salesforce", "WordPress", "Claude", "ChatGPT"],
      projects: ["two-accounts", "crm-measurement", "tracking", "landing-pages", "ai-reporting"]
    },
    {
      id: "instashop",
      role: "Senior Digital Products Specialist",
      org: "InstaShop",
      orgDetail: "On-demand grocery and retail marketplace",
      location: "Abu Dhabi, UAE",
      start: "Oct 2021",
      end: "Dec 2025",
      summary: "Digital catalog and content operations for client accounts on the InstaShop marketplace.",
      highlights: [
        "Led product photography and content creation initiatives for marketplace listings.",
        "Trained and supervised team members on digital stock management and product update processes."
      ],
      responsibilities: [
        "Kept pricing, barcode, imagery, and stock data accurate for assigned client accounts.",
        "Worked with other departments to improve client visibility and digital presence on the platform.",
        "Maintained image and description quality across listings."
      ],
      tools: ["Marketplace CMS", "Catalog management", "Product photography", "Team training"],
      projects: ["mk-car-repair"]
    },
    {
      id: "pinas",
      role: "Social Media & Customer Support Specialist",
      org: "Pinas Express Cargo",
      orgDetail: "Logistics",
      location: "Abu Dhabi, UAE",
      start: "Apr 2021",
      end: "Jun 2021",
      summary: "Social media lead generation and multichannel customer support for a cargo company.",
      highlights: [
        "Generated leads through proactive Facebook Messenger outreach, turning inquiries into captured orders and bookings."
      ],
      responsibilities: [
        "Managed Facebook comments and inquiries with prompt, professional responses.",
        "Resolved shipping inquiries and complaints across channels.",
        "Coordinated with third-party carriers for timely, consistent deliveries."
      ],
      tools: ["Facebook", "Messenger", "Customer support"],
      projects: []
    },
    {
      id: "island",
      role: "Digital Marketing Specialist",
      org: "Island Express Cargo",
      orgDetail: "Logistics",
      location: "Dubai, UAE",
      start: "Nov 2019",
      end: "Nov 2020",
      summary: "End-to-end digital marketing for an early-stage cargo company, largely as a one-person marketing function.",
      highlights: [
        "Ran Meta Ads end to end, from campaign creation and conversion tracking through to following up and closing the leads they brought in."
      ],
      responsibilities: [
        "Planned Meta Ads strategy, creative, budget, and optimization.",
        "Ran marketing across Facebook, WhatsApp, and the company website with consistent messaging.",
        "Grew an online community through regular content and responsive engagement with comments and reviews.",
        "Monitored results in Facebook Insights and website analytics, adjusting targeting and creative."
      ],
      tools: ["Meta Ads", "Facebook Insights", "WhatsApp Business", "Website analytics"],
      projects: ["meta-ads-cargo"]
    }
  ],

  /* ---------- Case studies ---------- */
  // "categories" must match an id in caseCategories.
  caseCategories: [
    { id: "paid", label: "Google Ads & paid media" },
    { id: "crm", label: "CRM & reporting" },
    { id: "tracking", label: "Tracking & analytics" },
    { id: "web", label: "Website & SEO" },
    { id: "ai", label: "AI workflows" }
  ],

  caseStudies: [
    {
      id: "two-accounts",
      title: "Running paid search for two B2B brands at once",
      org: "PRIME Philippines and GreatWork",
      industry: "Commercial real estate · Flexible workspace",
      period: "Mar 2026 – Present",
      categories: ["paid"],
      role: "Owner",
      context: "PRIME Philippines markets office, retail, industrial, warehouse, lot, and investment property to businesses. GreatWork sells flexible workspace to both companies and individuals. Each account needs its own structure, keywords, and conversion goals.",
      objective: "Generate leads that hold up in Salesforce, across very different property segments and a mix of B2B and B2C demand.",
      contribution: "I own campaign strategy, builds, and optimization for both accounts, including campaigns that were already running when I joined and the ones I launched.",
      implementation: [
        "Split PRIME campaigns by property segment and location so targeting, bids, and assets match what each searcher is looking for.",
        "Set up GreatWork with separate lead-form and direct-purchase campaigns, each tracked on its own.",
        "Run recurring search term and negative keyword audits to cut irrelevant spend.",
        "Use Auction Insights, impression share, and Performance Max asset reports to guide bid and budget changes."
      ],
      results: [
        "{{campaignsTotal}} campaigns built and managed across both accounts.",
        "{{primeLeads}} PRIME Philippines Google Ads leads and {{gwLeads}} GreatWork Google Ads and website leads, confirmed in Salesforce.",
        "{{primeQualRate}} of PRIME's Google Ads leads reached qualified status."
      ],
      takeaway: "Account structure is a measurement decision. Splitting by segment and conversion type is what made lead quality readable per campaign.",
      tools: ["Google Ads Search", "Performance Max", "Display", "Auction Insights"]
    },
    {
      id: "crm-measurement",
      title: "Measuring leads in Salesforce, not just in Google Ads",
      org: "PRIME Philippines and GreatWork",
      industry: "Commercial real estate · Flexible workspace",
      period: "Mar 2026 – Present",
      categories: ["crm"],
      role: "Designed and run",
      context: "Google Ads reports conversions, which are form submits and purchases. Sales works from Salesforce. The two numbers rarely match, and budget decisions based on the ad platform alone can reward the wrong campaigns.",
      objective: "Report on the leads that actually reach Salesforce and get qualified, and catch tracking problems before they distort the numbers.",
      contribution: "I designed the audit and reporting framework, run it across both accounts, and handle the Salesforce-side reconciliation using read-only access.",
      implementation: [
        "Weekly: search term review and lead-quality checks against Salesforce records.",
        "Monthly: landing page and competitor reviews.",
        "Periodic: tracking-health diagnostics.",
        "A scorecard that follows cost per qualified lead and lead-to-opportunity rate, not only cost per conversion."
      ],
      results: [
        "A documented 15-point audit and reporting framework in use across both accounts.",
        "Google Ads leads identified in Salesforce by click ID (GCLID, GBRAID, WBRAID) and lead source, so lead counts come from the CRM.",
        "Qualified status is sent back to Google Ads as an offline conversion in both accounts, so the ad platform sees lead quality too."
      ],
      takeaway: "The useful question is not how many conversions a campaign drove, but how many of those people sales could actually work with.",
      tools: ["Salesforce (read-only)", "Google Ads"]
    },
    {
      id: "tracking",
      title: "Conversion tracking for lead forms and purchases",
      org: "PRIME Philippines and GreatWork",
      industry: "Commercial real estate · Flexible workspace",
      period: "Mar 2026 – Present",
      categories: ["tracking"],
      role: "Implemented with developers",
      context: "Two brands, several conversion types, and a website stack shared with IT. Missing or duplicated conversion actions feed bad signals into automated bidding.",
      objective: "Make every campaign report the right conversion, once, and keep it working as pages change.",
      contribution: "I set up and troubleshoot tracking in Google Ads, GTM, and GA4, and work with developers on lead-form tracking, Enhanced Conversions, and attribution. For GreatWork I support the Salesforce side of offline conversion measurement.",
      implementation: [
        "Separate conversion actions for GreatWork lead forms and direct purchases.",
        "Enhanced Conversions configured with developers for both accounts.",
        "Diagnosed and fixed Meta Ads conversion tracking for PRIME Philippines.",
        "Tracking checks built into the periodic audit so breakages surface early."
      ],
      results: [
        "Lead-form and purchase conversions tracked separately for GreatWork.",
        "Meta Ads conversion tracking restored for PRIME Philippines."
      ],
      takeaway: "Automated bidding is only as good as the conversion it optimizes toward, so tracking is part of campaign strategy, not an afterthought.",
      tools: ["Google Tag Manager", "GA4", "Google Ads conversions", "Enhanced Conversions", "Meta Ads"]
    },
    {
      id: "landing-pages",
      title: "Landing pages that match the ad",
      org: "PRIME Philippines",
      industry: "Commercial real estate",
      period: "Mar 2026 – Present",
      categories: ["web"],
      role: "Built",
      context: "Property searches are specific: a location, a property type, a size. A generic page loses the visitor that a specific ad just earned.",
      objective: "Send paid traffic to pages that answer the search and make inquiring easy.",
      contribution: "I build and optimize the WordPress landing pages for PRIME's campaigns and work with IT and developers on site bugs.",
      implementation: [
        "Page copy and layout aligned to each campaign's keywords and ad copy.",
        "On-page SEO on every page: focus keyword, meta description, URL slug, and image alt text, descriptions, and captions.",
        "Generative AI imagery for property and workspace pages."
      ],
      results: [
        "Landing pages built and maintained for PRIME's Google Ads campaigns."
      ],
      takeaway: "The ad and the page are one experience. Most of the gain comes from matching them closely.",
      tools: ["WordPress", "On-page SEO", "Generative AI imagery"]
    },
    {
      id: "ai-reporting",
      title: "AI-assisted reporting on read-only data",
      org: "PRIME Philippines and GreatWork",
      industry: "Marketing operations",
      period: "2026",
      categories: ["ai", "crm"],
      role: "Built",
      context: "Recurring reports pull from Google Ads and Salesforce every week. Doing it by hand is slow and easy to get wrong.",
      objective: "Speed up routine reporting and analysis without giving any tool write access to company systems.",
      contribution: "I connected Claude to a Google Ads MCP integration and a Salesforce connector, both strictly read-only, and use AI tools across analysis, research, and content work.",
      implementation: [
        "Claude with read-only Google Ads and Salesforce connections for recurring reports and reconciliation.",
        "ChatGPT for search term review, competitor research, and ad copy analysis.",
        "Generative AI for landing page and social content imagery."
      ],
      results: [
        "Reporting workflows automated on read-only connections, with no write access to either system."
      ],
      takeaway: "Read-only access is the right default. The value is in faster, checkable analysis, not in letting a tool change the account.",
      tools: ["Claude", "Google Ads MCP (read-only)", "Salesforce connector (read-only)", "ChatGPT"]
    },
    {
      id: "mk-car-repair",
      title: "Website and Google Ads for an auto repair shop",
      org: "MK Car Repair (freelance client)",
      industry: "Automotive services",
      period: "Nov 2024 – May 2025",
      categories: ["web", "paid"],
      role: "Freelance, sole marketer",
      context: "A local automotive service business needed a website and a way to reach people searching for repairs.",
      objective: "Launch a site that could rank and convert, and bring in search traffic from day one.",
      contribution: "I handled the project end to end as a freelancer alongside my role at InstaShop.",
      implementation: [
        "Designed and built a responsive website for the business.",
        "Keyword research and on-page SEO for local search visibility.",
        "Built and managed a Google Ads Search campaign: copy, assets, and budget."
      ],
      results: [
        "Website launched, with a Google Ads Search campaign built and managed for the client."
      ],
      takeaway: "Owning the site, the SEO, and the ads together shows quickly where each channel helps the other.",
      tools: ["Website build", "On-page SEO", "Google Ads Search"]
    },
    {
      id: "meta-ads-cargo",
      title: "Full-funnel Meta Ads for a Dubai cargo company",
      org: "Island Express Cargo",
      industry: "Logistics",
      period: "Nov 2019 – Nov 2020",
      categories: ["paid"],
      role: "Owner",
      context: "An early-stage cargo company with a small team and no dedicated marketing function.",
      objective: "Build awareness and inquiries through Facebook, WhatsApp, and the company website.",
      contribution: "I ran the marketing function largely on my own, including every Meta Ads campaign from creation to closing the lead.",
      implementation: [
        "Meta Ads campaigns created and launched end to end: strategy, creative, budget, and optimization.",
        "Conversion tracking set up so each inquiry could be traced to its campaign.",
        "Followed up the inquiries myself and worked them through to closed bookings.",
        "Regular content and community management across Facebook and WhatsApp.",
        "Targeting and creative adjusted from Facebook Insights and website analytics."
      ],
      results: [
        "Owned the full path from ad to closed lead for a full year."
      ],
      takeaway: "Where I learned to connect ad performance to what happens after the click.",
      tools: ["Meta Ads", "Facebook Insights", "WhatsApp Business"]
    }
  ],

  /* ---------- Performance dashboard ---------- */
  // Only cleared, aggregate figures. Values marked floor: true are
  // published as minimums and drawn as "at least". The figures come from
  // the NUMBERS block at the top of this file.
  dashboard: {
    intro: "Results from Google Ads and Salesforce since March 16, 2026. Lead counts come from Salesforce, not from Google Ads conversion totals. Figures marked + are minimums and keep growing.",
    // The date range every figure below covers. Shown on the site as-is.
    asOf: "Since {{since}}",
    periods: [
      { id: "p2026", label: "Since {{since}}", note: "From the start of my Google Ads work on both accounts." }
    ],
    categories: [
      { id: "prime", label: "PRIME Philippines", detail: "Commercial real estate · B2B" },
      { id: "greatwork", label: "GreatWork", detail: "Flexible workspace · B2B and B2C" }
    ],
    metrics: [
      {
        id: "leads",
        label: "Salesforce leads",
        format: "count",
        definition: "Leads created in Salesforce during the period. PRIME Philippines: leads carrying a Google click ID (GCLID, GBRAID, or WBRAID) or a Google Ads lead source. GreatWork: the same, plus website form leads, because Google Ads click tracking on GreatWork's forms was still being fixed and those leads could not be tagged by channel. GreatWork excludes July 11 to 13, 2026, when conversion tracking broke.",
        source: "Salesforce"
      },
      {
        id: "qualified",
        label: "Qualified leads",
        format: "count",
        definition: "Leads that reached Qualified status in Salesforce, by the month the lead was created. PRIME Philippines: Google Ads leads. GreatWork: Google Ads and website leads, excluding July 11 to 13, 2026. Recent months rise as sales works through new leads.",
        source: "Salesforce"
      },
      {
        id: "lqlRate",
        label: "Qualified-lead rate",
        format: "percent",
        definition: "Share of leads with Qualified status in Salesforce. PRIME Philippines: Google Ads leads. GreatWork: Google Ads and website leads, excluding July 11 to 13, 2026, when conversion tracking broke. Leads that sales has not reviewed yet count as not qualified, so the rate rises as they are worked.",
        source: "Salesforce"
      },
      {
        id: "campaigns",
        label: "Campaigns managed",
        format: "count",
        definition: "Google Ads campaigns with at least one impression during the period.",
        source: "Google Ads"
      },
      {
        id: "clicks",
        label: "Clicks",
        format: "count",
        definition: "Google Ads clicks across all campaigns in the account.",
        source: "Google Ads"
      },
      {
        id: "impressions",
        label: "Impressions",
        format: "count",
        definition: "Times Google Ads showed the account's ads.",
        source: "Google Ads"
      },
      {
        id: "ctr",
        label: "Click-through rate",
        format: "percent",
        definition: "Clicks divided by impressions, for the whole account.",
        source: "Google Ads"
      }
    ],
    // Each bar points at a figure name from NUMBERS. Add "note" to show
    // an extra line in the tooltip and "How this is measured".
    values: [
      { metric: "leads",       category: "prime",     figure: "primeLeads" },
      { metric: "leads",       category: "greatwork", figure: "gwLeads", note: "Includes website form leads." },
      { metric: "lqlRate",     category: "prime",     figure: "primeQualRate" },
      { metric: "lqlRate",     category: "greatwork", figure: "gwQualRate", note: "Google Ads and website leads; excludes July 11 to 13, 2026." },
      { metric: "campaigns",   category: "prime",     figure: "primeCampaigns" },
      { metric: "campaigns",   category: "greatwork", figure: "gwCampaigns" },
      { metric: "clicks",      category: "prime",     figure: "primeClicks" },
      { metric: "clicks",      category: "greatwork", figure: "gwClicks" },
      { metric: "impressions", category: "prime",     figure: "primeImpr" },
      { metric: "impressions", category: "greatwork", figure: "gwImpr" },
      { metric: "ctr",         category: "prime",     figure: "primeCtr" },
      { metric: "ctr",         category: "greatwork", figure: "gwCtr" }
    ],
    // The monthly chart reads the MONTHLY DATA block at the top of this file.
    notes: [
      "GreatWork lead counts include website form leads that could not be tagged by channel while Google Ads tracking was being fixed, and exclude July 11 to 13, 2026, when conversion tracking broke.",
      "Results reflect campaign, sales, and website work across the team. My part is described in each case study.",
      "Totals marked + are minimums since {{since}}. The monthly chart shows actual counts for each month."
    ]
  },

  /* ---------- Lead journey (attribution workflow) ---------- */
  // role: short tag for my part. level: "own" | "build" | "report" | "sales"
  journey: {
    intro: "How a search turns into a sales opportunity at PRIME and GreatWork, and which parts are mine. Click IDs carry each lead from the ad click into Salesforce, and qualified status flows back to Google Ads as an offline conversion. Follow-up and opportunities are handled by sales.",
    stages: [
      {
        id: "ad", label: "Advertising", level: "own", role: "I own this",
        detail: "Google Ads Search, Performance Max, and Display for both accounts. I also optimize Meta Ads and fixed its conversion tracking for PRIME Philippines.",
        tools: ["Google Ads", "Meta Ads"]
      },
      {
        id: "site", label: "Website visit", level: "build", role: "I build (PRIME pages)",
        detail: "I build and maintain the WordPress landing pages for PRIME's campaigns, including on-page SEO. Site-level issues are handled with IT and developers.",
        tools: ["WordPress", "On-page SEO"]
      },
      {
        id: "tracking", label: "Conversion tracking", level: "build", role: "I implement, with developers",
        detail: "Lead-form and purchase conversions tracked through Google Tag Manager, GA4, and Google Ads, including Enhanced Conversions. Developers handle code changes on the site.",
        tools: ["GTM", "GA4", "Enhanced Conversions"]
      },
      {
        id: "lead", label: "Salesforce lead", level: "report", role: "I verify and reconcile",
        detail: "Leads land in Salesforce with the Google click ID (GCLID, GBRAID, or WBRAID), UTM values, and lead source, which is how I confirm which ones came from Google Ads. I check and reconcile them using read-only access.",
        tools: ["Salesforce (read-only)"]
      },
      {
        id: "qualify", label: "Qualification", level: "report", role: "I report on this",
        detail: "Leads are qualified in Salesforce. Qualified status is sent back to Google Ads as an offline conversion in both accounts, and I track the qualified-lead rate by account and campaign to steer budget.",
        tools: ["Salesforce reports"]
      },
      {
        id: "followup", label: "Sales follow-up", level: "sales", role: "Sales team",
        detail: "Sales teams contact and work the leads. This stage is not mine; I use its outcomes to judge campaign quality.",
        tools: []
      },
      {
        id: "opportunity", label: "Opportunity", level: "report", role: "I report on this",
        detail: "Opportunities are created by sales. My scorecard follows cost per qualified lead and lead-to-opportunity rate so ad budgets answer to pipeline, not clicks.",
        tools: ["Scorecard"]
      }
    ],
    legend: [
      { level: "own", label: "Own" },
      { level: "build", label: "Build or implement" },
      { level: "report", label: "Verify and report" },
      { level: "sales", label: "Sales team" }
    ]
  },

  /* ---------- Skills ---------- */
  skills: [
    {
      group: "Paid advertising",
      items: [
        { name: "Google Ads Search, Display & Performance Max", how: "{{campaignsTotal}} campaigns managed across multiple accounts." },
        { name: "Keyword & search term management", how: "Weekly search term reviews and negative keyword audits." },
        { name: "Bid & budget management", how: "Guided by Auction Insights, impression share, and CRM lead quality." },
        { name: "Meta Ads", how: "Optimization and tracking fixes at PRIME; full ownership at Island Express Cargo." }
      ]
    },
    {
      group: "Tracking & analytics",
      items: [
        { name: "Google Tag Manager", how: "Conversion tags and triggers built on custom events, data layer variables, first-party cookies, and user-provided data." },
        { name: "Conversion tracking", how: "End to end, from the Google Ads click to the form submission on WordPress to the lead in Salesforce." },
        { name: "GA4", how: "Conversion setup and troubleshooting for both accounts." },
        { name: "Enhanced Conversions", how: "Configured with developers." },
        { name: "Looker Studio", how: "" }
      ]
    },
    {
      group: "CRM & marketing operations",
      items: [
        { name: "Salesforce", how: "Lead creation, lead tracking, read-only reporting, and record reconciliation." },
        { name: "Audit framework design", how: "A 15-point weekly, monthly, and periodic SEM audit." },
        { name: "Marketing-to-sales alignment", how: "Reporting on qualified leads and opportunities, not only conversions." }
      ]
    },
    {
      group: "Website & content",
      items: [
        { name: "WordPress", how: "Landing page builds and troubleshooting." },
        { name: "On-page SEO", how: "Focus keywords, meta descriptions, URL slugs, image alt text, image descriptions and captions, and blog posts." },
        { name: "Ad copywriting", how: "Copy written to match landing pages and search intent." },
        { name: "Product photography & content", how: "Led photography and content initiatives at InstaShop." }
      ]
    },
    {
      group: "AI workflows",
      items: [
        { name: "Claude", how: "Reporting and data analysis, using read-only Google Ads MCP and Salesforce connections." },
        { name: "ChatGPT", how: "Search term, competitor, and ad copy analysis." },
        { name: "Generative imagery", how: "Visuals for landing pages and social content." }
      ]
    },
    {
      group: "Collaboration",
      items: [
        { name: "Developers & IT", how: "Tracking implementation and landing page fixes." },
        { name: "Cross-functional teams", how: "Brokers at PRIME Philippines; photographers and content specialists at InstaShop." },
        { name: "Intern training", how: "Train and manage one marketing intern." }
      ]
    }
  ],

  /* ---------- Creative & selected work ---------- */
  // Add only approved images. Put files in site/assets/img/ and list them:
  // { title: "...", image: "assets/img/file.jpg", alt: "...", category: "Landing page",
  //   context: "What it is", role: "What I did", year: "2026" }
  // The section stays hidden while this list is empty.
  gallery: [],

  /* ---------- Certifications & education ---------- */
  // "image": a photo or scan of the certificate in site/assets/img/certs/.
  // Upload a file with exactly that name and a thumbnail appears; until
  // then the row shows without one. "url": a public verification link.
  certifications: [
    { name: "Advanced Digital Marketing Expert", issuer: "London International Studies and Research Center (LISRC)", date: "Aug 2024", status: "", url: "https://certifications.lisrc.org/verification/AlAejamnCalderonReducto/2635", image: "assets/img/certs/lisrc-digital-marketing.jpg" },
    { name: "Digital Marketing Certification (KHDA-attested)", issuer: "Immersive Business Training DMCC, Dubai", date: "Aug 2024", status: "", url: "", image: "assets/img/certs/khda-digital-marketing.jpg" },
    { name: "Google Ads Search Certification", issuer: "Google Skillshop", date: "Sep 2024", status: "", url: "", image: "assets/img/certs/google-ads-search.jpg" },
    { name: "Google Ads Display Certification", issuer: "Google Skillshop", date: "Sep 2024", status: "", url: "", image: "assets/img/certs/google-ads-display.jpg" },
    { name: "Strategy of Content Marketing", issuer: "University of California (online)", date: "Apr 2020", status: "", url: "", image: "assets/img/certs/uc-content-marketing.jpg" },
    { name: "Introduction to Personal Branding", issuer: "University of Virginia (online)", date: "Apr 2020", status: "", url: "", image: "assets/img/certs/uva-personal-branding.jpg" }
  ],
  education: [
    { degree: "BS Business Administration, Major in Business Management", school: "University of the East, Manila", years: "2015 – 2019" }
  ],
  languages: ["English (professional working proficiency)", "Tagalog (native)"]
};
