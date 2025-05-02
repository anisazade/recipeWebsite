const dropDownBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

dropDownBtn.addEventListener("click", ()=>{
    menu_visibility = window.getComputedStyle(menu).getPropertyValue("visibility")
    if (menu_visibility === "hidden"){
        menu.style.visibility = "visible"
    }
    else{
        menu.style.visibility = "hidden"
    }

});