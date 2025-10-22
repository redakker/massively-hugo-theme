---
title: "ESLint Demo"
date: 2024-10-22
draft: false
description: "Demonstration of ESLint JavaScript linting integration"
---

<div class="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-lg shadow-lg my-8">
  <h2 class="text-3xl font-bold mb-4">🔍 ESLint is Working!</h2>
  <p class="text-lg mb-4">This page demonstrates ESLint integration for JavaScript code quality and consistency.</p>
  <div id="welcome-message"></div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div class="bg-green-100 p-6 rounded-lg">
    <h3 class="text-green-800 text-xl font-semibold mb-2">✅ Code Quality</h3>
    <p class="text-green-600">ESLint catches common JavaScript errors, enforces coding standards, and suggests best practices.</p>
  </div>
  <div class="bg-blue-100 p-6 rounded-lg">
    <h3 class="text-blue-800 text-xl font-semibold mb-2">🛠️ Auto-Fixing</h3>
    <p class="text-blue-600">Many formatting issues can be automatically fixed with the <code>--fix</code> flag.</p>
  </div>
</div>

## ESLint Commands

Use these npm scripts to lint your JavaScript code:

```bash
# Lint new JavaScript files (ESLint-compliant)
npm run lint:js

# Auto-fix issues in new JavaScript files
npm run lint:js:fix

# Lint legacy theme files (will show many issues)
npm run lint:legacy

# Lint all files in the project
npm run lint
```

## Code Examples

### ✅ Good JavaScript (ESLint-compliant)

```javascript
const Utils = {
  init() {
    console.log('Utils initialized');
    this.setupEventListeners();
  },

  setupEventListeners() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        this.handleClick(event);
      });
    });
  },

  handleClick(event) {
    const message = event.target.dataset.message || 'Clicked!';
    this.showNotification(message);
  }
};
```

### ❌ Problematic JavaScript (ESLint will flag)

```javascript
// Issues: var instead of const/let, missing semicolons,
// inconsistent spacing, unused variables
var utils = {
  init:function(){
    var unusedVar = "test"
    console.log("init")
    setupEvents()
  },
  setupEvents:function(){
    var btns = document.querySelectorAll('.btn')
    for(var i=0;i<btns.length;i++){
      btns[i].onclick=function(e){
        alert("clicked")
      }
    }
  }
}
```

## ESLint Configuration

The project uses a customized ESLint configuration:

- **Standard JavaScript Style**: Based on JavaScript Standard Style
- **Browser Environment**: Configured for browser JavaScript
- **jQuery Support**: Recognizes jQuery globals ($, jQuery)
- **Tab Indentation**: Configured to use tabs instead of spaces
- **Flexible Rules**: Allows some common patterns while maintaining quality

## VS Code Integration

If you're using VS Code:

1. **Install ESLint Extension**: The project includes extension recommendations
2. **Auto-fix on Save**: Configured to automatically fix issues when you save files
3. **Real-time Linting**: See errors and warnings as you type
4. **Format on Save**: Automatically formats code according to ESLint rules

## File Structure

```
project/
├── .eslintrc.js          # ESLint configuration
├── .eslintignore         # Files to ignore
├── .vscode/
│   ├── settings.json     # VS Code ESLint settings
│   └── extensions.json   # Recommended extensions
└── static/assets/js/
    ├── demo-eslint.js    # ESLint-compliant demo file
    ├── main.js          # Legacy file (many lint issues)
    └── util.js          # Legacy file (many lint issues)
```

<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-yellow-700">
        <strong>Note:</strong> The legacy theme files (main.js, util.js) have many ESLint violations. They're excluded from the main lint command but can be linted separately with `npm run lint:legacy`. Consider gradually refactoring them to meet ESLint standards.
      </p>
    </div>
  </div>
</div>

<script src="{{ "assets/js/demo-eslint.js" | relURL }}"></script>