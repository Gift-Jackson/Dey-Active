const pwdIcons = document.querySelectorAll(".pwd-icon");
const passInputs = document.querySelectorAll(".password");

// Password show and hide
pwdIcons.forEach((pwdIcon, index) => {
    pwdIcon.addEventListener("click", () => {
        const passInput = passInputs[index];
        if (passInput.type === "password") {
            passInput.type = "text";
            pwdIcon.textContent = "visibility_off";
        } else {
            passInput.type = "password";
            pwdIcon.textContent = "visibility";
        }
    });
});

