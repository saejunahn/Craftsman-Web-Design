window.onload = function (){
    //메뉴
    let navList = document.querySelector(".nav > ul");

    // 자바스크립트용 CSS 구현
    let submenus = document.querySelectorAll("#header .nav > ul > li > ul")

    submenus.forEach(function (submenu){
        submenu.style.display = "block";
        submenu.style.height = "0";
        submenu.style.overflow = "hidden";
        submenu.style.transition = "all 600ms";
    });

    //마우스 오버 시 전체 배경 나오는 애니메이션 
    navList.addEventListener("mouseover",() => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "118px";
        }); 
        document.getElementById("header").classList.add("on");
    });

    navList.addEventListener("mouseout",() => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "0px";
        }); 
        document.getElementById("header").classList.remove("on");
    });


    //슬라이더
    let currentIndex = 0; //현재 이미지
    const sliderWrap = document.querySelector(".sliderWrap"); //전체 이미지
    const slider = document.querySelectorAll(".slider"); //각각의 이미지
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true); //첫번째 이미지 저장
    sliderWrap.appendChild(sliderClone); //복사한 이미지를 마지막에 추가

    setInterval(()=> {
        currentIndex++; //현재 이미지를 1씩 증가
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%"; //애니메이션 추가
        sliderWrap.style.transition = "all 0.6s"; //이미지 이동

        if(currentIndex == slider.length){ //마지막 이미지
            setTimeout(() => {
                sliderWrap.style.transition = "0s"; //애니메이션 정지
                sliderWrap.style.marginLeft = "0"; // 이미지 위치 초기화
                currentIndex = 0; //현재 이미지 초기화
            }, 700);
        }
    },3000);

    //팝업
    document.querySelector(".popup-btn").addEventListener("click", function(){
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click", function(){
        document.querySelector(".popup-view").style.display = "none";
    });
}