/*
bugs:
- (SOLVED) can't undo
- (SOLVED) can't apply multiple formats at once (must select and apply separately)
- can't apply format without selecting and
- can't undo part of the formated text
improvemnt:
- make the button an ouline when selecting a new text (Tooooo much)
test:
- test with pictures added
*/

function formatText(format){
    if (!(format==='b' || format ==='i' || format ==='u')){
        console.log("wrong format passed!")
        return;
    }
    const selection = window.getSelection();
    if (selection.rangeCount > 0){
        const range = selection.getRangeAt(0);
        console.log(range.cloneContents());
        const selected_fragment = range.cloneContents();
        let newElement = null;
        // if the format exists, remove it
        const formated_element= selected_fragment.querySelector(format);
        if(formated_element){
            removeFormat(formated_element);
            newElement = selected_fragment;
        }
        else{
            newElement = document.createElement(format);
            newElement.appendChild(selected_fragment);
            if (!newElement.textContent){
                console.log("empty")
                newElement.textContent="\u200B"
            }
        }
        range.deleteContents();

        range.insertNode(newElement);
        // range.setStart(newElement, 0); // Move the cursor inside
        // range.setEnd(newElement, 0);        

    }
}

function removeFormat(formated_element){
    const parent = formated_element.parentNode;
    while (formated_element.firstChild) {
        parent.insertBefore(formated_element.firstChild, formated_element);
    }
    parent.removeChild(formated_element);
}