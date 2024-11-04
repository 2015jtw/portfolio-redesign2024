export const navItems = [
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

export const projects = [
  {
    id: 1,
    title: "CampFinder",
    des: "Constructed a secure full-stack application that empowers users to create campground instances, add descriptors such as location, images, price, and title to their respective campgrounds, and review other user's campgrounds.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://campfinderjtw.onrender.com/",
  },
  {
    id: 2,
    title: "GarmentGrove",
    des: "Architected and developed a full-stack React e-commerce application, providing users with the ability to conveniently browse and shop for products online, add items to their shopping cart, and easily process payments for their selections.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://lambent-babka-6cd623.netlify.app/",
  },
  {
    id: 3,
    title: "Getricht Resto",
    des: "Developed a fully-responsive SPA for a restaurant, incorporating a featured dish section, a menu section, and a booking section for customers to easily book tables.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://eloquent-starship-b4cd67.netlify.app/",
  },
  {
    id: 4,
    title: "EmojiChirp",
    des: "Built a responsive and user-friendly Twitter clone where users can tweet emojis and hashtags, view their timeline, and interact with other users.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
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
    name: "TypeScript",
    icon: "/technologies/typescript.png",
  },
  {
    name: "React JS",
    icon: "/technologies/reactjs.png",
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
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/2015jtw",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/josh-worden/",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Josh92077308",
  },
];
