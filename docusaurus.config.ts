// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import path from 'path'
import { Config, LoadContext } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Kent 的小站',
  tagline: '业精于勤荒于嬉, 行成于思毁于随',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Kent', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: ['./src/css/custom.scss', './src/css/main.scss'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content: 'Kent, Kent River, 肯特',
      },
      {
        name: 'keywords',
        content: 'portfolio, javascript, typescript, node, python, flask, vue, react, web, fullstack',
      },
      {
        name: 'keywords',
        content: '编程爱好者, Web开发者, 搞过Python, 写过爬虫, 现在主攻TS全栈',
      },
    ],
    headTags: [
      {
        tagName: 'meta',
        attributes: {
          name: 'description',
          content: 'Kent 的小站',
        },
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Kent',
        src: 'img/logo.svg', // TODO
        srcDark: 'img/logo.svg', // TODO
      },
      hideOnScroll: true,
      items: [
        {
          label: '关于',
          position: 'right',
          to: '/about',
        },
        {
          label: '项目',
          position: 'right',
          to: '/showcase',
        },
        {
          label: '博客',
          position: 'right',
          // to: 'https://google.com/ncr',
          to: '/blog',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Showcase',
              to: '/showcase',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Komorebi4829',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/kentkomorebi',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              html: `<a href="https://docusaurus.io/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
            },
          ],
        },
      ],
      copyright: `<p>Copyright © ${new Date().getFullYear()} - PRESENT Kent Built with Docusaurus.</p>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },

  plugins: [
    'docusaurus-plugin-sass',
    'docusaurus-plugin-image-zoom',
    async function myPlugin(context: LoadContext, options: unknown) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },

    ['@docusaurus/plugin-ideal-image', { disableInDev: false }],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
  ],
}

export default config
