function home(){
    return `
        <section class="home">
            <img src="./assets/fotobanjir.png" alt="fotobanjir" class="hero-img">

            <div class="home-content">
                <h1>BANYAK SAUDARA KITA KEHILANGAN TEMPAT TINGGAL AKIBAT BENCANA</h1>
                <p>
                    Mari bantu mereka dengan berdonasi sekecil apapun.
                    Donasimu sangat berarti.
                    Web Donasi adalah platform berbasis website yang dibuat untuk memudahkan 
                    masyarakat dalam memberikan bantuan sosial dan kemanusiaan secara online. 
                    Melalui web ini pengguna dapat berdonasi dengan mudah, cepat, dan aman 
                    untuk berbagai program bantuan yang membutuhkan.

                    Web Donasi menyediakan informasi transparan mengenai tujuan penggalangan 
                    dana, perkembangan donasi, serta dampak yang dihasilkan dari setiap 
                    kontribusi. Dengan memanfaatkan teknologi digital, web ini diharapkan 
                    dapat menjadi sarana untuk menumbuhkan kepedulian sosial dan memperluas 
                    jangkauan kebaikan bagi masyarakat yang membutuhkan.
                </p>
                <a href="#/donasi" class="btn">Donasi Sekarang</a>
            </div>
        </section>
    `;
}

function kampanye(){
    return `
        <h1 class="judul">Berikut adalah Kampanye Yang Tersedia </h1>
        <section class="kampanye1">
            <img src="./assets/fotodonasi1.jpg" alt="fotodonasi1">
            <div class="kampanye-pertama">
                <p>
                    Banjir yang melanda sejumlah wilayah di Pulau Sumatra terjadi akibat 
                    curah hujan tinggi yang berlangsung dalam waktu lama, diperparah oleh 
                    meluapnya sungai dan buruknya sistem drainase di beberapa daerah. 
                    Bencana ini menyebabkan ribuan rumah terendam, fasilitas umum rusak, 
                    serta aktivitas masyarakat lumpuh.Dampak banjir dirasakan secara luas, 
                    mulai dari kerugian materi hingga terganggunya akses pendidikan dan layanan 
                    kesehatan. Anak-anak, lansia, dan kelompok rentan menjadi pihak yang paling 
                    terdampak, karena harus mengungsi dan kehilangan rasa aman.Melalui aksi 
                    kemanusiaan dan dukungan bersama, bantuan seperti kebutuhan pokok, air bersih, 
                    layanan kesehatan, serta dukungan psikososial sangat dibutuhkan untuk membantu 
                    para korban bangkit dari dampak bencana banjir di Sumatra.
                </p>
                <a href="#/donasi" class="btn">Donasi Sekarang</a>
            </div>
        </section>

        <section class="kampanye2">
            <img src="./assets/fotodonasi2.jpeg" alt="fotodonasi1">
            <div class="kampanye-kedua">
                <p>
                    Bencana banjir dan longsor terjadi akibat hujan deras sejak 24-25 November 2025. 
                    Bencana tersebut menyebabkan terputusnya akses keluar-masuk kota, pemadaman listrik, 
                    serta gangguan jaringan komunikasi. Sebagian besar wilayah Kota Sibolga terendam dan 
                    berdampak langsung pada aktivitas pelayanan publik, termasuk layanan Keimigrasian dan 
                    Pemasyarakatan. Bencana banjir dan longsor terjadi akibat hujan deras sejak 24-25 November 2025. 
                    Bencana tersebut menyebabkan terputusnya akses keluar-masuk kota, pemadaman listrik, serta 
                    gangguan jaringan komunikasi. Sebagian besar wilayah Kota Sibolga terendam dan berdampak 
                    langsung pada aktivitas pelayanan publik, termasuk layanan Keimigrasian dan Pemasyarakatan.
                    Melalui kampanye donasi ini, Anda dapat ikut meringankan penderitaan mereka, mendukung proses 
                    evakuasi, serta membantu pemulihan kehidupan warga terdampak agar mereka bisa bangkit kembali.
                </p>
                <a href="#/donasi" class="btn">Donasi Sekarang</a>
            </div>
        </section>

        <section class="kampanye3">
            <img src="./assets/fotodonasi3.jpeg" alt="fotodonasi3">
            <div class="kampanye-ketiga">
                <p>
                    Warga di Pulau Sumatera yang terdampak banjir dan tanah longsor bergegas mengevakuasi 
                    penduduk yang terjebak dari perairan berlumpur yang menghancurkan rumah-rumah dan 
                    memaksa ribuan orang mengungsi akibat siklon tropis langka yang melanda wilayah 
                    tersebut. Bencana ini menjadi bagian dari rangkaian cuaca ekstrem yang terjadi di 
                    Asia Tenggara dalam beberapa waktu terakhir. Anak-anak, lansia, ibu hamil, dan kelompok 
                    rentan menjadi pihak yang paling terdampak dalam situasi ini. Mereka membutuhkan bantuan 
                    segera berupa makanan siap saji, air bersih, layanan kesehatan, serta dukungan psikososial 
                    untuk menjaga kondisi fisik dan mental selama masa darurat. Dukungan dan kepedulian masyarakat 
                    sangat dibutuhkan untuk membantu proses penyelamatan, pemulihan, serta pemenuhan kebutuhan dasar 
                    para korban agar mereka dapat bangkit kembali dari dampak bencana.buatkan kalimat untuk 
                    deskripsi kampanya donasi
                </p>
                <a href="#/donasi" class="btn">Donasi Sekarang</a>
            </div>
        </section>
        
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
