export interface Book {
  // Mandatory fields
  name: string;
  author: string;
  rating: number;
  pic: string;
  slug: string;
  
  // Flexible review content as markdown
  review: string;
  
  // Convenience fields for backward compatibility
  synopsis?: string;
}
