// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.vsDark;


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Avalonia API-Reference',
  tagline: 'API docs for Avalonia',

  // Set the production url of your site here
  url: 'https://timunie.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Ava-ApiTests/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'timunie', // Usually your GitHub org/user name.
  projectName: 'Ava-ApiTests', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
    headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/favicons/favicon.ico",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/favicons/site.webmanifest",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "mask-icon",
        color: "#ffffff",
        href: "/favicons/safari-pinned-tab.svg",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "theme-color",
        content: "#ffffff",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "msapplication-config",
        content: "/favicons/browserconfig.xml",
      },
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./docs/api-sidebar.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/timunie/Ava-ApiTests',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
          ],
      
        },
      }),
    ],
  ],

  plugins: [
    require('./plugins/webpack-config.cjs'),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        }
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(196, 196, 196)',
          dark: 'rgb(22, 28, 45)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          margin: 50,
        }
      },
      navbar: {
        title: 'Avalonia UI',
        logo: {
          alt: 'Avalonia Logo',
          src: 'img/purple-border-gradient-icon.png',
          srcDark: "img/white-border-gradient-icon.png"
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'API',
          },
		            {
            label: 'Docs',
            to: 'https://docs.avaloniaui.net',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} TimUnie. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
		additionalLanguages: ['csharp', 'visual-basic', 'fsharp'],
      },
    }),
	future: {
		v4: true,
		experimental_faster: true,
	},
};

export default config;
