const checkBox = document.querySelector("#menu__icon");
const nav_menu = document.querySelector(".nav__menu");

checkBox.addEventListener("click", () => {
    if(checkBox.checked == true){
        nav_menu.classList.add('open');
    } else {
        nav_menu.classList.remove('open');
    }

})


