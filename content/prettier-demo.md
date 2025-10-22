---
title: 'Prettier Demo'
date: 2024-10-22
draft: false
description: 'Demonstration of Prettier code formatting integration'
---

<div class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-lg shadow-lg my-8">
  <h2 class="text-3xl font-bold mb-4">✨ Prettier is Working!</h2>
  <p class="text-lg mb-4">This page demonstrates Prettier integration for automatic code formatting on save.</p>
  <div class="flex space-x-4">
    <button class="bg-white text-indigo-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors" onclick="formatExample()">
      Format Code Example
    </button>
    <button class="border border-white text-white px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-indigo-600 transition-colors" onclick="showBeforeAfter()">
      Show Before/After
    </button>
  </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div class="bg-green-100 p-6 rounded-lg">
    <h3 class="text-green-800 text-xl font-semibold mb-2">🎯 Consistent Formatting</h3>
    <p class="text-green-600">Prettier ensures consistent code formatting across all files and team members.</p>
  </div>
  <div class="bg-blue-100 p-6 rounded-lg">
    <h3 class="text-blue-800 text-xl font-semibold mb-2">⚡ Format on Save</h3>
    <p class="text-blue-600">Automatically formats your code when you save files in VS Code.</p>
  </div>
  <div class="bg-purple-100 p-6 rounded-lg">
    <h3 class="text-purple-800 text-xl font-semibold mb-2">🤝 ESLint Integration</h3>
    <p class="text-purple-600">Works seamlessly with ESLint to provide both linting and formatting.</p>
  </div>
  <div class="bg-pink-100 p-6 rounded-lg">
    <h3 class="text-pink-800 text-xl font-semibold mb-2">📄 Multi-Language</h3>
    <p class="text-pink-600">Formats JavaScript, JSON, Markdown, HTML, CSS, and more.</p>
  </div>
</div>

## Prettier Commands

Use these npm scripts to format your code:

```bash
# Format all supported files
npm run format

# Check if files are formatted correctly
npm run format:check

# Format only JavaScript files
npm run format:js

# Format only Markdown files
npm run format:md

# Format only JSON files
npm run format:json
```

## Before and After Examples

### JavaScript Formatting

**Before Prettier:**

```javascript
const obj = { name: 'test', value: 123 };
function myFunction(a, b, c) {
  if (a > b) {
    return c.map(item => {
      return { ...item, processed: true };
    });
  }
  return [];
}
```

**After Prettier:**

```javascript
const obj = { name: 'test', value: 123 };

function myFunction(a, b, c) {
  if (a > b) {
    return c.map(item => {
      return { ...item, processed: true };
    });
  }
  return [];
}
```

### JSON Formatting

**Before Prettier:**

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": { "test": "echo test", "build": "npm run compile" }
}
```

**After Prettier:**

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "test": "echo test",
    "build": "npm run compile"
  }
}
```

### Markdown Formatting

**Before Prettier:**

```markdown
#My Title
This is a paragraph with inconsistent spacing.

- Item 1
- Item 2
  - Nested item

| Column1 | Column2 |
| ------- | ------- |
| Value1  | Value2  |
```

**After Prettier:**

```markdown
# My Title

This is a paragraph with inconsistent spacing.

- Item 1
- Item 2
  - Nested item

| Column1 | Column2 |
| ------- | ------- |
| Value1  | Value2  |
```

## Configuration

### .prettierrc Configuration

The project uses a comprehensive Prettier configuration:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "overrides": [
    {
      "files": ["*.js", "*.jsx"],
      "options": {
        "tabWidth": 4,
        "useTabs": true
      }
    }
  ]
}
```

### Language-Specific Settings

- **JavaScript**: Uses tabs with 4-space width (matches existing theme style)
- **JSON/Markdown/HTML/CSS**: Uses 2 spaces for indentation
- **All files**: Enforces semicolons and single quotes where applicable

## VS Code Integration

When you open this project in VS Code:

1. **Install Extensions**: Prettier extension is recommended automatically
2. **Format on Save**: Enabled for all supported file types
3. **Real-time Formatting**: See formatting changes as you type
4. **ESLint + Prettier**: Both work together without conflicts

## File Support

Prettier formats these file types automatically:

- **JavaScript** (.js, .jsx)
- **JSON** (.json, .jsonc)
- **Markdown** (.md)
- **HTML** (.html)
- **CSS/SCSS** (.css, .scss)
- **TOML** (.toml)

## Integration with ESLint

Prettier and ESLint work together:

1. **ESLint**: Handles code quality rules (unused variables, etc.)
2. **Prettier**: Handles code formatting (spacing, quotes, etc.)
3. **No Conflicts**: `eslint-config-prettier` disables conflicting ESLint rules
4. **Combined**: Run both with `npm run lint` and `npm run format`

<div class="bg-emerald-50 border-l-4 border-emerald-400 p-4 my-6">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-emerald-700">
        <strong>Pro Tip:</strong> Save any file in VS Code to see Prettier automatically format it! The formatting happens instantly and maintains consistency across your entire project.
      </p>
    </div>
  </div>
</div>

<script>
function formatExample() {
  alert('In VS Code, just save any file to see Prettier in action! Try editing a .js or .json file.');
}

function showBeforeAfter() {
  const example = document.createElement('div');
  example.className = 'bg-gray-100 p-4 rounded-lg mt-4';
  example.innerHTML = `
    <h4 class="font-semibold mb-2">Live Example:</h4>
    <p class="text-sm text-gray-600">Create a new .js file with messy formatting, save it, and watch Prettier clean it up automatically!</p>
  `;

  const container = document.querySelector('.bg-gradient-to-r');
  if (!container.querySelector('.bg-gray-100')) {
    container.appendChild(example);
  }
}
</script>
