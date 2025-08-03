export const getImageUrl = (path?: string, size = "600x400") => {
  const imageBase = import.meta.env.VITE_IMAGE_API || "";

  if (!path) return `https://via.placeholder.com/${size}?text=No+Image`;

  const cleanBase = imageBase.replace(/\/+$/, ""); 
  const cleanPath = path.replace(/^\/+/, "");      

  return `${cleanBase}/${cleanPath}`;
};
