module.exports = {
  //Estos presets tienen que estar instalados en el package.json
  presets: [
    ['@babel/preset-env', { targets: { esmodules: 'true' } }], //ES6
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString('process');
          },
        },
      };
    },
  ],
};
