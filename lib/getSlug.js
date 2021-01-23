const getSlug = (path) => path.replace(/\s+/g, '-').toLowerCase();
export default getSlug;
