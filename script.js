function home(){
    return `
        <section class="home">
            <img src="./assets/fotobanjir.png" alt="fotobanjir" class="hero-img">

            <div class="home-content">
                <h1>BANYAK SAUDARA KITA KEHILANGAN TEMPAT TINGGAL AKIBAT BENCANA</h1>
                <p>
                    Mari bantu mereka dengan berdonasi sekecil apapun.
                    Donasimu sangat berarti.
                </p>
                <a href="#/donasi" class="btn">Donasi Sekarang</a>
            </div>
        </section>
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
        <div class="form-container">
            <h1 class="section-title">Daftar Relawan</h1>
            <div id="volunteerSuccessMessage"></div>
            <form id="volunteerForm">
                <div class="form-group">
                    <label>Nama Lengkap</label>
                    <input type="text" id="volName" required>
                    <div class="error" id="volNameError"></div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="volEmail" required>
                </div>
                <div class="form-group">
                    <label>Keahlian</label>
                    <textarea id="volSkill"></textarea>
                </div>
                <button type="submit" class="btn-submit">Daftar Relawan</button>
            </form>
        </div>
    `;
}

function about(){
    return `
        <section class="about-content">
            <h2>Tentang Kami</h2>
            <p>Dompet Dhuafa adalah organisasi nirlaba...</p>
        </section>
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
