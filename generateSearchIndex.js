const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const docsDir = path.join(__dirname, 'docs');
const outputFilePath = path.join(__dirname, 'static', 'search-index.json');

// Set your site's base URL here
const baseUrl = '/Statescopeweb';

// Function to get all .md files in a directory
function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllMarkdownFiles(filePath, arrayOfFiles);
    } else if (file.endsWith('.md')) {
      arrayOfFiles.push(filePath);
    }
  });
  return arrayOfFiles;
}

// Function to generate search data
function generateSearchIndex() {
  const files = getAllMarkdownFiles(docsDir);
  const index = files.map((file) => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const { data, content } = matter(fileContent);
    const snippet = (marked(content).replace(/(<([^>]+)>)/gi, '').slice(0, 200) || "No content available");

    return {
      title: data.title || path.basename(file, '.md'),
      url: `${baseUrl}/docs/${path.relative(docsDir, file).replace(/\\/g, '/').replace('.md', '')}`,
      content: snippet,
    };
  });

  fs.writeFileSync(outputFilePath, JSON.stringify(index, null, 2));
  console.log(`Search index generated at ${outputFilePath}`);
}

generateSearchIndex();
