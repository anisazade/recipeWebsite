/*
bugs:
- can't resize image
- can't insert when placeholder is on 
*/

const img_upload = document.getElementById("imageUpload")

function insertImage(){
    img_upload.click()
}

img_upload.addEventListener("change", (event)=>{
    const file = event.target.files[0]
    if (file){
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgTag = `<img src="${e.target.result}" style="max-width:70%; display:block; 
            margin:10px 0;">`;
            insertAtCursor(imgTag);
        };
        reader.readAsDataURL(file);
        } 
});

function insertAtCursor(html) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const frag = document.createDocumentFragment();

    let node;
    while ((node = tempDiv.firstChild)) {
        frag.appendChild(node);
    }
    range.insertNode(frag);
}