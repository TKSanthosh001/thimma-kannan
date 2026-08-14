/**
 * Safely resolves static image paths for relative deployment (GitHub Pages, Netlify, Custom Domains)
 */
export const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `./${cleanPath}`;
};
