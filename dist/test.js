window.addEventListener('load', () => {
    const testCLick = document.querySelector('#testCLick')

    testCLick.addEventListener('click', () => {
        fetch('https://iranpotk.com/templates/iranpotk/ajax.php?/action=load_order_item&id=34913')
            .then(res => res.json())
            .then(json => console.log(json))
    })
})