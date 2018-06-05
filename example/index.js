import Initializer from '../src/initializer/initializer'
import loadFeature from '../src/initializer/loader'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    
    console.log('Start feature initialization')
    
    Initializer.run(document, loadFeature)
});


