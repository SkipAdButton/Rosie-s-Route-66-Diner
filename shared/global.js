const themeDependent = document.getElementById("themeDependent");
const themeSwitch = document.getElementById("themeSwitchButton");

themeSwitch.addEventListener("click", () => {
    if (localStorage.getItem("theme") == "Light") {
        localStorage.setItem("theme", "Dark");
    } else {
        localStorage.setItem("theme", "Light");
    }
    checkTheme();
});

function checkTheme() {
    let currentTheme = localStorage.getItem("theme");
    // console.log(currentTheme);

    if (currentTheme == "Dark") {
        themeDependent.classList.remove("themeLight");
        themeDependent.classList.add("themeDark");
    } else {
        themeDependent.classList.add("themeLight");
        themeDependent.classList.remove("themeDark");
    }
    themeSwitch.textContent = "Current Theme: " + currentTheme
}
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "Light");
}
checkTheme();