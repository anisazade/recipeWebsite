/* FIXME
    - define eventlistener functions separately (so you dont have to call the events manually)
    ** Triggering an event on buttons has side effects **
*/

// ------------- Recipe form Toggle ------------------
document.getElementById("includeRecipe").addEventListener("change", (event)=> {
    const recipeSection = document.getElementById("recipe-maker");
    if (event.target.checked){
        recipeSection.style.opacity = "1";
        recipeSection.style.pointerEvents = "auto"
    }
    else{
        recipeSection.style.opacity = "0.4";
        recipeSection.style.pointerEvents = "none"
    }
});

// ------------- Ingredient form ------------------
const add_item_btn = document.querySelector("#add-item");
const item_node = document.querySelector("#ingredient-list li");
const measurement_input = document.createElement("input")
measurement_input.setAttribute("class", "costume-ingredient-unit")
measurement_input.setAttribute("name",  "unit")
measurement_input.setAttribute("placeholder", "unit")

add_item_btn.addEventListener("click", (event)=>{
    const list = document.querySelector("#ingredient-list");
    const new_item = item_node.cloneNode(true);
    new_item.querySelector(".ingredient-unit").addEventListener("change", (event)=>{
        if (event.target.value === "costume"){
            event.target.parentElement.appendChild(measurement_input.cloneNode())
            event.target.remove();
        }
    });
    new_item.querySelector(".del-btn").addEventListener("click", (event)=>{
        event.target.parentElement.remove()
    });
    list.insertBefore( new_item, event.target );
});

// because i didnt want to manually add the eventlisteners of the first li in script
item_node.remove();
add_item_btn.dispatchEvent(new Event("click"));


// ------------- Instruction form ------------------
const add_instruction_btn = document.getElementById("add-instruction");
const instruction_node = document.querySelector("#instruction-list li");

add_instruction_btn.addEventListener("click", (event)=>{
    const list = document.querySelector("#instruction-list");
    const new_instruction = instruction_node.cloneNode(true);
    new_instruction.querySelector(".del-btn").addEventListener("click", (event)=>{
        event.target.parentElement.remove()
    });
    list.insertBefore(new_instruction, event.target);
});

instruction_node.remove();
add_instruction_btn.dispatchEvent(new Event("click"));

function clearRecipe(){
    document.getElementById("ingredient-list").querySelectorAll("li").forEach(li=>li.remove());
    document.getElementById("instruction-list").querySelectorAll("li").forEach(li=>li.remove());
    add_item_btn.dispatchEvent(new Event("click"));   
    add_instruction_btn.dispatchEvent(new Event("click"));
}