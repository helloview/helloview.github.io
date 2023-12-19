import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Helloview',
  tagline: '',
  favicon: 'img/favicon.ico',
  url: 'https://www.helloview.io',
  baseUrl: '/',
  // GitHub pages deployment config
  organizationName: 'helloview',
  projectName: 'helloview',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'Helloview',
          // logo: {
          //   alt: 'My Site Logo',
          //   src: 'img/logo.svg',
          // },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'dataStructureSidebar',
              position: 'left',
              label: 'Data Structure',
            },
            {
              type: 'docSidebar',
              sidebarId: 'javascriptSidebar',
              position: 'left',
              label: 'JavaScript',
            },
            {
              type: 'search',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'light',
          copyright: `Copyright © ${new Date().getFullYear()} helloview.io`,
        },
        algolia: {
          appId: 'MNK34G7U2R',
          apiKey: '2f20969596bf0bb3df96c6fa54dcdcad',
          indexName: 'helloview_docs',
          contextualSearch: true,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
};

export default config;
