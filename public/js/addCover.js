const input = document.getElementById("post-cover-input");

function addCover() {
    input.click();
}

input.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const cover = document.querySelector("#post-cover img");
            cover.setAttribute("src", e.target.result);
            if(cover.getAttribute("data-default-cover")=="on")
                cover.setAttribute("data-default-cover", "off");
        };
        reader.readAsDataURL(file);
    }
});
