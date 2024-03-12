const headLineItems = document.querySelectorAll('.headlines li');
const contentItems = document.querySelectorAll('#contentItems >.item');
const bgLine = document.querySelector('.headlines .line');

bgLine.style.left = headLineItems[0].offsetLeft + 'px'
bgLine.style.width = headLineItems[0].offsetWidth + 'px'

function activeMenu() {
    let len = contentItems.length;
    while (--len && window.scrollY + 90 < contentItems[len].offsetTop) { }
    headLineItems.forEach(item => item.classList.remove('active'))
    headLineItems[len].classList.add('active');
    bgLine.style.left = headLineItems[len].offsetLeft + 'px'
    bgLine.style.width = headLineItems[len].offsetWidth + 'px'

}
activeMenu();
window.addEventListener('scroll', activeMenu)


headLineItems.forEach(item => {
    item.addEventListener('click', () => {
        const dataId = item.dataset.id
        const element = document.getElementById(dataId).getBoundingClientRect().top + window.scrollY - '200'
        console.log(element);
        window.scroll({
            top: element,
            behavior: 'smooth'
        });
    })
})




// const y = element.getBoundingClientRect().top + window.scrollY;
// window.scroll({
//     top: y,
//     behavior: 'smooth'
// });