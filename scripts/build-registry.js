const fs = require('fs');
const path = require('path');

// --- קונפיגורציה ---
const SOURCE_DIR = path.join(process.cwd(), 'components/agentix-ui'); 
const OUTPUT_DIR = path.join(process.cwd(), 'public/registry');
const DOMAIN = 'https://agentixui.com'; // וודא שזה הדומיין הנכון

const IGNORED_DEPS = ['react', 'react-dom', 'next', 'motion', 'clsx', 'tailwind-merge'];

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const files = fs.readdirSync(SOURCE_DIR).filter(file => file.endsWith('.tsx'));

files.forEach(file => {
  const componentName = file.replace('.tsx', '');
  const filePath = path.join(SOURCE_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');

  const { dependencies, registryDependencies } = parseImports(content, files);

  const registryItem = {
    name: componentName,
    type: "registry:ui", // סוג הקומפוננטה הראשית
    dependencies: dependencies,
    registryDependencies: registryDependencies,
    files: [
      {
        path: file,
        content: content,
        type: "registry:ui" // <--- התיקון החשוב: חייב להופיע גם כאן!
      }
    ]
  };

  const outputPath = path.join(OUTPUT_DIR, `${componentName}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(registryItem, null, 2));
  
  console.log(`✅ Generated registry for: ${componentName}`);
});

function parseImports(content, allFiles) {
  const dependencies = new Set();
  const registryDependencies = new Set();
  
  const importRegex = /import\s+.*?from\s+['"](.*?)['"]/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];

    // זיהוי קומפוננטות פנימיות
    if (importPath.startsWith('./') || importPath.startsWith('../')) {
      const fileName = importPath.split('/').pop();
      const potentialFile = fileName + '.tsx';
      
      if (allFiles.includes(potentialFile)) {
        registryDependencies.add(`${DOMAIN}/registry/${fileName}.json`);
        continue;
      }
    }

    // זיהוי רכיבי shadcn
    if (importPath.includes('/components/ui/')) {
      const component = importPath.split('/').pop();
      registryDependencies.add(component); 
      continue;
    }

    // זיהוי ספריות חיצוניות
    if (!importPath.startsWith('.') && !importPath.startsWith('@/')) {
      // טיפול מיוחד ב-framer-motion אם משתמשים ב-motion/react
      const cleanPkg = importPath.split('/')[0]; 
      if (!IGNORED_DEPS.includes(cleanPkg) && !IGNORED_DEPS.includes(importPath)) {
        dependencies.add(importPath);
      }
    }
  }

  return {
    dependencies: Array.from(dependencies),
    registryDependencies: Array.from(registryDependencies)
  };
}