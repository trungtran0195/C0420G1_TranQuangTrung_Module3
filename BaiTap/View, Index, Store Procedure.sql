create database demo_product;

create table Products(
id int auto_increment,
productCode varchar(15),
productName varchar(30),
productPrice double,
productAmount int,
productDescription varchar(50),
productStatus varchar(50),
primary key(id)
);

insert into products (productCode,productName,productPrice,productAmount,productDescription,productStatus) value  ('SP01','apple','10000','10','fruit','good');
insert into products (productCode,productName,productPrice,productAmount,productDescription,productStatus) value  ('SP02','broccoli','15000','10','vegetable','bad');
insert into products (productCode,productName,productPrice,productAmount,productDescription,productStatus) value  ('SP03','pork','100000','5','meat','good');
insert into products (productCode,productName,productPrice,productAmount,productDescription,productStatus) value  ('SP04','cabbages','5000','5','vegetable','bad');
insert into products (productCode,productName,productPrice,productAmount,productDescription,productStatus) value  ('SP05','fish','50000','2','meat','good');
insert into products (productCode,productName,productPrice,productAmount,productDescription,productStatus) value  ('SP06','mushrooms','15000','5','vegetable','good');
insert into products (productCode,productName,productPrice,productAmount,productDescription,productStatus) value  ('SP07','spring onions','1000','5','vegetable','good');
insert into products (productCode,productName,productPrice,productAmount,productDescription,productStatus) value  ('SP08','cucumber','5000','15','vegetable','good');
insert into products (productCode,productName,productPrice,productAmount,productDescription,productStatus) value  ('SP09','rice','120000','1','grain','bad');
insert into products (productCode,productName,productPrice,productAmount,productDescription,productStatus) value  ('SP10','beer','10000','50','drink','good');

alter table products add unique index index_productsID(id);
ALTER TABLE products ADD INDEX idx_name_price(productName, productPrice);

EXPLAIN SELECT * FROM products WHERE productName = 'pork' or productPrice = 10000;

create view productsview as
select productCode,productName,productPrice,productStatus 
from products; 

create or replace VIEW productsview as
select productName,productPrice
from products
where productPrice = 5000;

drop view productsview;

DELIMITER //
create procedure findAllProducts()
begin
select * from products;
end //
