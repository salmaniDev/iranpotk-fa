window.addEventListener('load', () => {
    const filterHead = document.querySelectorAll('#filter_head');
    const productFlitersItems = document.querySelectorAll('#product_fliters .wrapp >.box >li');
    const productFliters = document.querySelector('#product_fliters');
    const showFilterMenuBtn = document.querySelector('#showFilterMenuBtn');
    const overlay = window.iranPotkVar.overlay;

    filterHead.forEach((item) => {
        const parrent = item.parentElement;
        parrent.style.height = item.offsetHeight + "px";
        const innerBoxHeight = parrent.querySelector(".box").offsetHeight;

        item.addEventListener('click', e => {
            productFlitersItems.forEach((item) => {
                item.classList.remove('active');
                const head = item.querySelector('.head').offsetHeight;
                item.style.height = head + "px";
            })
            parrent.classList.add('active');
            parrent.style.height = innerBoxHeight + item.offsetHeight + "px";
        })
    })
    if (showFilterMenuBtn) {
        showFilterMenuBtn.addEventListener('click', () => {
            productFliters.classList.add('active');
            overlay.classList.add('active');
        })

        overlay.addEventListener('click', () => {
            productFliters.classList.remove('active')
        })
    }
})