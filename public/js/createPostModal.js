/*FIXME
- import all related scripts here and only link this one to the html page.
*/

const modal = document.getElementById("create-post").cloneNode(true);
const close_btn = document.querySelector("#create-post .close-btn");
const post_btn = document.querySelector("#create-post .post-btn");
const discard_btn = document.querySelector("#create-post #discard-btn");

close_btn.addEventListener("click", (event) => {
    event.target.parentElement.style.visibility = "hidden";
});

// This key clears all the user inputs and closes the modal
discard_btn.addEventListener("click", (event) => {
    document.getElementById("create-post").style.visibility = "hidden";
    clearText();
    clearRecipe();
    document.getElementById("post-title-input").value = "";
    recipe_toggle = document.getElementById("includeRecipe");
    recipe_toggle.checked = false;
    recipe_toggle.dispatchEvent(new Event("change"));
});
