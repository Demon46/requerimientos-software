
// Header

let menu = document.querySelector('#menu-btn')
let header = document.querySelector('.header')

menu.onclick = function () {
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')
}

window.onscroll = function () {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

//Header

//Acordeón

const accordionContent = document.querySelectorAll('.accordion-content')

accordionContent.forEach((item, index) => {
    let header = item.querySelector('header')
    header.addEventListener("click", () => {
        item.classList.toggle('open')

        let description = item.querySelector('.description')
        if(item.classList.contains('open')){
            description.style.height = `${description.scrollHeight}px`
            item.querySelector('i').classList.replace("fa-plus-circle", "fa-minus-circle")
        } else {
            description.style.height = '0rem'
            item.querySelector('i').classList.replace("fa-minus-circle", "fa-plus-circle")
        }
        removeOpen(index)
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove('open')

            let des = item2.querySelector('.description')
            des.style.height = '0rem'
            item2.querySelector('i').classList.replace("fa-minus-circle", "fa-plus-circle")
        }
    })
}

// Acordeón