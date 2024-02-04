export function isSet(item) {
    if (item != 'undefined' && item != undefined && item != false && item != null && item != "" && item != NaN) {
        return true;
    }
    return false;
}


export async function Fetch(method, body = null, ContentType = true, Auth = true,stringify = true , baseUrl = 'ApiUrl') {
    let AppInfo                 =   window._env_

    let myHeaders = new Headers();
    let param = ''

    if (Auth) {
        myHeaders.append("X-Authorization", "Bearer " + localStorage.getItem("token"));
    }

    if (ContentType) {
        myHeaders.append("Content-Type", "application/json;");
    }

    let requestOptions = {}
    requestOptions['method'] = method
    requestOptions['headers'] = myHeaders
    requestOptions['redirect'] = 'follow'


    
    if (isSet(body) && method != 'GET') {
        if(stringify){
            requestOptions['body'] = JSON.stringify(body)
        }else{
            requestOptions['body'] = body
        }
      
    }
    if ((method == 'GET' || method == 'DELETE' || method == 'PUT') && isSet(body)) {
        param = body
    }
    
    return fetch(AppInfo[baseUrl] + param, requestOptions)
        .then(function (response) {
            return response.json()
        })
        .then(function (result) {
            return result
        })
        .catch(function (error) {
            return false
        });

}


export function Tab(target,Item,className = 'active') {
    for (let i = 0; i < target.children.length; i++) {
        target.children[i].classList.remove(className)
    }       
    Item.classList.add(className)
}



export function loading(container = null, size = 'L', color = null, bgColor = '#000000b3', posation = 'A') {
    let box = document.createElement('div')
    let loading = document.createElement('div')
    loading.classList.add('loading', size)

    if (posation == 'R') {
        loading.style.position = 'relative'
    }


    if (isSet(bgColor)) { loading.style.background = bgColor } else { loading.style.background = "transparent" }

    box.classList.add('box')

    if (isSet(color)) { box.style.color = color } else { box.style.color = '#2070d9' }

    let svg = '<svg viewBox="22 22 44 44"> <circle class="circle" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"> </circle> </svg>'
    box.innerHTML = svg
    loading.append(box)
    if (!isSet(container)) {
        document.getElementById('body').append(loading)
    } else {
        container.append(loading)
    }
    return loading
}

export function dLoading(target = null) {
    if (isSet(target)) {
        target.remove()
    } else {
        let loading = document.getElementsByClassName('loading')
        for (let i = 0; i < loading.length; i++) {
            loading[i].remove()
        }
    }

}

export async function ImageChekerLoad(imageUrl) {

    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = () => resolve(imageUrl)
        img.onerror = () => reject("d");
        img.src = imageUrl;
    })

}

window.SharePage        =   ()=>{
    const shareData = {
        title: document.getElementById('titlepage').innerText,
        text: document.getElementById('descpage').innerText,
        url: window.location.href
    };


    if (navigator.share) {
    navigator.share(shareData)
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
}  


export function digits(Number) {
    Number += '';
    Number = Number.replace(',', '');
    let x = Number.split('.');
    let y = x[0];
    let z = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
        y = y.replace(rgx, '$1' + ',' + '$2');
    return y + z;
}


export function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

export function removeDuplicatesfild(data,fild) {
  
    let uniqueData = [];
    let values = new Set();
    
    for (let item of data) {
        if (!values.has(item[fild])) {
            uniqueData.push(item);
            values.add(item[fild]);
        }
    }

    
    return uniqueData

}


export  function SetEmpty(target,Massege) {
    let container                                                                       =   document.createElement('div')
    container.classList.add('IranpotkEmpty')

        let img                                                                         =   document.createElement('img')
        img.src                                                                         =   './images/Empty.png'
        img.classList.add('img-fluid','img')

        let title                                                                       =   document.createElement('span')
        title.innerHTML                                                                 =   Massege
        title.classList.add('title')

    container.append(img,title)

    target.append(container)

    return {'Empty':container}
}