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
          type: 'doc',
          id: 'intro', // Ensure 'intro.md' exists in docs
          label: 'Tutorial Intro',
        },
        {
          type: 'category',
          label: 'scRNA Signature',
          items: [
            {
              type: 'doc',
              id: 'processed-signatures', // Ensure 'processed-signatures.md' exists in docs
              label: 'Processed Signatures',
            },
            {
              type: 'doc',
              id: 'create-signatures', // Ensure 'create-signatures.md' exists in docs
              label: 'Create Signatures',
            },
          ],
        },
        {
          type: 'doc',
          id: 'deconvolution', // Ensure 'deconvolution.md' exists in docs
          label: 'Deconvolution',
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
