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
      title: 'Statescope v1.0.0',
      items: [
        {
          type: 'doc',
          docId: 'installation',
          position: 'left',
          label: 'Installation',
        },
        {
          type: 'doc',
          docId: 'processed-signatures',
          position: 'left',
          label: 'Datasets',
        },
        {
          label: 'Tutorials',
          position: 'left',
          type: 'doc',
          docId: 'python', // Links directly to the first tutorial (Python)
        },
        {
          label: 'Articles',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'PBMC-deconvolution',
              label: 'Deconvolution of PBMC Data',
            },
          ],
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
    },
  },
};

export default config;
