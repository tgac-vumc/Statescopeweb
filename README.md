# **Statescope Website**

Welcome to the **Statescope** website repository! This repository powers the official documentation and tutorials for **Statescope**, a tool for Bayesian Log-Normal Deconvolution and related multi-omics analyses.

**Live Website:** [https://tgac-vumc.github.io/Statescopeweb/](https://tgac-vumc.github.io/Statescopeweb/)

---

## **Directory Structure**

```plaintext
Statescopeweb/
├── docs/                   # Markdown files for the website content
├── src/                    # Custom React components and styles
├── static/                 # Static assets (images, etc.)
├── sidebars.js             # Sidebar configuration
├── docusaurus.config.js    # Main configuration file
├── package.json            # Node.js dependencies
└── README.md               # This file
```

### **Key Locations for Editing**

* **Sidebar:** Modify `sidebars.js` to change the sidebar structure or add new pages.
* **Navbar:** Update `docusaurus.config.js` in the `themeConfig` section to add or edit navbar items.
* **Pages:** Add or edit Markdown files in the `docs/` directory to create or modify website content.

---

## **Locating and Editing Document Files**

The main website content is stored as Markdown files in the `docs/` directory.
Each file corresponds to a specific page.

**For example:**

* To edit the **Installation Guide**, locate `installation.md` in `docs/`:

  ```plaintext
  Statescopeweb/
  ├── docs/
      ├── installation.md
  ```

Open the Markdown file in your editor, make changes, and save.

---

## **Getting Started**

### **Cloning the Repository**

```bash
git clone https://github.com/tgac-vumc/Statescopeweb.git
cd Statescopeweb
```

### **Installing Dependencies**

Make sure you have Node.js installed.
Install the required dependencies:

```bash
npm install
```

(or use `yarn install` if you prefer)

### **Starting the Development Server**

To preview the site locally:

```bash
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### **Building the Website**

To generate a production build:

```bash
npm run build
```

Static files will be in the `build/` directory.

---

## **Tutorial: Adding or Editing Pages**

### **1. Editing the Sidebar**

The sidebar is managed in `sidebars.js`. To add a new page:

* Open `sidebars.js`
* Add the new document’s ID, for example:

  ```js
  {
    type: 'doc',
    id: 'new-document', // Corresponds to docs/new-document.md
    label: 'New Document',
  }
  ```

### **2. Editing the Navbar**

Edit the navigation bar in `docusaurus.config.js`, under `themeConfig` → `navbar`:

```js
{
  type: 'doc',
  docId: 'new-page',
  position: 'left',
  label: 'New Page',
},
```

### **3. Creating or Editing Markdown Files**

Pages are written in Markdown.
Add or update `.md` files in the `docs/` directory.

#### **Code Blocks Example**

<pre>
```python
# Example Python code
def hello_world():
    print("Hello, world!")
```
</pre>

#### **Links to Other Pages**

```markdown
[Go to Installation Guide](./installation.md)
```

---

## **How to Contribute**

1. **Clone the Repository:**
   See [Getting Started](#getting-started).

2. **Edit Files Locally:**
   Use your favorite text editor or IDE.

3. **Commit Changes:**

   ```bash
   git add .
   git commit -m "Describe your changes"
   ```

4. **Push Changes:**

   ```bash
   git push origin branch-name
   ```

   > Changes merged into `main` will update the live website automatically via GitHub Pages.

---

## **Hosting**

The website is deployed using **GitHub Pages**.
Every push to the `main` branch triggers an update.

**Live Site:** [https://tgac-vumc.github.io/Statescopeweb/](https://tgac-vumc.github.io/Statescopeweb/)

---

## **Contact**

For questions, suggestions, or contributions, please contact:

* Yongsoo Kim: yo.kim@amsterdamumc.nl, Aryamaan Bose: a.bose1@amsterdamumc.nl
* **GitHub Organization:** [TGAC](https://github.com/tgac-vumc)
---