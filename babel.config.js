module.exports = {
  sourceMaps: true,
  plugins: [
    ['transform-class-properties'],
    [
      'import',
      {
        libraryName: 'pf-component',
        style: true,
        camel2DashComponentName: false
      }
    ]
  ],
  presets: [
    ['@babel/preset-react'],
    [
      '@babel/preset-env',
      {
        targets: {
          ios: '9',
          android: '4'
        },
        useBuiltIns: 'entry',
        corejs: '2',
        debug: false
      }
    ]
  ],
  ignore: ['node_modules']
}
