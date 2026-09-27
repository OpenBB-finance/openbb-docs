const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const globalDataPath = path.join(__dirname, '../.docusaurus/globalData.json');
const globalData = JSON.parse(fs.readFileSync(globalDataPath, 'utf8'));

const instances = [
  { pluginId: 'default', contentDir: path.join(__dirname, '../content'), idPrefix: '' },
  { pluginId: 'odp', contentDir: path.join(__dirname, '../content-odp'), idPrefix: 'odp/' },
];

const generatedOdpPage = /^python\/(reference|data_models)\/(?!index$)/;

const searchablePages = [];

function categoryFor(pathParts) {
  if (pathParts[0] === 'agents') {
    return 'Agents';
  }
  if (pathParts[0] === 'workspace') {
    return 'Workspace';
  }
  if (pathParts[0] !== 'odp') {
    return 'Documentation';
  }
  let category = 'ODP';
  if (pathParts[1] === 'python') {
    category = 'ODP Python';
  } else if (pathParts[1] === 'cli') {
    category = 'ODP CLI';
  } else if (pathParts[1] === 'desktop') {
    category = 'ODP Desktop';
  }
  if (pathParts.length > 2 && pathParts[2] !== 'index') {
    const subcategory = pathParts[2]
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    category = `${category} - ${subcategory}`;
  }
  return category;
}

instances.forEach(({ pluginId, contentDir, idPrefix }) => {
  const instance = globalData['docusaurus-plugin-content-docs'][pluginId];
  if (!instance) {
    return;
  }
  const version = instance.versions.find(v => v.name === 'current') || instance.versions[0];

  version.docs.forEach(doc => {
    const { id, path: docPath } = doc;

    if (pluginId === 'odp' && generatedOdpPage.test(id)) {
      return;
    }

    let filePath = path.join(contentDir, `${id}.md`);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(contentDir, `${id}.mdx`);
    }

    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      return;
    }

    try {
      const { data } = matter(fs.readFileSync(filePath, 'utf8'));
      searchablePages.push({
        title: data.title || id.split('/').pop().replace(/-/g, ' '),
        path: docPath,
        category: categoryFor(`${idPrefix}${id}`.split('/')),
        description: data.description || '',
        keywords: data.keywords || []
      });
    } catch (err) {
      console.warn(`Error processing ${filePath}:`, err.message);
    }
  });
});

searchablePages.sort((a, b) => {
  if (a.category !== b.category) {
    return a.category.localeCompare(b.category);
  }
  return a.title.localeCompare(b.title);
});

const outputPath = path.join(__dirname, '../src/data/searchablePages.ts');
const tsContent = `export interface SearchablePage {
  title: string;
  path: string;
  category: string;
  description?: string;
  keywords?: string[];
}

export const searchablePages: SearchablePage[] = ${JSON.stringify(searchablePages, null, 2)};
`;

const dataDir = path.join(__dirname, '../src/data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log(`Generated search index with ${searchablePages.length} pages`);
console.log(`Output: ${outputPath}`);
