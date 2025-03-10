// 1. 쉽게 짜면 이렇게도 짤 수 있어!! 뭔가 무슨 코드인지 딱 보이지!! 이건 그냥 정말 직관적이게 짠 코드야

const contaienr1 = document.querySelector(".contaienr1");
const contaienr2 = document.querySelector(".contaienr2");

contaienr2.style.display = "none"; // 초기에 container2가 보이지 않도록 셋팅

function on1(){ // one div를 클릭했을 때 on1 함수가 호출되며 container1은 보여지고 container2를 제거함
    contaienr1.style.display = "block"; // block은 화면에 보여주는거
    contaienr2.style.display = "none"; // none은 제거한다고 보면 이해하기 편해!!
}

function on2(){ // two div를 클릭했을 때 on2 함수가 호출되며 container2은 보여지고 container1를 제거함
    contaienr1.style.display = "none";
    contaienr2.style.display = "block";
}