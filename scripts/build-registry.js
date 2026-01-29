const fs = require('fs');
const path = require('path');

// --- קונפיגורציה ---
const SOURCE_DIR = path.join(process.cwd(), 'components/agentix-ui'); // איפה הקומפוננטות שלך יושבות
const OUTPUT_DIR = path.join(process.cwd(), 'public/registry');      // איפה לשמור את ה-JSON
const DOMAIN = 'https://agentixui.com';                               // הדומיין שלך (חשוב!)

// ספריות שאנחנו רוצים להתעלם מהן (כי הן מובנות ב-Next.js/React)
const IGNORED_DEPS = ['react', 'react-dom', 'next'];

// וודא שהתיקייה קיימת
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// קריאת כל הקבצים בתיקיית המקור
const files = fs.readdirSync(SOURCE_DIR).filter(file => file.endsWith('.tsx'));

files.forEach(file => {
  const componentName = file.replace('.tsx', '');
  const filePath = path.join(SOURCE_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // ניתוח התוכן
  const { dependencies, registryDependencies } = parseImports(content, files);

  // יצירת אובייקט ה-JSON
  const registryItem = {
    name: componentName,
    type: "components:ui",
    dependencies: dependencies,
    registryDependencies: registryDependencies,
    files: [
      {
        path: file,
        content: content
      }
    ]
  };

  // שמירה לקובץ
  const outputPath = path.join(OUTPUT_DIR, `${componentName}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(registryItem, null, 2));
  
  console.log(`✅ Generated registry for: ${componentName}`);
});

// --- הפונקציה החכמה שמנתחת Imports ---
function parseImports(content, allFiles) {
  const dependencies = new Set();
  const registryDependencies = new Set();
  
  // Regex למציאת כל שורות ה-import
  const importRegex = /import\s+.*?from\s+['"](.*?)['"]/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];

    // בדיקה 1: האם זו קומפוננטה מקומית (מהתיקייה שלנו)?
    // דוגמה: import ... from "./ai-badge"
    if (importPath.startsWith('./')) {
      const potentialFile = importPath.replace('./', '') + '.tsx';
      if (allFiles.includes(potentialFile)) {
        // הוספת ה-URL המלא ל-registryDependencies
        const depName = importPath.replace('./', '');
        registryDependencies.add(`${DOMAIN}/registry/${depName}.json`);
        continue;
      }
    }

    // בדיקה 2: האם זה רכיב Shadcn סטנדרטי?
    // דוגמה: import ... from "@/components/ui/button"
    if (importPath.includes('/components/ui/')) {
      const component = importPath.split('/').pop();
      registryDependencies.add(component); // ה-CLI יודע להוריד 'button' לבד
      continue;
    }

    // בדיקה 3: האם זו ספריית NPM חיצונית?
    // דוגמה: framer-motion, lucide-react
    if (!importPath.startsWith('.') && !importPath.startsWith('@/')) {
      if (!IGNORED_DEPS.includes(importPath)) {
        dependencies.add(importPath);
      }
    }
  }

  return {
    dependencies: Array.from(dependencies),
    registryDependencies: Array.from(registryDependencies)
  };
}