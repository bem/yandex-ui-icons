/* eslint-disable react-hooks/rules-of-hooks */

const { useCleanUpPlugin } = require('@bem-react/pack/lib/plugins/CleanUpPlugin')
const { useCopyAssetsPlugin } = require('@bem-react/pack/lib/plugins/CopyAssetsPlugin')
const { useTypeScriptPlugin } = require('@bem-react/pack/lib/plugins/TypeScriptPlugin')
const { usePackageJsonPlugin } = require('@bem-react/pack/lib/plugins/PackageJsonPlugin')

/**
 * @type {import('@bem-react/pack/lib/interfaces').Config}
 */
module.exports = {
  output: './dist',

  plugins: [
    useCleanUpPlugin(['./dist']),

    useTypeScriptPlugin({
      configPath: './tsconfig.prod.json',
      onCreateSideEffects: () => false,
    }),

    useCopyAssetsPlugin([
      {
        context: './src',
        src: './**/*.svg',
        output: ['./dist', './dist/esm'],
      },
      {
        src: ['./readme.md'],
      },
    ]),

    usePackageJsonPlugin({
      module: './esm/index.js',
      scripts: {},
      sideEffects: false,
    }),
  ],
}
