const next_btn = document.querySelector(".next-btn");
const pre_btn = document.querySelector(".previous-btn");
const interval = 5000;
function slide(direction = true) {
    const slider = document.querySelector(".slider");
    const slides = slider.querySelectorAll(".slider > .slide");
    const display_div = slider.querySelector(".current-slide");
    const current_slide = display_div.querySelector(".slide");
    // slide forward
    if (direction == true) {
        const next_slide = slides[0];
        next_slide.style.visibility = "visible";
        current_slide.style.visibility = "hidden";
        display_div.appendChild(next_slide);
        slider.appendChild(current_slide);
    }
    // slide backward
    else {
        const previous_slide = slides[slides.length - 1];
        previous_slide.style.visibility = "visible";
        current_slide.style.visibility = "hidden";
        display_div.appendChild(previous_slide);
        slider.prepend(current_slide);
    }
}

next_btn.addEventListener("click", slide);
pre_btn.addEventListener("click", () => slide(false));

setInterval(slide, interval);
