// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Statescope',
  tagline: 'Bayesian Log Normal Deconvolution',
  favicon: 'img/favicon.ico',
  url: 'https://tgac-vumc.github.io', // Your website URL
  baseUrl: '/',
  organizationName: 'tgac-vumc',
  projectName: 'Statescopeweb',
  deploymentBranch: 'main',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/tgac-vumc/Statescopeweb.git', // Link to edit docs in GitHub
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/tgac-vumc/Statescopeweb.git', // Link to edit blog posts in GitHub
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo_final_small.png', // Image used for social media previews
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
          docId: 'processed-signatures', // Link to the processed signatures page
          position: 'left',
          label: 'Datasets', // Label for the new tab
        },
        {
          label: 'Articles', // Dropdown menu for articles
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'PBMC-deconvolution', // Ensure PMBC-deconvolution.md exists in the docs folder
              label: 'Deconvolution of Lung Cancer Data',
            },
            // Add more articles here
          ],
        },
        {
          href: 'https://github.com/tgac-vumc/BLADE',
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
