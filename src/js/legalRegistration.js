const formCard = document.querySelector('.legalRegistration .formBox .row')
if (formCard) {
    // mamad
    let inputsData = [
        {
            label: "نام کامل شرکت",
            type: 'text',
            require: true,
            error: '',
            maxlength: '',
            name: 'companyName',
            value: ''
        },
        {
            label: 'شناسه ملی',
            type: 'number',
            require: true,
            error: '',
            maxlength: 11,
            name: 'nationalID',
            value: ''
        },
        {
            label: 'شماره ثبت',
            type: 'number',
            require: true,
            error: '',
            maxlength: '',
            name: 'registrationNumber',
            value: ''
        },
        {
            label: 'کد اقتصادی',
            type: 'number',
            require: false,
            error: '',
            maxlength: '',
            name: 'economicCode',
            value: ''
        },
        {
            label: 'نام نماینده شرکت',
            type: 'text',
            require: true,
            error: '',
            maxlength: '',
            name: 'companyRepresentative',
            value: ''
        },
        {
            label: 'شماره موبایل',
            type: 'number',
            require: true,
            error: '',
            maxlength: 11,
            name: 'phoneNumber',
            value: ''
        },
        {
            label: 'استان',
            type: 'text',
            require: true,
            error: '',
            maxlength: '',
            name: 'state',
            value: ''
        },
        {
            label: 'شهر',
            type: 'text',
            require: true,
            error: '',
            maxlength: '',
            name: 'city',
            value: ''
        },
        {
            label: 'نشانی',
            type: 'text',
            require: true,
            error: '',
            maxlength: '',
            name: 'address',
            value: ''
        },
        {
            label: 'کد پستی',
            type: 'number',
            require: true,
            error: '',
            maxlength: 10,
            name: 'postalCode',
            value: ''
        },
        {
            label: 'شماره تلفن ثابت (همراه با پیش شماره)',
            type: 'number',
            require: true,
            error: '',
            maxlength: '',
            name: 'landlineNumber',
            value: ''
        },
        {
            label: 'آپلود تصویر روزنامه رسمی',
            type: 'file',
            require: false,
            error: '',
            maxlength: '',
            name: 'uploadPicture',
            value: ''
        }
    ]

    const submitBtn = document.querySelector('#submitBtn')

    const generateData = data => {
        formCard.innerHTML = ''
        let colCard, inputCard, labelItem, inputItem, errorItem;
        data.map(item => {
            let { label, type, maxlength, require, error, name, value } = item

            colCard = document.createElement('div')
            colCard.classList.add('col-md-4')

            inputCard = document.createElement('div')
            inputCard.classList.add('input_box')

            labelItem = document.createElement('label')
            labelItem.innerHTML = `${label} ${require ? `<span class="start">*</span>` : ''}`

            inputItem = document.createElement('input')
            inputItem.id = name
            error ? inputItem.classList.add('error') : ''
            inputItem.name = label
            inputItem.type = type
            inputItem.value = value
            inputItem.addEventListener('input', e => {
                if (!!maxlength && e.target.value.length > maxlength) {
                    e.target.value = e.target.value.slice(0, e.target.maxLength)
                    item.value = e.target.value;
                } else {
                    item.value = e.target.value;
                }
            })
            maxlength ? inputItem.maxLength = maxlength : '';

            errorItem = document.createElement('p')
            errorItem.classList.add('error-label')
            error ? errorItem.innerHTML = error : ''

            inputCard.append(labelItem, inputItem)

            error ? inputCard.appendChild(errorItem) : ''

            colCard.append(inputCard)

            formCard.append(colCard)
        })
    }

    submitBtn.addEventListener('click', e => {
        inputsData.map(item => {
            // let input = document.querySelector(`input[name=${item.name}]`)
            let input = document.getElementById(item.name)

            if (item.require) {
                if (input.value.trim().length == 0) {
                    item.error = 'لطفا فیلد مورد نظر را پر کنید'
                } else {
                    item.error = ''
                }
            }

            if (item.maxlength) {
                if (input.value.length < item.maxlength) {
                    item.error = `حداقل مقدار باید ${item.maxlength} باشد`
                } else if (input.value.length > item.maxlength) {
                    item.error = `حداکثر مقدار باید ${item.maxlength} باشد`
                } else {
                    item.error = ''
                }
            }

            function errorValidation(data) {
                return data.every(elem => elem.error == '')
            }

            if (!errorValidation(inputsData)) { 
                e.preventDefault()
            } else {
                return true
            }

        })
        generateData(inputsData)
    })

    window.addEventListener('load', () => {
        generateData(inputsData)
    })
}