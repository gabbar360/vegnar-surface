export const getImageUrl = (url) => {
  if (!url) return '';
  // If URL already has http/https, use it directly (Cloudinary)
  if (url.startsWith('http')) {
    return url;
  }
  // Otherwise, add base URL (local files)
  return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${url}`;
};