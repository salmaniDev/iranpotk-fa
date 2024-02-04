window.addEventListener('load', () => {
    const numberSpinnet = document.querySelectorAll('#numberSpinnet');
    numberSpinnet.forEach((item) => {
        const input = item.querySelector('input');
        const plus = item.querySelector('.plus');
        const minus = item.querySelector('.minus');
        plus.addEventListener('click', () => {
            input.value = parseInt(input.value) + 1;
        })
        minus.addEventListener('click', () => {
            if (input.value > 1) {
                input.value = parseInt(input.value) - 1;
            }
        })
    })
})