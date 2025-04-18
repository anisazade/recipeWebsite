/*
to improve:
- (implemented) can you replace the span element? 
- turn this into an IIFE
- add the css rule using js
(possible) bugs:
- with only images inserted, the placeholder won't go off (?)
- (FIXED) cant select using poniter. 
- (FIXED) arrowkeys handler
*/

const editor = document.getElementById("editor");
const placeholder_text = "Type here...";
editor.textContent = placeholder_text;

editor.addEventListener("keydown", (event)=>{
    const placeholder_status = event.target.getAttribute("data-placeholder-state") === "on";

    if(event.key.length === 1 || event.key.toLowerCase() === "enter"){
        if(placeholder_status){
            event.target.setAttribute("data-placeholder-state", "off");
            event.target.textContent = "";
        }
    }
    else if(event.key.toLowerCase() === "backspace" || event.key.toLowerCase()=== "delete"){
        if (placeholder_status){
            event.preventDefault();
        }
        else{
            setTimeout(()=>{addPhIfEmpty(event.target)},0);
        }
    }
    else if(placeholder_status && event.key.toLowerCase().startsWith("arrow")){
        event.preventDefault();
    }
});

editor.addEventListener("focus", (event)=>{
    if(editor.getAttribute("data-placeholder-state") === "on"){
        event.preventDefault();
        moveCursorToStart(event.target);
    }
});

editor.addEventListener("blur", (event)=>{
    if(editor.getAttribute("data-placeholder-state") === "on"){
        event.preventDefault();
        window.getSelection().removeAllRanges();
    }
});

editor.addEventListener(("pointerdown"), (event)=>{
    if(editor.getAttribute("data-placeholder-state") === "on"){
        event.preventDefault();
        moveCursorToStart(event.target);
    }
});

function addPhIfEmpty(element){
    if (element.innerText=="\n"){
        element.setAttribute("data-placeholder-state", "on");
        element.textContent = placeholder_text;
    }
}

function moveCursorToStart(element) {
    const range = document.createRange();
    const selection = window.getSelection();
    
    range.setStart(element, 0);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
}
