module.exports = function() {
    this.extendBuild(config => {
        config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue|ts)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        })
    })
}