# Xertz - Book Review Platform

A modern, responsive book review website built with React and TypeScript, featuring in-depth reviews of books across multiple genres including philosophy, web novels, and science fiction.

## Book Collection

Contains some recommendations of the books I've read and care to recommend. The list is pretty outdated right now and needs updating. My view of certain nuanced takes have also changed and might not match my current idealogies.

In an ideal world, I wouldn't be lazy and would add a book every time I read something. But for now, I'll stick to sharing just the REALLY good ones.


## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/akhileshadithya/xertz.git
cd xertz
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```


## Project Structure

```
src/
├── components/          # React components
│   ├── AllBooks.tsx    # Display all books
│   ├── TopBooks.tsx    # Top-rated books
│   ├── BookPreview.tsx # Book preview cards
│   ├── Review.tsx      # Individual book reviews
│   ├── Header.tsx      # Navigation header
│   ├── Blog.tsx        # Blog functionality
│   └── MarkdownRenderer.tsx # Markdown content renderer
├── data/
│   ├── Data.md         # Book reviews in markdown
│   ├── Data.ts         # Book data processing
│   └── BookLoader.ts   # Data loading utilities
├── types/
│   └── Book.ts         # TypeScript interfaces
├── utils/
│   └── MarkdownParser.ts # Markdown parsing utilities
└── styles.css          # Global styles
```

## Adding New Reviews

To add a new book review:

1. Add the book's cover image to `public/Resources/[BookName]/`
2. Update `src/data/Data.md` with the new review following the existing format:
   ```markdown
   # Book Title
   - **Author:** Author Name
   - **Rating:** X
   - **Image:** Resources/BookName/image.jpg
   - **Slug:** book-slug

   ## Review
   [Your review content]
   ```

## Live Demo

Visit the live site: [https://akhileshadithya.github.io/xertz](https://akhileshadithya.github.io/xertz)

## Deployment

### Automatic Deployment

This project is configured with automatic deployment to GitHub Pages. When you push changes to the `master` branch, the site will automatically build and deploy.

**How it works:**
- A git pre-push hook triggers when pushing to master
- Automatically runs `npm run build && gh-pages -d dist`
- Deploys the built site to the `gh-pages` branch
- Updates the live site at https://akhileshadithya.github.io/xertz

**Git Hook Setup:**
- Git hooks are automatically installed when you run `npm install`
- The hook script is stored in `hooks/pre-push` and copied to `.git/hooks/pre-push`
- This ensures all contributors get the same deployment behavior

### Manual Deployment

To deploy manually at any time:

```bash
npm run deploy
```

This command will:
1. Build the project (`npm run build`)
2. Deploy the `dist` folder to GitHub Pages

### Git Hooks Management

If you need to manually install or reinstall the git hooks:

```bash
npm run setup-hooks
```

This copies the hook from `hooks/pre-push` to `.git/hooks/pre-push` and makes it executable.

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

---

Built with the burning hatred of a thousand suns using React, TypeScript, and Vite
