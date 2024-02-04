window.addEventListener('load', () => {
    const addressModal = document.querySelector('#addressModal');
    // if (addressModal) {
    //     const iconCross = addressModal.querySelector('.icon-cross');
    //     const changeAddresBtn = addressModal.querySelectorAll('#changeAddresBtn');
    //     const addressForm = addressModal.querySelector('.addressForm');
    //     const addressModalBtn = document.querySelector('#addressModalBtn');
    //     const overlay = window.iranPotkVar.overlay;
    //     const backAddressForm = addressForm.querySelector('.back')
    //     const newAddress = addressModal.querySelector('.newAddress')
    //     ///// show addressmodal
    //     addressModalBtn.addEventListener('click', () => {
    //         addressModal.classList.add('active');
    //         overlay.classList.add('active');
    //         overlay.style.zIndex = '16';
    //     })

    //     iconCross.addEventListener('click', () => {
    //         addressModal.classList.remove('active');
    //         overlay.style.zIndex = 0;
    //         overlay.classList.remove('active');
    //     })

    //     addressModal.addEventListener('click', () => {
    //         console.log("aaaa");
    //     })

    //     changeAddresBtn.forEach((item) => {
    //         item.addEventListener('click', () => {
    //             addressForm.classList.add('active');
    //         })
    //     })

    //     backAddressForm.addEventListener('click', () => {
    //         addressForm.classList.remove('active');
    //     })

    //     overlay.addEventListener('click', () => {
    //         addressModal.classList.remove('active');
    //     })

    //     newAddress.addEventListener('click', () => {
    //         addressForm.classList.add('active')
    //     })
    // }

    ////// payment step
    // const stepBtn = document.querySelector('#stepPaymentBtn');
    // const stepListItems = document.querySelectorAll('.step_lists li');
    // const stepContentItems = document.querySelectorAll('.stepContent');
    // for (let i = 0; i < stepListItems.length; i++) {
    //     stepListItems[0].classList.add('active');
    //     stepListItems[i].addEventListener('click', e => {
    //         ///// نمایش محتوا
    //         const itemId = e.currentTarget.dataset.id;
    //         stepContentItems.forEach(item => item.classList.remove('active'));
    //         const elem = document.querySelectorAll("#" + itemId);
    //         elem.forEach(item => item.classList.add('active'));
    //     })

    //     stepListItems[i].addEventListener('click', e => {
    //         const dataId = e.currentTarget.dataset.id;
    //         const nextElem = e.currentTarget.nextElementSibling;
    //         const previousElem = e.currentTarget.previousElementSibling;
    //         if (previousElem) {
    //             if (previousElem.classList.contains('active')) {
    //                 e.currentTarget.classList.add('active');
    //             }
    //         }
    //         if (nextElem && nextElem.classList.contains('active')) {
    //             nextElem.classList.remove('active');
    //         }
    //     })
    // }
})