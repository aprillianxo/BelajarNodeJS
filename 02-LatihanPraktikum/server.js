const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    if (req.url === "/") {
        res.writeHead(200);
        res.end("Selamat Datang di Praktikum Pemrograman Dasar");
    } 
    else if (req.url === "/profil") {
        res.writeHead(200);
        res.end("Halaman Profil: Aprillia Nur Hasni - Suka Anime dan Baca Komik"); 
    } 
    else if (req.url === "/mata-kuliah") {
        res.writeHead(200);
        res.end("Mata Kuliah: Pemrograman Dasar"); 
    } 
    else if (req.url === "/kontak") {
        res.writeHead(200);
        res.end("Kontak: april@example.com"); 
    } 
    else {
        res.writeHead(404);
        res.end("404 - Halaman yang Anda cari tidak ditemukan."); 
    }
});

server.listen(PORT, () => {
    console.log(`Server Latihan Praktikum berjalan di http://localhost:${PORT}`);
});