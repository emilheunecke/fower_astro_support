export default {
  plugins: [
    ['@snowpack/plugin-babel'],
  ],
  packageOptions: { 
    knownEntrypoints: [
      "@fower/react"
    ]
  }
};