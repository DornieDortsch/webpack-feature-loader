const path = require('path')

const createResolver = (request, context, extRegExp) => {
    const beforeResolve = result => {
        if (!result) return
        
        if(request === result.request) {
            result.context = context
            result.request = ''
            result.regExp = extRegExp
        }
        
        return result;
    }
    
    const afterResolve = result => {
        if (!result) return
        
        if(result.regExp === extRegExp) {
            result.resolveDependencies = createResolveDependenciesWrapper(result.resolveDependencies)
        }

        return result;
    }

    const createResolveDependenciesWrapper = resolveDependencies => (fs, options, callback) => {
        resolveDependencies(fs, options, createDependenciesWrapper(callback))
    }
    
    const createDependenciesWrapper = callback => (errors, dependencies) => {
        callback(errors, flattenDependencies(dependencies))
    }
        
    const flattenDependencies = dependencies => {
        dependencies.forEach(dependency => {
            dependency.userRequest = flattenUserRequest(dependency.userRequest)
        })
    
        return dependencies
    }
        
    const flattenUserRequest = userRequest => './' + path.basename(userRequest).replace(extRegExp,'')

    return {
        beforeResolve: beforeResolve,
        afterResolve: afterResolve
    }
}

// customized https://webpack.js.org/plugins/context-replacement-plugin/
class FlatContextPlugin {
    constructor(request, context, extRegExp) {
        this.resolver = createResolver(request, context, extRegExp)
    }

    apply(compiler) {
        compiler.hooks.contextModuleFactory.tap("FlatContextPlugin", cmf => {
            cmf.hooks.beforeResolve.tap("FlatContextPlugin", this.resolver.beforeResolve)
            cmf.hooks.afterResolve.tap("FlatContextPlugin", this.resolver.afterResolve)
        })
    }
}

module.exports = FlatContextPlugin