# ToDoList API

## Deskripsi
Aplikasi ToDoList yang menyediakan RESTful API untuk mengelola tugas. Dapat digunakan untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada tugas.

## Endpoint

### Autentikasi
- **POST /auth/regis**: Mendaftar pengguna baru.  
  **Body**: `{ "name": "string", "username": "string", "password": "string" }`
  
- **POST /auth/login**: Login pengguna.  
  **Body**: `{ "username": "string", "password": "string" }`

### ToDo
- **POST /todos**: Menambahkan tugas baru.  
  **Headers**: `Authorization: Bearer <token>`  
  **Body**: `{ "task": "string", "status": "boolean" }`

- **GET /todos**: Melihat semua tugas.  
  **Headers**: `Authorization: Bearer <token>`

- **GET /todos/:id**: Melihat detail tugas berdasarkan ID.  
  **Headers**: `Authorization: Bearer <token>`

- **PUT /todos/:id**: Mengubah tugas berdasarkan ID.  
  **Headers**: `Authorization: Bearer <token>`  
  **Body**: `{ "task": "string", "status": "boolean" }`

- **DELETE /todos/:id**: Menghapus tugas berdasarkan ID.  
  **Headers**: `Authorization: Bearer <token>`

- **DELETE /todos**: Menghapus semua tugas.  
  **Headers**: `Authorization: Bearer <token>`

## Cara Menjalankan
1. Clone repositori ini.
2. Install dependensi dengan `npm install`.
3. Buat file `.env` dan tambahkan `JWT_KEY` sesuai keinginan.
4. Jalankan server dengan `node app.js`.

## Pengujian
Gunakan Postman untuk menguji setiap endpoint.
