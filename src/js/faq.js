window.addEventListener('load', () => {
    let questions = document.querySelectorAll('.faq_items .item')
    questions.forEach((question) => {
        let info = question.querySelector('.info').offsetHeight + 75 + "px";
        question.addEventListener('click', () => {
            questions.forEach((item) => {
                item.classList.add('active');
                question.style.height = info;
                if (item !== question) {
                    item.classList.remove('active')
                    item.style.height = "60px"
                }
            })
        })
    })
})