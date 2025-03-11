document.addEventListener("DOMContentLoaded", function () {
    const members = document.querySelectorAll(".members");

    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }

    const options = { root: null, threshold: 0.2 };
    const observer = new IntersectionObserver(animateOnScroll, options);

    members.forEach(member => observer.observe(member));
});
 // 페이지 끝에 도달했을 때 화살표 버튼을 보여주는 기능
 window.addEventListener("scroll", function() {
    const nextButton = document.getElementById("next-button");
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 10) {
        nextButton.style.display = "block"; // 끝까지 스크롤하면 버튼 표시
    } else {
        nextButton.style.display = "none"; // 끝에 도달하지 않으면 버튼 숨김
    }
});

// 화살표 클릭 시 페이지 전환 (애니메이션 후 이동)
function goToNextPage() {
    const pageTransition = document.getElementById("page-transition");

    // 페이지 전환 애니메이션 시작
    pageTransition.classList.add("active");

    // 애니메이션 끝나고 페이지 이동
    setTimeout(function() {
        window.location.href = "../가현/index.html"; // 페이지 이동
    }, 1000); // 애니메이션 시간이 끝난 후 이동
}