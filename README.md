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
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Social Media Ready**: Built-in social media link configuration
- **Contact Form**: Ready-to-use contact form layout
- **Fast Loading**: Optimized assets and static generation for speed
- **Easy Content Management**: Markdown-based content creation

## 📋 Prerequisites

Before running this project, ensure you have:

- [Hugo Extended](https://gohugo.io/installation/) (v0.100.0 or later)
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

3. **Start the development server**
   ```bash
   hugo server
   ```

4. **Open your browser** and navigate to `http://localhost:1313`

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
   title: "My Awesome Blog Post"
   date: 2024-10-22
   draft: false
   description: "A brief description of your post"
   image: "images/my-post-image.jpg"           # Optional: Post thumbnail
   featured_image: "images/my-featured.jpg"    # Optional: For featured posts
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

### Styling
- Main SASS files are located in `static/assets/sass/`
- Compile SASS to CSS using your preferred method
- CSS files are in `static/assets/css/`

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