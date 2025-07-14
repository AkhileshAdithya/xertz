import type { Book } from '../types/Book';
import { MarkdownParser } from '../utils/MarkdownParser';

// Import the markdown content directly
import markdownContent from './Data.md?raw';

/**
 * Parse and return books from the markdown data
 */
export function loadBooks(): Book[] {
  try {
    return MarkdownParser.parseMarkdown(markdownContent);
  } catch (error) {
    console.error('Error parsing books from markdown:', error);
    return [];
  }
}

// Export the data for backward compatibility
export const data: Book[] = loadBooks();
