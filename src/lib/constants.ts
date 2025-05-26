export const headers = [
	{
		title: "Home",
		link: "/",
		id: "home",
	},
	{
		title: "Book consultation",
		link: "/book-consultation",
		id: "book-consultation",
	},
	{
		title: "Contact us",
		link: "/contact-us",
		id: "contact-us",
	},
	{
		title: "About us",
		link: "/about-us",
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
		name: "Jenny Wilson",
		title: "CEO & Founder",
		id: "jenny",
		profilePic: "/team-1.png",
	},
	{
		name: "Guy Hawkins",
		title: "Business Analysis",
		id: "guy",
		profilePic: "/team-2.png",
	},
	{
		name: "Jack Manzi",
		title: "Marketing Advisor",
		id: "jack",
		profilePic: "/team-3.png",
	},
	{
		name: "Paradis Maurine",
		title: "Finance Director",
		id: "paradis",
		profilePic: "/team-4.png",
	},
	{
		name: "Mary Hawkins",
		title: "Business Analysis",
		id: "mary",
		profilePic: "/team-5.png",
	},
	{
		name: "Jenny Wilson",
		title: "Marketing Advisor",
		id: "marketing",
		profilePic: "/team-6.png",
	},
	{
		name: "Alida Raules",
		title: "Finance Director",
		id: "finance",
		profilePic: "/team-7.png",
	},
	{
		name: "Robert Fox",
		title: "Relationship Manager",
		id: "robert",
		profilePic: "/team-8.png",
	},
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
	location: "89 KG 14 Ave, Kigali",
	phone: "+250 788 447 599",
};
export const whys = ["Security and Privacy", "Expert Support", "Scalability and Flexibility", "Cost-Effective Solutions"];

export const testimonials = [
	{
		id: 1,
		rating: 5,
		quote: "Thanks to EarthLink Finance, I was able to get a salary advance when I needed it most. The process was quick and hassle-free",
		name: "Hilaire S",
		title: "Product Designer, Kigali",
		avatar: "/test-1.jpg?height=60&width=60",
	},
	{
		id: 2,
		rating: 5,
		quote: "The Buy Now, Pay Later feature allowed me to get the equipment I needed for my startup without breaking the bank. Highly recommended!",
		name: "Sarah L",
		title: "Founder, DigitalCrafts",
		avatar: "/test-2.png?height=60&width=60",
	},
	{
		id: 3,
		rating: 5,
		quote: "EarthLink Finance's saving tools have helped me reach my financial goals faster. The AI credit score feature is a game-changer!",
		name: "Emmanuel K",
		title: "Consultant, Nairobi",
		avatar: "/test-2.png?height=60&width=60",
	},
	{
		id: 4,
		rating: 5,
		quote: "EarthLink Finance's saving tools have helped me reach my financial goals faster. The AI credit score feature is a game-changer!",
		name: "Jane K",
		title: "Consultant, Nairobi",
		avatar: "/test-2.png?height=60&width=60",
	},
	{
		id: 5,
		rating: 5,
		quote: "EarthLink Finance's saving tools have helped me reach my financial goals faster. The AI credit score feature is a game-changer!",
		name: "John K",
		title: "Consultant, Nairobi",
		avatar: "/test-2.png?height=60&width=60",
	},
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
export const popularTags = ["Banking", "Data Analysis", "Finance", "Finance Advisor", "Investment", "Security", "Tax Consultancy"];
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
