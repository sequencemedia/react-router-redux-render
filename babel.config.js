module.exports = {
  compact: true,
  comments: false,
  presets: [
    [
      '@babel/env', {
        useBuiltIns: 'usage',
        targets: {
          node: '12.9.0'
        },
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
