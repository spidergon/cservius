module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  // astroAllowShorthand: false,
  printWidth: 100,
  singleQuote: true,
};
