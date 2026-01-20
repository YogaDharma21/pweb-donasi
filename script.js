
let donationTracker = {
    campaigns: {
        1: { title: 'Banjir Sumatra', target: 1000000000, collected: 0 },
        2: { title: 'Banjir Sibolga', target: 500000000, collected: 0 },
        3: { title: 'Bencana Alam Sumatra', target: 300000000, collected: 0 }
    },
    donations: []
};

function addDonation(campaignId, amount) {
    if (donationTracker.campaigns[campaignId]) {
        donationTracker.campaigns[campaignId].collected += parseInt(amount);
        donationTracker.donations.push({
            campaignId: campaignId,
            amount: parseInt(amount),
            timestamp: new Date()
        });
        return true;
    }
    return false;
}

function getProgressPercentage(campaignId) {
    const campaign = donationTracker.campaigns[campaignId];
    if (campaign) {
        return Math.min((campaign.collected / campaign.target) * 100, 100);
    }
    return 0;
}

function getProgressBar(campaignId) {
    const percentage = getProgressPercentage(campaignId);
    const collected = donationTracker.campaigns[campaignId].collected;
    const target = donationTracker.campaigns[campaignId].target;
    
    return `
        <div class="progress-container">
            <div class="progress-bar-wrapper">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percentage}%;"></div>
                </div>
            </div>
            <div class="progress-info">
                <span class="collected">Rp ${collected.toLocaleString('id-ID')}</span>
                <span class="target">Target: Rp ${target.toLocaleString('id-ID')}</span>
                <span class="percentage">${Math.round(percentage)}%</span>
            </div>
        </div>
    `;
}

function home(){
    return `
        <section class="home">
            <img src="./assets/fotobanjir.png" alt="fotobanjir" class="hero-img">

            <div class="home-content">
                <h1>BANYAK SAUDARA KITA KEHILANGAN TEMPAT TINGGAL AKIBAT BENCANA</h1>
                <p>
                    Mari bantu mereka dengan berdonasi sekecil apapun.
                    Donasimu sangat berarti.
                    Web sobatpdeuli adalah platform berbasis website yang dibuat untuk memudahkan 
                    masyarakat dalam memberikan bantuan sosial dan kemanusiaan secara online. 
                    Melalui web ini pengguna dapat berdonasi dengan mudah, cepat, dan aman 
                    untuk berbagai program bantuan yang membutuhkan.

                    Web sobatpdeuli menyediakan informasi transparan mengenai tujuan penggalangan 
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
                    <h2 id="donasi">1.000.000.000+</h2>
                    <p>Total Donasi Yang Diterima (Rp)</p>
                </div>
                <div class="card">
                    <h2 id="donatur">6.767+</h2>
                    <p>Jumlah Donatur</p>
                </div>
                <div class="card">
                    <h2 id="kampanye">3</h2>
                    <p>Total Kampanye Aktif</p>
                </div>
                <div class="card">
                    <h2 id="penerima">10.000+</h2>
                    <p>Total Penerima Manfaat</p>
                </div>
            </div>

            <h2 class="judul-container">
                Menampilkan 3 Kampanye Yang Sedang Aktif
            </h2>

            <div class="container">
                ${kampanyeCard(
                    "./assets/fotodonasi1.jpg",
                    "PRAY FOR SUMATRA!!",
                    "Lebih dari 166 ribu rumah rusak, 339 ribu warga kehilangan tempat tinggal."
                )}

                ${kampanyeCard(
                    "./assets/fotodonasi2.jpeg",
                    "PRAY FOR SUMATRA!!",
                    "Ribuan rumah terendam, 2.393 KK terdampak. Ayo bantu segera!"
                )}

                ${kampanyeCard(
                    "./assets/fotodonasi2.jpeg",
                    "PRAY FOR SUMATRA!!",
                    "Ribuan rumah terendam, 2.393 KK terdampak. Ayo bantu segera!"
                )}
            </div>
        </section>
    `;
}

function kampanyeCard(img, title, description) {
    return `
        <div class="kampanye-card">
            <img src="${img}" alt="${title}">
            <div class="kampanye-details">
                <h3>${title}</h3>
                <a href="#/kampanye" class="btn">PRAY FOR SUMATRA</a>
                <p>${description}</p>
            </div>
        </div>
    `;
}

function kampanye(){
    return `
        <h1 class="judul">Berikut adalah Kampanye Yang Tersedia </h1>
        <section class="kampanye1">
            <img src="./assets/fotodonasi1.jpg" alt="fotodonasi1">
            <div class="kampanye-pertama">
                <h2>Banjir Sumatra</h2>
                ${getProgressBar(1)}
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
            <img src="./assets/fotodonasi2.jpeg" alt="fotodonasi2">
            <div class="kampanye-kedua">
                <h2>Banjir Sibolga</h2>
                ${getProgressBar(2)}
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
                <h2>Bencana Alam Sumatra</h2>
                ${getProgressBar(3)}
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
                    para korban agar mereka dapat bangkit kembali dari dampak bencana.
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
        <section class="aboutc">
            <h2>Tentang Kami</h2>
            <p>
                SobatPeduli merupakan sebuah platform donasi digital yang bertujuan untuk memfasilitasi individu, 
                komunitas, maupun organisasi dalam menggalang dan menyalurkan dana secara transparan dan bertanggung jawab. 
                Platform ini memungkinkan para penggalang dana untuk menerima dukungan finansial dari para donatur melalui 
                sistem pembayaran digital yang tersedia. Selain itu SobatPeduli menyediakan berbagai fitur pendukung untuk 
                membantu proses penggalangan dana, pengelolaan kampanye donasi,guna menciptakan ekosistem donasi yang aman, 
                mudah, dan terpercaya.Di sobatdonasi, kami percaya bahwa tidak ada tindakan kebaikan yang terlalu kecil untuk 
                menciptakan perubahan besar bagi dunia. Sebagai wadah berbagi yang berbasis empati, kami menghubungkan para 
                dermawan dengan berbagai inisiatif kemanusiaan,mulai dari pendidikan hingga kesehatan, guna memberikan harapan 
                baru dan senyuman bagi mereka yang sedang berjuang melewati masa sulit.
            </p>
        </section>

        <section class="kontak">
            <div class="container">
                <h2 class="kontak-title">Kontak Kami</h2>
                <form class="kontak-form">
                    <input type="text" id="name"placeholder="Nama Kamu" required />
                    <input type="email" id="email"placeholder="Email" required />
                    <textarea
                        placeholder="Pesan"
                        rows="5"
                        required
                    ></textarea>
                    <button type="button" onclick="kontak()">Kirim  </button>
                </form>
                <p id="kntk"></p>
            </div>
        </section>
    `;
}
function kontak() {
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    if (Name !== "" && Email !== "") {
        document.getElementById("kntk").innerHTML =
            "Terima kasih!! Pesan Anda Atas nama " +
            Name +
            " Dengan email " +
            Email +
            " pasti Akan Kami Baca";
    }
    kntk.classList.add("contk");
}

function admin(){
    return `
        <h2 class="judul">DATA KAMPANYE AKTIF</h2>
        <button onclick="logout()" class="btnlogout">Logout</button>
        <a href="#/create" class="tkamp">Tambahkan Kampanye</a>

        <table class="admin-table">
            <thead>
                <tr>
                    <th>Nama Kampanye</th>
                    <th>Jenis Bencana</th>
                    <th>Lokasi Tujuan</th>
                    <th>Total Donasi (Rp)</th>
                    <th>Status Penyaluran</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Banjir Sumatra</td>
                    <td>Banjir</td>
                    <td>Sumatra</td>
                    <td>500.000.000</td>
                    <td>Sedang Diproses</td>
                    <td><a href="#/update" class="btnedit">Edit</a> <button onclick="hapusData()" class="btndelete">Hapus</button></td>
                </tr>
                <tr>
                    <td>Banjir Sibolga</td>
                    <td>Banjir</td>
                    <td>Sibolga</td>
                    <td>300.000.000</td>
                    <td>Sedang Diproses</td>
                    <td><a href="#/update" class="btnedit">Edit</a> <button onclick="hapusData()" class="btndelete">Hapus</button></td>
                </tr>
                <tr>
                    <td>Bencana Alam Sumatra</td>
                    <td>Tanah Longsor</td>
                    <td>Sumatra</td>
                    <td>200.000.000</td>
                    <td>Sedang Diproses</td>
                    <td><a href="#/update" class="btnedit">Edit</a> <button onclick="hapusData()" class="btndelete">Hapus</button></td>
                </tr>
                <tr>
                </tr>
            </tbody>
        </table>
    `;
}

function create(){
    return `
        <div class="form-container">
            <h1 class="section-title">Menambahkan Data Kampanye</h1>
            <form class="kontak-form">
                    <label>Nama Kampanye</label>
                    <input type="text" id="nama" required>
                    
                    <label>Jenis Bencana</label>
                    <input type="text" id="jenis" required>
                
                    <label>Lokasi Tujuan</label>
                    <input type="text" id="lokasi" required>
            
                    <label>Total Donasi</label>
                    <input type="text" id="tujuan" required>
                
                    <label>Status Penyaluran</label>
                    <select>
                        <option value="">----</option>
                        <option value="SedangDiproses">Sedang Diproses</option>
                        <option value="SudahTersalurkan">Sudah Tersalurkan</option>
                    </select>
                <a href="#/admin" class="btncreate">Simpan Data Kampanye</a>
            </form>
        </div>
    `;
}

function update(){
    return `
        <div class="form-container">
            <h1 class="section-title">Edit Data Kampanye</h1>
            
            <form class="kontak-form">
                    <label>Nama Kampanye</label>
                    <input type="text" id="nama" required>
            
                    <label>Jenis Bencana</label>
                    <input type="text" id="jenis" required>
                   
                    <label>Lokasi Tujuan</label>
                    <input type="text" id="lokasi" required>
            
                    <label>Total Donasi</label>
                    <input type="text" id="tujuan" required>
                
                    <label>Status Penyaluran</label>
                    <select>
                        <option value="s">----</option>
                        <option value="SedangDiproses">Sedang Diproses</option>
                        <option value="SudahTersalurkan">Sudah Tersalurkan</option>
                    </select>
                <a href="#/admin" class="btncreate">Update Data Kampanye</a>
            </form>
        </div>
    `;
}

function hapusData() {
    let yakin = confirm("Apakah kamu yakin ingin menghapus data ini?");
    
    if (yakin) {
        alert("Data berhasil dihapus");
    } else {
        alert("Data Gagal Dihapus");
    }
}

function login(){
    return `
        <div class="form-container">
            <h1 class="section-title">Login Admin</h1>
            <div id="loginError"></div>

            <form id="loginForm">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" id="username" required>
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="password" required>
                </div>

                <button type="submit" class="btn-submit">Login</button>
            </form>
        </div>
    `;
}

function logout(){
    localStorage.removeItem("login");
    window.location.hash = "#/login";
}


function LoginForm(){
    const form = document.getElementById("loginForm");
    if(!form) return;

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if(username === "admin" && password === "admin123"){
            localStorage.setItem("login", "true");
            window.location.hash = "#/admin";
        } else {
            document.getElementById("loginError").innerHTML =
                `<div class="error">Username atau Password salah</div>`;
        }
    });
}

function getCampaigns(){
    return [
        { id: 1, title: 'Banjir Sumatra' },
        { id: 2, title: 'Banjir Sibolga' },
        { id: 3, title: 'Bencana Alam Sumatra' }
    ];
}

const routes = {
    '/' : home,
    '/kampanye' : kampanye,
    '/donasi' : donasi,
    '/relawan' : relawan,
    '/about' : about,
    '/admin' : admin,
    '/create' : create,
    '/update' : update,
    '/login' : login,
};

function router(){
    const hash = window.location.hash || "#/";
    const path = hash.replace("#", "");
    const login = localStorage.getItem("login");
    
    if(
        (path === "/admin" || path === "/create" || path === "/update") 
        && !login
    ){
        window.location.hash = "#/login";
        return;
    }
    const routeFunction = routes[path];
    const content = routeFunction ? routeFunction() : "<h2>404 Not Found</h2>";

    document.getElementById("app").innerHTML = content;
    
    // Setup form listeners setelah content di-render
    if(path === '/donasi'){
        setupDonationForm();
    } else if(path === '/relawan'){
        setupVolunteerForm();
    }
     else if(path === '/login'){
        LoginForm();
    }
}

function setupDonationForm(){
    const form = document.getElementById('donationForm');
    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const amount = document.getElementById('amount').value;
            const campaign = document.getElementById('campaign').value;
            
            if(name && email && amount && campaign){
                addDonation(campaign, amount);
                
                const successMsg = document.getElementById('successMessage');
                const campaignName = donationTracker.campaigns[campaign].title;
                successMsg.innerHTML = `<div class="success">Terima kasih atas donasi Anda sebesar Rp ${parseInt(amount).toLocaleString('id-ID')} untuk kampanye ${campaignName}</div>`;
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

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
