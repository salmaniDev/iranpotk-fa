window.addEventListener('load',()=>{
    const filtermenu = document.querySelector('#filter-menu')
if (filtermenu) {
    const item = filtermenu.querySelectorAll('.item'),

        line = filtermenu.querySelector('.line'),
        filterBox = document.querySelectorAll('#filter-box >.box')

    for (let i = 0; i < item.length; i++) {
        line.style.left = item[0].offsetLeft + "px"
        line.style.width = item[0].offsetWidth + "px"
        item[i].addEventListener('click', (e) => {
            item.forEach((elem) => {
                elem.classList.add('active')

                if (elem != item[i]) {
                    elem.classList.remove('active')
                }

                const dataId = item[i].dataset.id

                filterBox.forEach(item => {
                    item.classList.remove('active')
                })
                document.getElementById(dataId).classList.add('active')

            })
            const itemWidth = e.target.offsetWidth + 'px'
            const itemLeft = e.target.offsetLeft + 'px'

            line.style.left = itemLeft
            line.style.width = itemWidth
        })
    }
}
})