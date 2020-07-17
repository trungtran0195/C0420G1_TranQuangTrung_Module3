-- task 2
SELECT * FROM nhanvien WHERE HoTen LIKE 'h%' OR HoTen LIKE 't%' OR HoTen LIKE 'k%' having char_length(HoTen) <= 15;
-- task 3 18250/365 = 50 and 6570/365 = 18
SELECT * FROM khachhang WHERE datediff(NOW(), NgaySinh) < 18250 AND datediff(NOW(), NgaySinh) > 6570 AND (DiaChi = 'DaNang' OR DiaChi = 'QuangTri');
-- task 4
SELECT k.HoTen,l.TenLoaiKhach ,count(h.IDKhachHang) as so_lan_dat_phong from khachhang k
inner join hopdong h on k.IDKhachHang = h.IDKhachHang
inner join loaikhach l on k.IDLoaiKhach=l.IDLoaiKhach 
where l.TenLoaiKhach='Diamond' 
group by HoTen;
-- task 5
SELECT k.IDKhachHang, k.HoTen, l.TenLoaiKhach, h.IDHopDong, h.NgayLamHopDong, h.NgayKetThuc,d.TenDichVu,
sum(d.ChiPhiThue + (hdct.SoLuong*dvdk.Gia)) as TongTien from khachhang k
inner join loaikhach l on k.IDLoaiKhach = l.IDLoaiKhach
left join hopdong h on k.IDKhachHang = h.IDKhachHang
left join dichvu d on h.IDDichVu =  d.IDDichVu
left join hopdongchitiet hdct on h.IDHopDong = hdct.IDHopDong
left join dichvudikem dvdk on dvdk.IDDichVuDiKem =  hdct.IDDichVuDiKem
group by k.IDKhachHang;
