window.onload = function() {
    cookieBanner = document.querySelector(".cookie-banner");
    cookieYes = document.querySelector("#cookie-yes");
    cookieNo = document.querySelector("#cookie-no");
    if (localStorage.getItem("cookieAllow") == null) {
        cookieBanner.classList.remove("off");
        cookieBanner.classList.add("on");
    }
    cookieYes.addEventListener("click", () => {
        localStorage.setItem("cookieAllow", "true");
        cookieBanner.classList.add("off");
        cookieBanner.classList.remove("on");
    });
    cookieNo.addEventListener("click", () => {
        localStorage.setItem("cookieAllow", "false");
        cookieBanner.classList.add("off");
        cookieBanner.classList.remove("on");
    });
}
function cookieCancel() {
    localStorage.removeItem("cookieAllow");
    location.reload(true);
}