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

// if you have a style that you want to apply to all items in a class, use this function,
// className is the class you want the style applied to
// styleName is the style you want applied
function applyStyleToAllClass(className, styleName) { 
    for (let i = 0; i < document.getElementsByClassName(className).length; i++) {
            document.getElementsByClassName(className)[i].classList.add(styleName)
            
        }
}

function removeStyleFromAllClass(className, styleName) {
    for (let i = 0; i < document.getElementsByClassName(className).length; i++) {
            document.getElementsByClassName(className)[i].classList.remove(styleName)
            
        }
}

function checkTheme() {
    let currentTheme = localStorage.getItem("theme");
    // console.log(currentTheme);

    if (currentTheme == "Dark") {
        themeDependent.classList.remove("themeLight");
        themeDependent.classList.add("themeDark");

        themeDependentText.classList.remove("themeLightText");
        themeDependentText.classList.add("themeDarkText");

        applyStyleToAllClass("charBorder", "darkBackground")
        // ADD ALL DARKMODE STYLES HERE
        
    } else {
        themeDependent.classList.add("themeLight");
        themeDependent.classList.remove("themeDark");

        themeDependentText.classList.add("themeLightText");
        themeDependentText.classList.remove("themeDarkText");

        removeStyleFromAllClass("charBorder", "darkBackground")
        // ADD ALL LIGHTMODE STYLES HERE
    }
    themeSwitch.textContent = "Current Theme: " + currentTheme
}
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "Light");
}
checkTheme();
