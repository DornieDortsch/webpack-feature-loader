import $ from 'zepto-webpack'

export default () => {
    console.log('execute subfeature')

    $("<p>Zepto subfeature</p>").appendTo('body')
}