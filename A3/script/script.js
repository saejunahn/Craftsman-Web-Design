window.onload = function(){
    //메뉴
    let navList = document.querySelectorAll(".nav > ul > li");

    //자바스크립트용 CSS 구현
    let submenus = document.querySelectorAll(".nav > ul > li > ul")

    submenus.forEach(function (submenu){
        submenu.style.display = "block";
        submenu.style.height = "0";
        submenu.style.overflow = "hidden";
        submenu.style.transition = "all 600ms";
    });

    navList.forEach(function(navItem){
        navItem.addEventListener("mouseover", function(){
            let subMenu = this.querySelector(".submenu");
            subMenu.style.height = subMenu.scrollHeight + "px";
        });
    });
    navList.forEach(function(navItem){
        navItem.addEventListener("mouseout", function(){
            this.querySelector(".submenu").style.height = "0px";
        });
    });

    //슬라이드
    let currentIndex = 0; //현재 이미지
    const slider = document.querySelectorAll(".slider"); //모든 이미지를 변수에 저장
    slider.forEach(img => img.style.opacity = "0"); //모든 이미지를 투명하게 처리
    slider[0].style.opacity = "1"; //첫번째 이미지만 보이게

    setInterval(()=> { //3초에 한번씩 실행
        let nextIndex = (currentIndex + 1) % slider.length; //1 2 0 1 2 무한반복

        slider[currentIndex].style.opacity = "0"; //첫번째 이미지 사라짐
        slider[nextIndex].style.opacity = "1";    //두번째 이미지 나타남
        slider.forEach(img => img.style.transition = "all 1s"); //이미지 애니메이션 추가

        currentIndex = nextIndex; //두번째 인덱스값을 현재 인덱스값에 저장
    },3000);

    //탭메뉴
    const tabBtn = document.querySelectorAll(".info-menu > a") //버튼 설정
    const tabCont = document.querySelectorAll(".info-cont > div") //콘텐츠 설정

    tabCont.forEach(el => el.style.display = "none"); //모든 콘텐츠를 숨김
    tabCont[0].style.display = "block"; //첫번째 콘텐츠를 보이게 설정

    tabBtn.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabBtn.forEach(tab => tab.classList.remove("active")); //모든 버튼 클래스 삭제
            tab.classList.add("active"); //클릭한 버튼만 클래스 추가

            tabCont.forEach(cont => cont.style.display = "none"); //모든 콘텐츠를 숨김
            tabCont[index].style.display = "block"; //클릭한 버튼의 콘텐츠 내용을 보여줌
        });
    });

    //레이어 팝업
    document.querySelector(".popup-btn").addEventListener("click",function(){
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click",function(){
        document.querySelector(".popup-view").style.display = "none";
    });
}
