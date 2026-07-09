const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        res.writeHead(204);
        res.end();
        return;
    }

    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    if (req.url === "/") {
        res.writeHead(200);
        res.end("Selamat Datang");
    } 
    else if (req.url === "/profil") {
        res.writeHead(200);
        res.end("Profil Kampus");
    } 
    else if (req.url === "/kontak") {
        res.writeHead(200);
        res.end("Hubungi Kami");
    } 
    else {
        res.writeHead(404);
        res.end("404 - Halaman tidak ditemukan");
    }
});

server.listen(PORT, () => {
    console.log(`Server Sistem Informasi Kampus berjalan dengan aman!`);
    console.log(`Silakan akses: http://localhost:${PORT}`);
});