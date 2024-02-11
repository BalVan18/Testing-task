let header = document.querySelector('.header')
let navList = document.querySelector('.header-nav')
let burger = document.querySelector('.header-burger')

burger.addEventListener('click', () => {
    if (header.classList.contains('header--active')) {
        header.style.height = "67px"
        setTimeout(() => {
            header.classList.remove('header--active')
        }, 300)
    } else {
        header.classList.add('header--active')
        header.style.height = "100dvh"
    }
    document.body.classList.toggle('body--active')
    navList.classList.toggle('header-nav--active')
    burger.classList.toggle('header-burger--active')
})