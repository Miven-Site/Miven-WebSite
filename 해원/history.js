let roller = document.querySelector('.rolling-list');
roller.id = 'roller1';

let clone = roller.cloneNode(true)
clone.id = 'roller2';
document.querySelector('.wrap').appendChild(clone);

document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';

roller.classList.add('original');
clone.classList.add('clone');



document.addEventListener('DOMContentLoaded', function () {
    const yearBoxes = document.querySelectorAll('.rolling-list ul li div');
    for (const yearBox of yearBoxes) {
        yearBox.addEventListener('click', zoomIn);
    }

    function zoomIn(event) {
    const clickedYearBox = event.currentTarget;

    if (!clickedYearBox.closest('li').classList.contains('coming-soon')) {
        clickedYearBox.style.transform = "scale(1000)";
        clickedYearBox.style.zIndex = 1;
        clickedYearBox.style.transition = "ease-in 20s"; //

        if (clickedYearBox.closest('li').classList.contains('first-year')) {
            setTimeout(function () {
                window.location.href = '../../가윤2/index.html';
            }, 1050);
        }

        if (clickedYearBox.closest('li').classList.contains('second-year')) {
            setTimeout(function () {
                window.location.href = '../../가윤/index.html';
            }, 1050);
        }
        
        if (clickedYearBox.closest('li').classList.contains('third-year')) {
            setTimeout(function () {
                window.location.href = '../../가윤/index.html';
            }, 1050);
        }

    }
}

});

document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.rolling-list ul li');

    // 각 li 요소에 대해 독립적으로 랜덤한 초기 위치 및 시작 시간 설정
    const initialOffsets = Array.from(listItems, function () {
        return Math.floor(Math.random() * 41) - 20; // -20 ~ 20의 랜덤한 값을 생성
    });

    const startTimes = Array.from(listItems, function (_, index) {
        return Math.random() * 4000; // 0 ~ 4000의 랜덤한 시작 시간 생성
    });

    // 현재 시간을 이용하여 부드러운 움직임을 생성
    function updateAnimation() {
        const currentTime = Date.now();

        listItems.forEach(function (item, index) {
            const elapsed = ((currentTime - startTimes[index]) % 4000) / 4000; // 시작 시간을 기준으로 경과 시간을 계산 (0 ~ 1)
            const offset = initialOffsets[index] + Math.sin(elapsed * Math.PI * 2) * 10; // sin 함수를 사용하여 일렬의 파도 모양 효과 생성
            item.style.transform = `translateY(${offset}px)`;
        });

        requestAnimationFrame(updateAnimation);
    }

    updateAnimation();
});