window.addEventListener('load', () => {
    const shareButton = document.querySelectorAll('#shareClick')
    const shareModal = document.querySelector('.modal_info.shareProduct')
    const copyProuctLink = document.getElementById('copyProuctLink')
    const crossModal = shareModal?.querySelector('.cross')
    const coptAlert = document.querySelector('.copy_alert');

    let isAnimating = false;


    if (shareButton.length) {
        shareButton.forEach(item => {
            item.addEventListener('click', () => {
                console.log("aaa");
                shareModal.classList.add('active')
            })
        })

        shareModal.addEventListener('click', e => {
            if (e.target.className === 'modal_info shareProduct active') {
                shareModal.classList.remove('active')
            }
        })

        crossModal.addEventListener('click', () => {
            shareModal.classList.remove('active')
        })

        copyProuctLink.addEventListener('click', e => {
            const dataset = e.target.dataset.url
            navigator.clipboard.writeText(dataset);

            if (!isAnimating) {
                isAnimating = true;
                coptAlert.classList.add('active');
                setTimeout(function () {
                    coptAlert.classList.remove('active');
                    isAnimating = false;
                }, 1000);
            }
        })

    }
})