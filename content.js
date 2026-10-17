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
    period:         "March to October 2026", // period shown under the headline figures
    lastUpdated:    "October 2026",   // shown in the footer

    campaignsTotal: "60+",       // all Google Ads campaigns, every account
    primeCampaigns: "47+",
    gwCampaigns:    "13+",

    primeLeads:     "500+",      // Salesforce, Google Ads leads
    gwLeads:        "400+",      // Salesforce, Google Ads + Website leads
    primeQualRate:  "50%+",
    leadValue:      "₱150M+",    // estimated professional fees from reconciled PF receivables, not closed deals
    gwQualRate:     "31%+",

    primeClicks:    "33,000+",
    gwClicks:       "20,000+",
    primeImpr:      "335,000+",
    gwImpr:         "250,000+",
    primeCtr:       "9.9%",
    gwCtr:          "8.3%"
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
    positioning: "SEM Specialist who plans, builds, tracks, and optimizes Google Ads and Meta Ads campaigns for lead generation, measured by CRM-verified leads rather than ad-platform conversions alone.",
    lede: "I plan, build, track, and optimize paid campaigns on Google Ads and Meta Ads for businesses across real estate, automotive, and logistics. I judge the work by the leads that get confirmed and qualified in the CRM, not only by what the ad platform reports.",
    // The small trace line under the intro. Each item is one step.
    trace: ["search query", "ad click", "form submit", "Salesforce lead", "qualified"],
    // Headline figures. Only cleared figures belong here.
    stats: [
      { value: "{{campaignsTotal}}", label: "Google Ads campaigns managed across multiple accounts", note: "PRIME Philippines, GreatWork, and freelance client work" },
      { value: "{{primeLeads}}", label: "Google Ads leads confirmed in Salesforce, PRIME Philippines", note: "Counted in the CRM, not the ad platform" },
      { value: "{{gwLeads}}", label: "Google Ads and website leads in Salesforce, GreatWork", note: "Counted in the CRM, not the ad platform" },
      { value: "{{primeQualRate}}", label: "of PRIME's Google Ads leads reached qualified status", note: "Qualified in Salesforce by sales" },
      { value: "{{leadValue}}", label: "estimated value of qualified leads", note: "Estimated professional fees, not closed deals or revenue" }
    ]
  },

  /* ---------- About ---------- */
  about: {
    paragraphs: [
      "I manage Google Ads Search and Performance Max for two brands under PRIME Philippines Group: PRIME Philippines, a commercial real estate consultancy, and GreatWork, its flexible workspace brand. Including freelance work, I have managed {{campaignsTotal}} Google Ads campaigns.",
      "I cover the full search lifecycle, from keyword research and campaign builds to search term audits, bidding, and conversion tracking in Google Ads, GTM, and GA4. I also build the WordPress landing pages the campaigns send traffic to.",
      "I measure the work in Salesforce, not only in the ad platform: a lead counts once it reaches the CRM and moves through qualification. A 15-point audit checks both sides, and I use AI, including Claude connected read-only to Google Ads and Salesforce, for reporting, analysis, ad copy, campaign builds, troubleshooting, and images.",
      "Before PRIME I spent six years in the UAE: Meta Ads for a Dubai cargo company, catalog and content operations at InstaShop, and a freelance website, SEO, and Google Ads project for an auto repair shop."
    ],
    focusAreas: [
      { label: "Paid search", text: "Google Ads Search, Performance Max, and Display for B2B and B2C lead generation." },
      { label: "Paid social", text: "Meta Ads campaign creation, launch, and conversion tracking setup." },
      { label: "Measurement", text: "Conversion tracking in GTM and GA4, checked against Salesforce lead records." },
      { label: "Landing pages", text: "WordPress pages and on-page SEO matched to ad intent." },
      { label: "Reporting & AI", text: "A 15-point audit cadence, plus AI across ads, reporting, and analysis." }
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
        "Build WordPress service and location landing pages with on-page SEO for PRIME Philippines and GreatWork, and work with IT on site issues.",
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
      projects: []
    },
    {
      id: "mk",
      role: "Digital Marketer (Freelance)",
      org: "MK Car Repair",
      orgDetail: "Auto repair shop, freelance client",
      location: "Al Ain, UAE",
      start: "Nov 2024",
      end: "May 2025",
      summary: "End-to-end digital marketing for a local auto repair shop, taken on alongside my role at InstaShop: the website, local SEO, tracking, and Google Ads.",
      highlights: [
        "Built the shop's WordPress website and ran its Google Ads Search campaign: 57,000+ impressions and 1,000+ clicks on a very limited daily budget.",
        "The pages I built rank #1 when people search the shop's name and have earned 11,000+ Google Search impressions (Search Console, June 2025 to October 2026)."
      ],
      responsibilities: [
        "Researched what drivers in Al Ain search for and wrote three long-form blog posts around those searches.",
        "Handled on-page and local SEO, including the shop's Google Business Profile.",
        "Submitted the sitemap and managed indexing in Google Search Console.",
        "Installed Google Tag Manager and GA4 to track site traffic.",
        "Wrote the ad copy, built the assets, managed the budget, and reviewed search terms for the Google Ads campaign."
      ],
      tools: ["WordPress", "Google Ads Search", "Google Search Console", "Google Business Profile", "Google Tag Manager", "GA4"],
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
    { id: "social", label: "Meta Ads & social" },
    { id: "tracking", label: "Tracking & analytics" },
    { id: "crm", label: "CRM & reporting" },
    { id: "web", label: "Website & SEO" },
    { id: "ai", label: "AI workflows" }
  ],

  caseStudies: [
    {
      id: "two-accounts",
      // Card front: the headline figure and a three-line summary.
      metric: { value: "{{campaignsTotal}}", label: "campaigns built and managed across both accounts" },
      brief: { problem: "Two brands with different buyers, keywords, and conversion goals.", did: "Split campaigns by property segment, location, and conversion type.", result: "{{primeLeads}} PRIME and {{gwLeads}} GreatWork leads confirmed in Salesforce." },
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
      // Card front: the headline figure and a three-line summary.
      metric: { value: "{{primeQualRate}}", label: "of PRIME's Google Ads leads reached qualified status" },
      brief: { problem: "Google Ads conversions and Salesforce leads rarely match.", did: "Built a 15-point audit that checks ad results against CRM records.", result: "Lead counts come from the CRM, and qualified status flows back to Google Ads." },
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
      // Card front: the headline figure and a three-line summary.
      metric: { value: "GTM + GA4", label: "conversion tracking set up and fixed with developers" },
      brief: { problem: "Several conversion types on a website shared with IT.", did: "Separate conversion actions, Enhanced Conversions, and tracking checks in every audit.", result: "Clean lead-form and purchase tracking for GreatWork; Meta Ads tracking restored for PRIME." },
      title: "Conversion tracking for lead forms and purchases",
      org: "PRIME Philippines and GreatWork",
      industry: "Commercial real estate · Flexible workspace",
      period: "Mar 2026 – Present",
      categories: ["tracking", "social"],
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
      // Card front: the headline figure and a three-line summary.
      metric: { value: "SEO + Ads", label: "every page built to rank and to match its campaign" },
      brief: { problem: "Specific property searches landing on generic pages.", did: "One page per property type and location, keyword-led from title tag to URL.", result: "Pages that serve both the paid click and the organic search." },
      title: "Service and location landing pages",
      org: "PRIME Philippines and GreatWork",
      industry: "Commercial real estate and flexible workspace",
      period: "Mar 2026 – Present",
      categories: ["web", "paid"],
      role: "Built",
      context: "Property searches are specific: a property type, a location, a size. A generic page loses the visitor that a specific ad just earned, and it won't rank for the search either.",
      objective: "Build pages that match the Google Ads campaigns sending traffic to them and can also rank on their own in organic search.",
      contribution: "I build and optimize the WordPress landing pages for PRIME Philippines and GreatWork campaigns and work with IT and developers on site bugs.",
      implementation: [
        "One page per property type and location, such as office space in Cebu, commercial lots in Cavite, and warehouses in Quezon City.",
        "Title tag, H1, meta description, and URL slug built on the same \"[property type] for lease in [location]\" keyword.",
        "Supporting sections that answer local intent, such as why businesses choose that location, plus image alt text, descriptions, and captions.",
        "Links from each page to the matching property listings, and an inquiry form on the page.",
        "Page copy aligned to each campaign's keywords and ad copy, with generative AI imagery for property and workspace pages."
      ],
      results: [
        "Service and location landing pages built and maintained for PRIME's Google Ads campaigns, each optimized for organic search."
      ],
      takeaway: "The ad and the page are one experience. A page built around one service in one location serves both the paid click and the organic search.",
      tools: ["WordPress", "On-page SEO", "Generative AI imagery"]
    },
    {
      id: "ai-reporting",
      // Card front: the headline figure and a three-line summary.
      metric: { value: "Read-only", label: "AI connections to Google Ads and Salesforce" },
      brief: { problem: "Weekly reports, fixes, and visuals take hours by hand.", did: "Claude on read-only data, plus AI for ad copy, campaign builds, troubleshooting, and images.", result: "Faster, checkable work with no write access to either system." },
      title: "AI across campaigns, reporting, troubleshooting, and images",
      org: "PRIME Philippines and GreatWork",
      industry: "Marketing operations",
      period: "2026",
      categories: ["ai", "crm"],
      role: "Built",
      context: "Recurring reports pull from Google Ads and Salesforce every week, and campaigns need a steady flow of analysis, fixes, and visuals. Doing all of it by hand is slow and easy to get wrong.",
      objective: "Work faster across campaign builds, reporting, analysis, troubleshooting, and creative, without giving any tool write access to company systems.",
      contribution: "I connected Claude to a Google Ads MCP integration and a Salesforce connector, both strictly read-only, and use AI tools every day across ad copy, campaign builds, reporting, data analysis, troubleshooting, and image work.",
      implementation: [
        "Claude with read-only Google Ads and Salesforce connections for recurring reports, reconciliation, and data analysis.",
        "AI to draft ad copy and structure new campaign builds, which I then review and refine.",
        "AI-assisted troubleshooting of conversion tracking and website issues.",
        "ChatGPT for search term review, competitor research, and ad copy analysis.",
        "Generative AI to create and enhance images for landing pages and social content."
      ],
      results: [
        "Reporting workflows automated on read-only connections, with no write access to either system.",
        "AI built into day-to-day campaign, analysis, troubleshooting, and creative work, not only reporting."
      ],
      takeaway: "Read-only access is the right default. The value is in faster, checkable work, not in letting a tool change the account.",
      tools: ["Claude", "Google Ads MCP (read-only)", "Salesforce connector (read-only)", "ChatGPT", "Generative AI imagery"]
    },
    {
      id: "mk-car-repair",
      // Card front: the headline figure and a three-line summary.
      metric: { value: "57,000+", label: "ad impressions on a very limited daily budget" },
      brief: { problem: "A local shop that needed a website and a way to be found in search.", did: "Built the site, local SEO, tracking, and a Google Ads Search campaign.", result: "#1 for the shop's name, and on page 1 of Google by March 2026." },
      title: "Website, local SEO, and Google Ads for an auto repair shop",
      org: "MK Car Repair (freelance client)",
      industry: "Automotive services · Al Ain, UAE",
      period: "Nov 2024 – May 2025",
      categories: ["web", "paid"],
      role: "Freelance, sole marketer",
      context: "A local auto repair shop in Al Ain needed a website and a way to reach people searching for repairs, both through Google Ads and in organic search.",
      objective: "Launch a site that could rank and convert, and bring in search traffic from day one.",
      contribution: "I handled the project end to end as a freelancer alongside my role at InstaShop: the site, the SEO, the tracking, and the ads.",
      implementation: [
        "Designed and built a responsive WordPress website.",
        "Used keyword research tools to find what drivers in Al Ain search for, and chose page targets and blog topics from that data.",
        "Wrote and published three long-form blog posts, each built around a real search question, with H2 and H3 headings that answer it directly.",
        "Local-intent page titles and meta descriptions, URL slugs, image alt text, and internal links from the posts to the Services page.",
        "Submitted the XML sitemap and requested indexing in Google Search Console, checked crawl and index status, and compressed images to keep pages fast.",
        "Optimized the shop's Google Business Profile for local and Maps search.",
        "Installed Google Tag Manager and GA4 to track site traffic.",
        "Built and managed a Google Ads Search campaign on a very limited daily budget: copy, assets, and budget.",
        "Reviewed search term reports to add new keywords and exclude irrelevant searches, across English and Arabic queries."
      ],
      results: [
        "57,000+ ad impressions and 1,000+ clicks from a single Search campaign on a very limited daily budget.",
        "Visitors from the ads engaged with the site at 43%, against 26% for direct traffic.",
        "Ranks #1 when people search the shop's name.",
        "One blog post, about repair times, has earned 4,600+ Google impressions.",
        "Moved from page 3 of Google results in mid-2025 to page 1 by March 2026, with an average position of 5.7.",
        "11,000+ Google Search impressions in total."
      ],
      resultsNote: "Ad figures are from Google Ads and GA4; the campaign ran only during my engagement, November 2024 to May 2025. Search figures are from Google Search Console, June 11, 2025 to October 9, 2026. Search Console keeps only 16 months of data, so they start after my work on the site ended in May 2025. I haven't worked on the site since, so they show how the pages I built kept performing on their own.",
      takeaway: "Owning the site, the SEO, and the ads together shows quickly where each channel helps the other.",
      tools: ["WordPress", "Keyword research tools", "On-page SEO", "Google Search Console", "Google Business Profile", "Google Tag Manager", "GA4", "Google Ads Search"]
    },
    {
      id: "meta-ads-cargo",
      // Card front: the headline figure and a three-line summary.
      metric: { value: "12 months", label: "owning Meta Ads from ad to closed booking" },
      brief: { problem: "An early-stage cargo company with no marketing team.", did: "Ran every Meta Ads campaign, the tracking, and the lead follow-up myself.", result: "Owned the full path from ad to closed booking for a year." },
      title: "Full-funnel Meta Ads for a Dubai cargo company",
      org: "Island Express Cargo",
      industry: "Logistics",
      period: "Nov 2019 – Nov 2020",
      categories: ["social", "paid"],
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
    asOf: "{{period}}",
    periods: [
      { id: "p2026", label: "{{period}}", note: "From the start of my Google Ads work on both accounts." }
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
    notes: [
      "GreatWork lead counts include website form leads that could not be tagged by channel while Google Ads tracking was being fixed, and exclude July 11 to 13, 2026, when conversion tracking broke.",
      "Results reflect campaign, sales, and website work across the team. My part is described in each case study.",
      "Totals marked + are minimums for {{period}}."
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
        { name: "Google Search Console", how: "Sitemap submission, indexing requests, crawl and index checks, and search performance reports." },
        { name: "Local SEO", how: "Service and location pages, local-intent titles and meta descriptions, and Google Business Profile optimization." },
        { name: "Ad copywriting", how: "Copy written to match landing pages and search intent." },
        { name: "Product photography & content", how: "Led photography and content initiatives at InstaShop." }
      ]
    },
    {
      group: "AI workflows",
      items: [
        { name: "Claude", how: "Reporting and data analysis on read-only Google Ads MCP and Salesforce connections." },
        { name: "Ad copy & campaign builds", how: "Drafting ad copy and structuring new Google Ads campaigns with AI, then refining by hand." },
        { name: "Troubleshooting", how: "Working through conversion tracking and website issues with AI." },
        { name: "ChatGPT", how: "Search term, competitor, and ad copy analysis." },
        { name: "Image creation & enhancement", how: "Creating and enhancing images for landing pages and social content." }
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
