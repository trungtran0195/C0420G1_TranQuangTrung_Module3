-- task 6
select d.IDDichVu, d.TenDichVu,d.DienTich, d.ChiPhiThue,l.TenLoaiDichVu from dichvu d
inner join loaidichvu l on d.IdLoaiDichVu=l.IdLoaiDichVu
where d.IDDichVu not in (
select h.IDDichVu from hopdong h 
where (h.NgayLamHopDong between "2019-01-01" and "2019-03-31"));

-- task 7
select d.IDDichVu, d.TenDichVu,d.DienTich,d.SoNguoiToiDa ,d.ChiPhiThue ,l.TenLoaiDichVu from dichvu d
inner join loaidichvu l on d.IdLoaiDichVu=l.IdLoaiDichVu
where d.IDDichVu not in (
select h.IDDichVu from hopdong h 
where (h.NgayLamHopDong between "2019-01-01" and "2019-12-31"))
and d.IDDichVu in (
select h.IDDichVu from hopdong h 
where (h.NgayLamHopDong between "2018-01-01" and "2018-12-31"));

-- task 8
-- cach1
select distinct HoTen from khachhang;
-- cach2
select HoTen from khachhang group by HoTen;
-- cach3
select HoTen from khachhang union select HoTen from khachhang;
-- cach4
select HoTen from khachhang a
where HoTen not in(select HoTen from khachhang b where b.HoTen = a.HoTen and b.IDKhachHang > a.IDKhachHang);	