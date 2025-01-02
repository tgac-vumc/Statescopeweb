---

# **BLADE Website**

Welcome to the **BLADE** website repository! This repository powers the official documentation and tutorials for **BLADE** (Bayesian Log-Normal Deconvolution), hosted on [Netlify](https://app.netlify.com/sites/statescope/deploys).

[![Netlify Status](https://api.netlify.com/api/v1/badges/51d4c924-c90c-4ac8-8716-6ad9def48bb2/deploy-status)](https://app.netlify.com/sites/statescope/deploys)

[**Visit BLADE Website**](https://statescope.netlify.app/)
---

## **Directory Structure**

```plaintext
oncoBLADE/
├── docs/                   # Markdown files for the website content
├── src/                    # Custom React components and styles
├── static/                 # Static assets (images, etc.)
├── sidebars.js             # Sidebar configuration
├── docusaurus.config.js    # Main configuration file
├── package.json            # Node.js dependencies
└── README.md               # This file
```

### **Key Locations for Editing**

- **Sidebar**: Modify `sidebars.js` to change the sidebar structure or add new pages.
- **Navbar**: Update `docusaurus.config.js` in the `themeConfig` section to add or edit navbar items.
- **Pages**: Add or edit Markdown files in the `docs/` directory to create or modify website content.

---

## **Locating and Editing Document Files**

The content of the website is stored as Markdown files in the `docs/` directory. Each document corresponds to a specific page on the website. For example:

- If you want to edit the **Installation Guide**, locate the file `installation.md` in the `docs/` directory:

  ```plaintext
  oncoBLADE/
  ├── docs/
      ├── installation.md
  ```

- Open `installation.md` in your preferred text editor, make your changes, and save the file.

After editing, follow the contribution steps to commit and push your changes.

---

## **Getting Started**

### **Cloning the Repository**

```bash
git clone https://github.com/tgac/oncoBLADE.git
cd oncoBLADE
```

### **Installing Dependencies**

Ensure you have Node.js installed. Then, install the required dependencies:

```bash
npm install
```

### **Starting the Development Server**

To preview the website locally:

```bash
npm run start
```

Visit `http://localhost:3000` in your browser to view the site.

### **Building the Website**

To build the static files for production:

```bash
npm run build
```

The generated static files will be in the `build` directory.

---

## **Tutorial: Adding or Editing Pages**

### **1. Editing the Sidebar**

The sidebar is controlled by the `sidebars.js` file. To add a new document:

- Open `sidebars.js` and locate the appropriate section.
- Add the new document's ID. For example:

```javascript
{
  type: 'doc',
  id: 'new-document', // Ensure 'new-document.md' exists in the docs folder
  label: 'New Document',
}
```

### **2. Editing the Navbar**

The top navigation bar is managed in `docusaurus.config.js`. To add a new item:

- Open `docusaurus.config.js`.
- Locate the `navbar` section in `themeConfig`.
- Add a new item to the `items` array. For example:

```javascript
{
  type: 'doc',
  docId: 'new-page',
  position: 'left',
  label: 'New Page',
},
```

### **3. Creating or Editing Markdown Files**

Pages in Docusaurus are written in Markdown. Add new content by creating `.md` files in the `docs/` directory. Use the following elements in Markdown:

#### Code Blocks
To add code snippets, use triple backticks (\`\`\`):

```markdown
```python
# Example Python code
def hello_world():
    print("Hello, world!")
```
```

#### Adding Links to Other Pages
To link to another page in the docs:

```markdown
[Go to Installation Guide](./installation.md)
```

---

## **How to Contribute**

### **1. Clone the Repository**
Follow the [Getting Started](#getting-started) section to clone the repository.

### **2. Make Your Changes**
Edit files locally. You can use any text editor or IDE.

### **3. Commit Your Changes**

```bash
git add .
git commit -m "Describe your changes"
```

### **4. Push Changes**

```bash
git push origin branch-name
```

Once pushed, changes will be reflected on the deployed site if you have permissions.

---

## **Hosting**

The website is deployed on [Netlify](https://www.netlify.com/). Every push to the `main` branch triggers a redeployment. The live site can be accessed at:

[**Visit BLADE Website**](https://statescope.netlify.app/)

---

## **Contact**

For questions or contributions, please contact:

- **Repository Maintainer**: [Aryamaan Bose](https://github.com/aryamaanbose)
- **GitHub Organization**: [TGAC](https://github.com/tgac-vumc)

---
