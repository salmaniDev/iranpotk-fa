window.addEventListener('load', () => {
    let lastScrollTop = 1000;
    window.addEventListener('scroll', () => {
        const stickyBox = document.querySelectorAll('#stickyBox')
        if (stickyBox) {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > 100) {
                if (st > lastScrollTop) {
                    stickyBox.forEach(item => {
                        item.classList.add('active')
                    })
                } else if (st < lastScrollTop) {
                    stickyBox.forEach(item => {
                        item.classList.remove('active')
                    })
                }
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }

    }, false)
})