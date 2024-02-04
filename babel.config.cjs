module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current'
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@babel/react'
  ],
  ignore: [/node_modules\/(?!@sequencemedia\/react-router-redux-render)/]
}
