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
    texture: '/textures/project/finsync.mp4',
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

];
