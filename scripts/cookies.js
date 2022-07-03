function getCookies() {
    const cookies = {};
    document.cookie.split(";").forEach(cookie => {
        if (cookie.length > 0) {
            const key = cookie.slice(0, cookie.indexOf("="));
            const val = cookie.slice(cookie.indexOf("=") + 1);
            try {
                cookies[key] = JSON.parse(val);
            } catch (error) {
                cookies[key] = val;
            }
        }
    })
    return cookies;
}

function delCookie(key, object) {

}

function getCookie(key) {
    return getCookies()[key];
}

function setCookie(key, object) {
    document.cookie = `${key}=${JSON.stringify(object)}`
}
