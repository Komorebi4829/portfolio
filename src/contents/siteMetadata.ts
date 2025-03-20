export const siteMetadata = {
  siteUrl: 'https://kentriversnook.com',
  siteRepo: 'https://github.com/Komorebi4829/portfolio',
  siteLogo: '/favicon/android-chrome-512x512.png',
  siteShortTitle: 'Kent',
  siteTitle: "Kent\'s Portfolio",
  siteScreenshot: '',
  siteDescription:
    "Kent's personal website - Full-stack Web Developer, master of JavaScript/TypeScript, Node.js, Python, Vue, React. Enjoys coding, skilled in full-stack development, has developed multiple full-stack and crawler projects. Explore Kent's work and technology blog.TODO:把旧站的星空和一大块背景色搬过来。",
  author: 'Kent River',
  shortDescription:
    "Hello! I'm Kent, an experienced full-stack developer proficient in TS (NestJS, Next.js) and Python (Django, FastAPI). With 9 years of development experience, I'm passionate about team collaboration and delivering high-quality, scalable web applications. Let's create excellence together!",
  fullName: 'Kent River',
  location: '[::1]:443 - China',
  timeZone: 'Asia/Shanghai',
  locationIcon: '🇨🇳',
  // locationIcon: 'flag-china',
  position: 'Full Stack Web Developer',
  company: '',
  companySite: '',
  locale: 'en-US',
  image: '/favicon/android-chrome-192x192.png',
  socialBanner: '/favicon/android-chrome-192x192.png',
  profileCover: 'https://static.webjam.cn/images/bg/wew.png',
  analytics: {
    // plausibleDataDomain: '',
    // simpleAnalytics: false, // true | false
    analyticsURL: '',
    umamiScriptSrc: 'https://umami.kentriversnook.com/script.js',
    umamiSiteId: '8ab51f5e-d40f-404b-8078-9d088f47d9a6',
    googleAnalyticsId: 'G-SJ81DTXR6V', // e.g. UA-000000-2 or G-XXXXXXX
  },

  postPageSize: 9,
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export const commentConfig = {
  enable: false,
  provider: 'giscus',
  // https://giscus.app/
  giscusConfig: {
    gitUsername: '',
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: true,
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
    lang: 'zh-CN',
  },
}

export const socialAccounts = {
  x: '',
  instagram: '',
  email: 'hi@kentriversnook.com',
  github: 'https://github.com/Komorebi4829',
  twitter: '',
  facebook: '',
  youtube: '',
  linkedin: '',
}

export const author = {
  name: 'Kent River',
  location: '[::1]:443 - China',
  timeZone: 'Asia/Shanghai',
  locationIcon: '🇨🇳',
  position: 'Full Stack Web Developer',
  calMeetingUrl: '',
  status: 'Working remotely around the world',
  workingOn: `Former front-end developer turned independent creator, now building resilient web products and optimizing digital experiences with code, design & SEO.`,
  workTogether: `I'm open for freelance projects, feel free to email me to see how can we collaborate.`,
  wakatime: '',
  github_accounts: [
    {
      username: 'Komorebi4829',
      token: process.env.GITHUB_READ_USER_TOKEN_PERSONAL,
      endpoint: '/api/github?type=personal',
      type: 'personal',
      is_active: true,
    },
  ],
}

export const featureSwich = {
  // chatGPT
  ai: false,
  contactForm: true,
  meeting: false,
  guestbook: false,
  spotify: false,
  dashboard_wakatime: false,
  dashboard_github: true,
  topBanner: false,
}

export const docSearch = {
  apiKey: 'd291a440fb755a9b202844a68064d4e9', // search only key
  indexName: 'BrianStyle',
  appId: 'A4M5OCLKX8',
}
