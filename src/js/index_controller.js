class IndexController {
    "use strict";

    constructor(debug){
        this.debug = debug;
        this.renderer = new Renderer;
    }

    //Check content elements and request their html content from the backend
    loadContent(){
        this.log("Starting to load content for index.html");
        var that = this;
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            var content = that.renderer.render(this.response);
            document.querySelectorAll("[content_area=head]")[0].append(content);
        }
        xhr.open("GET", "../src/php/backend_test.php");
        xhr.responseType = "json";
        xhr.send();
    }

    log(output){
        if(this.debug){
            console.log(output);
        }
    }

}