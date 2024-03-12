import { Fetch } from "../Utils";
window.addEventListener('load', () => {
    const dashbordOrders = document.querySelector('#dashbordOrders')
    const loading = '<div class="lds-ring"><div></div><div></div><div></div></div>'
    let controller = true;

    if (dashbordOrders) {
        dashbordOrders.insertAdjacentHTML('beforeend', loading)
        const fetchData = () => {

            return new Promise(async (resolve, reject) => {
                const ordersData = await Fetch('GET', 'action=load_order', false, false, false)
                resolve(ordersData)
            })
        }

        const createTable = data => {
            dashbordOrders.innerHTML = ''

            const table = document.createElement('table')

            table.setAttribute('class', 'text-center TableOrder')

            const tHead = document.createElement('thead')
            tHead.setAttribute('id', 'stickyBox')

            const tHeadTr = `<tr> ${data.header.map(item => `<th>${item}</th>`).join('')} </tr>`

            tHead.insertAdjacentHTML('beforeend', tHeadTr)


            const tBody = document.createElement('tbody')

            data.Items.map(item => {
                const tr = document.createElement('tr')

                let MaxItem = item.length
                item.forEach((element, index) => {
                    if (index == MaxItem - 1) {
                        const td = document.createElement('td');
                        td.insertAdjacentHTML('beforeend', '<i class="icon icon-list"></i>')

                        tr.append(td)

                        td.addEventListener('click', () => {
                            // document.querySelector('.lds-ring').classList.add('wrapp')
                            // document.body.insertAdjacentHTML('beforeend',loading)
                            showModal(element, td)
                        })
                    } else {
                        const td = document.createElement('td');
                        td.innerHTML = element
                        tr.append(td)
                    }
                });

                tBody.append(tr)

            })

            table.append(tHead, tBody)

            dashbordOrders.append(table)
        }

        const showModal = async (id, td) => {
            if (!!controller) {
                controller = false;
                td.innerHTML = ''
                td.insertAdjacentHTML('beforeend', loading)
                const modalData = await Fetch('GET', 'action=load_order_item&id=' + id, false, false, false)
                if (modalData) {
                    td.innerHTML = ''
                    td.insertAdjacentHTML('beforeend', '<i class="icon icon-list"></i>')
                    const modal = `
            <div class="modal_info">
                <div class="content">
                   <table class="TableOrder"> 
                   <thead>
                       <tr>
                         ${modalData.header.map(item => `<th>${item}</th>`).join('')}
                       </tr> 
                   </thead>
                   <tbody>
                       ${modalData.Items.map(item => `<tr>${item.map(td => `<td>${td}</td>`).join('')} </tr>`).join('')}
                   </tbody>
                    </table> 
                </div>
                    </div>`;

                    const modalInfo = document.querySelector('.modal_info')

                    if (!modalInfo) {
                        document.body.insertAdjacentHTML('afterbegin', modal)

                        const modalInfo = document.querySelector('.modal_info')
                        const modalInfoContent = document.querySelector('.modal_info .content')

                        if (modalInfoContent.offsetHeight >= 500) {
                            modalInfoContent.classList.add('scroll')
                        }

                        modalInfo.addEventListener('click', e => {
                            if (e.target.className === 'modal_info') {
                                modalInfo.remove()
                                controller = true
                                td.innerHTML = ''
                                td.insertAdjacentHTML('beforeend', '<i class="icon icon-list"></i>')
                            }
                        })
                    }
                } else {
                    controller = true;
                    td.innerHTML = ''
                    td.insertAdjacentHTML('beforeend', '<i class="icon icon-list"></i>')
                }
            }
        }



        fetchData()
            .then(createTable)

    }
})