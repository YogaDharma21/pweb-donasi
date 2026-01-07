function heroSection() {
    const section = document.createElement("section");
    section.innerHTML = `
        <section id="hero" class="section hero">
            <div class="container hero-content">
                <h1>Book Your Table Easily</h1>
                <p>
                    Experience the best dining with an easy and fast reservation
                    system.
                </p>
                <a href="#/booking" class="btn">Book Now</a>
            </div>
        </section>`;
    return section;
}

function homePage() {
    const page = document.createElement("div");
    page.appendChild(heroSection());
    return page;
}

function errorPage() {
    const page = document.createElement("div");
    page.innerHTML = `
            <div class="container error">
                <h2>Error 404 Not Found</h2>
            </div>`;
    return page;
}

const route = {
    "/": homePage(),
};

function router() {
    const hash = window.location.hash || "#/";
    const path = hash.replace("#/", "/");
    const app = document.getElementById("app");
    app.innerHTML = "";

    if (route[path]) {
        app.appendChild(route[path]);
    } else {
        app.appendChild(errorPage());
    }
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
