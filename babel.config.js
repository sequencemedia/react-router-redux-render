module.exports = {
  compact: true,
  comments: false,
  presets: [
    [
      '@babel/env', {
        targets: {
          node: 'current'
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@babel/react'
  ],
  plugins: [
    '@babel/transform-runtime',
    '@babel/proposal-throw-expressions',
    '@babel/proposal-export-default-from',
    '@babel/proposal-export-namespace-from'
  ]
}
