window.onload = function(){
    let navList = document.querySelector(".nav > ul");

    // 자바스크립트용 CSS 구현
    let submenus = document.querySelectorAll(".nav > ul > li > ul");

    submenus.forEach(function (submenu){
        submenu.style.display = "block";
        submenu.style.height = "0";
        submenu.style.overflow = "hidden";
        submenu.style.transition = "all 600ms";
    });

    // 마우스 오버 시 전체 배경 나오는 애니메이션
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

    //슬라이드
    let currentIndex = 0; //현재 이미지
    const slider = document.querySelectorAll(".slider"); //모든 이미지를 변ㄴ수에 저장
    slider.forEach(img => img.style.opacity = "0"); //모든 이미지를 투명하게 처리
    slider[0].style.opacity = "1"; //첫번째 이미지만 보이게

    setInterval(()=> { // 3초에 한번씩 실행
        let nextIndex = (currentIndex +1) % slider.length // 1 2 0 1 2 무한반복

        slider[currentIndex].style.opacity = "0"; //첫번쨰 이미지 사라짐
        slider[nextIndex].style.opacity = "1"; //두번쨰 이미지 나타남
        slider.forEach(img => img.style.transition = "all 1s"); //이미지 애니메이션 추가

        currentIndex = nextIndex; //두번째 인덱스값을 현재 인덱스값에 저장
    },3000);

    //레이어 팝업
    document.querySelector(".popup-btn").addEventListener("click",function(){
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click",function(){
        document.querySelector(".popup-view").style.display = "none";
    });
}