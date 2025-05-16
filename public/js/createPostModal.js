/*FIXME
- import all related scripts here and only link this one to the html page.
*/

document.querySelector("#create-post-modal form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("body", document.querySelector("#editor"));
    fetch("/dashboard/newPost", {
        method: "POST",
        body: formData
    }).then(response =>{
        if (response.ok){
            console.log("Post successflly created");
        }
    });
});

document.querySelector("#create-post-modal .close-btn").addEventListener("click", (event) => {
    event.target.parentElement.style.visibility = "hidden";
});

// This key clears all the user inputs and closes the modal
document.querySelector("#create-post-modal .discard-btn").addEventListener("click", (event) => {
    document.getElementById("create-post-modal").style.visibility = "hidden";
    clearText();
    clearRecipe();
    document.getElementById("post-title-input").value = "";
    recipe_toggle = document.getElementById("includeRecipe");
    recipe_toggle.checked = false;
    recipe_toggle.dispatchEvent(new Event("change"));
});
