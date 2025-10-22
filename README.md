# Massively Hugo Theme

A Hugo static site generator implementation of the [Massively](https://html5up.net/massively) template by [HTML5 UP](https://html5up.net). This project converts the original HTML5/CSS3 template into a fully functional Hugo site with dynamic content management.

![Hugo](https://img.shields.io/badge/Hugo-FF4088?style=for-the-badge&logo=hugo&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## 🚀 Features

- **Responsive Design**: Fully responsive HTML5/CSS3 design that works on all devices
- **Clean Blog Layout**: Featured post section with grid-based post listing
- **Hugo Powered**: Static site generation with Hugo's powerful templating system
- **Tailwind CSS**: Modern utility-first CSS framework integrated with Hugo Pipes
- **PostCSS Processing**: Automatic vendor prefixing and CSS optimization
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Social Media Ready**: Built-in social media link configuration
- **Contact Form**: Ready-to-use contact form layout
- **Fast Loading**: Optimized assets and static generation for speed
- **Easy Content Management**: Markdown-based content creation

## 📋 Prerequisites

Before running this project, ensure you have:

- [Hugo Extended](https://gohugo.io/installation/) (v0.100.0 or later)
- [Node.js](https://nodejs.org/) (v16.0 or later) - for Tailwind CSS processing
- Git (for version control)
- A text editor or IDE

## 🛠️ Installation

1. **Clone or download this repository**

   ```bash
   git clone <repository-url>
   cd massively-hugo
   ```

2. **Install Hugo** (if not already installed)
   - **Windows**: `choco install hugo-extended` or download from [Hugo releases](https://github.com/gohugoio/hugo/releases)
   - **macOS**: `brew install hugo`
   - **Linux**: `snap install hugo` or download binary

3. **Install Node.js dependencies** (for Tailwind CSS)

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   hugo server
   ```

5. **Open your browser** and navigate to `http://localhost:1313`

## 📁 Project Structure

```
massively-hugo/
├── archetypes/           # Content templates for new posts
├── content/              # Site content (Markdown files)
│   ├── posts/           # Blog posts
│   └── about.md         # About page
├── data/                # Data files for site configuration
├── layouts/             # Hugo template files
│   ├── _default/        # Default layouts (list, single, baseof)
│   └── partials/        # Reusable template components
├── static/              # Static assets
│   ├── assets/          # CSS, JS, fonts
│   │   ├── css/         # Stylesheets
│   │   ├── js/          # JavaScript files
│   │   ├── sass/        # SASS source files
│   │   └── webfonts/    # Font files
│   └── images/          # Image assets
├── hugo.toml            # Hugo configuration file
└── README.md           # This file
```

## ✍️ Creating Content

### Adding a New Blog Post

1. Create a new Markdown file in the `content/posts/` directory:

   ```bash
   hugo new posts/my-new-post.md
   ```

2. Edit the frontmatter and content:

   ```markdown
   ---
   title: 'My Awesome Blog Post'
   date: 2024-10-22
   draft: false
   description: 'A brief description of your post'
   image: 'images/my-post-image.jpg' # Optional: Post thumbnail
   featured_image: 'images/my-featured.jpg' # Optional: For featured posts
   ---

   Your post content goes here in **Markdown** format.
   ```

### Adding a New Page

1. Create a new Markdown file in the `content/` directory:

   ```bash
   hugo new about.md
   ```

2. Edit the content as needed.

### Image Guidelines

- Place images in the `static/images/` directory
- Reference images in posts using: `images/your-image.jpg`
- Use `image:` frontmatter for post thumbnails
- Use `featured_image:` frontmatter for the main featured post image

## ⚙️ Configuration

The site is configured through `hugo.toml`. Key configuration options:

### Basic Site Settings

```toml
baseURL = 'https://your-domain.com/'
title = 'Your Site Title'
```

### Social Media Links

```toml
[params.social]
  twitter = "https://twitter.com/yourusername"
  facebook = "https://facebook.com/yourpage"
  instagram = "https://instagram.com/yourusername"
  github = "https://github.com/yourusername"
```

### Contact Information

```toml
[params.contact]
  address = "Your Address<br />City, State ZIP"
  phone = "(000) 000-0000"
  email = "your-email@example.com"
```

### Navigation Menu

```toml
[[menu.main]]
  name = "Menu Item"
  url = "/page-url/"
  weight = 1  # Order in menu
```

## 🎨 Customization

### Tailwind CSS Integration

This theme now includes **Tailwind CSS** for rapid UI development:

- **Tailwind Classes**: Use any Tailwind utility classes in your templates and content
- **Automatic Processing**: Tailwind is processed through Hugo Pipes with PostCSS
- **Production Optimization**: CSS is automatically purged and minified for production builds
- **Hot Reload**: Changes to Tailwind classes are reflected immediately during development

#### Using Tailwind Classes

You can use Tailwind classes directly in your templates:

```html
<div class="max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to Your Hugo Site</h1>
  <p class="text-lg text-gray-600 leading-relaxed">
    This paragraph uses Tailwind classes for typography and spacing.
  </p>
</div>
```

Or in your Markdown content (with `unsafe = true` in hugo.toml):

```markdown
<div class="bg-blue-100 p-6 rounded-lg">
  <h3 class="text-blue-800 text-xl font-semibold mb-2">Info Box</h3>
  <p class="text-blue-600">This is a styled info box using Tailwind classes.</p>
</div>
```

#### Customizing Tailwind

- **Config File**: Edit `tailwind.config.js` to customize your design system
- **Main CSS File**: `assets/css/tailwind.css` contains the Tailwind directives
- **PostCSS Config**: `postcss.config.js` handles processing and autoprefixing

### ESLint Integration

This theme includes **ESLint** for JavaScript code quality and consistency:

- **Automatic Error Detection**: Catches common JavaScript errors and style issues
- **Code Formatting**: Enforces consistent coding standards across JavaScript files
- **VS Code Integration**: Automatic linting and fixing within your editor
- **Configurable Rules**: Customizable rules via `.eslintrc.js`

#### Using ESLint

**Lint JavaScript files:**

```bash
npm run lint:js          # Lint demo and new JS files
npm run lint:js:fix      # Auto-fix issues where possible
npm run lint:legacy      # Lint legacy theme files (many issues)
npm run lint             # Lint all files in project
```

**ESLint Configuration:**

- **Config File**: `.eslintrc.js` - Main ESLint configuration
- **Ignore File**: `.eslintignore` - Files to exclude from linting
- **VS Code Settings**: `.vscode/settings.json` - Editor integration

**Creating New JavaScript Files:**

1. Add your JavaScript files to `static/assets/js/`
2. Follow the coding standards shown in `demo-eslint.js`
3. Run `npm run lint:js` to check for issues
4. Use `npm run lint:js:fix` to auto-fix formatting

**Example of ESLint-compliant code:**

```javascript
const MyModule = {
  init() {
    console.log('Module initialized');
    this.setupEventListeners();
  },

  setupEventListeners() {
    const buttons = document.querySelectorAll('.my-button');

    buttons.forEach(button => {
      button.addEventListener('click', event => {
        this.handleClick(event);
      });
    });
  },
};
```

### Prettier Integration

This theme includes **Prettier** for automatic code formatting:

- **Format on Save**: Automatically formats code when you save files in VS Code
- **Consistent Style**: Enforces consistent formatting across the entire project
- **Multi-Language**: Supports JavaScript, JSON, Markdown, HTML, CSS, and more
- **ESLint Integration**: Works seamlessly with ESLint without conflicts

#### Using Prettier

**Format code:**

```bash
npm run format              # Format all files
npm run format:check        # Check if files are formatted
npm run format:js           # Format only JavaScript files
npm run format:md           # Format only Markdown files
npm run format:json         # Format only JSON files
```

**Prettier Configuration:**

- **Config File**: `.prettierrc` - Main Prettier configuration with language-specific overrides
- **Ignore File**: `.prettierignore` - Files to exclude from formatting
- **VS Code Integration**: Automatic formatting on save enabled

**Language-Specific Settings:**

- **JavaScript**: Uses tabs with 4-space width (matches theme style)
- **JSON/HTML/CSS/Markdown**: Uses 2 spaces for indentation
- **All Languages**: Enforces semicolons and single quotes where applicable

#### VS Code Integration

When you open this project in VS Code:

1. **Prettier Extension**: Automatically recommended and configured
2. **Format on Save**: Enabled for all supported file types
3. **ESLint + Prettier**: Both work together seamlessly
4. **Real-time Formatting**: See changes as you work

### Original Theme Styling

- Main SASS files are located in `static/assets/sass/`
- Compile SASS to CSS using your preferred method
- CSS files are in `static/assets/css/`
- Both Tailwind and original styles work together

### Layout Modifications

- Edit templates in the `layouts/` directory
- Main layouts: `baseof.html`, `list.html`, `single.html`
- Partials: `nav.html`, `footer.html`, `scripts.html`

### Adding Custom JavaScript

- Add JS files to `static/assets/js/`
- Reference them in `layouts/partials/scripts.html`

## 🚀 Deployment

### Build for Production

```bash
hugo --minify
```

### Popular Deployment Options

**Netlify:**

1. Connect your Git repository
2. Set build command: `hugo --minify`
3. Set publish directory: `public`

**GitHub Pages:**

1. Use GitHub Actions with Hugo
2. Deploy the `public` folder

**Vercel:**

1. Import your repository
2. Vercel auto-detects Hugo projects

**Manual Server:**

1. Run `hugo --minify`
2. Upload the `public/` folder to your web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This Hugo implementation maintains the original template license:

- **Template**: Free for personal and commercial use under the [Creative Commons Attribution 3.0 License](https://html5up.net/license)
- **Hugo Implementation**: MIT License (see LICENSE file)

## 🙏 Credits

- **Original Template**: [HTML5 UP](https://html5up.net) by [@ajlkn](https://twitter.com/ajlkn)
- **Hugo Conversion**: Converted from HTML5 UP Massively template
- **Hugo Framework**: [Hugo](https://gohugo.io) static site generator

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Hugo Documentation](https://gohugo.io/documentation/)
2. Review the [HTML5 UP Template](https://html5up.net/massively) documentation
3. Open an issue in this repository
4. Check existing issues for similar problems

## 🔄 Updates

To update your site:

1. **Content Updates**: Simply edit Markdown files and Hugo will rebuild
2. **Template Updates**: Pull the latest changes from this repository
3. **Hugo Updates**: Keep Hugo updated to the latest version

---

**Happy blogging with Hugo and Massively!** 🎉
