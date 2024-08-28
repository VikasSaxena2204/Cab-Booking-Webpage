let menu = document.querySelector("#navbar");
let nav = document.querySelector(".menu");

let showcontactform = document.querySelector(".contact");
let myform = document.querySelector(".contact-form")

let formclose = document.querySelector("#form-close")




menu.onclick = () => {// Get DOM elements
    const menu = document.querySelector("#navbar");
    const nav = document.querySelector(".menu");
    
    const showContactForm = document.querySelector(".contact");
    const myForm = document.querySelector(".contact-form");
    
    const formClose = document.querySelector("#form-close");
    
    // Utility function to toggle classes with debounce for performance
    const debounce = (func, delay = 200) => {
        let timer;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    };
    
    // Toggle navbar menu
    const toggleMenu = () => {
        menu.classList.toggle("fa-times");
        nav.classList.toggle("active");
    };
    
    // Show contact form
    const toggleContactForm = () => {
        myForm?.classList.toggle("active");
    };
    
    // Close contact form
    const closeContactForm = () => {
        myForm?.classList.remove("active");
    };
    
    // Event listeners with null checks
    menu?.addEventListener("click", debounce(toggleMenu));
    showContactForm?.addEventListener("click", toggleContactForm);
    formClose?.addEventListener("click", closeContactForm);
    
    // Keyboard accessibility for toggling
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeContactForm(); // Close form with ESC key
        }
    });
    
    menu.classList.toggle("fa-times")
    nav.classList.toggle("active")
}
showcontactform.onclick = () => {
    myform.classList.toggle('active')
}
formclose.onclick = () => {
    myform.classList.remove('active')
}
