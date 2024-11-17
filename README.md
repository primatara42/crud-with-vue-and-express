# Normalisasi Basis Data untuk Studi Kasus Manajemen Informasi Karyawan
Dalam konteks basis data, normalisasi adalah proses dalam mengorganisasi data yang ada didalam basis data yang prosesnya adalah memecah suatu tabel menjadi beberapa tabel kecil yang memiliki data saling berkaitan. Tujuan dari normalisasi ini adalah untuk mengurangi redudansi dan menghindari masalah seperti insert anomali, update anomali dan delete anomali.  Di contoh kasus ini, akan digunakan basis data di bidang Manajemen Informasi Karyawan dan Departmen. Untuk gambar hasil bentuk basis data yang belum di normalisasi, normalisasi 1NF, 2NF dan 3NF dapat dilihat di project repository ini. Pertama adalah bentuk basis data yang belum di normalisasi. Ketika belum dinormalisasi, berdasarkan pada file "database_unormalized", terdapat beberapa kolom seperti : 
-id 
-name 
-email 
-password 
-address 
-department_name 
-department_location 
-salary 
-user_id

Ketika basis data belum dinormalisasi, ada banyak redudansi yang terjadi di dalam tabel ini. Pertama akan dilakukan nomalisasi ke tingkat 1NF. Di tingkat ini, dilakukan pemisahan data menjadi 2 tabel yaitu tabel Users dan tabel Employees. Untuk hasil dari normalisasi tingkat 1NF dapat dilihat pada file "database_1NF". Selanjutnya melakukan normalisasi ke tingkat 2NF. Di tingkat ini, dilakukan pemisahan data Departments ke dalam tabel Departments. Semua kolom ditabel akan bergantung pada kunci utama. Untuk hasil dari normalisasi tingkat 2NF dapat dilihat pada file "database_2NF". Terakhir adalah normalisasi ke tingkat 3NF. Di tingkat ini, kolom email yang terdapat di tabel employees akan dihapus karena sudah ada di tabel Users. Untuk hasil dari normalisasi tingkat 3NF dapat dilihat pada file "database_3NF".

Untuk mengakses project ini, saya sudah sertakan struktur folder untuk front-end dan back-end yang dimana untuk front-end disini menggunakan Vue JS dan back-end menggunakan Laravel10. Disini saya sertakan juga file untuk melakukan import database yang dapat diakses di file "employee_department_management.sql".
