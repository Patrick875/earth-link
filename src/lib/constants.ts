export const headers = [
	{
		title: "Home",
		link: "/",
		id: "home",
	},
	{
		title: "Our services",
		link: "#services",
		id: "services",
	},
	{
		title: "Our locations",
		link: "",
		id: "locations",
	},
	{
		title: "About us",
		link: "/about_us",
		id: "about-us",
	},
	{
		title: "Blog",
		link: "/blog",
		id: "blog",
	},
];

export const team = [
	{
		name: "Vianney",
		title: "CEO & Founder",
		id: "jenny",
		profilePic: "/ceo.e519777893be1e8470bc.jpg",
	},
	{
		name: "Michael Chen",
		title: "Chief Strategy Officer",
		id: "guy",
		profilePic: "/seo.89e1c63731a48bd8ad96.jpg",
	},
	{
		name: "Sarah Thompson",
		title: "Head of Global Partnerships",
		id: "jack",
		profilePic: "/emily.5bf04170eab15b6313c2.jpg",
	}
];

export const companyHeaders = [
	{
		title: "About us",
		link: "/about-us",
		id: "about-us",
	},
	{
		title: "Careers",
		link: "/careers",
		id: "careers",
	},
	{
		title: "News & Blog",
		link: "/blog",
		id: "blog",
	},
];

export const officeInfo = {
	email: "info@eathlingroup.com",
	location: "3355+79M CHIC Building, 1st Floor E046A2, Kigali",
	phone: "+250 788 447 599",
};

export const whys = [
	"Security and Privacy",
	"Expert Support",
	"Scalability and Flexibility",
	"Cost-Effective Solutions"
];

export const testimonials = [
	{
		id: 1,
		rating: 5,
		quote: "EarthLink Business transformed our international expansion strategy. Their comprehensive market research and strategic insights enabled us to successfully enter three new markets with minimal risk and maximum efficiency.",
		name: "Sarah Thompson",
		title: "CEO, Tech Innovations Inc. San Francisco, USA",
		avatar: "/sarah.a410cfd01622338628ae.jpg?height=60&width=60",
	},
	{
		id: 2,
		rating: 4,
		quote: "The cross-border consulting from EarthLink was a game-changer. They provided nuanced guidance that addressed our complex regulatory challenges and helped us optimize our international supply chain strategy.",
		name: "Miguel Rodriguez",
		title: "Founder, DigitalCrafts",
		avatar: "/miguel.jpg?height=60&width=60",
	},
	{
		id: 3,
		rating: 5,
		quote: "EarthLink's strategic partnership network was instrumental in our global expansion. Their deep understanding of international markets and connections opened doors we never thought possible, accelerating our growth exponentially.",
		name: "Emily Chen",
		title: "Founder, E-commerce Enterprises. Singapore",
		avatar: "/emily.5bf04170eab15b6313c2.jpg?height=60&width=60",
	}
];

export const blogPosts = [
	{
		id: 1,
		title: "Answering Your Questions About Automating Accounts",
		category: "Application",
		author: "admin",
		date: "July 5, 2024",
		image: "/blog-1.jpg",
		categoryColor: "bg-teal-500",
	},
	{
		id: 2,
		title: "Combining Graphic Brilliance with Technical Excellence",
		category: "Digital Marketing",
		author: "admin",
		date: "July 5, 2024",
		image: "/blog-2.jpg",
		categoryColor: "bg-blue-500",
		hasVideo: true,
	},
	{
		id: 3,
		title: "Affiliate Marketing: Channels, Strategies & Tips for 2024",
		category: "Online Marketing",
		author: "admin",
		date: "July 5, 2024",
		image: "/blog-3.jpg",
		categoryColor: "bg-green-500",
	},
	{
		id: 4,
		title: "How to find YouTube Influencers for Your Brand or Product",
		category: "Real Data Analysis",
		author: "admin",
		date: "July 5, 2024",
		image: "/blog-4.jpg",
		categoryColor: "bg-purple-500",
	},
	{
		id: 5,
		title: "Exploring the Opportunity of Live Shopping with TikTok",
		category: "Target Audience",
		author: "admin",
		date: "July 5, 2024",
		image: "/blog-5.jpg",
		categoryColor: "bg-orange-500",
	},
	{
		id: 6,
		title: "Want Happy Accounting Clients? These Strategies Will Help You",
		category: "Digital Marketing",
		author: "admin",
		date: "July 5, 2024",
		image: "/blog-6.jpg",
		categoryColor: "bg-blue-500",
	},
];

export const categories = [
	{ name: "Application", count: 1 },
	{ name: "Digital Marketing", count: 4 },
	{ name: "Online Marketing", count: 1 },
	{ name: "Real Data Analysis", count: 1 },
	{ name: "Target Audience", count: 1 },
];

export const popularTags = [
	"Banking",
	"Data Analysis",
	"Finance",
	"Finance Advisor",
	"Investment",
	"Security",
	"Tax Consultancy"
];

export const fadeInUp = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const staggerContainer = {
	hidden: { opacity: 0, y: 40 },
	show: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

export const fadeInUpContainer = {
	hidden: { opacity: 0, y: 20, scale: 0.95 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			duration: 0.6,
			bounce: 0.3,
			ease: "easeOut",
		},
	},
};

export const locations = [
	{
		country: "Senegal",
		link:"https://senegal.earthlinkgroup.com/",
		city: "Dakar",
		description: "A strategic West African market with a growing digital economy and stable business environment.",
		icon: "fi fi-sn",
		fundSize: "USD 322M",
		gdp: "USD 24.5B",
		economicLandscape: "Diverse economy with strong agriculture, services, and emerging tech sectors.",
		industries: [
			"Telecommunications",
			"Agriculture",
			"Fishing",
			"Tourism"
		],
		opportunities: [
			"Digital Banking Solutions",
			"Agritech Innovations",
			"Smart City Development",
			"E-commerce Platforms"
		],
		email: "info@earthlinkgroup.com",
		phone: "+250 788 447 599",
	},
	{
		country: "Tanzania",
		link: "#",
		city: "Dar es Salaam",
		description: "East African powerhouse with significant digital growth potential and diverse market opportunities.",
		icon: "fi fi-tz",
		fundSize: "USD 480M",
		gdp: "USD 67.8B",
		economicLandscape: "Rapidly growing economy with strengths in agriculture, mining, and tourism.",
		industries: [
			"Mining",
			"Agriculture",
			"Tourism",
			"Telecommunications"
		],
		opportunities: [
			"Fintech Expansion",
			"Agro-processing",
			"Tourism Tech",
			"Mobile Services"
		],
		email: "info@earthlinkgroup.com",
		phone: "+250 788 447 599",
	},
	{
		country: "Angola",
		link: "#",
		city: "Luanda",
		description: "Resource-rich nation with growing focus on digital transformation and economic diversification.",
		icon: "fi fi-ao",
		fundSize: "USD 620M",
		gdp: "USD 74.6B",
		economicLandscape: "Oil-driven economy diversifying into agriculture, construction, and technology.",
		industries: [
			"Oil & Gas",
			"Construction",
			"Telecommunications",
			"Agriculture"
		],
		opportunities: [
			"Digital Infrastructure",
			"AgriTech",
			"Energy Tech",
			"Smart Logistics"
		],
		email: "info@earthlinkgroup.com",
		phone: "+250 788 447 599",
	},
	{
		country: "Mozambique",
		link: "#",
		city: "Maputo",
		description: "Emerging market with significant potential in digital services and infrastructure development.",
		icon: "fi fi-mz",
		fundSize: "USD 510M",
		gdp: "USD 17.8B",
		economicLandscape: "Developing economy with focus on natural resources, agriculture, and services.",
		industries: [
			"Natural Gas",
			"Agriculture",
			"Tourism",
			"Telecommunications"
		],
		opportunities: [
			"Digital Banking",
			"Infrastructure Tech",
			"Tourism Platforms",
			"AgriTech"
		],
		email: "info@earthlinkgroup.com",
		phone: "+250 788 447 599",
	},
	{
		country: "Zambia",
		link: "#",
		city: "Lusaka",
		description: "Central African nation with growing tech adoption and digital transformation initiatives.",
		icon: "fi fi-zm",
		fundSize: "USD 322M",
		gdp: "USD 29.2B",
		economicLandscape: "Mining-based economy expanding into agriculture and services.",
		industries: [
			"Mining",
			"Agriculture",
			"Financial Services",
			"Telecommunications"
		],
		opportunities: [
			"Fintech",
			"AgriTech",
			"Digital Payments",
			"Smart Mining"
		],
		email: "info@earthlinkgroup.com",
		phone: "+250 788 447 599",
	},
	{
		country: "Liberia",
		link: "#",
		city: "Monrovia",
		description: "Emerging West African market with growing potential for digital transformation.",
		icon: "fi fi-lr",
		fundSize: "USD 322M",
		gdp: "USD 3.5B",
		economicLandscape: "Resource-based economy with increasing focus on services and technology.",
		industries: [
			"Mining",
			"Agriculture",
			"Telecommunications",
			"Shipping"
		],
		opportunities: [
			"Digital Services",
			"AgriTech",
			"Shipping Tech",
			"Mobile Banking"
		],
		email: "info@earthlinkgroup.com",
		phone: "+250 788 447 599",
	},
	{
		country: "Gabon",
		link: "#",
		city: "Libreville",
		description: "Resource-rich nation pursuing digital transformation and economic diversification.",
		icon: "fi fi-ga",
		fundSize: "USD 322M",
		gdp: "USD 21.1B",
		economicLandscape: "Oil-based economy diversifying into services and digital sectors.",
		industries: [
			"Oil & Gas",
			"Forestry",
			"Telecommunications",
			"Services"
		],
		opportunities: [
			"Digital Infrastructure",
			"Smart Forestry",
			"Fintech",
			"E-commerce"
		],
		email: "info@earthlinkgroup.com",
		phone: "+250 788 447 599",
	},
	{
		country: "Rwanda",
		link: "#",
		city: "Kigali",
		description: "A leading African tech hub known for its rapid digital transformation and innovation-friendly environment.",
		icon: "fi fi-rw",
		fundSize: "USD 480M",
		gdp: "USD 13.3B",
		economicLandscape: "Service-driven economy with strong ICT, tourism, and agriculture sectors.",
		industries: [
			"Information Technology",
			"Tourism",
			"Agriculture",
			"Financial Services"
		],
		opportunities: [
			"Fintech",
			"Smart City Solutions",
			"AgriTech",
			"Tourism Tech"
		],
		email: "info@earthlinkgroup.com",
		phone: "+250 788 447 599",
	}
];

export const services = [
	{
		id: 'registration',
		title: 'Company formation/registration',
		short_description: 'We simplify the process of establishing a business in new markets by handling company registration, structuring governance, and ensuring regulatory compliance.',
		long_description: {
			p1: 'Our services include conducting due diligence to assess risks, facilitating business setup and licensing, providing resident director and national shareholder services for foreign investors, and assisting with corporate bank account openings to ensure smooth financial operations.',
			p2: 'We ensure that your business is compliant with local laws and regulations, allowing you to focus on your core operations while we take care of the administrative and legal aspects of company formation.',
		},
		keyBenefits: [
			'Due diligence',
			'Business set up',
			'Resident director services',
			'National shareholder services'
		],
		cardImage: '/registration.jpg'
	},
	{
		id: 'advisory',
		title: 'Corporate advisory services',
		short_description: 'We provide expert advisory solutions to support international business expansion, ensuring compliance, efficiency, and strategic business growth.',
		long_description: {
			p1: 'Our corporate advisory services include market entry strategies, regulatory compliance, risk management, and operational efficiency improvements to help businesses thrive in new markets.',
			p2: 'We leverage our expertise to provide tailored solutions that address the unique challenges of international business operations, ensuring that your company is well-positioned for success in a competitive global landscape.'
		},
		keyBenefits: [
			'Market entry strategies',
			'Regulatory compliance',
			'Risk management',
			'Operational efficiency improvements'
		],
		cardImage: '/service.jpg'

	},
	{
		id: 'support',
		title: 'Business support services',
		short_description: 'Our business support solutions enhance efficiency and competitiveness, enabling companies to successfully focus on their core operation and enter new markets.',
		long_description: {
			p1: 'We offer a range of support services including administrative assistance, IT solutions, and operational management to streamline business processes and enhance productivity.',
			p2: 'Our team of experts provides tailored solutions to meet the specific needs of your business, ensuring that you have the necessary support to thrive in a dynamic and competitive environment.'
		},
		keyBenefits: [
			'Administrative assistance',
			'IT solutions',
			'Operational management',
			'Streamlined business processes'
		],
		cardImage: '/business.jpg'

	},
	{
		id: 'partnerships',
		title: 'Strategic partnerships',
		short_description: 'We facilitate high-value connections between businesses, government entities, and industry leaders, fostering strategic collaborations that drive growth and market expansion.',
		long_description: {
			p1: 'Our strategic partnerships services include identifying potential partners, negotiating agreements, and managing relationships to create synergies that enhance business opportunities and market reach.',
			p2: 'We leverage our extensive network to connect businesses with key stakeholders, ensuring mutually beneficial collaborations that drive innovation and growth.'
		},
		keyBenefits: [
			'Identifying potential partners',
			'Negotiating agreements',
			'Managing relationships',
			'Creating synergies'
		],
		cardImage: '/strategy.jpg'
	},
	{
		id: 'investment',
		title: 'Financial and investment services',
		short_description: 'Our expert financial services provide businesses with the stability and insights needed to optimize resources, manage risks, and drive long-term profitability in dynamic global markets.',
		long_description: {
			p1: 'We offer comprehensive financial services including investment advisory, risk management, and financial planning to help businesses achieve their financial goals and navigate complex market environments.',
			p2: 'Our team of financial experts provides tailored solutions to optimize resource allocation, manage risks, and enhance overall financial performance.'
		},
		keyBenefits: [
			'Investment advisory',
			'Risk management',
			'Financial planning',
			'Resource optimization'
		],
		cardImage: '/financial.jpg'

	},
	{
		id: 'tour',
		title: 'Business tour services',
		short_description: 'We curate seamless business travel experiences, handling logistics, documentation, and planning to help professionals explore new opportunities with ease and confidence.',
		long_description: {
			p1: 'Our business tour services include travel planning, visa assistance, and on-ground support to ensure a smooth and productive travel experience for business professionals exploring new markets.',
			p2: 'We handle all aspects of business travel, from itinerary planning to local support, allowing professionals to focus on their core business activities while we take care of the logistics.'
		},
		keyBenefits: [
			'Travel planning',
			'Visa assistance',
			'On-ground support',
			'Seamless travel experiences'
		],
		cardImage: '/tour.jpg'
	}
];

export const expansions = [
	{
		id: 'total',
		numerical: '322M',
		target: 16,
		title: 'West Africa',
	},
	{
		id: 'total-2',
		numerical: '480M',
		target: 18,
		title: 'East Africa',
	},
	{
		id: 'funding-2',
		numerical: '620M',
		target: 5,
		title: 'Southern Africa',

	},
	{
		id: 'round',
		numerical: '510M',
		target: 9,
		title: 'Central Africa',
	},

]
