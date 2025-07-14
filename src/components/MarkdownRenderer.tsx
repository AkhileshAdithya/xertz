import React from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
  // Simple markdown parser for basic formatting
  const parseMarkdown = (text: string): React.ReactElement[] => {
    const lines = text.split('\n');
    const elements: React.ReactElement[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip empty lines
      if (line.trim() === '') {
        elements.push(<br key={key++} />);
        continue;
      }

      // Handle headers
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="reviewSectionTitle">
            {line.substring(4)}
          </h3>
        );
      } else if (line.startsWith('## ')) {
        // Skip rendering "## Review" headers but keep other ## headers
        if (line.trim() !== '## Review') {
          elements.push(
            <h2 key={key++} className="reviewMainTitle">
              {line.substring(3)}
            </h2>
          );
        }
      } else if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={key++} className="reviewSubSectionTitle">
            {line.substring(5)}
          </h4>
        );
      } else {
        // Regular paragraph
        elements.push(
          <p key={key++} className="reviewText">
            {formatInlineMarkdown(line)}
          </p>
        );
      }
    }

    return elements;
  };

  // Handle inline formatting like **bold**
  const formatInlineMarkdown = (text: string): React.ReactNode => {
    // Handle bold text
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className={className}>
      {parseMarkdown(content)}
    </div>
  );
};

export default MarkdownRenderer;
