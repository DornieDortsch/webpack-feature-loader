const createFeatureComponent = feature => {
    var element = document.createElement('button')
    
    element.href= '#'
    element.style.display = 'inline-block'
    element.style.margin = '8px 0 8px 8px'
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