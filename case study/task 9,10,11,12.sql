-- task 9 
select temp.month , count(month(hopdong.NgayLamHopDong)) as so_khach_hang_dang_ky , sum(hopdong.TongTien) as Tong_tien from
(select 1 as month
union select 2 as month
union select 3 as month
union select 4 as month
union select 5 as month
union select 6 as month
union select 7 as month
union select 8 as month
union select 9 as month
union select 10 as month
union select 11 as month
union select 12 as month) as temp
left join hopdong on month(hopdong.NgayLamHopDong) = temp.month
left join khachhang on khachhang.IDKhachHang=hopdong.IDKhachHang
where year(hopdong.NgayLamHopDong)= "2019" or month(hopdong.NgayLamHopDong) is null
group by temp.month
order by temp.month;
-- task 10
select h.IDHopDong, h.NgayLamHopDong, h.NgayKetThuc, h.TienDatCoc, count(hdct.IDHopDongChiTiet) as So_luong_dich_vu_di_kem
from hopdong h left join hopdongchitiet hdct on h.IDHopDong=hdct.IDHopDong 
group by IDHopDong;
-- task 11
SELECT k.HoTen,l.TenLoaiKhach,k.DiaChi,dvdk.TenDichVuDiKem, count(hdct.IdDichVuDiKem) as So_lan_su_dung from khachhang k
inner join hopdong h on k.IDKhachHang = h.IDKhachHang
inner join loaikhach l on k.IDLoaiKhach=l.IDLoaiKhach 
inner join hopdongchitiet hdct on h.IDHopDong = hdct.IDHopDong
inner join dichvudikem dvdk on hdct.IdDichVuDiKem = dvdk.IdDichVuDiKem
where l.TenLoaiKhach='Diamond' 
and DiaChi in ("Vinh","DaNang")
group by HoTen;
-- task 12
SELECT h.IDHopDong,n.HoTen,k.HoTen,k.SDT,d.TenDichVu,count(hdct.IdDichVuDiKem) as So_lan_su_dung from hopdong h
inner join nhanvien n on h.IDNhanVien = n.IDNhanVien
inner join khachhang k on h.IDKhachHang = k.IDKhachHang
inner join dichvu d on d.IDDichVu = h.IDDichVu
inner join hopdongchitiet hdct on h.IDHopDong = hdct.IDHopDong
where not exists(select h.IDHopDong where h.NgayLamHopDong between "2019-01-01" and "2019-06-31")
and exists(select h.IDHopDong where h.NgayLamHopDong between "2019-09-01" and "2019-12-31")
group by d.TenDichVu;
