import { v4 as uuidv4 } from "uuid";

export const navItems = [
  { name: "Freelance", link: "#freelance" },
  { name: "Projects", link: "#projects" },
  { name: "Work", link: "#work-experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning the T3 Stack",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const freelanceProjects = [
  {
    id: uuidv4(),
    title: "Martii",
    pinTitle: "Martii",
    desc: "Built a high-performance Next.js website with Sanity.io CMS to showcase ESG advisory and grant writing services, featuring branded visuals and optimized content delivery.",
    img: "/martii.png",
    iconLists: [
      "/nextjs.svg",
      "/ts.svg",
      "/sanity.svg",
      "/tailwind.svg",
      "/shadcn.svg",
    ],
    link: "https://mtl-consultancy-nextjs.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "Thompson LLC",
    pinTitle: "Thompson LLC",
    desc: "Developed a high-performance Next.js platform showcasing the company's sustainable development and advisory services across economic growth, urban development, and international programs",
    img: "/thompson-llc.png",
    iconLists: [
      "/nextjs.svg",
      "/ts.svg",
      "/sanity.svg",
      "/tailwind.svg",
      "/shadcn.svg",
    ],
    link: "https://thompson-llc.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "Central Asia Tours GmbH",
    pinTitle: "Central Asia",
    desc: "Built a multilingual Next.js tourism platform for a leading Uzbekistan travel agency, featuring SEO-optimized city tours and an integrated booking system.",
    img: "/central-asia.png",
    iconLists: ["/nextjs.svg", "/ts.svg", "/tailwind.svg", "/shadcn.svg"],
    link: "https://www.centralasiatours.net/de",
  },
  {
    id: uuidv4(),
    title: "Resilient LLC",
    pinTitle: "Resilient LLC",
    desc: "Developed a headless WordPress website using NextJS for Resilient LLC, a consultancy group specializing in crisis management and business continuity.",
    img: "/resilient-llc.png",
    iconLists: [
      "/wordpress.svg",
      "/nextjs.svg",
      "/ts.svg",
      "/tailwind.svg",
      "/shadcn.svg",
    ],
    link: "https://resilient-demo-mu.vercel.app/",
  },
];

export const projects = [
  {
    id: uuidv4(),
    title: "Podcastr",
    pinTitle: "Podcastr",
    des: "Developed a podcast platform where users can listen to their favorite podcasts, view episode details, and interact with other users.",
    img: "/podcastr.png",
    iconLists: [
      "/nextjs.svg",
      "/tailwind.svg",
      "/convex.png",
      "/openai-white-logomark.png",
      "/clerk.png",
    ],
    link: "https://podcast-app-theta.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "EmojiChirp",
    pinTitle: "EmojiChirp",
    des: "Built a responsive and user-friendly Twitter clone where users can tweet emojis and hashtags, view their timeline, and interact with other users.",
    img: "/twitter-clone-final.png",
    iconLists: [
      "/nextjs.svg",
      "/tailwind.svg",
      "/drizzle-orm-logo.svg",
      "/ts.svg",
      "/shadcn.svg",
    ],
    link: "https://t3-twitterclone-indol.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "LuckyBet",
    pinTitle: "LuckyBet",
    des: "Developed a high-performance, scalable web application for an online betting platform, incorporating user authentication, online gambling games and user-friendly interfaces.",
    img: "/lucky-bet.png",
    iconLists: [
      "/nextjs.svg",
      "/ts.svg",
      "/styled-components.svg",
      "/nodejs.svg",
      "/firebase.svg",
    ],
    link: "https://luckybet-final.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "CampFinder",
    pinTitle: "CampFinder",
    des: "Constructed a secure full-stack application that empowers users to create campground instances, add descriptors such as location, images, price, and title to their respective campgrounds, and review other user's campgrounds.",
    img: "/campfinder.png",
    iconLists: ["/css.svg", "/mongodb.svg", "/nodejs.svg", "/expressjs.svg"],
    link: "https://campfinderjtw.onrender.com/",
  },
  {
    id: uuidv4(),
    title: "GarmentGrove",
    pinTitle: "GarmentGrove",
    des: "Architected and developed a full-stack React e-commerce application, providing users with the ability to conveniently browse and shop for products online, add items to their shopping cart, and easily process payments for their selections.",
    img: "/groove-garment.png",
    iconLists: ["/react.svg", "/scss.svg", "/redux.svg", "/stripe.svg"],
    link: "https://lambent-babka-6cd623.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Getricht Resto",
    pinTitle: "Getricht Resto",
    des: "Developed a fully-responsive SPA for a restaurant, incorporating a featured dish section, a menu section, and a booking section for customers to easily book tables.",
    img: "/getrict-resto.png",
    iconLists: ["/react.svg", "/scss.svg", "/figma.svg"],
    link: "https://eloquent-starship-b4cd67.netlify.app/",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Web Developer",
    company_name: "Arctic Leaf Inc.",
    icon: "/work-experience/arcticleaf-final.png",
    iconBg: "#E6DEDD",
    date: "July 2023 - August 2024",
    points: [
      "Developed E-Commerce websites for a number of the company’s clients.",
      "Developed reusable, customizable widgets for Shopify and BigCommerce.",
      "Contributed to the development and improvement of the proprietary BigCommerce theme.",
      "Collaborated with a team of UX/UI designers, account managers, and QA technicians to build sites.",
    ],
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company_name: "Self Employed",
    icon: "/work-experience/upwork-final.png",
    iconBg: "#65A30D",
    date: "January 2022 - Present",
    points: [
      "Central Asia Tours GmBH - Designed, developed and deployed a lightweight and visually appealing website to showcase travel packages and itineraries, ensuring an intuitive user experience.",
      "Resilient LLC - Developed a headless WordPress website using NextJS for a consultancy group specializing in crisis managment and business continuity.",
      "LuckyBet - Developed a high-performance, scalable web application for an online betting platform, incorporating user authentication, online gambling games and user-friendly interfaces.",
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company_name: "Maket",
    icon: "/work-experience/maket_ai_logo.jpeg",
    iconBg: "#000",
    date: "May 2022 - November 2022",
    points: [
      "Collaborated with the CTO to strategize the development roadmap for the web-platform for an AI company specialized in generative AI systems for building architecture design.",
      "Cooperated with a team of 3 developers to execute the product features for the web-platform using React, MongoDB, AWS Cloud, Node.js, and Vercel.",
      "Efficiently deployed the web-platform to +10,000 users, producing $5,000/month in revenue.",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing Manager",
    company_name: "BUTR Inc.",
    icon: "/work-experience/ampme-final.png",
    iconBg: "#22D3EE",
    date: "Jan 2023 - Present",
    points: [
      "Supervised a team of Business Developers and led efforts to gather ad creatives from social media influencers for our clients.",
      "Developed and executed a data-driven digital marketing strategy through paid ads channels for our clients, utilizing over $2,200,000 to attain a CPI of $0.75 and CPFT of $16.",
      "Contributed to the development of an in-house CRM system. Collaborated with product manager and developers to design and implement new features.",
      "Analyzed campaign performance and presented findings to senior management.",
    ],
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: "/technologies/html.png",
  },
  {
    name: "CSS 3",
    icon: "/technologies/css.png",
  },
  {
    name: "JavaScript",
    icon: "/technologies/javascript.png",
  },
  {
    name: "React",
    icon: "/technologies/reactjs.png",
  },
  {
    name: "NextJS",
    icon: "/technologies/nextjs.png",
  },
  {
    name: "TypeScript",
    icon: "/technologies/typescript.png",
  },

  {
    name: "Redux Toolkit",
    icon: "/technologies/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/technologies/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "/technologies/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/technologies/mongodb.png",
  },
  {
    name: "PostgreSQL",
    icon: "/technologies/postgres.png",
  },
  {
    name: "Three JS",
    icon: "/technologies/threejs.svg",
  },
  {
    name: "git",
    icon: "/technologies/git.png",
  },
  {
    name: "figma",
    icon: "/technologies/figma.png",
  },
  {
    name: "docker",
    icon: "/technologies/docker.png",
  },
  {
    name: "Sanity",
    icon: "/technologies/sanity.png",
  },
  {
    name: "OpenAI",
    icon: "/technologies/openai-logomark.png",
  },
  {
    name: "ShadCN",
    icon: "/technologies/shadcn.png",
  },
  {
    name: "Clerk",
    icon: "/technologies/clerk-logo-black.png",
  },
];

export const socialMedia = [
  {
    id: uuidv4(),
    img: "/git.svg",
    link: "https://github.com/2015jtw",
  },
  {
    id: uuidv4(),
    img: "/link.svg",
    link: "https://www.linkedin.com/in/josh-worden/",
  },
  {
    id: uuidv4(),
    img: "File",
    link: "/JoshuaWorden_Resume.pdf",
  },
];
