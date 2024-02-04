import { Fetch, ImageChekerLoad, Tab, dLoading, isSet, loading } from "../Utils"

window.addEventListener('load', async () => {
    if (isSet(document.getElementById('grouping_Product'))) {
        let container = document.getElementById('grouping_Product')
        let load = loading(container, 'S', '#E91924', '#fff')


        let category = await Fetch('GET', 'action=load_subject_index', false, false, false)

        category.category.forEach((element, index) => {
            let item = document.createElement('span')
            item.classList.add('item')

            let icon = document.createElement('span')
            icon.classList.add('icon', element.icon)

            let tooltip = document.createElement('span')
            tooltip.innerHTML = element.title
            tooltip.classList.add('tooltip')
            item.append(icon, tooltip)
            item.addEventListener('click', () => {
                Tab(container, item)
                RenderInfoCategory(element.id)
            })

            container.append(item)
            if (index == 0) {
                item.click()
            }
        });

        dLoading(load)
    }
})


export async function RenderInfoCategory(id) {
    let container = document.getElementById('grouping_info')
    container.innerHTML = ''
    let load = loading(container, 'S', '#E91924', '#fff')

    let info = await Fetch('GET', 'action=load_subject_product_index&s_id=' + id, false, false, false)
    RenderHeaderInfo(info, container)
    RenderProductInfo(info, container)

    dLoading(load)


}




export async function RenderHeaderInfo(info, Target) {

    let Header = document.createElement('span')
    Header.classList.add('top')

    let imgcategory = document.createElement('img')
    imgcategory.setAttribute('alt', info.image.alt)
    imgcategory.src = info.image.src_demo_thumb
    imgcategory.classList.add('image')

    let infoBox = document.createElement('span')
    infoBox.classList.add('info')

    let right = document.createElement('span')
    right.classList.add('right')

    let title = document.createElement('h3')
    title.innerHTML = info.title
    title.classList.add('title')

    let desc = document.createElement('span')
    if (isSet(desc)) {
        desc.innerHTML = info.desc
    }
    desc.classList.add('desc')

    right.append(title, desc)


    infoBox.append(right)


    Header.append(imgcategory, infoBox)

    Target.append(Header)
}

export async function RenderProductInfo(data, Target) {
    let list = document.createElement('span')
    list.classList.add('product-list_bottom')

    data.product.forEach(async element => {
        let Item = document.createElement('a')
        Item.href = element.permalink
        Item.classList.add('item', 'ssc-square')

        let product_image = document.createElement('img')
        product_image.classList.add('product_image')

        let ProductTitle = document.createElement('h4')
        ProductTitle.innerHTML = element.title
        ProductTitle.classList.add('title')

        Item.append(product_image, ProductTitle)


        list.append(Item)

        ImageChekerLoad(element.image.src_demo_thumb + '&size=100x100').then(image => {
            product_image.src = image
            Item.classList.remove('ssc-square')
        });






    });

    let link = document.createElement('a')
    link.innerHTML = 'مشاهده همه'
    link.href = data.permalink
    link.classList.add('btn_dark', 'link')

    let IconLink = document.createElement('i')
    IconLink.classList.add('icon', 'icon-arrowL')

    link.append(IconLink)

    Target.append(list, link)

}



