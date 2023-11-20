window.onload = function (){
    //이미지 슬라이드
    let currentIndex = 0; //현재 이미지
    const sliderWarp = document.querySelector(".sliderWrap"); //전체 이미지
    const slider = document.querySelectorAll(".slider"); //각각의 이미지
    const sliderClone = sliderWarp.firstElementChild.cloneNode(true); //  첫번째 이미지를 저장
    sliderWarp.appendChild(sliderClone);

    setInterval(()=> { //3초에 한번씩 실행
        currentIndex++; //현재 이미지 1씩 증가
        sliderWarp.style.transition = 'all 0.6s'; //애니메이션 추가
        sliderWarp.style.marginTop = -currentIndex * 300 + 'px'; //이미지 이동

        if(currentIndex == slider.length){ //마지막 이미지
            setTimeout(() => {
                sliderWarp.style.transition = "0s"; //애니메이션 정지
                sliderWarp.style.marginTop = "0"; //이미지 위치 초기화
                currentIndex = 0; //현재 이미지 초기화
            }, 700);
        }
    },3000);

    //메뉴
    let navList = document.querySelector(".nav > ul");

    // 자바스크립용 CSS로 변경
    let submenus = document.querySelectorAll("#header .nav > ul > li > ul");

    submenus.forEach(function (submenu) {
        submenu.style.display = "block";
        submenu.style.height = "0";
        submenu.style.overflow = "hidden";
        submenu.style.transition = "all 600ms";
    });

    navList.addEventListener("mouseover", function(){
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "155px";
        });
    });
    navList.addEventListener("mouseout", function(){
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "0px";
        });
    });

    //탭메뉴
    const tabBtn = document.querySelectorAll(".info-menu > a") //버튼 설정
    const tabCont = document.querySelectorAll(".info-cont > div") // 콘텐츠 설정

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

    //팝업
    document.querySelector(".popup-btn").addEventListener("click", function(){
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click", function(){
        document.querySelector(".popup-view").style.display = "none";
    });
}
