// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Statescope',
  tagline: 'Bayesian Log Normal Deconvolution',
  favicon: 'img/logo_final_small.png',

  url: 'https://tgac-vumc.github.io',
  baseUrl: '/Statescopeweb/',

  organizationName: 'tgac-vumc',
  projectName: 'Statescopeweb',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/tgac-vumc/Statescopeweb.git',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/tgac-vumc/Statescopeweb.git',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo_final_small.png',

    navbar: {
      logo: {
        alt: 'Statescope',
        src: 'img/logo_final_small.png',
        style: { height: '36px' },
      },

      title: 'Statescope',

      items: [
        {
          type: 'doc',
          docId: 'installation',
          label: 'Installation',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'processed-signatures',
          label: 'Datasets',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'python',
          label: 'Tutorials',
          position: 'left',
        },
        {
          label: 'Articles',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'PBMC-deconvolution',
              label: 'PBMC Deconvolution',
            },
          ],
        },
        {
          to: '/docs/release-notes',
          label: 'Release Notes',
          position: 'right',
        },
        {
          href: 'https://github.com/tgac-vumc/Statescope',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'r', 'bash'],
    },

    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
  },
};

export default config;
