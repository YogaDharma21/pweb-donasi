// ============================================
// PAGE FUNCTIONS
// ============================================

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

            <h2 class="judul-statistik">Statistik Donasi Yang Kami Kelola</h2>
            <div class="statistik">
                <div class="card">
                    <h2 id="donasi">1.000.000.000</h2>
                    <p>Total Donasi Yang Diterima (Rp)</p>
                </div>
                <div class="card">
                    <h2 id="donatur">6.767</h2>
                    <p>Jumlah Donatur</p>
                </div>
                <div class="card">
                    <h2 id="kampanye">3</h2>
                    <p>Total Kampanye Aktif</p>
                </div>
                <div class="card">
                    <h2 id="penerima">10.000</h2>
                    <p>Total Penerima Manfaat</p>
                </div>
            </div>

            <h2 class="judul-container">
                Menampilkan 3 Kampanye Yang Sedang Aktif
            </h2>

            <div class="container">
                <div class="kampanye-card">
                    <img src="./assets/fotodonasi1.jpg" alt="fotodonasi1">
                        <div class="kampanye-details">
                            <a href="#/kampanye" class="btn">PRAY FOR SUMATRA!!</a>
                            <p>Lebih dari 166 ribu rumah rusak, 339 ribu warga 
                            kehilangan tempat tinggal. Ayo bantu hadirkan rumah</p>
                        </div>
                </div>
                
                <div class="kampanye-card">
                    <img src="./assets/fotodonasi2.jpeg" alt="fotodonasi2">
                        <div class="kampanye-details">
                            <a href="#/kampanye" class="btn">PRAY FOR SUMATRA!!</a>
                            <p>Ribuan rumah terendam, 2.393 KK terdampak. Ayo bantu segera!</p>
                        </div>
                </div>

                <div class="kampanye-card">
                    <img src="./assets/fotodonasi3.jpeg" alt="fotodonasi3">
                        <div class="kampanye-details">
                            <a href="#/kampanye" class="btn">PRAY FOR SUMATRA!!</a>
                            <p>Puluhun ribu warga terdampak banjir yang melanda di Sumatra. Ayo bantu segera!!</p>
                        </div>
                </div>
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
        <div class="form-container">
            <h1 class="section-title">Form Donasi</h1>
            <div id="successMessage"></div>
            <form id="donationForm">
                <div class="form-group">
                    <label>Nama</label>
                    <input type="text" id="name" required>
                    <div class="error" id="nameError"></div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="email" required>
                    <div class="error" id="emailError"></div>
                </div>
                <div class="form-group">
                    <label>Nominal (Rp)</label>
                    <input type="number" id="amount" min="10000" required>
                    <div class="error" id="amountError"></div>
                </div>
                <div class="form-group">
                    <label>Kampanye</label>
                    <select id="campaign" required>
                        ${getCampaigns().map(c => `<option value="${c.id}">${c.title}</option>`).join('')}
                    </select>
                </div>
                <button type="submit" class="btn-submit">Donasi Sekarang</button>
            </form>
        </div>
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
            <p>"Di [Nama Website], kami percaya bahwa tidak ada tindakan kebaikan yang terlalu kecil untuk menciptakan perubahan besar bagi dunia. 
                Sebagai wadah berbagi yang berbasis empati, kami menghubungkan para dermawan dengan berbagai inisiatif kemanusiaan,
                mulai dari pendidikan hingga kesehatan, guna memberikan harapan baru dan senyuman bagi mereka yang sedang berjuang melewati masa sulit."</p>
        </section>
    `;
}
// ============================================
// UTILITY FUNCTIONS
// ============================================
function admin(){
    return `
        <h2>Admin Page</h2>
    `;
}

function getCampaigns(){
    return [
        { id: 1, title: 'Banjir Sumatra' },
        { id: 2, title: 'Banjir Sibolga' },
        { id: 3, title: 'Bencana Alam Sumatra' }
    ];
}

// ============================================
// ROUTING
// ============================================

const routes = {
    '/' : home,
    '/kampanye' : kampanye,
    '/donasi' : donasi,
    '/relawan' : relawan,
    '/about' : about,
    '/admin' : admin,
};

function router(){
    const hash = window.location.hash || "#/";
    const path = hash.replace("#", "");
    
    const routeFunction = routes[path];
    const content = routeFunction ? routeFunction() : "<h2>404 Not Found</h2>";

    document.getElementById("app").innerHTML = content;
    
    // Setup form listeners setelah content di-render
    if(path === '/donasi'){
        setupDonationForm();
    } else if(path === '/relawan'){
        setupVolunteerForm();
    }
}

// ============================================
// FORM HANDLERS
// ============================================

function setupDonationForm(){
    const form = document.getElementById('donationForm');
    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const amount = document.getElementById('amount').value;
            
            if(name && email && amount){
                const successMsg = document.getElementById('successMessage');
                successMsg.innerHTML = `<div class="success">Terima kasih atas donasi Anda sebesar Rp ${parseInt(amount).toLocaleString('id-ID')}</div>`;
                form.reset();
                setTimeout(() => {
                    successMsg.innerHTML = '';
                }, 3000);
            }
        });
    }
}

function setupVolunteerForm(){
    const form = document.getElementById('volunteerForm');
    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            const name = document.getElementById('volName').value;
            
            if(name){
                const successMsg = document.getElementById('volunteerSuccessMessage');
                successMsg.innerHTML = `<div class="success">Terima kasih telah mendaftar sebagai relawan</div>`;
                form.reset();
                setTimeout(() => {
                    successMsg.innerHTML = '';
                }, 3000);
            }
        });
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
