document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.nav-item');
    var defaultNavItem = document.querySelector('.nav-item');
    var mainElement = document.querySelector('main');

    // 각각의 네비게이션 메뉴 아이템에 이벤트 리스너 추가
    menuItems.forEach(function (menuItem) {
        // mouse over
        menuItem.addEventListener('mouseenter', function () {
            menuItem.classList.add('hovered');
        });

        menuItem.addEventListener('mouseleave', function () {
            menuItem.classList.remove('hovered');
        });

        // .nav-item click
        menuItem.addEventListener('click', function () {
            menuItems.forEach(function (item) {
                item.classList.remove('selected');
            });

            menuItem.classList.add('selected');

            var clickedItemText = menuItem.textContent;

            updateMainContent(clickedItemText);
        });
    });

    // 페이지 로딩 시 첫 번째 li
    defaultNavItem.classList.add('selected');

    var defaultItemText = defaultNavItem.textContent;

    updateMainContent(defaultItemText);

    // li에 따라 이미지 변경
    function updateMainContent(itemText) {
        mainElement.innerHTML = '';

        for (let i = 1; i <= 5; i++) {
            var imgElement = document.createElement('img');
            imgElement.src = `./img/${itemText}0${i}.png`;
            mainElement.appendChild(imgElement);
        }
    }

    // 슬라이드 이펙트 함수
    function updateMainContent(itemText) {
        mainElement.innerHTML = '';
    
        for (let i = 1; i <= 5; i++) {
            var imgElement = document.createElement('img');
            imgElement.src = `./img/${itemText}0${i}.png`;
            mainElement.appendChild(imgElement);
        }
    
        // 슬라이드 이펙트 추가
        mainElement.classList.add('main-slide');
    
        // 너비 계산 및 애니메이션 시간 설정
        var totalWidth = mainElement.scrollWidth;
        var animationDuration = totalWidth / 100;
        mainElement.style.animationDuration = animationDuration + 's';
    
        // 애니메이션 종료 후 슬라이드 클래스 제거
        setTimeout(function () {
            mainElement.classList.remove('main-slide');
        }, animationDuration * 1000);
    }
});