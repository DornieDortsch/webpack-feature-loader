import makeFeature from './feature'

export default (domElement, namespace) => {

    const getFeaturesFromElement = callback => {
        if(domElement && domElement.attributes) {
            for (var i = 0; i < domElement.attributes.length; i++) {
                getFeatureFromAttribute(domElement.attributes[i], callback)
            }
        }
    }

    const getFeatureFromAttribute = (attribute, callback) => {
        const fullName = (attribute.nodeName || attribute.name || '')

        if (fullName.indexOf(namespace) === 0) {
            const name = fullName.replace(namespace, '')
            const value = (attribute.value || attribute.nodeValue || '{}')
            callback(makeFeature(name, value, domElement))
        }
    }
    
    return {
        forEach: callback => {
            getFeaturesFromElement(callback)
        }
    }
}