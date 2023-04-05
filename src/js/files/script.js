// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


let subMenuBtn = document.querySelector('.sub-menu__btn');
let subMenuList = document.querySelector('.sub-menu__list');

subMenuBtn.addEventListener('click', () => {
    subMenuBtn.classList.toggle('open');
    subMenuList.classList.toggle('active');
});

window.addEventListener('scroll', (e) => {
    document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
    // console.log(window.scrollY)
})

const screenWidth = window.screen.width;
if(screenWidth <= 768) {
    document.querySelector('.header').setAttribute('data-scroll', '30');
}

