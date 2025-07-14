import type { Book } from '../types/Book';

export class MarkdownParser {
  /**
   * Parse the markdown file and return an array of Book objects
   */
  static parseMarkdown(markdownContent: string): Book[] {
    const books: Book[] = [];
    
    // Split content by book sections (# BOOK NAME)
    const bookSections = this.splitIntoBookSections(markdownContent);
    
    for (const section of bookSections) {
      const book = this.parseBookSection(section);
      if (book) {
        books.push(book);
      }
    }
    
    return books;
  }
  
  /**
   * Split markdown content into individual book sections
   */
  private static splitIntoBookSections(content: string): string[] {
    const sections: string[] = [];
    const lines = content.split('\n');
    let currentSection: string[] = [];
    
    for (const line of lines) {
      // Check if this is a book title (starts with # but not ##)
      if (line.match(/^# [^#]/)) {
        // Save previous section if it exists
        if (currentSection.length > 0) {
          sections.push(currentSection.join('\n'));
        }
        // Start new section
        currentSection = [line];
      } else {
        currentSection.push(line);
      }
    }
    
    // Add the last section
    if (currentSection.length > 0) {
      sections.push(currentSection.join('\n'));
    }
    
    return sections;
  }
  
  /**
   * Parse a single book section into a Book object
   */
  private static parseBookSection(section: string): Book | null {
    const lines = section.split('\n');
    
    // Extract book name from first line (# BOOK NAME)
    const titleMatch = lines[0].match(/^# (.+)$/);
    if (!titleMatch) {
      return null;
    }
    
    const name = titleMatch[1].trim();
    
    // Extract metadata from bullet points
    const metadata = this.extractMetadata(lines);
    
    // Extract review content (everything after ## Review)
    const reviewContent = this.extractReviewContent(section);
    
    // Extract synopsis from review content for backward compatibility
    const synopsis = this.extractSynopsis(reviewContent);
    
    return {
      name,
      author: metadata.author || '',
      rating: metadata.rating || 0,
      pic: metadata.image || '',
      slug: metadata.slug || this.generateSlug(name),
      review: reviewContent,
      synopsis
    };
  }
  
  /**
   * Extract metadata from bullet points
   */
  private static extractMetadata(lines: string[]): {
    author?: string;
    rating?: number;
    image?: string;
    slug?: string;
  } {
    const metadata: any = {};
    
    for (const line of lines) {
      const authorMatch = line.match(/- \*\*Author:\*\* (.+)$/);
      if (authorMatch) {
        metadata.author = authorMatch[1].trim();
        continue;
      }
      
      const ratingMatch = line.match(/- \*\*Rating:\*\* (\d+)$/);
      if (ratingMatch) {
        metadata.rating = parseInt(ratingMatch[1], 10);
        continue;
      }
      
      const imageMatch = line.match(/- \*\*Image:\*\* (.+)$/);
      if (imageMatch) {
        metadata.image = imageMatch[1].trim();
        continue;
      }
      
      const slugMatch = line.match(/- \*\*Slug:\*\* (.+)$/);
      if (slugMatch) {
        metadata.slug = slugMatch[1].trim();
        continue;
      }
    }
    
    return metadata;
  }
  
  /**
   * Extract review content (everything after ## Review)
   */
  private static extractReviewContent(section: string): string {
    const reviewStartIndex = section.indexOf('## Review');
    if (reviewStartIndex === -1) {
      return '';
    }
    
    return section.substring(reviewStartIndex).trim();
  }
  
  /**
   * Extract synopsis from review content for backward compatibility
   */
  private static extractSynopsis(reviewContent: string): string {
    const synopsisMatch = reviewContent.match(/### Synopsis\s*\n(.*?)(?=\n### |$)/s);
    if (synopsisMatch) {
      return synopsisMatch[1].trim();
    }
    return '';
  }
  
  /**
   * Generate a slug from book name
   */
  private static generateSlug(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();
  }
}

/**
 * Load and parse books from markdown file
 */
export async function loadBooksFromMarkdown(): Promise<Book[]> {
  try {
    // In a real application, you might fetch this from a server
    // For now, we'll import it as a text file
    const response = await fetch('/src/data/Data.md');
    const markdownContent = await response.text();
    
    return MarkdownParser.parseMarkdown(markdownContent);
  } catch (error) {
    console.error('Error loading books from markdown:', error);
    return [];
  }
}
