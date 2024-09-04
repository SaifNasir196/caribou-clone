export const navLinks = [
    {
        label: "Use cases",
        href: "#usecases",
    },
    {
        label: "Features",
        href: "#features",
    },
    {
        label: "Prices",
        href: "#pricing",
    },
    {
        label: "Partners",
        href: "#partners",
    },
    {
        label: "Customers",
        href: "#customers",
    },
    {
        label: "Blog",
        href: "#blog",
    }
] as const

export const logos = [
    { name: "Airbnb", icon: "/logos/airbnb.svg" },
    { name: "Amazon", icon: "/logos/amazon.svg" },
    { name: "Apple", icon: "/logos/apple.svg" },
    { name: "Google", icon: "/logos/google.svg" },
    { name: "Microsoft", icon: "/logos/microsoft.svg" },
    { name: "Netflix", icon: "/logos/netflix.svg" },
    { name: "Spotify", icon: "/logos/spotify.svg" },
] as const;
export const useCases = [
    {
        id: "cash-transfers",
        title: "For cash transfers between entities",
        description: "Transfer funds between entities compliantly. Do away with conflicting and unclear advice from accountants and investors.",
        diagram: [
            { name: "Acme Inc", country: "🇺🇸 United States", regulated: true },
            { name: "Acme SL", country: "🇪🇸 Spain", regulated: false },
            { name: "Acme Ltd", country: "🇬🇧 United Kingdom", regulated: true },
        ]
    },
    {
        id: "fintechs",
        title: "For fintechs with regulated entities",
        description: "Move money and license IP to your regulated entity without the conflicting advice from lawyers. All while keeping your compliance team happy.",
        diagram: [
            { name: "Acme Inc", country: "🇺🇸 United States", regulated: true },
            { name: "Acme GmbH", country: "🇩🇪 Germany", regulated: true },
            { name: "Acme Pte", country: "🇸🇬 Singapore", regulated: false },
        ]
    },
    {
        id: "transfer-pricing",
        title: "For transfer pricing first-timers",
        description: "Get full support when designing and implementing your transfer pricing policy. Enter your next phase with a tax framework that scales with your growth.",
        diagram: [
            { name: "Acme Inc", country: "🇺🇸 United States", regulated: false },
            { name: "Acme Ltd", country: "🇬🇧 United Kingdom", regulated: false },
            { name: "Acme Pty", country: "🇦🇺 Australia", regulated: false },
        ]
    },
] as const


export const pricing = [
    {
        title: "Lite",
        subtitle: "For early-stage startups",
        price: "Starting from $5,000",
        popular: false,
        benefits: [
            "Compliant docs for intragroup loans",
            "Easily monitor and assign work",
            "Full implementation support",
            "Streamlined document signing",
        ],
    },
    {
        title: "Autopilot",
        subtitle: "If you operate in multiple countries",
        price: "Get in touch for pricing",
        popular: true,
        benefits: [
            "Tax optimisation across group",
            "Support for regulated transactions",
            "Benchmarking included",
            "Always-On Slack workspace",
        ],
    },
    {
        title: "Growth",
        subtitle: "Best for growing scale-ups",
        price: "Get in touch for pricing",
        popular: false,
        benefits: [
            "CbCR, Master and Local files",
            "Documentation for 10+ entities",
            "Year-end transfer pricing adjustments",
            "Guidance on new entities",
        ],
    },
] as const


export const FAQData = [
    {
        question: "What service does Caribou offer?",
        answer: "Caribou takes care of your international tax & legal workload when you operate more than one entity.  Managing interactions between entities in your group is a tax & legal minefield. Getting it wrong leads to unnecessary fines, increases your tax cash burden, and even affects your future exit value.  Through the Caribou platform, we define how your group entities should interact with each other, produce all agreements and other compliance documentation required and work with your local accountants and other advisors so you can focus on running your business."
    },
    {
        question: "What is the difference between your services and what my accountant/lawyer offers?",
        answer: "Most multi-entity businesses engage with local experts specialized in bookkeeping or corporate law. Intercompany interactions are a different area of expertise that draws on international tax, accounting, legal, and commercial expertise.  Every day we meet companies that have received conflicting and incomplete advice on intercompany issues from non-specialists. We eliminate those distractions."
    },
    {
        question: "What types of documents do you provide?",
        answer: "Our service provides all legal agreements, local files, benchmarking, master files, and related documents required to comply with international tax rules for multinational groups."
    },
    {
        question: "Is there a limit on the number of documents you provide within your service?",
        answer: "There is no limit to the number of documents we can provide during your subscription, as we do not charge per document."
    },
    {
        question: "Can we put off solving this until due diligence, tax authority or regulator asks for them?",
        answer: "You can, but you are putting your business at risk. The cost to get compliant grows the longer you wait, and risk keeps accumulating.  Regulator or tax authority investigations can drain management time and trigger significant fines and penalties. A typical tax inquiry lasts over three years.  Similarly, many corp dev teams are alert to risks of non-compliance in this area and can seek to reduce your business’ final exit value for non-compliance."
    },
    {
        question: "What is the penalty for my intercompany interactions being non-compliant?",
        answer: "Penalties vary according to the relevant country’s laws and can be levied for 1. not having the required documents, and 2. for any tax not paid due to non-compliant intercompany interactions.   Amounts start at $10k or a % of your total revenue. Well worth avoiding!"
    },
    {
        question: "Do you need my financial data?",
        answer: "To speed up our service, we may ask you to upload corporate or financial information to ensure accuracy and compliance. You or your bookkeepers can easily upload this on the Caribou platform to make the process as easy as possible for you."
    },
    {
        question: "Do you integrate with my accounting system?",
        answer: "Integrations with accounting systems are coming soon. In the meantime, we may request a snapshot of your financial information from your bookkeeper where needed for our work."
    },
    {
        question: "What happens to the documents after they are created?",
        answer: "All your documents are securely stored in your Caribou account. The documents can be downloaded, printed, or shared with your accountants and other stakeholders."
    },
    {
        question: "I have a Delaware parent company. Are you experienced with this?",
        answer: "Yes. Most of our customers have a US parent company in Delaware."
    },
    {
        question: "What countries do you cover?",
        answer: "We support entities in any country that is not on a sanctions list. Rules governing intercompany interactions are aligned in most countries and based on international standards set by the OECD. Our solutions are designed to comply in all your territories."
    },
    {
        question: "I have a complex company structure. Is this for me?",
        answer: "Yes, we provide documents for every type of intra-group structure. If you want to discuss your requirements, then get in touch - hello@usecaribou.com."
    },
    {
        question: "Can you “backdate” intercompany agreements?",
        answer: "\‘Backdating\’ agreements is typically illegal, but mitigating previous non-compliance in some circumstances can be possible. We can account for this when designing the solution for your business."
    },
    {
        question: "Do you handle local filings?",
        answer: "These are highly country-specific and best left to local advisors. We work with local advisors and other relevant stakeholders to ensure that the correct documentation is uploaded but leave the filing of local returns to local specialists."
    },
    {
        question: "Will you help me if I get audited?",
        answer: "We will assist you in any way we can.  We have extensive experience in dealing with tax authorities in various jurisdictions. We can assist in addressing audit questions, drafting responses to tax authorities, and correlating the requested information."
    },
] as const


export const employees = [
  { name: "Brooklyn Simmons", title: "CEO", country: "United States", flag: "🇺🇸" },
  { name: "Kathryn Murphy", title: "CTO", country: "United States", flag: "🇺🇸" },
  { name: "Marvin McKinney", title: "Head of Product", country: "United Kingdom", flag: "🇬🇧", verified: true },
  { name: "Albert Flores", title: "Engineer", country: "United Kingdom", flag: "🇬🇧", verified: true },
  { name: "Floyd Miles", title: "Engineer", country: "United Kingdom", flag: "🇬🇧", verified: true },
  { name: "Jacob Jones", title: "Engineer", country: "United Kingdom", flag: "🇬🇧", verified: true },
] ;

export const arrowPaths = [
  { start: { x: 370, y: 180 }, end: { x: 450, y: 70 }, controlPoint: { x: 410, y: 180 } },
  { start: { x: 370, y: 180 }, end: { x: 450, y: 180 }, controlPoint: { x: 410, y: 180 } },
  { start: { x: 370, y: 180 }, end: { x: 450, y: 290 }, controlPoint: { x: 410, y: 180 } },
];