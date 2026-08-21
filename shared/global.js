const themeDependent = document.getElementById("themeDependent");
const themeSwitch = document.getElementById("themeSwitchButton");
const themeDependentText = document.getElementById("themeDependentText");

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

        themeDependentText.classList.remove("themeLightText");
        themeDependentText.classList.add("themeDarkText");
    } else {
        themeDependent.classList.add("themeLight");
        themeDependent.classList.remove("themeDark");

        themeDependentText.classList.add("themeLightText");
        themeDependentText.classList.remove("themeDarkText");
    }
    themeSwitch.textContent = "Current Theme: " + currentTheme
}
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "Light");
}
checkTheme();