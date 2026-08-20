// let BTTB = document.getElementsByClassName("footerButton");

// window.onscroll = function() {ScrollFunction()};

// function ScrollFunction(){
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
//     {
//         BTTB.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

let mobileAboutInc = false;
const aboutText = document.getElementById("aboutText");

function testest() {
  let screenSize = window.matchMedia("(width <= 850px)");
  if (screenSize.matches) {
    aboutText.innerHTML = `Rosie the Riveter is the woman shown in the famous “We Can
                    Do It!” poster. She became a symbol of the hardworking women
                    who helped support the United States during World War II<span id="expandAbout" onclick="expandAbout()">...</span>`;
  } else {
    aboutText.textContent = `Rosie the Riveter is the woman shown in the famous “We Can
                    Do It!” poster. She became a symbol of the hardworking women
                    who helped support the United States during World War II.
                    While many men were away fighting in the war, women took on
                    jobs in factories, shipyards, and other workplaces that had
                    often been done by men. They built airplanes, ships,
                    weapons, and other important supplies needed for the war.
                    Rosie represents these women and the important work they
                    did. In the poster, Rosie is wearing a blue work shirt and a
                    red-and-white polka-dot bandana. She has her arm raised and
                    is flexing her muscles, showing that she is strong and
                    confident. The words “We Can Do It!” appear above her,
                    giving the poster an encouraging message. The image was
                    originally created during World War II as a way to motivate
                    workers, but over time it became much more famous as a
                    symbol of women’s strength and independence. Rosie the
                    Riveter is important because she represents how women proved
                    that they could take on challenging jobs and make a
                    difference. The women who worked during the war helped keep
                    factories and industries running while the country was
                    focused on fighting overseas. Their efforts showed that
                    women could contribute in many different ways. Today, Rosie
                    is still recognized as a symbol of courage, hard work,
                    confidence, and empowerment. Her famous image reminds people
                    that everyone can make a difference when they work hard and
                    believe in themselves.`;
  }
}
testest();
function expandAbout() {
  aboutText.textContent = `Rosie the Riveter is the woman shown in the famous “We Can
                    Do It!” poster. She became a symbol of the hardworking women
                    who helped support the United States during World War II.
                    While many men were away fighting in the war, women took on
                    jobs in factories, shipyards, and other workplaces that had
                    often been done by men. They built airplanes, ships,
                    weapons, and other important supplies needed for the war.
                    Rosie represents these women and the important work they
                    did. In the poster, Rosie is wearing a blue work shirt and a
                    red-and-white polka-dot bandana. She has her arm raised and
                    is flexing her muscles, showing that she is strong and
                    confident. The words “We Can Do It!” appear above her,
                    giving the poster an encouraging message. The image was
                    originally created during World War II as a way to motivate
                    workers, but over time it became much more famous as a
                    symbol of women’s strength and independence. Rosie the
                    Riveter is important because she represents how women proved
                    that they could take on challenging jobs and make a
                    difference. The women who worked during the war helped keep
                    factories and industries running while the country was
                    focused on fighting overseas. Their efforts showed that
                    women could contribute in many different ways. Today, Rosie
                    is still recognized as a symbol of courage, hard work,
                    confidence, and empowerment. Her famous image reminds people
                    that everyone can make a difference when they work hard and
                    believe in themselves.`;
}
