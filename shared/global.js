const themeDependent = document.getElementById("themeDependent");
const themeSwitch = document.getElementById("themeSwitchButton");
const themeDependentText = document.getElementById("themeDependentText");
// if (themeSwitch != null) {
//   themeSwitch.addEventListener("click", () => {
//     if (localStorage.getItem("theme") == "Light") {
//       localStorage.setItem("theme", "Dark");
//     } else {
//       localStorage.setItem("theme", "Light");
//     }
//     checkTheme();
//   });
// }
// if (themeSwitch != null) {
//   themeSwitch.addEventListener("click", () => {
//     if (localStorage.getItem("theme") == "Light") {
//       localStorage.setItem("theme", "Dark");
//     } else {
//       localStorage.setItem("theme", "Light");
//     }
//     checkTheme();
//   });
// }

// if you have a style that you want to apply to all items in a class, use this function,
// className is the class you want the style applied to
// styleName is the style you want applied
function applyStyleToAllClass(className, styleName) {
  for (let i = 0; i < document.getElementsByClassName(className).length; i++) {
    document.getElementsByClassName(className)[i].classList.add(styleName);
  }
}

function removeStyleFromAllClass(className, styleName) {
  for (let i = 0; i < document.getElementsByClassName(className).length; i++) {
    document.getElementsByClassName(className)[i].classList.remove(styleName);
  }
}

function checkTheme(type) {
  // console.log(currentTheme);
  if (type == "switch") {
    if (localStorage.getItem("theme") == "Light") {
      localStorage.setItem("theme", "Dark");
    } else {
      localStorage.setItem("theme", "Light");
    }
  }
  let currentTheme = localStorage.getItem("theme");

  if (currentTheme == "Dark") {
    if (themeDependent != null) themeDependent.classList.remove("themeLight");
    if (themeDependent != null) themeDependent.classList.add("themeDark");

    if (themeDependentText != null) themeDependentText.classList.remove("themeLightText");
    if (themeDependentText != null) themeDependentText.classList.add("themeDarkText");

    applyStyleToAllClass("charBorder", "darkBackground");
    // ADD ALL DARKMODE STYLES HERE

    document.body.classList.add("dark-mode");
  } else {
    if (themeDependent != null) themeDependent.classList.add("themeLight");
    if (themeDependent != null) themeDependent.classList.remove("themeDark");

    if (themeDependentText != null) themeDependentText.classList.add("themeLightText");
    if (themeDependentText != null) themeDependentText.classList.remove("themeDarkText");

    removeStyleFromAllClass("charBorder", "darkBackground");
    // ADD ALL LIGHTMODE STYLES HERE
    document.body.classList.remove("dark-mode");
  }
  if (themeSwitch != null) themeSwitch.textContent = currentTheme + " Mode";
}
if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "Light");
}
checkTheme("keep");
