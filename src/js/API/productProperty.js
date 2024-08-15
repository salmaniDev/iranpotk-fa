import { Fetch, SetEmpty, dLoading, digits, isSet, loading, removeDuplicates } from "../Utils"
let Lang = document.documentElement.lang
window.addEventListener('load', async () => {
    if (isSet(document.getElementById('card_table'))) {

        let Filter = []
        let Table = document.getElementById('card_table')
        Table.innerHTML = ''

        let load = loading(Table, 'S', '#E91924', '#fff')

        if (isSet(document.getElementsByTagName('lang')) && document.getElementsByTagName('lang').length != 0) {
            Lang = document.getElementsByTagName('lang')[0].innerText
        }

        let pid = document.getElementsByTagName('pid')[0].innerText
        let container = document.createElement('table')
        container.classList.add('table')

        let TableJson
        if(Lang == 'en')
            TableJson = await Fetch('GET', 'action=load_product_feature2_en&pid=' + pid, false, false, false)
        else
            TableJson = await Fetch('GET', 'action=load_product_feature2&pid=' + pid, false, false, false)

        let Body = RenderBody(TableJson, Lang)
        let Head = RenderHead(TableJson, Lang, Body, Filter, container)


        container.append(Head.Head, Body.Body)
        Table.append(container)

        dLoading(load)

    }
})

function RenderHead(Data, Lang, Body, Filter, target) {
    let container = document.createElement('thead')

    let tr = document.createElement('tr')

    Data.header.forEach((element, index) => {
        let item = document.createElement('th')

        let title = document.createElement('span')
        title.innerHTML = element[Lang + '_title']
        title.classList.add('Title')

        if (element.en_title === 'Price') { 
            title.innerHTML = `${element[Lang + '_title']} (ریال)`
        }

        item.append(title)



        //!  Filter
        //!  Filter
        //!  Filter
        //!  Filter

        if (isSet(element['filter'])) {

            item.classList.add('filter')

            let filterValue = document.createElement('span')
            if(Lang == 'en')
                filterValue.innerHTML = 'ALL'
            else
                filterValue.innerHTML = 'همه'
            filterValue.classList.add('Value')

            let icon = document.createElement('i')
            icon.classList.add('icon', 'icon-arrow_right')


            let FilterBox = document.createElement('ul')
            FilterBox.classList.add('sub_menu')

            let all = document.createElement('li')
            if(Lang == 'en')
                all.innerHTML = 'ALL'
            else
                all.innerHTML = 'همه'
            all.classList.add('value', 'active')
            all.addEventListener('click', () => {


                Filter.forEach((element, point) => {
                    if (element.index == index) {
                        Filter.splice(point, 1)
                    }
                });

                if(Lang == 'en')
                    Body = FilterTable(FilterBox, filterValue, 'ALL', all, Data, Lang, Body, Filter, target)
                else
                    Body = FilterTable(FilterBox, filterValue, 'همه', all, Data, Lang, Body, Filter, target)
            })

            FilterBox.append(all)



            removeDuplicates(element.filter).forEach(items => {
                let li = document.createElement('li')
                li.innerHTML = items
                li.classList.add('value')
                li.addEventListener('click', () => {
                    let itemFilter = { 'index': index, 'value': items }

                    Filter.forEach((element, point) => {
                        if (element.index == index) {
                            Filter.splice(point, 1)
                        }
                    });


                    Filter.push(itemFilter)
                    Body = FilterTable(FilterBox, filterValue, items, li, Data, Lang, Body, Filter, target)
                })

                FilterBox.append(li)
            });


            item.append(filterValue, icon, FilterBox)

        }
        let Picturestatus = false
        if (isSet(element.en_title) && element.en_title == 'Picture') {

            Data.items.forEach(element => {
                if (isSet(element[index])) {
                    Picturestatus = true
                }
            });
            if (Picturestatus) {
                tr.append(item)
            }
        } else if (Lang == 'en' && (element[Lang + '_title'] == 'Price' || element[Lang + '_title'] == 'Buy')) {
            // tr.append(item)
        } else {
            tr.append(item)
        }




    });
    container.append(tr)


    return { "Head": container }
}

function FilterTable(FilterBox, filterValue, value, item, Data, Lang, Body, Filter, target) {
    Body.Body.remove()

    let load = loading(target, 'S', '#E91924', '#fff')
    filterValue.innerHTML = value
    let dataItam = JSON.parse(JSON.stringify(Data))

    for (let i = 0; i < FilterBox.children.length; i++) {
        FilterBox.children[i].classList.remove('active')
    }
    item.classList.add('active')

    Filter.forEach(element => {
        dataItam.items = dataItam.items.filter(item => {
            return item[element.index] == element.value
        })
    });




    Body = RenderBody(dataItam, Lang)
    target.append(Body.Body)

    dLoading(load)

    return Body

}

function RenderBody(Data, Lang) {

    let container = document.createElement('tbody')

    let Picturestatus = false
    Data.header.forEach((element, index) => {
        if (isSet(element.en_title) && element.en_title == 'Picture') {
            Data.items.forEach(element => {
                if (isSet(element[index])) {
                    Picturestatus = true
                }
            });
        }
    })


    Data.items.forEach(element => {
        let CodeItem
        let tr = document.createElement('tr')
        element.forEach((value, index) => {
            let td = document.createElement('td')
            td.innerHTML = value

            let price;

            switch (Data.header[index].en_title) {
                case 'Price':
                    td.innerHTML = digits(value);
                    break;
                case 'Buy':
                    if(Lang == 'fa')
                    {
                        if (value > 0) {
                            let pid = document.getElementsByTagName('pid')[0].innerText
                            td.innerHTML = ''

                            if (pid == 530 && isSet(pid)) {
                                const descBtn = document.createElement('button');
                                descBtn.setAttribute('class', 'submit purch');
                                descBtn.innerHTML = "خرید";
                                descBtn.addEventListener('click', () => {
                                    descModal('جهت تهیه ی این اقلام لطفا با بخش فروش ابزارآلات مارک زنی به شماره ی <span>08634132309</span> تماس حاصل فرمایید.')
                                })

                                td.append(descBtn)
                            } else {
                                let form = `
                                <form action="${window._env_.SiteUrl}/form_order.php" method="post">
                                    <input name="product_id" value="${pid}" type="hidden">
                                    <input name="set_cart" value="1" type="hidden">
                                    <input type="hidden" name="qty1" value="1">  
                                    <input type="hidden" name="feature_value" value="${value}">
                                    <button class="submit purch" name="submit" type="submit" >خرید</button>                            
                                </form>
                            `;

                                td.insertAdjacentHTML('beforeend', form)
                            }

                        }
                        else if (value == -1) {
                            let pid = document.getElementsByTagName('pid')[0].innerText
                            td.innerHTML = ''

                            if (pid == 854 || pid == 530 && isSet(pid)) {
                                const descBtn = document.createElement('button');
                                descBtn.setAttribute('class', 'submit purch');
                                descBtn.innerHTML = "خرید";
                                descBtn.addEventListener('click', () => {
                                    descModal('جهت تهیه ی این اقلام لطفا با بخش فروش ابزارآلات مارک زنی به شماره ی <span>08634132309</span> تماس حاصل فرمایید.')
                                })

                                td.append(descBtn)
                            } else {
                                td.innerHTML = '';
                                const descBtn = document.createElement('button');
                                descBtn.setAttribute('class', 'submit purch');
                                descBtn.innerHTML = "خرید";
                                descBtn.addEventListener('click', () => {
                                    descModal('مشتری گرامی به دلیل محدودیت ابعادی و وزنی، متاسفانه امکان ارسال این محصول از طریق پست وجود ندارد. لطفا جهت خرید و هماهنگی شیوه ارسال، با شماره 25908-021 داخلی 110 تماس بگیرید یا از طریق شماره 09101507511 در واتساپ، با ما در ارتباط باشید.')
                                })

                                td.append(descBtn)
                            }
                        }
                        else {
                            td.classList.add('unavailable')
                            td.innerHTML = `<span><i class="icon icon-Ringtone"></i> ناموجود<span class="tooltip">موجود شد به من اطلاع بده</span> </span>`
                            td.addEventListener('click', () => {
                                showModal(CodeItem)
                            })
                        }
                    }
                    break;
                case 'Code':
                    CodeItem = value
                    break;
                case 'Picture':
                    td.innerHTML = ''

                    function convertImageUrl(apiImageUrl) {
                        const urlWithoutParams = apiImageUrl.split('?')[1];

                        const imgParameter = urlWithoutParams.split('&').find(param => param.startsWith('img='));

                        const imgValue = imgParameter.split('=')[1];

                        const finalImageUrl = `https://iranpotk.com/${imgValue}`;

                        return finalImageUrl;
                    }
                    let convertedImageUrl;

                    if (value) {
                        convertedImageUrl = convertImageUrl(value);
                    }

                    let linkImg = document.createElement('a')
                    linkImg.href = convertedImageUrl
                    linkImg.setAttribute('data-fancybox', 'table-gallery')
                    let img = document.createElement('img')
                    img.src = value
                    img.classList.add('img')
                    linkImg.append(img)
                    td.append(linkImg)
                    break;
            }

            if (Data.header[index].en_title == 'Picture') {
                if (Picturestatus) {
                    tr.append(td)
                }
            } else if (Lang == 'en' && (Data.header[index][Lang + '_title'] == 'Price' || Data.header[index][Lang + '_title'] == 'Buy')) {
                // tr.append(td)
            }
            else {
                tr.append(td)
            }

        });
        container.append(tr)
    });

    let emptys = document.querySelectorAll('.IranpotkEmpty')

    if (!isSet(Data.items)) {

        for (let i = 0; i < emptys.length; i++) {
            emptys[i].remove()
        }

        let Table = document.getElementById('boxTable')
        if(Lang == 'en')
            SetEmpty(Table, 'There is no product with this specification')
        else
            SetEmpty(Table, 'محصولی با این مشخصات وجود ندارد')
    } else {
        for (let i = 0; i < emptys.length; i++) {
            emptys[i].remove()
        }
    }

    return { "Body": container }
}

const descModal = (desc) => {
    const modal_info = `
        <div class="modal_info product_desc">
            <div class="content">
                <span class="cross">
                    <i class="icon icon-cross"></i>
                </span>
                <p class="desc">${desc}</p>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', modal_info)

    const modalInfo = document.querySelector('.modal_info')
    const crossModal = modalInfo.querySelector('.cross')

    modalInfo.addEventListener('click', e => {
        if (e.target.className === 'modal_info product_desc') {
            modalInfo.remove()
        }
    })

    crossModal.addEventListener('click', () => {
        modalInfo.remove()
    })

}

const showModal = data => {
    let productName = document.getElementById('titlepage').innerHTML

    const modal = `
    <div class="modal_info product">
        <div class="content">
        <span class="cross">
            <i class="icon icon-cross"></i>
        </span>
             <form action="${window._env_.SiteUrl}/form.php" method="post" enctype="multipart/form-data">
                <h3 class="title">شماره موبایل خود را وارد کنید</h3>
                <div class="input_box">
                    <input type="number" name="شماره موبایل" required/>
                </div>
                <input type="hidden" name="نام محصول" value="${productName}" />
                <input type="hidden" name="کد محصول" value = "${data}" />

                <input type="hidden" name="form_id" value="7" />
                <div class="bottom">
                <div class="align-items-center d-flex input_box captcha">
                <img src="https://iranpotk.com/captcha.php" alt="captcha code" class="image ml-3">
                <input name="captchaResult" class="mb-0 w-auto" type="number" placeholder="کد را وارد کنید" required>
            </div>

            <button class="submit" type="submit" name="submit" value="1">ثبت شماره</button>
                </div>
             </form>
        </div>
    </div>`;


    document.body.insertAdjacentHTML('afterbegin', modal)

    const modalInfo = document.querySelector('.modal_info')
    const crossModal = modalInfo.querySelector('.cross')

    modalInfo.addEventListener('click', e => {
        if (e.target.className === 'modal_info product') {
            modalInfo.remove()
        }
    })

    crossModal.addEventListener('click', () => {
        modalInfo.remove()
    })
}
