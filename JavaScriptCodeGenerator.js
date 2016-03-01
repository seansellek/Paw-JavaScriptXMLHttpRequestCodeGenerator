var JavaScriptCodeGenerator = function() {
    var Mustache = require('./mustache')
    
    this.generate = function(context) {
         
        var template = readFile("request.mustache");
        var request = context.getCurrentRequest();
        var view = {
            "method": request.method,
            "url": request.url,
            "body": request.body.replace(/([^\\])"/g, function(orig, p1) { return p1 + "\\\""; }),
            "headers": function() {
              var headers = request.headers;
              var array = [];
              for (var name in headers) {
                var header = {};
                header.name = name;
                header.value = headers[name].replace(/"/g, "\\\"");
                array.push(header);
              }
              return array;
            }
        };

        return Mustache.render(template, view);
    }
}


JavaScriptCodeGenerator.identifier = "com.seansellek.PawExtensions.JavaScriptCodeGenerator";
JavaScriptCodeGenerator.title = "JavaScript";
JavaScriptCodeGenerator.fileExtension = "js";
JavaScriptCodeGenerator.languageHighlighter = "javascript";
registerCodeGenerator(JavaScriptCodeGenerator);
