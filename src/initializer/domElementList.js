export default (document, selector) => {
    const htmlElements = document.querySelectorAll(selector)
    
    return {
        forEach: callback => {
            if(htmlElements) {
                for (var i = htmlElements.length; i--; callback(htmlElements[i], i, htmlElements));
            }
        }
    }
}