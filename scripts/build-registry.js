const fs = require('fs');
const path = require('path');

// ==========================================
// ⚙️ הגדרות
// ==========================================
const COMPONENTS_DIR = path.join(__dirname, '../components/agentix-ui');
const INTERNAL_IMPORT_PREFIX = '@/components/agentix-ui/';
const PUBLIC_REGISTRY_DIR = path.join(__dirname, '../public/registry'); // שומר ישירות ל-public
const IGNORED_DEPS = ['react', 'react-dom', '@/lib/utils', '@/lib/cn', 'clsx', 'tailwind-merge'];

// ==========================================
// 🚀 לוגיקה
// ==========================================

function ensureDirectoryExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function parseDependencies(content) {
    const dependencies = new Set();
    const registryDependencies = new Set();
    const lines = content.split('\n');
    const importRegex = /import\s+.*?\s+from\s+['"](.*?)['"]/g;

    let match;
    while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        if (importPath.startsWith(INTERNAL_IMPORT_PREFIX)) {
            const componentName = importPath.replace(INTERNAL_IMPORT_PREFIX, '').replace('.tsx', '');
            registryDependencies.add(componentName);
        } else if (!importPath.startsWith('.') && !importPath.startsWith('/')) {
             if (!IGNORED_DEPS.includes(importPath) && !importPath.startsWith('@/')) {
                 dependencies.add(importPath);
             }
        }
    }
    return { dependencies: Array.from(dependencies), registryDependencies: Array.from(registryDependencies) };
}

function main() {
    console.log("🔄 בונה את ה-Registry ומפצל לקבצים...");
    
    // 1. וודא שתיקיית היעד קיימת
    ensureDirectoryExists(PUBLIC_REGISTRY_DIR);

    const files = fs.readdirSync(COMPONENTS_DIR).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
    const index = []; // נשמור רשימה של הכל לקובץ אינדקס

    files.forEach(fileName => {
        const componentName = fileName.replace('.tsx', '').replace('.ts', '');
        const filePath = path.join(COMPONENTS_DIR, fileName);
        const content = fs.readFileSync(filePath, 'utf8');

        const { dependencies, registryDependencies } = parseDependencies(content);
        const filteredRegistryDeps = registryDependencies.filter(d => d !== componentName);

        // יצירת האובייקט הבודד
        const item = {
            name: componentName,
            type: "registry:ui",
            dependencies: dependencies,
            registryDependencies: filteredRegistryDeps,
            files: [{ path: fileName, content: content, type: "registry:ui" }]
        };

        // שמירת קובץ נפרד לכל קומפוננטה
        // דוגמה: public/registry/subscription-card.json
        const itemPath = path.join(PUBLIC_REGISTRY_DIR, `${componentName}.json`);
        fs.writeFileSync(itemPath, JSON.stringify(item, null, 2));
        
        console.log(`✅ נוצר קובץ: registry/${componentName}.json (תלוי ב: ${filteredRegistryDeps})`);

        // הוספה לאינדקס הכללי (ללא התוכן המלא כדי לחסוך מקום, או עם - לבחירתך)
        index.push(item); 
    });

    // אופציונלי: שמירת קובץ index.json שמכיל את הכל
    fs.writeFileSync(path.join(PUBLIC_REGISTRY_DIR, 'index.json'), JSON.stringify(index, null, 2));
    
    console.log(`\n🎉 הסתיים! הקבצים מוכנים בתיקייה: public/registry`);
}

main();