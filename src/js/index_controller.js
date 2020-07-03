class IndexController {
    "use strict";

    constructor(debug){
        this.debug = debug;
    }

    //Check content elements and request their html content from the backend
    loadContent(){
        this.log("Starting to load content for index.html");
    }

    log(output){
        if(this.debug){
            console.log(output);
        }
    }

}