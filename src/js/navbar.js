window.addEventListener('load', () => {
    const navbar = window.iranPotkVar.navbar;
    const product_view_head = document.querySelector('.product_view_head');

    let lastScrollTop = 1000;
    window.addEventListener('scroll', () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > 100) {
            if (st > lastScrollTop) {
                navbar.classList.add('scroll');
                if (product_view_head) {
                    product_view_head.classList.add('scroll')
                }
            } else if (st < lastScrollTop) {
                navbar.classList.remove('scroll');
                if (product_view_head) {
                    product_view_head.classList.remove('scroll');
                }
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false)

    const navbarSearch = document.querySelector('#navbarSearch');
    if (navbarSearch) {
        navbarSearch.addEventListener('input', e => {
            const parent = e.target.parentElement;
            const icon = parent.querySelector('.icon');
            parent.classList.add('active');
            icon.addEventListener('click', () => {
                navbarSearch.value = "";
                parent.classList.remove('active');
            })
            if (navbarSearch.value == "") {
                parent.classList.remove('active');
            }
        })
    }
})