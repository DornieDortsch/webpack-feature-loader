import $ from 'zepto-webpack'

export default () => {
    console.log('execute feature')

    $("<p>Zepto feature</p>").appendTo('body')
}