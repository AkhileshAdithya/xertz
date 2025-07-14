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

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

---

Built with the burning hatred of a thousand suns using React, TypeScript, and Vite
