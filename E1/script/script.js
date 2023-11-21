window.onload = function(){

    //메뉴
    let navList = document.querySelectorAll(".nav > ul > li");

    //자바스크립트 CSS
    let submenus = document.querySelectorAll(".nav > ul > li > ul");
    submenus.forEach(submenu => {
        submenu.style.display = "block";
        submenu.style.overflow = "hidden";
        submenu.style.height = "0";
        submenu.style.transition = "all 600ms";
    });


    navList.forEach(navItem => {
        navItem.addEventListener("mouseover", function(){
            let subMenu = this.querySelector(".submenu");
            subMenu.style.height = subMenu.scrollHeight + "px"
        });
    });

    navList.forEach(navItem => {
        navItem.addEventListener("mouseout", function(){
            this.querySelector(".submenu").style.height = "0px";
        });
    });
    
    //이미지 슬라이드(가로)
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

    setInterval(()=> {
        currentIndex++;
        sliderWrap.style.transition = "all 0.6s";
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";

        if(currentIndex == slider.length){
            setTimeout(()=>{
                sliderWrap.style.transition = "0s";
                sliderWrap.style.marginLeft = "0";
                currentIndex = 0;
            },600);
        }
    },3000);

    // 레이어 팝업
    document.querySelector(".popup-btn").addEventListener("click", function(){
        document.querySelector(".popup-view").style.display = "block";
    });

    document.querySelector(".popup-close").addEventListener("click", function(){
        document.querySelector(".popup-view").style.display = "none";
    });
}