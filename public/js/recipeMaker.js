/* FIXME
    - define eventlistener functions separately (so you dont have to call the events manually)
    ** Triggering an event on buttons has side effects **
*/

// ------------- Recipe form Toggle ------------------

const recipeMaker = document.getElementById("recipe-maker");

document.getElementById("includeRecipe").addEventListener("change", (event) => {
    if (event.target.checked) {
        recipeMaker.style.opacity = "1";
        toggleElements(recipeMaker, (disabled = false));
    } else {
        recipeMaker.style.opacity = "0.4";
        toggleElements(recipeMaker);
    }
});

function toggleElements(containor, disabled = true) {
    containor.querySelectorAll("input, select, button").forEach((element) => {
        element.disabled = disabled;
    });
}

// ------------- Ingredient form ------------------
const item_node = document.querySelector("#ingredient-list li").cloneNode(true);
const add_item_btn = document.querySelector(".add-item");
const measurement_input = document.createElement("input");

item_node.style.display = "";

measurement_input.setAttribute("class", "costume-ingredient-unit");
measurement_input.setAttribute("name", "unit");
measurement_input.setAttribute("placeholder", "unit");

add_item_btn.addEventListener("click", (event) => {
    const list = document.querySelector("#ingredient-list");
    const new_item = item_node.cloneNode(true);
    new_item.querySelector(".ingredient-unit").addEventListener("change", (event) => {
        if (event.target.value === "costume") {
            event.target.parentElement.appendChild(measurement_input.cloneNode());
            event.target.remove();
        }
    });
    new_item.querySelector(".del-btn").addEventListener("click", (event) => {
        event.target.parentElement.remove();
    });
    list.insertBefore(new_item, event.target);
});

// ------------- Instruction form ------------------
const add_instruction_btn = document.querySelector(".add-instruction");
const instruction_node = document.querySelector("#instruction-list li").cloneNode(true);
instruction_node.style.display = "";

add_instruction_btn.addEventListener("click", (event) => {
    const list = document.querySelector("#instruction-list");
    const new_instruction = instruction_node.cloneNode(true);
    new_instruction.querySelector(".del-btn").addEventListener("click", (event) => {
        event.target.parentElement.remove();
    });
    list.insertBefore(new_instruction, event.target);
});

function clearRecipe() {
    document
        .getElementById("ingredient-list")
        .querySelectorAll("li")
        .forEach((li) => li.remove());
    document
        .getElementById("instruction-list")
        .querySelectorAll("li")
        .forEach((li) => li.remove());
    add_item_btn.dispatchEvent(new Event("click"));
    add_instruction_btn.dispatchEvent(new Event("click"));
}

add_item_btn.click();
add_instruction_btn.click();
toggleElements(recipeMaker);
