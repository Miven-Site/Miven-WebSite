// const mainTexts = document.querySelectorAll('.scroll_main__text');
// // 현재 선택된 텍스트 요소의 인덱스를 저장하는 변수
//         let currentIndex = -1;

//         function showText(index) {
//             // mainText에 포함된 각 요소에 대해 반복문을 실행함
//             // 각 요소는 mainText 로 해당 요소의 인덱스는 i로 사용됨
//             mainTexts.forEach((mainText, i) => {
//                 if(i === index - 1) {
//                     mainText.style.opacity = 1;
//                     mainText.style.transform = 'translate(-50%, 0%)';
//                 } // div 하나하나
//                 else if(i === index - 2) {
//                     mainText.style.opacity = 1;
//                     mainText.style.transform = 'translate(-50%, -50%)';
//                 } 
//                 else if(i === index - 3){
//                     mainText.style.opacity = 1;
//                     mainText.style.transform = 'translate(-50%, -100%)';
//                 }
//                 else if(i === index - 4){
//                     mainText.style.opacity = 1;
//                     mainText.style.transform = 'translate(-50%, -150%)';
//                 }
//                 else if(i === index - 5){
//                     mainText.style.opacity = 1;
//                     mainText.style.transform = 'translate(-50%, -200%)';
//                 }
//                 else if(i === index - 6){
//                     mainText.style.opacity = 1;
//                     mainText.style.transform = 'translate(-50%, -250%)';
//                 }
//                 else if(i === index - 7){
//                     mainText.style.opacity = 0;
//                     mainText.style.transform = 'translate(-50%, -250%)';
//                 }
//                 else {
//                     mainText.style.opacity = 0;
//                     mainText.style.transform = 'translate(-50%, 400%)';
//                 }
//             });


//         }

//         function handleScroll() {
//             const scrollY = window.scrollY;

//             const threshold = document.body.clientHeight - window.innerHeight;
//             const totalTexts = mainTexts.length;

//             let newIndex = Math.floor(scrollY / (threshold / totalTexts));


//             if (newIndex >= totalTexts) {
//                 newIndex = totalTexts - 1;
//             } else if (newIndex < 0) {
//                 newIndex = 0;
//             }

//             if (newIndex !== currentIndex) {
//                 currentIndex = newIndex;
//                 showText(currentIndex);
//             }
//         }


//         window.addEventListener('scroll', handleScroll);

//         handleScroll(); 

//         function createBubble() {
//             let section = document.querySelector('section');
//             let createElement = document.createElement('span');
//             let size = Math.random() * 200;

//             createElement.style.animation = 'bubble 30s linear infinite';
//             createElement.style.height = 250 + size + 'px';
//             createElement.style.width = 250 + size + 'px';
//             // createElement.style.left = Math.random() * innerWidth + 'px';
//             createElement.style.left = Math.random() * (innerWidth - size) + 'px'; // 겹치지 않도록 변경
//             createElement.style.bottom = -size + 'px'; // 아래서 나타나도록 위치 변경
//             createElement.style.boxShadow = "inset 0 0 30px 10px white";

//             section.appendChild(createElement);

//                         // Remove the bubble after animation ends
//             createElement.addEventListener('animationend', () => {
//                 createElement.remove();
//             });


//         }

//         createBubble();

//         setInterval(createBubble, 400);

document.addEventListener("DOMContentLoaded", function () {
    const texts = document.querySelectorAll(".scroll_main__text");
    let index = 0;
    let baseOffset = 10; // 초기
    let step = 30;
    let lastTextOffset = 20;


    texts.forEach((text, i) => {
        let offset = baseOffset + i * step;
        if (i === texts.length - 1) {
            offset += lastTextOffset;
        }
        text.style.transform = `translateY(${offset}px)`;
    });

    function updateTextPositions() {
        for (let i = 0; i <= index; i++) {
            let newOffset = baseOffset - (index - i) * step;

            if (i === texts.length - 1) {
                newOffset += lastTextOffset;
            }

            texts[i].style.transform = `translateY(${newOffset}px)`;
        }
    }

    function showNextText() {
        if (index < texts.length) {
            texts[index].classList.add("show");
            updateTextPositions();
            if (index === texts.length - 1) {
                new TypeIt('#title')
                    .pause(300)
                    .go();
            }

            index++;
        } else {
            clearInterval(interval);
        }
    }

    const interval = setInterval(showNextText, 1800)
});

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('#title')
        .pause(200)
        .go();
})


$(document).ready(function ($) {

    "use strict";

    //Page loader
    if ($('.pageloader').length) {

        $('.pageloader').toggleClass('is-active');

        $(window).on('load', function () {
            var pageloaderTimeout = setTimeout(function () {
                $('.pageloader').toggleClass('is-active');
                $('.infraloader').toggleClass('is-active')
                clearTimeout(pageloaderTimeout);
            }, 700);
        })
    }


    //Index hero animated header
    if ($('#large-header').length) {
        // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
        // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

        // requestAnimationFrame polyfill by Erik MÃ¶ller. fixes from Paul Irish and Tino Zijdel

        // MIT license

        (function () {
            var lastTime = 0;
            var vendors = ['ms', 'moz', 'webkit', 'o'];
            for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                    || window[vendors[x] + 'CancelRequestAnimationFrame'];
            }

            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function (callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function () { callback(currTime + timeToCall); },
                        timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };

            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function (id) {
                    clearTimeout(id);
                };
        }());

        (function () {

            var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

            // Main
            initHeader();
            addListeners();

            function initHeader() {
                width = window.innerWidth;
                height = window.innerHeight;
                target = { x: 0, y: height };

                largeHeader = document.getElementById('large-header');
                largeHeader.style.height = height + 'px';

                canvas = document.getElementById('demo-canvas');
                canvas.width = width;
                canvas.height = height;
                ctx = canvas.getContext('2d');

                // create particles
                circles = [];
                for (var x = 0; x < width * 0.5; x++) {
                    var c = new Circle();
                    circles.push(c);
                }
                animate();
            }

            // Event handling
            function addListeners() {
                window.addEventListener('scroll', scrollCheck);
                window.addEventListener('resize', resize);
            }

            function scrollCheck() {
                if (document.body.scrollTop > height) animateHeader = false;
                else animateHeader = true;
            }

            function resize() {
                width = window.innerWidth;
                height = window.innerHeight;
                largeHeader.style.height = height + 'px';
                canvas.width = width;
                canvas.height = height;
            }

            function animate() {
                if (animateHeader) {
                    ctx.clearRect(0, 0, width, height);
                    for (var i in circles) {
                        circles[i].draw();
                    }
                }
                requestAnimationFrame(animate);
            }

            // Canvas manipulation
            function Circle() {
                var _this = this;

                // constructor
                (function () {
                    _this.pos = {};
                    init();
                    console.log(_this);
                })();

                function init() {
                    _this.pos.x = Math.random() * width;
                    _this.pos.y = height + Math.random() * 100;
                    _this.alpha = 0.1 + Math.random() * 0.3;
                    _this.scale = 0.3 + Math.random() * 0.3;
                    _this.velocity = Math.random();
                }

                this.draw = function () {
                    if (_this.alpha <= 0) {
                        init();
                    }
                    _this.pos.y -= _this.velocity;
                    _this.alpha -= 0.0005;
                    ctx.beginPath();
                    ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
                    ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
                    ctx.fill();
                };
            }

        })();
    }

})