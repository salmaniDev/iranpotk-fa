import { Fetch, dLoading, loading } from "./Utils";
let Lang = document.documentElement.lang

window.addEventListener('load', async () => {
    const navbar = window.iranPotkVar.navbar;
    const burgger = window.iranPotkVar.burgger;
    const productMenu = document.querySelector("#productMenu");
    const overlay = window.iranPotkVar.overlay;
    const showMenuBtn = document.querySelector("#showMenuBtn");
    const listsInfo = document.querySelector('.lists_info');
    const listInfoTop = document.querySelector('#list_info_top');
    const navbarMenuList = document.querySelector("#navbarMenuList");
    const navbarMenuListHead = document.querySelector("#navbarMenuListHead");
    const mediaQuery = window.matchMedia('(min-width: 991px)');
    const listsInfoSec = document.querySelector('#lists_info')
    const rightProductMenu = productMenu.querySelector('.right')

    showMenuBtn.addEventListener('click', () => {
        const width = navbar.offsetHeight;
        if (!navbar.classList.contains('scroll')) {
            productMenu.style.transform = `translate(50%,${width + "px"})`;
        } else {
            productMenu.style.transform = "translate(50%,67px)";
        }
        productMenu.classList.toggle('active');
        showMenuBtn.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('disable');
    })

    let loadnavbarMenuList = loading(navbarMenuList, 'S', '#E91924', '#fff')
    let mainMenu
    if(Lang == 'en')
        mainMenu = await Fetch('GET', 'action=load_subject_en', false, false, false)
    else
        mainMenu = await Fetch('GET', 'action=load_subject', false, false, false)
    // let productLink = document.createElement('a')
    // productLink.classList.add('product-link')

    // let productLinkBototm = document.createElement('a')
    // productLinkBototm.classList.add('product-link-bottom')

    const linkItem = document.createElement('a');
    linkItem.setAttribute('class', "link btn_dark");

    productMenu.append(linkItem)


    mainMenu = mainMenu.mainMenu
    if (mainMenu.length !== 0) {
        // listInfoTop.appendChild(productLink)
        for (let i = 0; i < mainMenu.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = mainMenu[i].title;
            navbarMenuList.append(li)

            li.addEventListener('click', async () => {

                const navbarMenuListItem = navbarMenuList.querySelectorAll('li');
                navbarMenuListItem.forEach(item => {
                    item.classList.remove('active')
                })
                li.classList.add('active');
                navbarMenuListHead.innerHTML = "";
                let load = loading(navbarMenuListHead, 'S', '#E91924', '#fff')

                let subMenu
                if(Lang == 'en')
                    subMenu = await Fetch('GET', 'action=load_sub_subject_en&s_id=' + mainMenu[i].id, false, false, false)
                else
                    subMenu = await Fetch('GET', 'action=load_sub_subject&s_id=' + mainMenu[i].id, false, false, false)
                subMenu = subMenu.subMenu

                if (subMenu.length !== 0) {
                    // productLink.innerHTML = `مشاهده همه ${mainMenu[i].title} <i class="icon icon-arrow_left"></i>`
                    // productLink.href = mainMenu[i].link;
                    // productLinkBototm.innerHTML = `مشاهده همه ${mainMenu[i].title} <i class="icon icon-arrow_left"></i>`
                    // productLinkBototm.href = mainMenu[i].link


                    linkItem.href = mainMenu[i].link;
                    if(Lang == 'en')
                        linkItem.innerHTML = `View ALL ${mainMenu[i].title} <i class="icon icon-arrow_right"></i>`
                    else
                        linkItem.innerHTML = `مشاهده همه ${mainMenu[i].title} <i class="icon icon-arrow_left"></i>`


                    for (let i = 0; i < subMenu.length; i++) {
                        const li = document.createElement('li');
                        li.innerHTML = subMenu[i].title;
                        navbarMenuListHead.append(li)

                        li.addEventListener('click', async () => {
                            let loadd = loading(document.getElementById('lists_info'), 'S', '#E91924', '#f8f8f8')
                            const navbarMenuListHeadItem = navbarMenuListHead.querySelectorAll('li')
                            navbarMenuListHeadItem.forEach(item => {
                                item.classList.remove('active')
                            })
                            li.classList.add('active');

                            let categoryProduct
                            if(Lang == 'en')
                                categoryProduct = await Fetch('GET', 'action=load_product_en&sb_id=' + subMenu[i].id, false, false, false)
                            else
                                categoryProduct = await Fetch('GET', 'action=load_product&sb_id=' + subMenu[i].id, false, false, false)
                            if (categoryProduct.category.length !== 0) {
                                renderProductMenu(categoryProduct, mainMenu[i].link)
                                // renderProductMenu(categoryProduct, productLinkBototm, mainMenu[i].link)
                                // listsInfoSec.appendChild(productLinkBototm)
                            }
                        })
                        if (i == 0) {
                            li.click();
                            li.classList.add('active')
                        }
                        listsInfo.classList.add('active');
                    }
                }
                dLoading(load)
            })
            if (i == 0 && mediaQuery.matches) {
                li.click();
                li.classList.add('active')
            }
        }
        // const productBtn = document.createElement('a')
        // productBtn.classList.add('allProduct');
        // productBtn.innerHTML="مشاهده همه محصولات"
        // productBtn.href='https://iranpotk.com/product';
        // rightProductMenu.appendChild(productBtn)
        dLoading(loadnavbarMenuList)
    }

    function renderProductMenu(data, productLink) {
        listsInfoSec.innerHTML = ''
        const desc = document.createElement('span');
        desc.classList.add('desc');
        desc.innerText = data.desc;
        let listItems = document.createElement('div');
        listItems.classList.add('list_items');
        data.category.forEach(item => {
            const a = document.createElement('a');
            a.classList.add('item');
            a.href = item.permalink;
            const img = document.createElement('img');
            img.src = item.image.src_demo_thumb + '&size=200x200';
            img.classList.add('image');
            img.alt = item.title
            const h3 = document.createElement('h3');
            h3.innerText = item.title;
            h3.classList.add('title');
            a.append(img, h3);
            listItems.append(a);
        });
        // listsInfoSec.append(desc, listItems, productLinkBototm, linkItem)
        listsInfoSec.append(desc, listItems)
    }

    //////////// show menu in mobile
    burgger.addEventListener('click', () => {
        productMenu.classList.add('active');
        overlay.classList.add('active')
        burgger.classList.add('active')
        navbar.style.zIndex = "5";
        // navbar.style.display='none';
    })


    const backPageInfo = document.querySelector('#backPageInfo');
    backPageInfo.addEventListener('click', () => {
        listsInfo.classList.remove('active');
    })
})