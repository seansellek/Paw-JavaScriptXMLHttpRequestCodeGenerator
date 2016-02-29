var mustache = require('./mustache')

var VanillaJSCodeGenerator = function() {

    
    this.generate = function(context) {
         
        var template = readFile("request.mustache");

        var view = {
            "request":context.getCurrentRequest(),
            "content_type":context.getCurrentRequest().getHeaderByName('Content-Type'),
        };

        return Mustache.render(template, view);
    }
}


MyCodeGenerator.identifier = "com.seansellek.VanillaJSCodeGenerator";


MyCodeGenerator.title = "Vanilla JavaScript";
