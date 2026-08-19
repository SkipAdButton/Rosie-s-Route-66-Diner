const themeDependent = document.getElementById("themeDependent");
const themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("click", () => {
    if (darkMode) {
        darkMode = false;
    } else {
        darkMode = true;
    }
    checkTheme();
})

function checkTheme() {
    let currentTheme = localStorage.getItem("theme");
    // console.log(currentTheme);

    if (currentTheme = "Dark") {
        themeDependent.classList.remove("themeLight");
        themeDependent.classList.add("themeDark");
    } else {
        themeDependent.classList.add("themeLight");
        themeDependent.classList.remove("themeDark");
    }
}

localStorage.setItem("theme", "Dark");

checkTheme();