const links = document.querySelectorAll('.projects_list a')
const background = document.querySelector('.fill-background')
const images = document.querySelectorAll('.background__images img')

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const index = link.getAttribute('data-project')
        images.forEach(image => {
            image.classList.remove('active')
        })
        background.classList.add('hidden')
        images[index].classList.add('active')
    })
    link.addEventListener('mouseleave', () => {
        background.classList.remove('hidden')
        images.forEach(image => {
            image.classList.remove('active')
        })
    })

})