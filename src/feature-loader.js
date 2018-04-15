const loadFeature = name => {
    import(/* webpackChunkName: "feature/[request]" */ '/' + name + '.js')
        .then(feature => feature.default())
}

console.log('start feature-loader')

loadFeature('feature')

loadFeature('subfeature')