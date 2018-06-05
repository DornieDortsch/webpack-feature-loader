const Feature = (name, value, element) => {
    const moduleName = name.replace(/-([a-z])/g, name => name[1].toUpperCase()) //Convert foo-bar to fooBar
    
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
        moduleName: moduleName,
        element: element,
        get options() {
            return lazyOptions()
        }
    }

    return {
        context,
        execute: loader => {
            loader(moduleName)
            .then(module => {
                try {
                    module.default(context)
                } catch(err) {
                    console.error('executing module "' + moduleName + '" with error: ', err)
                }
            })
            .catch(err => console.error('loading module "' + moduleName + '" with error: ', err))
        }
    }
}

export default Feature