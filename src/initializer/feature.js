const Feature = (name, value, element) => {
    const featureName = name.replace(/-([a-z])/g, name => name[1].toUpperCase()) //Convert foo-bar to fooBar
    
    let options = null
    
    const lazyOptions = () => {
        if(!options) {
            try {
                options = value ? JSON.parse(value) : {}
            } catch(e) {
                options = {}
            }
        }
        return options
    }

    const context = {
        featureName: featureName,
        element: element,
        get options() {
            return lazyOptions()
        }
    }

    return {
        context,
        execute: loader => {
            loader(featureName)
            .then(module => {
                try {
                    module.default(context)
                } catch(err) {
                    console.error('executing module "' + featureName + '" with error: ', err.message)
                }
            })
            .catch(err => console.error('loading module "' + featureName + '" with error: ', err.message))
        }
    }
}

export default Feature