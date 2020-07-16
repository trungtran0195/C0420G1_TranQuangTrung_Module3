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
DELIMITER ;

DELIMITER //
create procedure createNewProduct(in product_code varchar(15),product_name varchar(30),product_price double,product_amount int,product_description varchar(50),product_status varchar(50))
begin
insert into products (productCode,productName,productPrice,productAmount,productDescription,productStatus) value  (product_code,product_name,product_price,product_amount,product_description,product_status);
end //
DELIMITER ;

DELIMITER //
create procedure updateProduct(in product_id int,product_code varchar(15),product_name varchar(30),product_price double,product_amount int,product_description varchar(50),product_status varchar(50))
begin
update products
set productCode = product_code,productName = product_name,productPrice = product_price,productAmount = product_amount,productDescription = product_description,productStatus = product_status
where id = product_id;
end //
DELIMITER ;

DELIMITER //
create procedure deleteProduct(in product_id int)
begin
delete from products where id = product_id;
end //
DELIMITER ;