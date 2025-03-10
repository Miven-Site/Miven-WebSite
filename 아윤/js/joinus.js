document.addEventListener("DOMContentLoaded", function () {
    const studentIDInput = document.getElementById("studentID-input");
    const nameInput = document.getElementById("name-input");
    const phoneInput = document.getElementById("phoneNumber-input");
    const emailInput = document.getElementById("email-input");
    const pwInput = document.getElementById("pw-input");
    const pwCheckInput = document.getElementById("pwCheck-input");
    const joinusButton = document.getElementById("joinus-button");

    // 입력 내용 확인
    function areAllTextareasFilled() {
        return (
            studentIDInput.value.trim() !== "" &&
            nameInput.value.trim() !== "" &&
            phoneInput.value.trim() !== "" &&
            emailInput.value.trim() !== "" &&
            pwInput.value.trim() !== "" &&
            pwCheckInput.value.trim() !== ""
        );
    }

    // 지원서 쓰러가기 버튼 활성화
    function updateJoinUsButtonOpacity() {
        if (areAllTextareasFilled()) {
            joinusButton.style.opacity = 1;
            joinusButton.removeAttribute("disabled");
        } else {
            joinusButton.style.opacity = 0.3;
            joinusButton.setAttribute("disabled", "disabled");
        }
    }

    studentIDInput.addEventListener("input", updateJoinUsButtonOpacity);
    nameInput.addEventListener("input", updateJoinUsButtonOpacity);
    phoneInput.addEventListener("input", updateJoinUsButtonOpacity);
    emailInput.addEventListener("input", updateJoinUsButtonOpacity);
    pwInput.addEventListener("input", updateJoinUsButtonOpacity);
    pwCheckInput.addEventListener("input", updateJoinUsButtonOpacity);

    updateJoinUsButtonOpacity();
});