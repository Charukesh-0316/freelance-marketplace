// Use the new PostCSS plugin package for Tailwind CSS.
// This requires installing `@tailwindcss/postcss` alongside tailwindcss and autoprefixer.
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
}

