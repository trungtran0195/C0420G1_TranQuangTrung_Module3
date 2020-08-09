-- task 13
CREATE VIEW check_so_lan_su_dung AS
select dvdk.IdDichVuDiKem, dvdk.TenDichVuDiKem, dvdk.Gia,
count(hdct.IDDichVuDiKem) as so_lan_su_dung from dichvudikem dvdk
inner join hopdongchitiet hdct on dvdk.IdDichVuDiKem = hdct.IdDichVuDiKem
group by dvdk.IdDichVuDiKem;

select cslsd.IdDichVuDiKem, cslsd.TenDichVuDiKem, cslsd.Gia,max(cslsd.so_lan_su_dung) as so_lan_dung from check_so_lan_su_dung cslsd;

-- task 14
select dvdk.IdDichVuDiKem, dvdk.TenDichVuDiKem, dvdk.Gia,
count(hdct.IDDichVuDiKem) as so_lan_su_dung from dichvudikem dvdk 
inner join hopdongchitiet hdct on dvdk.IdDichVuDiKem = hdct.IdDichVuDiKem
group by dvdk.IdDichVuDiKem
having so_lan_su_dung = 1;

-- task 15
select nv.IDNhanVien , nv.HoTen, td.TrinhDo, bp.TenBoPhan, nv.SDT, nv.DiaChi,
count(hd.IDNhanVien) as so_lan_lap_hop_dong from nhanvien nv
inner join trinhdo td on nv.IDTrinhDo = td.IDTrinhDo 
inner join bophan bp on nv.IDBoPhan = bp.IDBoPhan
left join hopdong hd on nv.IDNhanVien = hd.IDNhanVien 
where exists(select hd.IDNhanVien where hd.NgayLamHopDong between "2018-01-01" and "2019-12-31")
group by nv.HoTen
having so_lan_lap_hop_dong < 4;

-- task 16
SET SQL_SAFE_UPDATES = 0;
delete from nhanvien nv
where nv.IDNhanVien not in(
SELECT * FROM (
		select distinct hd.IDNhanVien from nhanvien nv
		inner join hopdong hd on nv.IDNhanVien = hd.IDNhanVien where hd.NgayLamHopDong between "2017-01-01" and "2019-12-31"
	)as c
);

-- task 17
update khachhang,
(select hd.IDKhachHang as id,sum(hd.TongTien) as tong_tien from hopdong hd
where year(hd.NgayLamHopDong) = 2019
group by hd.IDKhachHang
having tong_tien>10000000) as temp 
set khachhang.IDLoaiKhach= (select lk.IDLoaiKhach from loaikhach lk where lk.TenLoaiKhach="Diamond")
where khachhang.IDLoaiKhach=(select lk.IDLoaiKhach from loaikhach lk where lk.TenLoaiKhach="Platinium")
and temp.id= khachhang.IDKhachHang;

-- task 18
delete from hopdongchitiet 
where hopdongchitiet.IDHopDong = (
select IDHopDong from hopdong where year(hopdong.NgayLamHopDong)<'2016');

delete khachhang,hopdong from khachhang 
inner join hopdong on khachhang.IDKhachHang=hopdong.IDKhachHang
where exists(select hopdong.IDHopDong where year(hopdong.NgayLamHopDong)<'2016');

-- task 19
CREATE VIEW check_dich_vu_dung_tren_10_lan AS
select dvdk.IdDichVuDiKem ,
count(hdct.IDDichVuDiKem) as so_lan_su_dung from dichvudikem dvdk 
inner join hopdongchitiet hdct on dvdk.IdDichVuDiKem = hdct.IdDichVuDiKem
group by dvdk.IdDichVuDiKem
having so_lan_su_dung > 10;

update dichvudikem 
set dichvudikem.Gia = dichvudikem.Gia*2 
where dichvudikem.IdDichVuDiKem = (select IdDichVuDiKem from check_dich_vu_dung_tren_10_lan);

-- task 20
select nv.IDNhanVien as ID , nv.HoTen,nv.Email,nv.SDT,nv.NgaySinh,nv.DiaChi,"nhanvien" as FromTable
from nhanvien nv
union all 
select kh.IDKhachHang as ID, kh.HoTen,kh.Email,kh.SDT,kh.NgaySinh,kh.DiaChi,"khachhang" as FromTable
from khachhang kh;