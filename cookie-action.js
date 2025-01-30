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
function grantedStorage() {
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    });
}
function cookieCancel() {
    localStorage.removeItem("cookieAllow");
    location.reload(true);
}