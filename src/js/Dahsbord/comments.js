import { Fetch } from "../Utils";
const dashbordComments = document.querySelector('#dashbordComments')

if (dashbordComments) {

    const fetchData = () => {
        return new Promise(async (resolve, reject) => {
            const commentsData = await Fetch('GET', 'action=load_comment', false, false, false)

            resolve(commentsData)
        })
    }

    const createComments = data => {
        data.Items.map(item => {
            const commentItem = `
            <div class="item">
                 <div class="head">
                     <div class="right">
                        <span class="name">
                             در:  <a href="${item[5] ? item[5] : '#'}">${item[4] ? item[4] : "لینک صفحه"}</a>
                        </span>
                     </div>
                        <div class="left">
                            <span class="data">
                              ${item[1]}
                            </span>
                                <span class="status ${item[0] !== '0' ? 'confirmation' : 'warning'} ">${item[0] !== '0' ? 'تایید' : 'در انتظار تایید'}</span>
                     </div>
                        </div>
            <p class="desc-style content">${item[3] ? item[3] : "متن پیام"}</p>
            <span class="tracking_code">#${item[2]}</span>
            </div>`;
            dashbordComments.insertAdjacentHTML('afterbegin', commentItem)
        })

    }




    fetchData()
        .then(createComments)
}
