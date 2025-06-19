module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {
      stage: 1,
      features: {
        'nesting-rules': true
      }
    },
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true
      }
    },
    tailwindcss: {},
    autoprefixer: {},
  },
}