
import DOMPurify from 'dompurify';

export const sanitizeInput = (input: string): string => {
  // Remove all HTML tags and return plain text
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
};

export const sanitizeSearchQuery = (query: string): string => {
  // Sanitize and limit search query length
  const sanitized = sanitizeInput(query);
  return sanitized.length > 100 ? sanitized.substring(0, 100) : sanitized;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sanitizedEmail = sanitizeInput(email);
  return emailRegex.test(sanitizedEmail) && sanitizedEmail.length <= 254;
};

export const sanitizeMarkdown = (content: string): string => {
  // Allow basic markdown but sanitize dangerous content
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [],
    KEEP_CONTENT: true
  });
};
