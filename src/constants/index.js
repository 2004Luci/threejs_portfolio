export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];
export const myProjects = [
  {
    title: 'Silver Email Finder',
    desc: 'Silver Email Finder is a tool designed to efficiently scan and extract all email addresses on any domain in a matter of minutes, thereby enhancing data accessibility and streamlining information retrieval.',
    subdesc:
      'Built as a unique and advanced email finder website with Next.js 14, Tailwind CSS, TypeScript, and JavaScript, Silver Email Finder is designed for optimal performance and scalability.',
    href: 'https://silvertouch.com',
    texture: '/textures/project/silvertouch.mp4',
    logo: '/assets/silvertouch.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
        href: "https://react.dev/"
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
        href: "https://tailwindcss.com/"
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
        href: "https://www.typescriptlang.org/"
      },
      {
        id: 4,
        name: 'JavaScript',
        path: '/assets/javascript.png',
        href: "https://www.oracle.com/developer/javascript/"
      }
    ],
  },
  {
    title: 'Zephora',
    desc: 'Zephora is a sleek and intuitive weather application that delivers real-time weather updates and detailed forecasts, enhancing your ability to plan and stay informed about atmospheric conditions.',
    subdesc: 'Crafted with modern web technologies, Zephora offers a responsive and user-friendly interface, ensuring seamless access to weather information across various devices.',
    href: 'https://zephora-rho.vercel.app/',
    texture: '/textures/project/zephora.mp4',
    logo: '/assets/zephora_logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
        href: "https://react.dev/"
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
        href: "https://tailwindcss.com/"
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
        href: "https://www.typescriptlang.org/"
      },
      {
        id: 4,
        name: 'JavaScript',
        path: '/assets/javascript.png',
        href: "https://www.oracle.com/developer/javascript/"
      },
      {
        id: 5,
        name: 'Shadcn/ui',
        path: '/assets/shadcn_ui.png',
        href: "https://ui.shadcn.com/"
      }
    ],
  },
  {
    title: 'FinSync',
    desc: 'FinSync is a modern, AI-powered finance web application designed to simplify personal financial management. It offers real-time insights, automated expense tracking, and intuitive budgeting tools, empowering users to make informed financial decisions effortlessly.',
    subdesc: 'Built with cutting-edge technologies like Next.js, Tailwind CSS, and integrated with Gemini AI, FinSync provides a seamless and responsive user experience across all devices. Its robust features, including multi-account management and personalized financial analytics, make it an essential tool for achieving financial clarity and control.',
    href: 'https://fin-sync.vercel.app/',
    texture: '/textures/project/zephora.mp4',
    logo: '/assets/finsync.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.webp',
        href: "https://nextjs.org/"
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
        href: "https://tailwindcss.com/"
      },
      {
        id: 3,
        name: 'Gemini AI',
        path: '/assets/gemini.png',
        href: "https://gemini.google.com/app"
      },
      {
        id: 4,
        name: 'Prisma',
        path: '/assets/prisma.png',
        href: "https://www.prisma.io/"
      },
      {
        id: 5,
        name: 'Shadcn/ui',
        path: '/assets/shadcn_ui.png',
        href: "https://ui.shadcn.com/"
      }
    ],
  },
]
// export const myProjects = [
//   {
//     title: 'Podcastr - AI Podcast Platform',
//     desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
//     subdesc:
//       'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
//     href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
//     texture: '/textures/project/project1.mp4',
//     logo: '/assets/project-logo1.png',
//     logoStyle: {
//       backgroundColor: '#2A1816',
//       border: '0.2px solid #36201D',
//       boxShadow: '0px 0px 60px 0px #AA3C304D',
//     },
//     spotlight: '/assets/spotlight1.png',
//     tags: [
//       {
//         id: 1,
//         name: 'React.js',
//         path: '/assets/react.svg',
//       },
//       {
//         id: 2,
//         name: 'TailwindCSS',
//         path: 'assets/tailwindcss.png',
//       },
//       {
//         id: 3,
//         name: 'TypeScript',
//         path: '/assets/typescript.png',
//       },
//       {
//         id: 4,
//         name: 'Framer Motion',
//         path: '/assets/framer.png',
//       },
//     ],
//   },
//   {
//     title: 'LiveDoc - Real-Time Google Docs Clone',
//     desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
//     subdesc:
//       'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
//     href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
//     texture: '/textures/project/project2.mp4',
//     logo: '/assets/project-logo2.png',
//     logoStyle: {
//       backgroundColor: '#13202F',
//       border: '0.2px solid #17293E',
//       boxShadow: '0px 0px 60px 0px #2F6DB54D',
//     },
//     spotlight: '/assets/spotlight2.png',
//     tags: [
//       {
//         id: 1,
//         name: 'React.js',
//         path: '/assets/react.svg',
//       },
//       {
//         id: 2,
//         name: 'TailwindCSS',
//         path: 'assets/tailwindcss.png',
//       },
//       {
//         id: 3,
//         name: 'TypeScript',
//         path: '/assets/typescript.png',
//       },
//       {
//         id: 4,
//         name: 'Framer Motion',
//         path: '/assets/framer.png',
//       },
//     ],
//   },
//   {
//     title: 'CarePulse - Health Management System',
//     desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
//     subdesc:
//       'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
//     href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
//     texture: '/textures/project/project3.mp4',
//     logo: '/assets/project-logo3.png',
//     logoStyle: {
//       backgroundColor: '#60f5a1',
//       background:
//         'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
//       border: '0.2px solid rgba(208, 213, 221, 1)',
//       boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
//     },
//     spotlight: '/assets/spotlight3.png',
//     tags: [
//       {
//         id: 1,
//         name: 'React.js',
//         path: '/assets/react.svg',
//       },
//       {
//         id: 2,
//         name: 'TailwindCSS',
//         path: 'assets/tailwindcss.png',
//       },
//       {
//         id: 3,
//         name: 'TypeScript',
//         path: '/assets/typescript.png',
//       },
//       {
//         id: 4,
//         name: 'Framer Motion',
//         path: '/assets/framer.png',
//       },
//     ],
//   },
//   {
//     title: 'Horizon - Online Banking Platform',
//     desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
//     subdesc:
//       'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
//     href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
//     texture: '/textures/project/project4.mp4',
//     logo: '/assets/project-logo4.png',
//     logoStyle: {
//       backgroundColor: '#0E1F38',
//       border: '0.2px solid #0E2D58',
//       boxShadow: '0px 0px 60px 0px #2F67B64D',
//     },
//     spotlight: '/assets/spotlight4.png',
//     tags: [
//       {
//         id: 1,
//         name: 'React.js',
//         path: '/assets/react.svg',
//       },
//       {
//         id: 2,
//         name: 'TailwindCSS',
//         path: 'assets/tailwindcss.png',
//       },
//       {
//         id: 3,
//         name: 'TypeScript',
//         path: '/assets/typescript.png',
//       },
//       {
//         id: 4,
//         name: 'Framer Motion',
//         path: '/assets/framer.png',
//       },
//     ],
//   },
//   {
//     title: 'Imaginify - AI Photo Manipulation App',
//     desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
//     subdesc:
//       'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
//     href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
//     texture: '/textures/project/project5.mp4',
//     logo: '/assets/project-logo5.png',
//     logoStyle: {
//       backgroundColor: '#1C1A43',
//       border: '0.2px solid #252262',
//       boxShadow: '0px 0px 60px 0px #635BFF4D',
//     },
//     spotlight: '/assets/spotlight5.png',
//     tags: [
//       {
//         id: 1,
//         name: 'React.js',
//         path: '/assets/react.svg',
//       },
//       {
//         id: 2,
//         name: 'TailwindCSS',
//         path: 'assets/tailwindcss.png',
//       },
//       {
//         id: 3,
//         name: 'TypeScript',
//         path: '/assets/typescript.png',
//       },
//       {
//         id: 4,
//         name: 'Framer Motion',
//         path: '/assets/framer.png',
//       },
//     ],
//   },
// ];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Silver Touch Technologies Ltd',
    pos: 'Intern',
    duration: '2024 (28May - 31July) ',
    title: 'During my internship at Silver Touch, I played a key role in the development of an advanced email finder website which can find all email addresses present on a given domain. My role involved both coding and optimizing the functionality to ensure accurate and efficient performance.',
    icon: '/assets/silvertouch.png',
    animation: 'clapping'
  }
  // {
  //   id: 1,
  //   name: 'Framer',
  //   pos: 'Lead Web Developer',
  //   duration: '2022 - Present',
  //   title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
  //   icon: '/assets/framer.svg',
  //   animation: 'victory',
  // },
  // {
  //   id: 2,
  //   name: 'Figma',
  //   pos: 'Web Developer',
  //   duration: '2020 - 2022',
  //   title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
  //   icon: '/assets/figma.svg',
  //   animation: 'clapping',
  // },
  // {
  //   id: 3,
  //   name: 'Notion',
  //   pos: 'Junior Web Developer',
  //   duration: '2019 - 2020',
  //   title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: '/assets/notion.svg',
  //   animation: 'salute',
  // },
];