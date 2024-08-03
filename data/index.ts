
export const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Work", link: "#work-experience" },
    { name: "Projects", link: "#projects" },
    { name: "Approach", link: "#approach" },
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
      title: "Currently building a JS Animation library",
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
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
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
      icon: '/work-experience/starbucks.png',
      iconBg: "#383E56",
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
      icon: '/work-experience/tesla.png',
      iconBg: "#E6DEDD",
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
      icon: '/work-experience/shopify.png',
      iconBg: "#383E56",
      date: "May 2022 - November 2022",
      points: [
        "Collaborated with the CTO to strategize the development roadmap for the web-platform for an AI company specialized in generative AI systems for building architecture design.",
        "Cooperated with a team of 3 developers to execute the product features for the web-platform using React, MongoDB, AWS Cloud, Node.js, and Vercel.",
        "Efficiently deployed the web-platform to +10,000 users, producing $5,000/month in revenue.",
      ],
    },
    {
      id: 4,
      title: "Digital Marketer & Business Development Manager",
      company_name: "BUTR Inc.",
      icon: '/work-experience/meta.png',
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Supervised a team of Business Developers and led efforts to gather ad creatives from social media influencers for our clients.",
        "Developed and executed a data-driven digital marketing strategy through paid ads channels for our clients, utilizing over $2,200,000 to attain a CPI of $0.75 and CPFT of $16.",
        "Contributed to the development of an in-house CRM system. Collaborated with product manager and developers to design and implement new features.",
        "Analyzed campaign performance and presented findings to senior management.",
      ],
    },  
  ];
  
  export const technologies = [  {
    name: "HTML 5",
    icon: '/technologies/html.png',
  },
  {
    name: "CSS 3",
    icon: '/technologies/css.png',
  },
  {
    name: "JavaScript",
    icon: '/technologies/javascript.png',
  },
  {
    name: "TypeScript",
    icon: '/technologies/typescript.png',
  },
  {
    name: "React JS",
    icon: '/technologies/reactjs.png',
  },
  {
    name: "Redux Toolkit",
    icon: '/technologies/redux.png',
  },
  {
    name: "Tailwind CSS",
    icon: '/technologies/tailwind.png',
  },
  {
    name: "Node JS",
    icon: '/technologies/nodejs.png',
  },
  {
    name: "MongoDB",
    icon: '/technologies/mongodb.png',
  },
  {
    name: "Three JS",
    icon: '/technologies/threejs.svg',
  },
  {
    name: "git",
    icon: '/technologies/git.png',
  },
  {
    name: "figma",
    icon: '/technologies/figma.png',
  },
  {
    name: "docker",
    icon: '/technologies/docker.png',
  },
]
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: 'https://github.com/2015jtw'
    },
    {
      id: 3,
      img: "/link.svg",
      link: 'https://www.linkedin.com/in/josh-worden/'
    },
    {
      id: 2,
      img: "/twit.svg",
      link: 'https://x.com/Josh92077308'
    },
  ];