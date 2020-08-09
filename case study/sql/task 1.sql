create database furama_resort;

CREATE TABLE furama_resort.ViTri(
IDViTri INT,
TenViTri varchar(45),
primary key(IDViTri)
);
CREATE TABLE furama_resort.BoPhan(
IDBoPhan INT,
TenBoPhan varchar(45),
primary key(IDBoPhan)
);
CREATE TABLE furama_resort.TrinhDo(
IDTrinhDo INT,
TrinhDo varchar(45),
primary key(IDTrinhDo)
);
CREATE TABLE furama_resort.NhanVien(
   IDNhanVien INT AUTO_INCREMENT,
   HoTen VARCHAR(50),
   IDViTri INT, FOREIGN KEY(IDViTri) REFERENCES ViTri(IDViTri),
   IDTrinhDo INT, FOREIGN KEY(IDTrinhDo) REFERENCES TrinhDo(IDTrinhDo),
   IDBoPhan INT, FOREIGN KEY(IDBoPhan) REFERENCES BoPhan(IDBoPhan),
   NgaySinh DATE,
   SoCMTND varchar(45),
   Luong varchar(45),
   SDT varchar(45),
   Email varchar(45),
   DiaChi varchar(45),
   PRIMARY KEY(IDNhanVien)
);
CREATE TABLE furama_resort.LoaiKhach(
IDLoaiKhach INT,
TenLoaiKhach varchar(45),
PRIMARY KEY(IDLoaiKhach)
);
CREATE TABLE furama_resort.KhachHang(
IDKhachHang INT AUTO_INCREMENT,
IDLoaiKhach INT, FOREIGN KEY(IDLoaiKhach) REFERENCES LoaiKhach(IDLoaiKhach),
HoTen varchar(45),
NgaySinh DATE,
SoCMTND varchar(45),
SDT varchar(45),
Email varchar(45),
DiaChi varchar(45),
primary key(IDKhachHang)
);	
CREATE TABLE furama_resort.KieuThue(
IDKieuThue INT,
TenKieuThue varchar(45),
Gia INT,
primary key(IDKieuThue)
);
CREATE TABLE furama_resort.LoaiDichVu(
IDLoaiDichVu INT,
TenLoaiDichVu varchar(50),
primary key(IDLoaiDichVu)
);
CREATE TABLE furama_resort.DichVu(
IDDichVu INT,
TenDichVu varchar(45),
DienTich INT,
SoTang INT,
SoNguoiToiDa varchar(45),
ChiPhiThue varchar(45),
IdKieuThue INT, FOREIGN KEY(IdKieuThue) REFERENCES KieuThue(IdKieuThue),
IdLoaiDichVu INT, FOREIGN KEY(IdLoaiDichVu) REFERENCES LoaiDichVu(IdLoaiDichVu),
TrangThai varchar(45),
primary key(IDDichVu)
);
CREATE TABLE furama_resort.DichVuDiKem(
IdDichVuDiKem INT,
TenDichVuDiKem varchar(45),
Gia INT,
DonVi INT,
TrangThaiKhaDung varchar(45),
primary key(IdDichVuDiKem)
);
CREATE TABLE furama_resort.HopDong(
IDHopDong INT,
IDNhanVien INT, FOREIGN KEY(IDNhanVien) REFERENCES NhanVien(IDNhanVien),
IDKhachHang INT, FOREIGN KEY(IDKhachHang) REFERENCES KhachHang(IDKhachHang),
IDDichVu INT, FOREIGN KEY(IDDichVu) REFERENCES DichVu(IDDichVu),
NgayLamHopDong DATE,
NgayKetThuc DATE,
TienDatCoc INT,
TongTien INT,
primary key(IDHopDong)
);
CREATE TABLE furama_resort.HopDongChiTiet(
IDHopDongChiTiet INT,
IDHopDong INT, FOREIGN KEY(IDHopDong) REFERENCES HopDong(IDHopDong),
IDDichVuDiKem INT, FOREIGN KEY(IDDichVuDiKem) REFERENCES DichVuDiKem(IDDichVuDiKem),
SoLuong INT,
primary key(IDHopDongChiTiet)
);

use furama_resort;

INSERT INTO loaikhach VALUES (1, 'Diamond');
INSERT INTO loaikhach VALUES (2, 'Platinium');
INSERT INTO loaikhach VALUES (3, 'Gold');
INSERT INTO loaikhach VALUES (4, 'Silver');
INSERT INTO loaikhach VALUES (5, 'Member');
INSERT INTO vitri VALUES (1, 'LeTan');
INSERT INTO vitri VALUES (2, 'PhucVu');
INSERT INTO vitri VALUES (3, 'ChuyenVien');
INSERT INTO vitri VALUES (4, 'GiamSat');
INSERT INTO vitri VALUES (5, 'QuanLy');
INSERT INTO vitri VALUES (6, 'GiamDoc');
INSERT INTO trinhdo VALUES (1, 'TrungCap');
INSERT INTO trinhdo VALUES (2, 'CaoDang');
INSERT INTO trinhdo VALUES (3, 'DaiHoc');
INSERT INTO trinhdo VALUES (4, 'SauDaiHoc');
INSERT INTO bophan VALUES (1, 'Sale–Marketing');
INSERT INTO bophan VALUES (2, 'HanhChinh');
INSERT INTO bophan VALUES (3, 'PhucVu');
INSERT INTO bophan VALUES (4, 'QuanLy');
INSERT INTO kieuthue VALUES (1, 'Year', 3000);
INSERT INTO kieuthue VALUES (2, 'Month', 300);
INSERT INTO kieuthue VALUES (3, 'Day', 10);
INSERT INTO kieuthue VALUES (4, 'Hour', 1);
INSERT INTO loaidichvu VALUES (1, 'Villa,FreePickUp2Way,PoolArea:30,Floors:2');
INSERT INTO loaidichvu VALUES (2, 'House,FreePickUp,Floors:2'); 
INSERT INTO loaidichvu VALUES (3, 'Room,Wifi,2WaterBottles');
INSERT INTO dichvu VALUES (1, 'Villa', 150, 2, '5', '1000000', 1, 1, '');
INSERT INTO dichvu VALUES (2, 'Villa', 150, 2, '5', '1200000', 2, 1, '');
INSERT INTO dichvu VALUES (3, 'Villa', 150, 2, '5', '1400000', 3, 1, '');
INSERT INTO dichvu VALUES (4, 'House', 100, 2, '4', '500000', 1, 2, '');
INSERT INTO dichvu VALUES (5, 'House', 100, 2, '4', '600000', 2, 2, '');
INSERT INTO dichvu VALUES (6, 'House', 100, 2, '4', '700000', 3, 2, '');
INSERT INTO dichvu VALUES (7, 'Room', 50, 1, '2', '200000', 3, 3, '');
INSERT INTO dichvu VALUES (8, 'Room', 50, 1, '2', '300000', 4, 3, '');
INSERT INTO dichvudikem VALUES (1, 'massage', 300000, 10, '');
INSERT INTO dichvudikem VALUES (2, 'karaoke', 500000, 10, '');
INSERT INTO dichvudikem VALUES (3, 'food', 50000, 100, '');
INSERT INTO dichvudikem VALUES (4, 'drink', 20000, 100, '');
INSERT INTO dichvudikem VALUES (5, 'CarRent', 300000, 5, '');

INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (3, 'TranMinhQuan', "1958-07-20", '25359444', '0913955417', 'minhquan@gmail.com', 'HaNoi');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (4, 'HoangDucTam', "1982-01-20", '38296107', '0996621634', 'ductam@gmail.com', 'ThaiBinh');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (1, 'NguyenCaoHuy', "1977-06-03", '84645380', '0978180300', 'caohuy@gmail.com', 'LangSon');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (3, 'NguyenPhuMinhHoang', "1965-10-09", '60012800', '0968823370', 'hoangminh@gmail.com', 'HoChiMinh');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (5, 'DoMinhKhanh', "1996-02-14", '77451768', '0970286385', 'khanh@gmail.com', 'DaNang');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (5, 'VoThuyTrang', "1998-07-17", '76909430', '0925126599', 'trangng@gmail.com', 'HaNoi');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (4, 'DinhTranMinhDuc', "1964-06-02", '52273888', '0987593322', 'ductran@gmail.com', 'QuangTri');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (3, 'PhamHaNgoc', "2006-04-02", '21416093', '0925412433', 'ngocha@gmail.com', 'HaTay');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (2, 'NguyenKhanhVy', "1971-06-04", '68625837', '0968371413', 'vyndt@gmail.com', 'HoChiMinh');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (4, 'VuVinhHoang', "2001-08-28", '28103267', '0998806851', 'hoangdavid@gmail.com', 'HaNoi');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (1, 'LeManhHung', "2006-07-11", '55751980', '0936333397', 'manhhungdn@gmail.com', 'DaNang');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (2, 'PhamBuiGiaKhanh', "1956-04-24", '44933099', '0987445073', 'ctysonngoc@gmail.com', 'DakLak');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (3, 'HoangNhatMinh', "2006-04-01", '37820810', '0965222823', 'minhnhatedu@gmail.com', 'DongNai');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (5, 'NgoQuyDuong', "1980-08-29", '26982934', '0979021978', 'ngoqDuong@gmail.com', 'HaNoi');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (2, 'BuiThanhHa', "1985-07-23", '16768906', '0945747154', 'thanhha@gmail.com', 'HoChiMinh');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (4, 'NguyenVanVietDung', "1977-01-29", '64700925', '0947864255', 'vietdung@gmail.com', 'DaNang');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (5, 'DoGiaLinh', "1990-03-23", '30650094', '0909976545', 'linhgia@gmail.com', 'PhuTho');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (1, 'KieuGiaVinh', "1995-03-23", '48237223', '0934476545', 'mrkieu@gmail.com', 'DaNang');
INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (5, 'NgoHoangPhuongLinh', "1979-01-12", '15927295', '0920707086', 'linhhoang@gmail.com', 'HoChiMinh');
INSERT INTO khachhang (IDKhachHang, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (3, 'DoGiaLinh', '1995-03-23', '10293832', '0932382383', 'linhdo@gmail.com', 'DaNang');

INSERT INTO nhanvien (HoTen, IDViTri, IDTrinhDo, IDBoPhan, NgaySinh, SoCMTND, Luong, SDT, Email, DiaChi) VALUES ('PhamKhanhLinh', 4, 3, 4, "1983-11-27", '22679735', '10000000', '0942527480', 'linhphamfurumahotel@gmail.com', 'HaNoi');
INSERT INTO nhanvien (HoTen, IDViTri, IDTrinhDo, IDBoPhan, NgaySinh, SoCMTND, Luong, SDT, Email, DiaChi) VALUES ('NguyenNamCuong', 1, 2, 1, "2000-04-29", '72454818', '7000000', '0988313072', 'namcuongfurumahotel@gmail.com', 'DaNang');
INSERT INTO nhanvien (HoTen, IDViTri, IDTrinhDo, IDBoPhan, NgaySinh, SoCMTND, Luong, SDT, Email, DiaChi) VALUES ('DoNgocLinh', 1, 3, 1, "2000-11-04", '83499410', '6500000', '0990646319', 'ngoclinhfurumahotel@gmail.com', 'QuangNam');
INSERT INTO nhanvien (HoTen, IDViTri, IDTrinhDo, IDBoPhan, NgaySinh, SoCMTND, Luong, SDT, Email, DiaChi) VALUES ('LaiDiepAnh', 1, 2, 1, "2000-11-01", '63200952', '6000000', '0999758263', 'diepanhfurumahotel@gmail.com', 'DaNang');
INSERT INTO nhanvien (HoTen, IDViTri, IDTrinhDo, IDBoPhan, NgaySinh, SoCMTND, Luong, SDT, Email, DiaChi) VALUES ('HoangTienPhat', 2, 1, 3, "1999-01-13", '42554336', '5000000', '0963873449', 'tienphatfurumahotel@gmail.com', 'DaNang');
INSERT INTO nhanvien (HoTen, IDViTri, IDTrinhDo, IDBoPhan, NgaySinh, SoCMTND, Luong, SDT, Email, DiaChi) VALUES ('NguyenMinhHien', 2, 2, 3, "1999-08-11", '83054391', '5000000', '0931566332', 'minhhienfurumahotel@gmail.com', 'QuangNam');
INSERT INTO nhanvien (HoTen, IDViTri, IDTrinhDo, IDBoPhan, NgaySinh, SoCMTND, Luong, SDT, Email, DiaChi) VALUES ('TranMinhThu', 5, 4, 4, "1980-08-03", '54820816', '12000000', '0981999463', 'minhthufurumahotel@gmail.com', 'HoChiMinh');
INSERT INTO nhanvien (HoTen, IDViTri, IDTrinhDo, IDBoPhan, NgaySinh, SoCMTND, Luong, SDT, Email, DiaChi) VALUES ('PhamHoangMinh', 6, 3, 4, "1979-01-18", '21404479', '20000000', '0916841015', 'minhhoangfurumahotel@gmail.com', 'ThaiBinh');
INSERT INTO nhanvien (HoTen, IDViTri, IDTrinhDo, IDBoPhan, NgaySinh, SoCMTND, Luong, SDT, Email, DiaChi) VALUES ('LuongNguyetMinh', 3, 4, 2, "1990-04-18", '88956361', '9000000', '0994143249', 'minhnguyetfurumahotel@gmail.com', 'HaNam');
INSERT INTO nhanvien (HoTen, IDViTri, IDTrinhDo, IDBoPhan, NgaySinh, SoCMTND, Luong, SDT, Email, DiaChi) VALUES ('NguyenHienAnh', 3, 3, 2, "1989-05-12", '24034150', '9000000', '0947539979', 'hienanhfurumahotel@gmail.com', 'DaNang');
INSERT INTO hopdong VALUES (1, 2, 4, 6, "2019-10-10", "2019-10-20", 2000000, 7000000);
INSERT INTO hopdong VALUES (2, 9, 16, 1, "2019-01-10", "2019-05-18", 10000000, 500000000);
INSERT INTO hopdong VALUES (3, 7, 14, 5, "2019-02-10", "2019-09-15", 5000000, 50000000);
INSERT INTO hopdong VALUES (4, 10, 16, 6, "2016-05-15", "2016-05-30", 1000000, 5000000);
INSERT INTO hopdong VALUES (5, 3, 16, 3, "2019-02-01", "2019-02-20", 1000000, 20000000);
INSERT INTO hopdong VALUES (6, 5, 5, 6, "2019-05-10", "2019-05-20", 500000, 7000000);
INSERT INTO hopdong VALUES (7, 9, 15, 2, "2018-10-10", "2018-12-10", 1000000, 50000000);
INSERT INTO hopdong VALUES (8, 9, 10, 2, "2016-03-10", "2016-05-20", 1000000, 50000000);
INSERT INTO hopdong VALUES (9, 4, 11, 2, "2017-06-01", "2017-10-01", 1000000, 70000000);
INSERT INTO hopdong VALUES (10, 10, 7, 4, "2017-10-10", "2018-10-10", 5000000, 200000000);
INSERT INTO hopdong VALUES (11, 7, 15, 2, "2019-10-10", "2019-12-10", 1000000, 17000000);
INSERT INTO hopdong VALUES (12, 9, 6, 8, "2018-02-15", "2019-02-15", 0, 200000);
INSERT INTO hopdong VALUES (13, 1, 14, 8, "2017-06-10", "2017-06-10", 0, 200000);
INSERT INTO hopdong VALUES (14, 4, 5, 8, "2018-12-11", "2019-12-11", 0, 200000);
INSERT INTO hopdong VALUES (15, 4, 16, 6, "2017-10-05", "2019-10-20", 0, 8000000);
INSERT INTO hopdong VALUES (16, 5, 18, 3, "2019-10-05", "2019-01-20", 0, 8000000);
INSERT INTO hopdong VALUES (17, 6, 18, 4, "2019-10-05", "2019-02-20", 0, 8000000);
INSERT INTO hopdong VALUES (18, 7, 18, 5, "2019-10-05", "2019-12-20", 0, 8000000);
INSERT INTO hopdongchitiet VALUES (1, 13, 5, 1);
INSERT INTO hopdongchitiet VALUES (2, 5, 3, 20);
INSERT INTO hopdongchitiet VALUES (3, 5, 3, 10);
INSERT INTO hopdongchitiet VALUES (4, 14, 3, 30);
INSERT INTO hopdongchitiet VALUES (5, 7, 2, 2);
INSERT INTO hopdongchitiet VALUES (6, 10, 2, 2);
INSERT INTO hopdongchitiet VALUES (7, 9, 2, 2);
INSERT INTO hopdongchitiet VALUES (8, 4, 2, 2);
INSERT INTO hopdongchitiet VALUES (9, 2, 2, 2);
INSERT INTO hopdongchitiet VALUES (10, 11, 2, 2);
INSERT INTO hopdongchitiet VALUES (11, 12, 2, 2);
INSERT INTO hopdongchitiet VALUES (12, 13, 2, 2);
INSERT INTO hopdongchitiet VALUES (13, 18, 2, 2);
INSERT INTO hopdongchitiet VALUES (14, 18, 2, 2);
INSERT INTO hopdongchitiet VALUES (15, 18, 2, 2);
INSERT INTO hopdongchitiet VALUES (16, 18, 2, 2);
INSERT INTO hopdongchitiet VALUES (17, 18, 2, 2);
INSERT INTO hopdongchitiet VALUES (18, 18, 2, 2);
INSERT INTO hopdongchitiet VALUES (19, 18, 2, 2);
INSERT INTO hopdongchitiet VALUES (20, 18, 2, 2);
