module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
  env: {
    HOME: process.env.API_STORE_HOME,
    SEO: process.env.API_STORE_SEO,
    BANNERS: process.env.API_STORE_BANNERS,
    PRODUCTS: process.env.API_STORE_PRODUCTS,
    PRODUCT_ID: process.env.API_STORE_PRODUCT_ID,
    FILTER: process.env.API_STORE_FILTER,
    APP_SHEET: process.env.APP_SHEET_ID,
  },
};
