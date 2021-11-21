
const iconMenu = document.querySelector('.header__icon');
if (iconMenu) {
    const menuWrap = document.querySelector('.header__wrap');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('-active')
        menuWrap.classList.toggle('header__wrap-active')
    });
}

let inputText = document.querySelector('.input__text');
    submitForm = document.querySelector('.submit__form');
    information = document.querySelector('body');

    serachFunction=(text)=> {
        information.forEch((element)=> {
            if(element.textContent==text) {
                element.style = "animation:animationElement 2s;";
                console.log(element);
            }
        });
    }
submitForm.addEventListener('click', (e)=>{
    e.preventDefault();
    serachFunction(inputText.value);
});  

const searchIcon = document.querySelector('.header__nav-search');
if (searchIcon) {
    const searchForm = document.querySelector('.search__form');
    searchIcon.addEventListener("click", function (e) {
        searchIcon.classList.toggle('search-active')
        searchForm.classList.toggle('search__form-active')
    });
}