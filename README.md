[![Netlify Status](https://api.netlify.com/api/v1/badges/88bbecd4-a11c-4126-8939-ec186acae5a6/deploy-status)](https://app.netlify.com/sites/animated-gelato-fa7a1e/deploys)



# **BLADE Website**

Welcome to the **BLADE** website repository! This repository powers the official documentation and tutorials for **BLADE** (Bayesian Log-Normal Deconvolution), hosted on [Netlify](https://app.netlify.com/sites/animated-gelato-fa7a1e/deploys).

[![Netlify Status](https://api.netlify.com/api/v1/badges/88bbecd4-a11c-4126-8939-ec186acae5a6/deploy-status)](https://app.netlify.com/sites/animated-gelato-fa7a1e/deploys)

---

## **Overview**

The **BLADE Website** is built with [Docusaurus 2](https://docusaurus.io/), a modern static site generator. The website serves as a comprehensive platform for installation guides, tutorials, datasets, and related articles. Contributions are welcome to enhance and expand its content.

---

## **Features**

- **Interactive Tutorials**: Step-by-step guides to use BLADE effectively.
- **Dynamic Sidebar and Navbar**: Customize the navigation structure with ease.
- **Live Preview**: Changes pushed to the repository are reflected on the website in real time via Netlify.
- **Multi-language Support**: Available in English and Dutch (`i18n` feature).
- **Code Highlighting**: Syntax highlighting for Python, R, Bash, and more using Prism.

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

You can customize the website by adding or editing pages in the **Docusaurus** structure. Here’s how:

### **1. Editing the Sidebar**

The sidebar is controlled by the `sidebars.js` file. To add a new document to the sidebar:

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

Pages in Docusaurus are written in Markdown. You can add code blocks, links, and more using standard Markdown syntax:

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

Place the Markdown files in the `docs` directory.

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

## **Project Structure**

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

---

## **Hosting**

The website is deployed on [Netlify](https://www.netlify.com/). Every push to the `main` branch triggers a redeployment. The live site can be accessed at:

[**Visit BLADE Website**](https://app.netlify.com/sites/animated-gelato-fa7a1e/deploys)

---

## **Contact**

For questions or contributions, please contact:

- **Repository Maintainer**: [Aryamaan Bose](https://github.com/aryamaanbose)
- **GitHub Organization**: [TGAC](https://github.com/tgac-vumc)

---
