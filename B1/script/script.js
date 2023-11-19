window.onload = function(){
    //메뉴

    let navList = document.querySelector(".nav > ul");

    //자바스크립트 CSS
    let submenus = document.querySelectorAll(".nav > ul > li > ul");

    submenus.forEach(function (submenu){
        submenu.style.display = "block";
        submenu.style.overflow = "hidden";
        submenu.style.height = "0";
        submenu.style.transition = "all 600ms";
    });

    navList.addEventListener("mouseover", function(){
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "155px";
        })
    });
    navList.addEventListener("mouseout", function(){
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "0px";
        })
    });

    //이미지 슬라이드
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

    setInterval(()=> {
        currentIndex++;
        sliderWrap.style.transition = 'all 0.6s';
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";

        if(currentIndex == slider.length){
            setTimeout(()=>{
                sliderWrap.style.transition = "0s";
                sliderWrap.style.marginLeft = "0s";
                currentIndex = 0;
            },600);
        }
    },3000);

    //탭메뉴
    const tabBtn = document.querySelectorAll(".info-menu > a");
    const tabCont = document.querySelectorAll(".info-cont > div");

    tabCont.forEach(el => el.style.display = "none");
    tabCont[0].style.display = "block";

    tabBtn.forEach((tab, index)=> {
        tab.addEventListener("click", ()=> {
            tabBtn.forEach(tab => tab.classList.remove("active"));
            tab.classList.add("active");

            tabCont.forEach(cont => cont.style.display = "none");
            tabCont[index].style.display = "block";
        });
    });

    //팝업
    document.querySelector(".popup-btn").addEventListener("click",function(){
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click",function(){
        document.querySelector(".popup-view").style.display = "none";
    });
}