"use strict";

class Options{
    constructor (height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    create(text){
        let div = document.createElement('div');
        div.innerHTML=text;
        div.style.cssText=`height: ${this.height};
            width: ${this.width};
            background-color: ${this.bg};
            font-size: ${this.fontSize};
            text-align: ${this.textAlign};
            `;
        return div;
    }

}

let newDIV = new Options(100,100,'red',10,'center');

 

 console.log(newDIV);
 document.body.append(newDIV.create('хуй'));
