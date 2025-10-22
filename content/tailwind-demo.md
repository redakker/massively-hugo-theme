---
title: "Tailwind Demo"
date: 2024-10-22
draft: false
description: "Demonstration of Tailwind CSS integration"
---

<div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg my-8">
  <h2 class="text-3xl font-bold mb-4">🎉 Tailwind CSS is Working!</h2>
  <p class="text-lg mb-4">This colorful card demonstrates that Tailwind CSS has been successfully integrated into your Hugo theme.</p>
  <div class="flex space-x-4">
    <button class="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
      Primary Button
    </button>
    <button class="border border-white text-white px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
      Secondary Button
    </button>
  </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
  <div class="bg-red-100 p-6 rounded-lg">
    <h3 class="text-red-800 text-xl font-semibold mb-2">Responsive Grid</h3>
    <p class="text-red-600">This grid layout automatically adapts to different screen sizes using Tailwind's responsive utilities.</p>
  </div>
  <div class="bg-green-100 p-6 rounded-lg">
    <h3 class="text-green-800 text-xl font-semibold mb-2">Utility Classes</h3>
    <p class="text-green-600">Tailwind provides thousands of utility classes for rapid prototyping and consistent design.</p>
  </div>
  <div class="bg-blue-100 p-6 rounded-lg">
    <h3 class="text-blue-800 text-xl font-semibold mb-2">Hugo Integration</h3>
    <p class="text-blue-600">Tailwind is processed through Hugo Pipes with PostCSS for optimal performance.</p>
  </div>
</div>

## Features Added

- ✅ **Tailwind CSS 3.3+** - Latest version with all features
- ✅ **PostCSS Processing** - Automatic vendor prefixing with Autoprefixer
- ✅ **Hugo Pipes Integration** - Native Hugo asset processing
- ✅ **Production Optimization** - CSS minification and fingerprinting
- ✅ **Development Workflow** - Hot reload with Hugo server

## Usage Examples

You can now use any Tailwind utility classes in your templates and content:

```html
<div class="max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">
    Welcome to Your Hugo Site
  </h1>
  <p class="text-lg text-gray-600 leading-relaxed">
    This paragraph uses Tailwind classes for typography and spacing.
  </p>
</div>
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
        <strong>Note:</strong> The original theme styles are still loaded alongside Tailwind, so you can gradually migrate or use both systems together.
      </p>
    </div>
  </div>
</div>