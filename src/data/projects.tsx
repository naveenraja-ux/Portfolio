import React from "react";
import { 
  Layout, 
  Smartphone, 
  Zap, 
  MousePointer2, 
  Activity, 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  BarChart3, 
  Gamepad2, 
  Users, 
  Trophy, 
  HeartPulse, 
  Stethoscope, 
  Apple, 
  MapPin, 
  MessageSquare, 
  Compass 
} from "lucide-react";

export interface CaseStudy {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    visual: string;
  };
  overview: {
    text: string;
    role: string;
    responsibilities: string[];
  };
  problem: {
    points: string[];
  };
  insights: {
    points: string[];
    highlight: string;
  };
  challenges: string[];
  solution: {
    items: { title: string; desc: string }[];
  };
  process: string[];
  impact: { label: string; value: string }[];
  outcome: string[];
  learnings: string[];
  visuals?: {
    icon: React.ReactNode;
    label: string;
    description: string;
  }[];
  uiShowcase?: {
    image: string;
    title: string;
    description: string;
  }[];
  finalSheet?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  type: string;
  tags: string[];
  color: string;
  brandColor?: string;
  icon: React.ReactNode;
  image: string;
  liveUrl?: string;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: "domain-markt",
    title: "Domain Markt",
    category: "Marketplace",
    type: "Web App",
    tags: ["Dashboard UI", "UX Flow"],
    color: "from-[#7A50A2]/20 to-[#7A50A2]/10",
    brandColor: "#7A50A2",
    icon: <Layout className="text-[#7A50A2]" />,
    image: "https://image2url.com/r2/default/images/1775313176070-8dd655d5-d2a4-4485-9d13-6fdb7996deb2.png",
    liveUrl: "https://dev.domainmarkt.io/",
    caseStudy: {
      hero: {
        title: "Domain Markt",
        subtitle: "A Premium Marketplace for Digital Assets",
        description: "Domain Markt is a specialized platform designed to streamline the acquisition and divestment of high-value domain names, providing a secure and transparent environment for global investors.",
        visual: "https://image2url.com/r2/default/images/1775313176070-8dd655d5-d2a4-4485-9d13-6fdb7996deb2.png"
      },
      overview: {
        text: "The project aimed to transform a fragmented domain trading landscape into a cohesive, user-centric marketplace. By focusing on trust, speed, and data-driven insights, we developed a platform that serves both individual collectors and enterprise-level domain brokers.",
        role: "Lead UI/UX Designer",
        responsibilities: [
          "End-to-end UX Strategy",
          "Information Architecture",
          "High-Fidelity UI Design",
          "Interactive Prototyping",
          "Design System Development"
        ]
      },
      problem: {
        points: [
          "Market Fragmentation: The domain secondary market was divided across numerous platforms, each with disparate verification standards and user interfaces, leading to a lack of centralized trust.",
          "Inefficient Workflows: Portfolio managers faced significant overhead due to manual listing processes, lack of bulk editing tools, and slow DNS verification cycles.",
          "Information Asymmetry: Prospective buyers lacked access to historical valuation data and traffic analytics, making informed purchasing decisions difficult and risky."
        ]
      },
      insights: {
        points: [
          "Transactional Integrity: For high-value digital assets, the perception of security is as important as the security itself.",
          "Operational Scalability: Professional sellers prioritize tools that minimize 'time-to-list' and automate repetitive verification tasks.",
          "Data-Driven Discovery: Buyers are more likely to convert when presented with clear, verifiable performance metrics alongside domain listings."
        ],
        highlight: "Bridging the gap between complex asset management and intuitive marketplace discovery."
      },
      challenges: [
        "Integrating real-time DNS verification services.",
        "Developing a secure escrow-style payment flow.",
        "Ensuring seamless performance with large domain databases.",
        "Creating a balanced UI that appeals to both tech-savvy and non-technical users."
      ],
      solution: {
        items: [
          { title: "Unified Dashboard", desc: "A centralized hub for sellers to manage listings, track performance, and respond to offers in real-time." },
          { title: "Smart Search Engine", desc: "Advanced filtering and AI-powered suggestions to help buyers find the perfect domain quickly." },
          { title: "Secure Escrow Integration", desc: "A transparent, multi-step transaction process that protects both parties during the transfer." },
          { title: "Portfolio Analytics", desc: "Detailed insights into domain traffic, valuation trends, and market demand." }
        ]
      },
      process: [
        "Stakeholder Interviews",
        "User Persona Mapping",
        "Wireframe Iteration",
        "Visual Design Phase",
        "Usability Testing",
        "Developer Handoff"
      ],
      impact: [
        { label: "Transaction Speed", value: "60%" },
        { label: "User Trust Score", value: "95%" },
        { label: "Portfolio Growth", value: "2.5x" },
        { label: "Search Efficiency", value: "45%" }
      ],
      outcome: [
        "Successfully launched a market-leading platform that redefined domain trading standards.",
        "Achieved significant growth in both user acquisition and high-value listings within the first quarter."
      ],
      learnings: [
        "The critical importance of security-first design in fintech-adjacent platforms.",
        "How to balance data density with visual clarity in complex dashboards.",
        "The value of iterative testing with real-world domain brokers."
      ],
      visuals: [
        {
          icon: <Globe />,
          label: "Global Reach",
          description: "Connecting buyers and sellers across 150+ countries with localized support."
        },
        {
          icon: <ShieldCheck />,
          label: "Secure Escrow",
          description: "Proprietary multi-step verification system ensuring 100% transaction safety."
        },
        {
          icon: <Zap />,
          label: "Instant Verification",
          description: "Real-time DNS ownership checks reducing listing time from days to minutes."
        }
      ],
      uiShowcase: [
        {
          image: "https://image2url.com/r2/default/images/1775371417494-c40d94e5-c505-43ac-bb99-a9cfb79ba90b.png",
          title: "Professional Dashboard",
          description: "A comprehensive command center for domain brokers, featuring real-time portfolio analytics, offer management, and automated verification status. The interface prioritizes data density while maintaining visual clarity."
        },
        {
          image: "https://image2url.com/r2/default/images/1775372598066-2acd8c1d-b0e5-4b33-94ab-45fb33023447.png",
          title: "Asset Management Interface",
          description: "Detailed view of individual domain assets, showing historical performance, traffic sources, and integrated valuation tools. Designed for deep-dive analysis and quick decision making."
        }
      ]
    }
  },
  {
    slug: "hobby-mate",
    title: "HobbyMate",
    category: "Social Discovery",
    type: "Mobile App",
    tags: ["Social UX", "Clean UI"],
    color: "from-pink-500/20 to-rose-500/20",
    brandColor: "#ec4899",
    icon: <Smartphone className="text-pink-400" />,
    image: "https://image2url.com/r2/default/images/1775313145903-e8f8e40c-0f4c-46b1-b396-608b25f30851.png",
    liveUrl: "https://hobbymate.in/",
    caseStudy: {
      hero: {
        title: "HobbyMate",
        subtitle: "Find Your Perfect Hobby Partner",
        description: "Connecting people through shared interests and local hobby communities.",
        visual: "https://image2url.com/r2/default/images/1775313145903-e8f8e40c-0f4c-46b1-b396-608b25f30851.png"
      },
      overview: {
        text: "HobbyMate is a social discovery app that helps users find local partners for any hobby, from hiking to coding.",
        role: "UI/UX Designer",
        responsibilities: ["User Research", "Prototyping", "Visual Design", "Branding"]
      },
      problem: {
        points: [
          "People struggle to find partners for niche hobbies.",
          "Safety concerns when meeting strangers from the internet.",
          "Lack of local community engagement for hobbies."
        ]
      },
      insights: {
        points: [
          "Shared interests are the strongest social bond",
          "Safety features are essential for social apps",
          "Local proximity drives real-world meetups"
        ],
        highlight: "Life is better with a mate"
      },
      challenges: [
        "Building a safe and verified user base",
        "Designing an intuitive discovery algorithm",
        "Creating a playful yet trustworthy brand",
        "Scaling local communities across cities"
      ],
      solution: {
        items: [
          { title: "Interest Matching", desc: "Swipe-based discovery for hobby partners based on proximity." },
          { title: "Verified Profiles", desc: "Multi-step verification to ensure community safety." },
          { title: "Hobby Groups", desc: "Local chat groups for organizing meetups and events." },
          { title: "Skill Levels", desc: "Filter partners by experience level for a better match." }
        ]
      },
      process: ["Market Analysis", "User Interviews", "Sketching", "Prototyping", "Testing"],
      impact: [
        { label: "Matches", value: "2M+" },
        { label: "Active Cities", value: "50+" },
        { label: "Safety Score", value: "99%" },
        { label: "Growth", value: "Viral" }
      ],
      outcome: [
        "Created the #1 app for hobby-based social discovery",
        "Fostered thousands of real-world friendships and communities"
      ],
      learnings: [
        "Social UX design patterns",
        "Designing for safety and trust",
        "Viral growth mechanics"
      ],
      visuals: [
        {
          icon: <MapPin />,
          label: "Local Discovery",
          description: "Hyper-local matching to find hobby partners in your immediate area."
        },
        {
          icon: <MessageSquare />,
          label: "Instant Connect",
          description: "Secure, real-time messaging to organize meetups and share interests."
        },
        {
          icon: <Compass />,
          label: "Explore Interests",
          description: "Discover new hobbies and communities with curated local suggestions."
        }
      ],
      uiShowcase: [
        {
          image: "https://image2url.com/r2/default/images/1775459392931-7209c022-8cb1-4ef7-8893-c35069ed0c90.png",
          title: "HobbyMate Interface",
          description: "A clean and engaging social interface designed to facilitate easy discovery and connection based on shared passions."
        }
      ]
    }
  },
  {
    slug: "power-of-volatility",
    title: "PowerOfVolatility",
    category: "Fintech",
    type: "Dashboard",
    tags: ["Data Visualization", "Trading UI"],
    color: "from-emerald-500/20 to-teal-500/20",
    brandColor: "#10b981",
    icon: <Zap className="text-emerald-400" />,
    image: "https://image2url.com/r2/default/images/1775313098662-d38bbd7e-301e-490e-9058-8aeea10ea5a8.png",
    liveUrl: "https://powerofvolatility.com/",
    caseStudy: {
      hero: {
        title: "PowerOfVolatility",
        subtitle: "Advanced Trading Analytics & Visualization",
        description: "Empowering traders with real-time volatility insights and data-driven decision making tools.",
        visual: "https://image2url.com/r2/default/images/1775313098662-d38bbd7e-301e-490e-9058-8aeea10ea5a8.png"
      },
      overview: {
        text: "PowerOfVolatility is a high-performance fintech dashboard designed for professional traders to monitor market fluctuations.",
        role: "Lead UI Designer",
        responsibilities: ["Data Visualization", "Dashboard Architecture", "Component Library", "User Research"]
      },
      problem: {
        points: [
          "Traders were overwhelmed by raw, unorganized market data.",
          "Lack of visual clarity in high-frequency trading environments.",
          "Delayed response times due to complex navigation."
        ]
      },
      insights: {
        points: [
          "Visual patterns are recognized 60,000x faster than text",
          "Traders prioritize speed over aesthetic complexity",
          "Real-time updates are non-negotiable for trust"
        ],
        highlight: "Clarity is the ultimate currency in trading"
      },
      challenges: [
        "Rendering large datasets in real-time",
        "Maintaining high contrast for long sessions",
        "Complex mathematical chart integration",
        "Mobile responsiveness for on-the-go monitoring"
      ],
      solution: {
        items: [
          { title: "Dynamic Heatmaps", desc: "Instant visual representation of market volatility across sectors." },
          { title: "Custom Charting", desc: "High-performance SVG/Canvas charts with interactive overlays." },
          { title: "One-Click Actions", desc: "Streamlined trading execution directly from visual data points." },
          { title: "Alert System", desc: "Intelligent notification engine based on volatility thresholds." }
        ]
      },
      process: ["Market Research", "Data Mapping", "Prototyping", "Performance Testing", "Final Polish"],
      impact: [
        { label: "Decision Speed", value: "2x" },
        { label: "User Retention", value: "85%" },
        { label: "Data Accuracy", value: "100%" },
        { label: "Load Time", value: "<100ms" }
      ],
      outcome: [
        "Created a market-leading analytics tool for professional traders",
        "Reduced cognitive load by 50% through visual hierarchy"
      ],
      learnings: [
        "Performance-first design principles",
        "Advanced data visualization techniques",
        "User psychology in high-stress environments"
      ],
      visuals: [
        {
          icon: <TrendingUp />,
          label: "Real-time Edge",
          description: "Sub-millisecond data processing for high-frequency trading insights."
        },
        {
          icon: <Activity />,
          label: "Volatility Heatmaps",
          description: "Proprietary visual algorithms to spot market opportunities instantly."
        },
        {
          icon: <BarChart3 />,
          label: "Smart Analytics",
          description: "Advanced predictive modeling integrated directly into the trading UI."
        }
      ],
      uiShowcase: [
        {
          image: "https://image2url.com/r2/default/images/1775459190427-79894e3d-31c9-4f36-af43-dbfa3a40ed21.png",
          title: "Home Page Design",
          description: "A high-impact landing page designed to communicate the power and sophistication of the volatility analytics platform."
        },
        {
          image: "https://image2url.com/r2/default/images/1775459277747-dd4ec44f-4e12-43d9-bfe6-aa94fd61bc96.png",
          title: "Trading Dashboard",
          description: "A dark-themed, high-contrast dashboard optimized for professional traders, featuring real-time data visualization and intuitive controls."
        },
        {
          image: "https://image2url.com/r2/default/images/1775459306510-9acae6a7-bfd5-43e9-83b3-eae62f7981a9.png",
          title: "Analytics Interface",
          description: "Detailed analytics view providing deep insights into market volatility patterns and historical trends."
        }
      ]
    }
  },
  {
    slug: "play-zone",
    title: "PlayZone",
    category: "Gaming",
    type: "Mobile App",
    tags: ["Interaction Design", "Social Gaming"],
    color: "from-orange-500/20 to-amber-500/20",
    brandColor: "#f97316",
    icon: <MousePointer2 className="text-orange-400" />,
    image: "https://image2url.com/r2/default/images/1775368536803-ded1e5f4-d4fd-4a20-af20-cdb7d0e7de27.png",
    caseStudy: {
      hero: {
        title: "PlayZone",
        subtitle: "The Ultimate Social Gaming Experience",
        description: "Connecting gamers worldwide through a seamless, interactive social platform.",
        visual: "https://image2url.com/r2/default/images/1775368536803-ded1e5f4-d4fd-4a20-af20-cdb7d0e7de27.png"
      },
      overview: {
        text: "PlayZone is a mobile-first social platform that bridges the gap between casual gaming and social networking.",
        role: "Product Designer",
        responsibilities: ["UX Strategy", "Gamification", "Mobile UI"]
      },
      problem: {
        points: [
          "Gaming communities were fragmented across multiple apps.",
          "Finding compatible teammates was a tedious process."
        ]
      },
      insights: {
        points: [
          "Gamers value community as much as the game itself"
        ],
        highlight: "Gaming is better when shared"
      },
      challenges: [
        "Designing for diverse gaming demographics"
      ],
      solution: {
        items: [
          { title: "Social Hub", desc: "Centralized feed for sharing achievements, clips, and gaming news." }
        ]
      },
      process: ["Gamer Interviews", "UI Design"],
      impact: [
        { label: "Active Users", value: "1M+" }
      ],
      outcome: [
        "Built a thriving ecosystem for gamers"
      ],
      learnings: [
        "Gamification design patterns"
      ]
    }
  },
  {
    slug: "healthzy",
    title: "Healthzy",
    category: "Healthcare",
    type: "Mobile App",
    tags: ["Patient Portal", "Wellness Tracking"],
    color: "from-cyan-500/20 to-blue-500/20",
    brandColor: "#06b6d4",
    icon: <Activity className="text-cyan-400" />,
    image: "https://image2url.com/r2/default/images/1775368578872-5b7f56cb-7da0-4ca9-83a1-db5a71d88137.png",
    liveUrl: "https://healthzy.app/",
    caseStudy: {
      hero: {
        title: "Healthzy",
        subtitle: "Personalized Wellness & Health Tracking",
        description: "Empowering individuals to take control of their health through data and AI-driven insights.",
        visual: "https://image2url.com/r2/default/images/1775368578872-5b7f56cb-7da0-4ca9-83a1-db5a71d88137.png"
      },
      overview: {
        text: "Healthzy is a comprehensive wellness app that tracks vital signs, nutrition, and activity to provide personalized health advice.",
        role: "UX Researcher & Designer",
        responsibilities: ["User Research", "Visual Design"]
      },
      problem: {
        points: [
          "Health data was scattered across multiple devices and apps."
        ]
      },
      insights: {
        points: [
          "Users want simple, jargon-free health information"
        ],
        highlight: "Health is a journey, not a destination"
      },
      challenges: [
        "Designing for accessibility"
      ],
      solution: {
        items: [
          { title: "Health Score", desc: "A single, easy-to-understand metric representing overall wellness." }
        ]
      },
      process: ["User Surveys", "Wireframing"],
      impact: [
        { label: "User Health", value: "+30%" }
      ],
      outcome: [
        "Created a trusted companion for personal health management"
      ],
      learnings: [
        "Healthcare UX best practices"
      ]
    }
  }
];
