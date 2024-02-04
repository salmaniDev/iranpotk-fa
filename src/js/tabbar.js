window.addEventListener('load', () => {
    const tabbar = document.querySelectorAll('.tabbar .box li');
    const tabButton = document.querySelector('#tabButton');
    const tab_content = document.querySelectorAll('.tab_content');

    for (let i = 0; i < tabbar.length; i++) {
        tabButton.style.left = tabbar[0].offsetLeft + (tabbar[0].offsetWidth / 2) - (tabButton.offsetWidth / 2) + "px";

        tabbar[i].addEventListener('click', e => {
            //// active item in tabbar
            const dataID = e.currentTarget.dataset.id;
            tab_content.forEach((item) => {
                item.classList.remove('active');
            })
            const left = tabbar[i].offsetLeft + (tabbar[i].offsetWidth / 2) - (tabButton.offsetWidth / 2) + "px";
            tabButton.style.left = left;
            tabbar.forEach((item) => {
                item.classList.remove('active');
            })
            tabbar[i].classList.add('active');
            const element = document.getElementById(dataID)
            element.classList.add('active');
        })
    }
})