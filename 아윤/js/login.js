document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email-input");
    const pwInput = document.getElementById("pw-input");
    const loginButton = document.getElementById("login-button");

    // 입력 내용 확인
    function areAllTextareasFilled() {
        return (
            emailInput.value.trim() !== "" &&
            pwInput.value.trim() !== ""
        );
    }

    // 지원서 쓰러가기 버튼 활성화
    function updateloginButtonOpacity() {
        if (areAllTextareasFilled()) {
            loginButton.style.opacity = 1;
            loginButton.removeAttribute("disabled");
        } else {
            loginButton.style.opacity = 0.3;
            loginButton.setAttribute("disabled", "disabled");
        }
    }

    emailInput.addEventListener("input", updateloginButtonOpacity);
    pwInput.addEventListener("input", updateloginButtonOpacity);

    updateloginButtonOpacity();
});