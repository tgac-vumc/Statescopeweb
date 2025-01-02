// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Manually defined sidebar to explicitly set the order of documents and categories
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'installation', // Ensure 'installation.md' exists in docs
      label: 'Installation',
    },
    {
      type: 'doc',
      id: 'input', // Ensure 'input.md' exists in docs
      label: 'Input Data',
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'category',
          label: 'Tutorials Simple',
          items: [
            {
              type: 'doc',
              id: 'python', // Ensure 'python.md' exists in docs
              label: 'Python',
            },
            {
              type: 'doc',
              id: 'r', // Ensure 'r.md' exists in docs
              label: 'R',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tutorials Advanced Users ',
          items: [
            {
              type: 'doc',
              id: 'create-signatures', // Ensure 'create-signatures.md' exists in docs
              label: 'Create Signatures',
            },
            {
              type: 'doc',
              id: 'deconvolution', // Ensure 'run-deconvolution.md' exists in docs
              label: 'Run Deconvolution',
            },
            {
              type: 'doc',
              id: 'purification', // Ensure 'run-purification.md' exists in docs
              label: 'Run Purification',
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'troubleshooting', // Ensure 'troubleshooting.md' exists in docs
      label: 'Troubleshooting',
    },
    // Add additional categories or documents as needed
  ],
};

export default sidebars;
