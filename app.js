const fs = require('fs').promises;
const path = require('path');

async function insertContentRecursively(directoryPath, insertedContent, insertionPosition = 0) {
  try {
    const entries = await fs.readdir(directoryPath, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(directoryPath, entry.name);

      if (entry.isDirectory()) {
        await insertContentRecursively(entryPath, insertedContent, insertionPosition);
      } else if (entry.isFile() && path.extname(entry.name) === '.md') {
        const content = await fs.readFile(entryPath, 'utf8');
        const updatedContent = [insertedContent, content].join('\n').trim();
        await fs.writeFile(entryPath, updatedContent, 'utf8');
        console.log(`Updated file: ${entryPath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing directory "${directoryPath}":`, error);
  }
}

// 使用示例
const directoryPath = './docs/blog/study';
const insertedContent = `
---
outline: deep
---
`;

insertContentRecursively(directoryPath, insertedContent);