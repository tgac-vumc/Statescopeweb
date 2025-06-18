// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'about',
      label: 'About',
    },
    {
      type: 'doc',
      id: 'installation',
      label: 'Installation',
    },
    {
      type: 'doc',
      id: 'input',
      label: 'Input Data',
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'doc',
          id: 'python',
          label: 'Python',
        },
        {
          type: 'doc',
          id: 'r',
          label: 'R',
        },
      ],
    },
    {
      type: 'doc',
      id: 'api-reference',
      label: 'API Reference',
    },
    
    {
      type: 'doc',
      id: 'troubleshooting',
      label: 'Troubleshooting',
    },
  ],
};

export default sidebars;
