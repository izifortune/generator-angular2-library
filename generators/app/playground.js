const setupPlayground =
  (generator) => {
    // Copy playground
    generator.fs.copyTpl(
      generator.templatePath('_systemjs.config.js'),
      generator.destinationPath('systemjs.config.js'),
      {
        props: generator.props
      }
    );

    generator.fs.copy(
      generator.templatePath('systemjs-angular-loader.js'),
      generator.destinationPath('systemjs-angular-loader.js')
    );

    generator.fs.copyTpl(
      generator.templatePath('playground/_index.ts'),
      generator.destinationPath('playground/index.ts'),
      {
        props: generator.props
      }
    );

    generator.fs.copyTpl(
      generator.templatePath('_index.html'),
      generator.destinationPath('index.html'),
      {
        props: generator.props
      }
    );

    generator.fs.copy(
      generator.templatePath('playground/tsconfig.json'),
      generator.destinationPath('playground/tsconfig.json')
    );
  };

module.exports = setupPlayground;
