window.addEventListener('load', () => {
    $(function () {
        $(".overflow-wrraper").scroll(function () {
            $(".card_table").scrollLeft($(".overflow-wrraper").scrollLeft());
        });
        $(".card_table").scroll(function () {
            $(".overflow-wrraper").scrollLeft($(".card_table").scrollLeft());
        });
    });
    let cardTable = document.querySelector('#card_table')
    if (cardTable) {
        let overflowWrraper = document.querySelector('.overflow-wrraper div')
        let widthElem = cardTable.clientWidth + (window.innerWidth - cardTable.clientWidth) + 55

        overflowWrraper.style.width = widthElem + 'px'
    }
})
