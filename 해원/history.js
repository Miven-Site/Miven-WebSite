// new TypeIt("#typing-text", {
//     strings: ["2022년도부터 2024년까지 MIVEN의 추억이 담긴 history 공간입니다."],  // 타이핑할 텍스트
//     speed: 150,  // 타이핑 속도
//     loop: false  // 반복하지 않음
// }).go();

new TypeIt("#typing-text", {
    strings: ["2022년 ~ 2024년까지 MIVEN의 추억이 담긴 history 공간입니다."],
    speed: 150,
    loop: false,
    afterComplete: function () {
        setTimeout(function () {
            $("#typing-text").fadeOut(500, function () {
                $("#fade-text").fadeIn(1000); // 1초 뒤 두 번째 문구 나타남
            });
        }, 1000); // 1초 대기 후 실행
    }
}).go();

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
                    window.location.href = '../../지은/index.html';
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

// coming soon ment
document.addEventListener("DOMContentLoaded", function () {
    const comingSoonText = document.getElementById("coming-soon-text");
    const secretBox = document.getElementById("secret-box");

    comingSoonText.addEventListener("click", function () {
        // console.log("coming soon 클릭");
        // if (secretBox.style.opacity === "0" || secretBox.style.opacity === "") {
        //     secretBox.style.opacity = "1";
        //     secretBox.style.visibility = "visible";
        // } else {
        //     secretBox.style.opacity = "0";
        //     secretBox.style.visibility = "hidden";
        // }
        // 메시지 보이기
        secretBox.style.opacity = "1";
        secretBox.style.visibility = "visible";

        // 3초 후 자동으로 숨기기
        setTimeout(function () {
            secretBox.style.opacity = "0";
            secretBox.style.visibility = "hidden";
        }, 3000); // 3000ms = 3초

    });
});



// $(document).ready(function () {
//     // 첫 번째 줄 타이핑 효과
//     new TypeIt("#typing-text", {
//         strings: ["2022년도부터 2024년까지 MIVEN의 추억이 담긴 history 공간 입니다."],
//         speed: 100, // 타이핑 속도
//         waitUntilVisible: true, // 화면에 보일 때까지 기다리기
//         cursor: false, // 커서 숨기기
//     }).go();

//     // 첫 번째 줄 타이핑 완료 후 두 번째 줄 fade-in 효과 적용
//     new TypeIt("#typing-text", {
//         afterComplete: () => {
//             setTimeout(() => {
//                 $("#fade-text").addClass("show"); // 두 번째 줄 fade-in
//             }, 1000); // 타이핑이 끝난 후 1초 대기 후 나타나게 설정
//         }
//     });
// });
