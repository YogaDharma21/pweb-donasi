function home(){
    return `
        <h2>Home Page</h2>
    `;
}

function kampanye(){
    return `
        <h2>Kampanye Page</h2>
    `;
}

function donasi(){
    return `
        <h2>Donasi Page</h2>
    `;
}

function relawan(){
    return `
        <h2>Relawan Page</h2>
    `;
}

function about(){
    return `
        <h2>About Page</h2>
    `;
}

function admin(){
    return `
        <h2>Admin Page</h2>
    `;
}

const routes = {
    '/' : home(),
    '/kampanye' : kampanye(),
    '/donasi' : donasi(),
    '/relawan' : relawan(),
    '/about' : about(),
    '/admin' : admin(),
};

function router(){
    const hash = window.location.hash || "#/";
    const path = hash.replace("#", "");

    document.getElementById("app").innerHTML =
        routes[path] || "<h2>404 Not Found</h2>";
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
