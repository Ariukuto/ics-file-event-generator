"use strict";

function createOptionsInSelect(element, count) {
    for(var i=0; i <= count; i++) {
        var optionElement = document.createElement("option");
        if(i < 10) {
            optionElement.value = "0" + i;
            optionElement.text = "0" + i;
        } else {
            optionElement.value = i;
            optionElement.text = i;
        }
        element.appendChild(optionElement);
    }
}