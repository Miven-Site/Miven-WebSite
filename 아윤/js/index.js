let isFirstScroll = true; // 첫 번째 스크롤 여부를 나타내는 변수
let bf_scrollY = 0;

function revealImages() {
    const image1 = document.getElementById('num11');
    const image2 = document.getElementById('num12');
    const image3 = document.getElementById('num13');
    const image4 = document.getElementById('num14');
    const t20 = document.querySelector('.t20');
    const t21 = document.querySelector('.t21');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const image1Top = image1.getBoundingClientRect().top + scrollY;
    const image2Top = image2.getBoundingClientRect().top + scrollY;
    const image3Top = image3.getBoundingClientRect().top + scrollY;
    const image4Top = image4.getBoundingClientRect().top + scrollY;

    // num11이 화면에 나타나는 경우
    if (bf_scrollY === scrollY) {
        return;
    }
    bf_scrollY = scrollY;

    if (scrollY > image1Top - windowHeight + 100 && isFirstScroll) {
        image1.style.opacity = '1';
        image1.style.animation = 'floatUp 0.5s ease-in-out forwards';
        isFirstScroll = false;
        changeFontColor();
    } else if (scrollY > image1Top - windowHeight + 100 && !isFirstScroll && !image2.classList.contains('revealed')) {
        image2.style.opacity = '1';
        image2.style.animation = 'floatUp 0.5s ease-in-out forwards';
        image2.classList.add('revealed');
    } else if (scrollY > image2Top - windowHeight + 100 && image2.style.opacity === '1' && !image3.classList.contains('revealed')) {
        image3.style.opacity = '1';
        image3.style.animation = 'floatUp 0.5s ease-in-out forwards';
        image3.classList.add('revealed');
    } else if (scrollY > image3Top - windowHeight + 100 && image3.style.opacity === '1' && !image4.classList.contains('revealed')) {
        image4.style.opacity = '1';
        image4.style.animation = 'floatUp 0.5s ease-in-out forwards';
        image4.classList.add('revealed');
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        t20.style.color = 'white';
        t21.style.color = 'rgba(57, 152, 255, 1)';
    }

    if (scrollY > image1Top - windowHeight + 100 && isFirstScroll) {
        revertFontColor();
    }
}

document.getElementById('num11').style.opacity = '0';
document.getElementById('num12').style.opacity = '0';
document.getElementById('num13').style.opacity = '0';
document.getElementById('num14').style.opacity = '0';

let scrollTimer;

window.addEventListener('scroll', function() {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function() {
        revealImages();
    }, 200);
});

function changeFontColor() {
    const t20Element = document.querySelector('.t20');
    t20Element.style.color = 'rgba(57, 152, 255, 1)';
}

function revertFontColor() {
    const t20Element = document.querySelector('.t20');
    t20Element.style.color = 'white';
}

function changeTextColor() {
    const num13Elements = document.querySelectorAll('.num13');

    num13Elements.forEach(element => {
        const h5Elements = element.querySelectorAll('h5');
        h5Elements.forEach(h5 => {
            h5.style.color = 'red';
        });
    });
}

changeTextColor();

window.addEventListener('scroll', () => {
    changeTextColor();
});
