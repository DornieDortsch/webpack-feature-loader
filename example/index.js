import Initializer from '../src/initializer/initializer'
import loadFeature from '../src/initializer/loader'

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    
    console.log('Start feature initialization')
    
    Initializer.run(document, loadFeature)
});


