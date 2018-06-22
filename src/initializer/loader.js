export default name => {
    return import(/* webpackChunkName: "feature/[request]" */ '/feature/' + name)
}