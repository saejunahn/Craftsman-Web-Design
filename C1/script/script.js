window.onload = function (){
    //메뉴
    let navList = document.querySelectorAll(".nav > ul > li");

    // 자바스크립트 CSS
    let submenus = document.querySelectorAll(".nav > ul > li > ul");

    submenus.forEach(function(submenu){
        submenu.style.display = "block";
        submenu.style.overflow = "hidden";
        submenu.style.height = "0";
        submenu.style.transition = "all 600ms";
    });

    navList.forEach(navItem => {
        navItem.addEventListener("mouseover",function(){
            let subMenu = this.querySelector(".submenu");
            subMenu.style.height = subMenu.scrollHeight + "px";
        });
    });
    navList.forEach(navItem => {
        navItem.addEventListener("mouseout",function(){
            this.querySelector(".submenu").style.height = "0px"
        });
    });

    //이미지 슬라이드
    let currentIndex = 0;
    const slider = document.querySelectorAll(".slider");
    slider.forEach(img => img.style.opacity = "0");
    slider[0].style.opacity = "1";

    setInterval(()=> {
        let nextIndex = (currentIndex + 1) % slider.length;

        slider[currentIndex].style.opacity = "0";
        slider[nextIndex].style.opacity = "1";
        slider.forEach(img => img.style.transition = "all 1s");

        currentIndex = nextIndex;
    },3000);

    //탭메뉴
    const tabBtn = document.querySelectorAll(".info-menu > a");
    const tabCont = document.querySelectorAll(".info-cont > div");

    tabCont.forEach(el => el.style.display = "none");
    tabCont[0].style.display = "block";

    tabBtn.forEach((tab,index)=> {
        tab.addEventListener("click",()=> {
            tabBtn.forEach(tab => tab.classList.remove("active"));
            tab.classList.add("active");

            tabCont.forEach(cont => cont.style.display = "none");
            tabCont[index].style.display = "block";
        });
    });

    //레이어팝업
    document.querySelector(".popup-btn").addEventListener("click", function(){
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click", function(){
        document.querySelector(".popup-view").style.display = "none";
    });

}