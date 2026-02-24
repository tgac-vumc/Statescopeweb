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
      label: 'Basic Tutorial Python',
    },
        {
          type: 'doc',
          id: 'advanced-tutorial_python',
          label: 'Advanced Tutorial Python',
        },
    {
      type: 'doc',
      id: 'visualisation-functions-python',
      label: 'Visualisation Functions (Python)',
    },
        

        {
          type: 'doc',
          id: 'r',
          label: 'R Tutorial',
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

    {
      type: 'doc',
      id: 'development',
      label: 'Development',
    },
  ],
};

export default sidebars;
