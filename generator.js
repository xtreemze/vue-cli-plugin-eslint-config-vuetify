module.exports = api => {
  api.extendPackage({
    devDependencies: {
      'eslint-config-vuetify-pascal': '*'
    },
    eslintConfig: {
      extends: 'vuetify'
    }
  })
}
