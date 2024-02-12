let header = document.querySelector('.header')
let navList = document.querySelector('.header-nav')
let burger = document.querySelector('.header-burger')

burger.addEventListener('click', () => {
    header.classList.toggle('header--active')
    document.body.classList.toggle('body--active')
    navList.classList.toggle('header-nav--active')
    burger.classList.toggle('header-burger--active')
})