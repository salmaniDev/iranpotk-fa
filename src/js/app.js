import { SetEmpty, isSet } from "./Utils"

window.addEventListener('load', () => {
    const overlay = window.iranPotkVar.overlay;
    const burgger = window.iranPotkVar.burgger;
    const productMenu = document.querySelector("#productMenu");
    const showMenuBtn = document.querySelector('#showMenuBtn');

    if (overlay) {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('active');
            burgger.classList.remove('active');
            productMenu.classList.remove('active');
            showMenuBtn.classList.remove('active');
            document.body.classList.remove('disable');
        })
    }


    const alertBoxCross = document.querySelector('#alertBoxCross')
    if (alertBoxCross) {
        const alertParrent = alertBoxCross.parentElement;
        alertBoxCross.addEventListener('click', () => {
            alertParrent.remove()
        })
    }

})


const resendTimer = document.getElementById('resendTimer')
if (resendTimer) {
    let value = Number(resendTimer.innerText)

    const timer = setInterval(() => {
        value -= 1
        resendTimer.innerHTML = value

        if (value === 0) {
            stopInterval()
            const parent = resendTimer.parentElement
            parent.innerHTML = `برای دریافت مجدد کد <a href="#">کلیک</a> کنید`
        }
    }, 1000)

    function stopInterval() {
        clearInterval(timer)
    }
}
