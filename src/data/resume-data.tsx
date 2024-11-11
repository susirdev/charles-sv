import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "苏 健杭",
  initials: "SJH",
  location: "四川省成都市、新疆维吾尔自治区乌鲁木齐市",
  locationLink: "https://map.baidu.com/search/%E6%96%B0%E7%96%86%E8%B4%A2%E7%BB%8F%E5%A4%A7%E5%AD%A6/@9745480.534803523,5416272.22561745,14.5z?querytype=s&da_src=shareurl&wd=%E6%96%B0%E7%96%86%E8%B4%A2%E7%BB%8F%E5%A4%A7%E5%AD%A6&c=131&src=0&pn=0&sug=0&l=13&b=(9739015,5403644;9779975,5421532)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2",
  about:
    "一位精通主流语言和框架、拥有会计资格证、具备两年服役经验的国际经济与贸易专业应届大学生",
  summary:
    "作为一名国际经济与贸易专业的大学生，我系统地掌握了专业知识，包括国际贸易理论、市场营销策略及国际金融分析等，同时精通多种主流编程语言和框架，展现了出色的技术能力。凭借持有的会计资格证，我在会计领域也拥有扎实的理论基础和实践经验，擅长进行精准的财务分析。在服役的两年里，我不仅锻炼了身体，更磨砺了意志，学会了在压力下保持冷静和高效执行，这段经历赋予了我坚韧不拔的精神、严格的纪律观念和卓越的团队合作技能，为我的职业生涯增添了独特优势。此外，我始终保持对国际经济动态的敏锐洞察，积极参与国际交流活动，不断提升跨文化沟通能力。通过不断学习与实践，我能够深入理解各国经济体系、贸易政策和文化差异，为跨国企业提供有价值的市场分析和策略建议，助力企业在全球化市场中稳健前行。",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://charles.su",
  contact: {
    email: "woshi@jianhang.su",
    tel: "+8619219983882",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/susirdev",
        icon: GitHubIcon,
      },
      {
        name: "WeChat",
        url: "wechat",
        icon: LinkedInIcon,
      },
      {
        name: "QQ",
        url: "qq",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "新疆财经大学",
      degree: "经济学学士学位",
      start: "2023",
      end: "2027",
    },
  ],
  work: [
    {
      company: "四川省赵老师食品有限公司",
      link: "https://baike.baidu.com/item/%E5%9B%9B%E5%B7%9D%E8%B5%B5%E8%80%81%E5%B8%88%E9%A3%9F%E5%93%81%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/51228295?fr=ge_ala",
      badges: ["线下实习"],
      title: "电子商务运营",
      logo: ConsultlyLogo,
      start: "2024.1",
      end: "2024.3",
      description:
        "主要运营赵老师食品旗舰店的销售与售后业务",
    },
    {
      company: "新疆某分队",
      link: "about:blank",
      badges: ["服役"],
      title: "列兵",
      logo: ParabolLogo,
      start: "2025.3",
      end: "2027.2",
      description:
        "大学期间服役",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
