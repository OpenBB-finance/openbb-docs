const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Read the globalData.json to get all doc pages
const globalDataPath = path.join(__dirname, '../.docusaurus/globalData.json');
const globalData = JSON.parse(fs.readFileSync(globalDataPath, 'utf8'));

const docs = globalData['docusaurus-plugin-content-docs'].default.versions[0].docs;

const searchablePages = [];

// Process each doc
docs.forEach(doc => {
  const { id, path: docPath } = doc;

  // Determine the file path - try both .md and .mdx extensions
  const contentPath = path.join(__dirname, '../content');
  let filePath = path.join(contentPath, `${id}.md`);

  if (!fs.existsSync(filePath)) {
    filePath = path.join(contentPath, `${id}.mdx`);
  }

  if (fs.existsSync(filePath)) {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // Extract category from the path
      const pathParts = id.split('/');
      let category = 'Documentation';

      if (pathParts[0] === 'workspace') {
        category = 'Workspace';
      } else if (pathParts[0] === 'odp') {
        // Handle ODP subcategories
        if (pathParts[1] === 'python') {
          category = 'ODP Python';
        } else if (pathParts[1] === 'cli') {
          category = 'ODP CLI';
        } else if (pathParts[1] === 'desktop') {
          category = 'ODP Desktop';
        } else {
          category = 'ODP';
        }
        // Add further subcategory if available
        if (pathParts.length > 2 && pathParts[2] !== 'index') {
          const subcategory = pathParts[2]
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          category = `${category} - ${subcategory}`;
        }
      }

      searchablePages.push({
        title: data.title || id.split('/').pop().replace(/-/g, ' '),
        path: docPath,
        category: category,
        description: data.description || '',
        keywords: data.keywords || []
      });
    } catch (err) {
      console.warn(`Error processing ${filePath}:`, err.message);
    }
  } else {
    console.warn(`File not found: ${filePath}`);
  }
});

// Sort by category and title
searchablePages.sort((a, b) => {
  if (a.category !== b.category) {
    return a.category.localeCompare(b.category);
  }
  return a.title.localeCompare(b.title);
});

// Write to a TypeScript file
const outputPath = path.join(__dirname, '../src/data/searchablePages.ts');
const tsContent = `// Auto-generated search index - do not edit manually
// Run 'npm run generate-search-index' to update this file

export interface SearchablePage {
  title: string;
  path: string;
  category: string;
  description?: string;
  keywords?: string[];
}

export const searchablePages: SearchablePage[] = ${JSON.stringify(searchablePages, null, 2)};
`;

// Ensure the data directory exists
const dataDir = path.join(__dirname, '../src/data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log(`✅ Generated search index with ${searchablePages.length} pages`);
console.log(`📝 Output: ${outputPath}`);
