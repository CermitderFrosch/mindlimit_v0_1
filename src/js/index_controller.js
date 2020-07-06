class IndexController {
    "use strict";

    constructor(debug){
        this.debug = debug;
    }

    //Check content elements and request their html content from the backend
    loadContent(){
        this.log("Starting to load content for index.html");

        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            console.log(this.response);
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