import $ from 'zepto-webpack'

export default context => {
    $(context.element).text(context.options.text)
}