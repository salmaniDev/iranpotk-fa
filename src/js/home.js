const products_categorization_item = document.querySelectorAll('.products_categorization .grouping>.item');
const products_categorization_item_icon = document.querySelectorAll('.products_categorization .grouping>.item>.icon.svg');

products_categorization_item_icon.forEach(async (item) => {
    item.addEventListener('click', (e) => {
        products_categorization_item.forEach((elem) => {
            elem.classList.remove('active');
        })
        const parent = e.target.parentElement;
        parent.classList.add('active');
    })
    const dataSvg = item.dataset.svg
    const dataToltip = item.dataset.toltip;
    await fetch(item.dataset.svg).then(r => r.text()).then(text => item.innerHTML = text)
    const span = document.createElement('span');
    span.classList.add('tooltip')
    span.innerHTML = dataToltip;
    item.append(span)
})