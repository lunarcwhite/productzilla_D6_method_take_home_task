let nama, asal, universitas, fakultas, jurusan, semester, suku
let phi, kucing, mamalia, luasSegitiga, luasPersegi, luasPersegiPanjang, luasTrapesium, luasLingkaran
let luasJajarGenjang, volumeKubus, volumeBalok, volumeTabung, volumeKerucut

// 1
function setNama(argNama) {
    nama = `Nama saya ${argNama}`
}
setNama('Muhamad Rizky Maulana')

function getNama(){
    return nama
}
console.log(getNama())

// 2
function setAsal(argAsal) {
    asal = `Saya berasal dari ${argAsal}`
}
setAsal('Cianjur')

function getAsal(){
    return asal
}
console.log(getAsal())

// 3
function setUniversitas(argUniversitas) {
    universitas = `Saya menempuh pendidikan di ${argUniversitas}`
}
setUniversitas('Universitas Suryakancana')

function getUniversitas(){
    return universitas
}
console.log(getUniversitas())

// 4
function setFakultas(argFakultas) {
    fakultas = `Saya memilih fakultas ${argFakultas}`
}
setFakultas('Teknik')

function getFakultas(){
    return fakultas
}
console.log(getFakultas())

// 5
function setJurusan(argJurusan) {
    jurusan = `Saya mengambil program studi ${argJurusan}`  
}
setJurusan('Teknik Informatika')

function getJurusan(){
    return jurusan
}
console.log(getJurusan())

// 6
function setSemester(argSemester) {
    semester = `Sekarang berjalan disemester ${argSemester}`
}
setSemester('6')

function getSemester(){
    return semester
}
console.log(getSemester())

// 7
function setSuku(argSuku) {
    suku = `Suku saya adalah suku ${argSuku}`
}
setSuku('Sunda')

function getSuku(){
    return suku
}
console.log(getSuku())

// 8
function setPhi(argPhi) {
    phi = `Nilai dari phi adalah ${argPhi}`
}
setPhi('3.14 atau 22/7')

function getPhi(){
    return phi
}
console.log(getPhi())

// 9
function setKucing(argKucing) {
    kucing = `${argKucing} merupakan hewan berkaki empat`
}
setKucing('Kucing')

function getKucing(){
    return kucing
}
console.log(getKucing())

// 10
function setMamalia(argMamalia) {
    mamalia = `${argMamalia} merupakan satu - satunya hewan mamalia yang bisa terbang`
}
setMamalia('Kelelawar')

function getMamalia(){
    return mamalia
}
console.log(getMamalia())

// 11
function setSegitiga(alas, tinggi) {
    luasSegitiga = `Luas segitiga adalah ${0.5 * alas * tinggi}`
}
setSegitiga(10, 10)

function getSegitiga(){
    return luasSegitiga
}
console.log(getSegitiga())

// 12
function setPersegi(sisi) {
    luasPersegi = `Luas Persegi adalah ${sisi ** 2}`
}
setPersegi(10)

function getPersegi(){
    return luasPersegi
}
console.log(getPersegi())

// 13
function setPersegiPanjang(panjang, lebar) {
    luasPersegiPanjang = `Luas Persegi Panjang adalah ${panjang * lebar}`
}
setPersegiPanjang(10, 15)

function getPersegiPanjang(){
    return luasPersegiPanjang
}
console.log(getPersegiPanjang())

// 14
function setTrapesium(sisiA, sisiB, tinggi) {
    luasTrapesium = `Luas Trapesium adalah ${0.5 * (sisiA + sisiB) * tinggi}`
}
setTrapesium(10, 10, 20)

function getTrapesium(){
    return luasTrapesium
}
console.log(getTrapesium())

// 15
function setLingkaran(r) {
    luasLingkaran = `Luas Lingkaran adalah ${3.14 * r ** 2}`
}
setLingkaran(5)

function getLingkaran(){
    return luasLingkaran
}
console.log(getLingkaran())

// 16
function setJajarGenjang(alas , tinggi) {
    luasJajarGenjang = `Luas Jajar Genjang adalah ${alas * tinggi}`
}
setJajarGenjang(10, 5)

function getJajarGenjang(){
    return luasJajarGenjang
}
console.log(getJajarGenjang())

// 17
function setVolumeBalok(panjang, lebar, tinggi) {
    volumeBalok = `Volume Balok adalah ${panjang * lebar * tinggi}`
}
setVolumeBalok(10, 5, 10)

function getvolumeBalok(){
    return volumeBalok
}
console.log(getvolumeBalok())

// 18
function setVolumeKubus(sisi) {
    volumeKubus = `Volume Kubus adalah ${sisi ** 3}`
}
setVolumeKubus(10)

function getvolumeKubus(){
    return volumeKubus
}
console.log(getvolumeKubus())

// 19
function setVolumeTabung(r, tinggi) {
    volumeTabung = `Volume Tabung adalah ${3.14 * (r ** 2) * tinggi}`
}
setVolumeTabung(10, 5)

function getvolumeTabung(){
    return volumeTabung
}
console.log(getvolumeTabung())

// 20
function setVolumeKerucut(r, tinggi) {
    volumeKerucut = `Volume Kerucut adalah ${0.33 * 3.14 * (r ** 2) * tinggi}`
}
setVolumeKerucut(10, 5)

function getvolumeKerucut(){
    return volumeKerucut
}
console.log(getvolumeKerucut())
