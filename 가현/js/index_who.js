const joinTexts = document.querySelectorAll('.scroll_join__text');
    let currentIndex = -1;

    function showText(index){
        joinTexts.forEach((joinText, i) => {
            if(i <= index - 1){
                joinText.style.opacity = 1;
                mainText.style.transform = 'translate(-50%, -50%)';
            }
            else {
                mainText.style.opacity = 0;
                mainText.style.transform = 'translate(-50%, 50%)';
            }
        })
    }

    function handleScroll(){
        const scrollY = window.scrollY || window.pageYOffset;
        const threshold = (document.body.clientHeight - window.innerHeight) / 100;
        const totalTexts = mainTexts.length;

    let newIndex = Math.floor(scrollY / (threshold / totalTexts));

        if (newIndex >= totalTexts) {
            newIndex = totalTexts - 1;
        } else if (newIndex < 0) {
            newIndex = 0;
        }

        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            showText(currentIndex);
            isTextVisible = true;
        }
    }

    window.addEventListener('scroll', handleScroll);
    

    handleScroll();