export interface ServiceCard {
  number: string;
  title: string;
  description: string;
  extraParagraph?: string;
  solutions?: string[];
}

export interface CapabilityTab {
  id: string;
  label: string;
  heroImage: string;
  quote: string;
  title: string;
  subtitle: string;
  body: string;
  cards: ServiceCard[];
}

export const CAPABILITIES_DATA: CapabilityTab[] = [
  {
    id: "capital-markets",
    label: "Capital Markets",
    heroImage: "/capabilities/hero-capital-markets.jpg",
    quote:
      "The circular opening symbolises access, possibility, and scale. Much like capital itself, it creates pathways to growth, helping businesses move from private opportunities to public markets and larger ambitions.",
    title: "Capital Markets",
    subtitle: "From growth capital to public markets.",
    body: "We support businesses across the capital lifecycle, providing financing, growth capital, and capital market solutions designed to support expansion, strategic initiatives, and long-term value creation.",
    cards: [
      {
        number: "[01]",
        title: "Credit Solutions",
        description:
          "Businesses often require capital at different stages of growth, expansion, acquisition, or transformation. SkyBridge facilitates customized financing solutions tailored to specific business objectives and capital requirements.",
        solutions: [
          "Promoter Financing",
          "Acquisition Financing",
          "Working Capital Solutions",
          "Growth Financing",
          "Structured Financing",
          "Project Financing",
          "Special Situation Financing",
        ],
      },
      {
        number: "[02]",
        title: "Private Equity & Growth Capital",
        description:
          "We partner with founders, promoters, family-owned businesses, and growth-stage companies seeking strategic capital to scale operations, enter new markets, strengthen capabilities, and pursue transformational opportunities.",
      },
      {
        number: "[03]",
        title: "Equity Capital Markets",
        description:
          "We assist businesses in accessing public and private capital markets through a range of capital-raising and liquidity solutions designed to support growth and shareholder objectives.",
        solutions: [
          "Initial Public Offerings (IPOs)",
          "SME IPOs",
          "Follow-On Public Offerings (FPOs)",
          "Qualified Institutional Placements (QIPs)",
          "Preferential Issues",
          "Rights Issues",
          "Private Placements",
          "Offer For Sale (OFS)",
          "Block Transactions",
          "Stake Monetization Strategies",
        ],
      },
    ],
  },
  {
    id: "strategic-transactions",
    label: "Strategic Transactions",
    heroImage: "/capabilities/hero-strategic-transactions.jpg",
    quote:
      "Every transaction is a strategic move. Like a game of chess, successful outcomes depend on foresight, positioning, and the ability to anticipate what comes next before others do.",
    title: "Strategic Transactions",
    subtitle: "When the next move defines what's next.",
    body: "Strategic transactions play a critical role in shaping the future direction of a business. SkyBridge advises businesses, promoters, and investors on opportunities that enhance scale, strengthen market position, and create long-term value.",
    cards: [
      {
        number: "[01]",
        title: "Mergers, Acquisitions & Takeovers",
        description:
          "We support strategic transactions that enable businesses to expand capabilities, enter new markets, consolidate industries, and unlock growth opportunities.",
        solutions: [
          "Business Acquisitions",
          "Corporate Takeovers",
          "Strategic Investments",
          "Buyouts",
          "Cross-Border Transactions",
          "Strategic Divestments",
          "Industry Consolidation Opportunities",
        ],
      },
      {
        number: "[02]",
        title: "Strategic Joint Ventures",
        description:
          "We help structure strategic alliances between businesses, promoters, investors, and corporations to pursue high-potential opportunities.",
        extraParagraph:
          "These partnerships combine capital, expertise, relationships, and execution capabilities to create scalable growth platforms.",
      },
      {
        number: "[03]",
        title: "Consortium Investments",
        description:
          "We participate in consortium-led investment opportunities alongside leading financial and strategic investors, enabling participation in larger and more complex transactions.",
        extraParagraph: "Consortium Participants May Include",
        solutions: [
          "Private Equity Funds",
          "Family Offices",
          "Institutional Investors",
          "Strategic Investors",
          "Corporate Groups",
        ],
      },
    ],
  },
  {
    id: "restructuring-turnaround",
    label: "Restructuring & Turnaround",
    heroImage: "/capabilities/hero-restructuring.jpg",
    quote:
      "A single strategic intervention can change the course of an entire business. The redirected dominoes represent our ability to help organisations reset momentum, strengthen foundations, and build a more sustainable path forward.",
    title: "Restructuring & Turnaround",
    subtitle: "Repositioning businesses for sustainable growth.",
    body: "Businesses often face periods that require strategic, operational, or financial transformation. SkyBridge works with businesses to strengthen performance, optimize capital structures, and enhance long-term shareholder value.",
    cards: [
      {
        number: "[01]",
        title: "Business & Capital Restructuring",
        description:
          "Our restructuring solutions are designed to help businesses improve financial strength, operational effectiveness, and overall enterprise value.",
        solutions: [
          "Business Restructuring",
          "Capital Restructuring",
          "Debt Rationalization",
          "Operational Transformation",
          "Turnaround Strategies",
          "Value Creation Initiatives",
        ],
      },
    ],
  },
  {
    id: "cross-border-advisory",
    label: "Cross-Border Advisory",
    heroImage: "/capabilities/hero-cross-border.jpg",
    quote:
      "Migration reflects the pursuit of new opportunities beyond existing boundaries. The image represents how businesses navigate international markets, partnerships, and investment opportunities while adapting to new environments and growth possibilities.",
    title: "Cross-Border Advisory",
    subtitle: "Capital without borders",
    body: "As businesses expand beyond domestic markets, access to the right capital, partnerships, and investment structures becomes increasingly important. SkyBridge supports both inbound and outbound investment opportunities across geographies.",
    cards: [
      {
        number: "[01]",
        title: "Foreign Direct Investment (FDI) & Overseas Direct Investment (ODI)",
        description:
          "We facilitate domestic and international investment opportunities through strategic advisory and cross-border transaction support.",
        solutions: [
          "Inbound Investments into India",
          "Cross-Border Partnerships",
          "Global Capital Deployment",
          "Overseas Expansion Strategies",
          "International Joint Ventures",
        ],
      },
    ],
  },
  {
    id: "joint-ventures-consortiums",
    label: "Joint Ventures & Consortiums",
    heroImage: "/capabilities/hero-joint-ventures.jpg",
    quote:
      "The converging pathways symbolize the coming together of complementary strengths, shared objectives, and strategic partnerships. Much like successful joint ventures and consortium investments, meaningful outcomes are created when multiple stakeholders align around a common vision and opportunity.",
    title: "Joint Ventures & Consortiums",
    subtitle: "Bringing the right partners together.",
    body: "We works with promoters, investors, corporations, and institutions to create collaborative structures that combine capital, expertise, and strategic alignment.",
    cards: [
      {
        number: "[01]",
        title: "Joint Ventures & Co-Investments",
        description:
          "Through strategic partnerships and co-investment structures, SkyBridge collaborates with promoters, institutions, corporations, and investors to pursue opportunities across sectors and geographies.",
      },
      {
        number: "[02]",
        title: "Consortium Investments",
        description:
          "The consortium model enables participation in larger opportunities while leveraging collective expertise, relationships, and resources from multiple investment partners.",
      },
    ],
  },
];
