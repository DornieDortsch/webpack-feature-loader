const createFeatureComponent = feature => {
    var element = document.createElement('a')
    
    element.href= '#'
    element.style.display = 'block'
    element.innerHTML = 'execute ' + feature
    element.onclick = () => {
        executeFeature(feature)
        return false
    }
    
    return element
}

const executeFeature = name => {
    loadFeature(name).then(feature => {
        console.log('feature ' + name + ' loaded')
        feature.default()
    })
}

const loadFeature = name => {
    return import(/* webpackChunkName: "feature/[request]" */ '/' + name + '.js')
}

console.log('start feature-loader')

executeFeature('feature')
executeFeature('subfeature')

document.body.appendChild(createFeatureComponent('feature'))
document.body.appendChild(createFeatureComponent('subfeature'))