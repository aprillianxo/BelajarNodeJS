const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        res.writeHead(204);
        res.end();
        return;
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if (req.url === "/") {
        res.writeHead(200);
        res.end(`
            <html>
                <head><title>Sistem Informasi Kampus</title></head>
                <body>
                    <h1>Beranda</h1>
                    <p>Selamat Datang di Sistem Informasi Kampus.</p>
                </body>
            </html>
        `);
    } 
    else if (req.url === "/profil") {
        res.writeHead(200);
        res.end(`
            <html>
                <head><title>Profil Kampus</title></head>
                <body>
                    <h1>Profil Kampus</h1>
                    <p>Kampus pencetak talenta digital terbaik.</p>
                </body>
            </html>
        `);
    } 
    else if (req.url === "/fakultas") {
        res.writeHead(200);
        res.end(`
            <html>
                <head><title>Daftar Fakultas</title></head>
                <body>
                    <h1>Daftar Fakultas</h1>
                    <ul>
                        <li>Ilmu Komputer</li>
                        <li>Teknik</li>
                        <li>Bisnis dan Manajemen</li>
                    </ul>
                </body>
            </html>
        `);
    } 
    else if (req.url === "/pengumuman") {
        res.writeHead(200);
        res.end(`
            <html>
                <head><title>Pengumuman</title></head>
                <body>
                    <h1>Pengumuman</h1>
                    <p>Pendaftaran mahasiswa baru telah dibuka.</p>
                </body>
            </html>
        `);
    } 
    else if (req.url === "/kontak") {
        res.writeHead(200);
        res.end(`
            <html>
                <head><title>Kontak Kami</title></head>
                <body>
                    <h1>Kontak</h1>
                    <p>Email: admin@kampus.ac.id</p>
                </body>
            </html>
        `);
    } 
    else {
        res.writeHead(404);
        res.end(`
            <html>
                <head><title>404 Not Found</title></head>
                <body>
                    <h1>404 - Not Found</h1>
                    <p>Maaf, halaman yang Anda cari tidak tersedia.</p>
                </body>
            </html>
        `);
    }
});

server.listen(PORT, () => {
    console.log(`Server Mini Project berjalan di http://localhost:${PORT}`);
});