
const scrollContainer = document.querySelectorAll('#scrollContainerr');

scrollContainer.forEach((item) => {
    const parent = item.parentElement;
    const rightArrow = parent.querySelector('.next_slide');
    const leftArrow = parent.querySelector('.prev_slide');
    leftArrow.addEventListener('click', () => {
        item.scrollBy(-(item.scrollWidth / item.children.length), 0);
    })
    rightArrow.addEventListener('click', () => {
        item.scrollBy(item.scrollWidth / item.children.length, 0);
    })
 
    // item.addEventListener('scroll', (e) => {
    //     let horizontal = e.currentTarget.scrollLeft;
    //     let scrollWidth = e.currentTarget.scrollWidth;
    //     let scrollWidtht = e.currentTarget.offsetWidth;

    //     if (horizontal + scrollWidth <= scrollWidtht) {
    //         leftArrow.style.opacity = "0";
    //     } else if (horizontal == 0) {
    //         rightArrow.style.opacity = "0";
    //     } else {
    //         rightArrow.style.opacity = "1";
    //         leftArrow.style.opacity = "1";
    //     }
    // })

 
    // var isDragging = false;
    // var startX;
    // var scrollLeft;
    
    // // تشخیص رویداد کلیک موس
    // item.addEventListener("mousedown", function(event) {
    //   // تنظیم متغیرهای مورد نیاز برای اسکرول افقی
    //   isDragging = true;
    //   startX = event.pageX - item.offsetLeft;
    //   scrollLeft = item.scrollLeft;
    // });
    
    // // تشخیص رویداد حرکت موس
    // item.addEventListener("mousemove", function(event) {
    //   // بررسی شرط برای اسکرول افقی
    //   if (!isDragging) return;
    
    //   // جلوگیری از اجرای عملیات پیش‌فرض مرورگر
    //   event.preventDefault();
    
    //   // محاسبه اسکرول افقی بر اساس تغییرات موقعیت موس
    //   var x = event.pageX - item.offsetLeft;
    //   var walk = (x - startX) * 3;
    //   item.scrollLeft = scrollLeft - walk;
    // });
    
    // // تشخیص رویداد رها کردن موس
    // item.addEventListener("mouseup", function(event) {
    //   // بازنشانی موقعیت موس
    //   isDragging = false;
    //   startX = 0;
    //   scrollLeft = 0;
    // });



    // let mouseDown = false;
    // let startX, scrollLeft;

    // let startDragging = function (e) {
    //     mouseDown = true;
    //     startX = e.pageX - item.offsetLeft;
    //     scrollLeft = item.scrollLeft;
    // };
    // let stopDragging = function (event) {
    //     mouseDown = false;
    // };

    // item.addEventListener('mousemove', (e) => {
    //     e.preventDefault();
    //     if (!mouseDown) { return; }
    //     const x = e.pageX - item.offsetLeft;
    //     const scroll = x - startX;
    //     item.scrollLeft = scrollLeft - scroll;
    // });
    // item.addEventListener('mousedown', startDragging, false);
    // item.addEventListener('mouseup', stopDragging, false);
    // item.addEventListener('mouseleave', stopDragging, false);

})