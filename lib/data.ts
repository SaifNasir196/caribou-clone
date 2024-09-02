export const navLinks = [
    {
        label: "Use cases",
        href: "/",
    },
    {
        label: "Features",
        href: "#explore",
    },
    {
        label: "Prices",
        href: "#about",
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
            "Everything in Lite, plus",
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
            "Everything in Autopilot, plus",
            "CbCR, Master and Local files",
            "Documentation for 10+ entities",
            "Year-end transfer pricing adjustments",
            "Guidance on new entities",
        ],
    },
] as const