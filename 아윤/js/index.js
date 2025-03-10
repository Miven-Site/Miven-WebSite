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
