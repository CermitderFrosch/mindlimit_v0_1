class Renderer{
    "use strict"

    constructor(){
        this.workload = {};
    }

    render(json_fragment){
        this.workload = json_fragment;
        switch(json_fragment.type){
            case "fragment":
                return this.render_fragment();
        }
    }

    render_fragment(){
         return this.createNode(this.workload.payload.element);
    }

    createNode(desc){
        var node;
        switch(desc.type){
          case "div":
            node = document.createElement("div");
            node.classList.add(desc.class);
            node.setAttribute("id", desc.id);
            for(let i = 0; i < desc.children.length; i++){
              let childNode = this.createNode(desc.children[i]);
              node.appendChild(childNode);
            }
            return node;
          case "p":
            node = document.createElement("p");
            node.innerHTML = desc.content;
            return node;
          case "button":
            node = document.createElement("button");
            if(desc.class != ""){
              node.classList.add(desc.class);
            }
            node.setAttribute("id", desc.id);
            for( let i = 0; i < desc.content.length; i++){
              node.append(this.createNode(desc.content[i]));
            }
            return node;
          case "h1":
            node = document.createElement("h1");
            if(desc.class != ""){
              node.classList.add(desc.class);
            }
            node.setAttribute("id", desc.id);
            node.innerHTML = desc.content;
            return node;
          case "ul":
            node = document.createElement("ul");
            if(desc.class != ""){
              node.classList.add(desc.class);
            }
            node.setAttribute("id", desc.id);
            for(let i = 0; i < desc.elements.length; i++){
              let list_node = document.createElement("li");
              list_node.innerHTML = desc.elements[i];
              node.append(list_node);
            }
            return node;
        }
      }
}