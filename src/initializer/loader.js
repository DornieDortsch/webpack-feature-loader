export default name => {
    return import(/* webpackChunkName: "feature/[request]" */ '/' + name + '.js')
}