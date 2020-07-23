CREATE TABLE Customers(
customerNumber INT AUTO_INCREMENT,
customerName varchar(50) not null,
contactLastName varchar(50) not null,
contactFirstName varchar(50) not null,
phone varchar(50) not null,
addressLine1 varchar(50) not null,
addressLine2 varchar(50),
city varchar(50) not null,
state varchar(50) not null,
postalCode varchar(15) not null,
country varchar(50) not null,
creditLimit int,
primary key(customerNumber)
);

CREATE TABLE orders(
orderNumber INT AUTO_INCREMENT,
orderDate date not null,
requiredDate date not null,
shippedDate date not null,
status varchar(15) not null,
comments text,
quantityOrdered int not null,
priceEach int not null,
primary key(orderNumber)
);

CREATE TABLE payments(
customerNumber INT not null, FOREIGN KEY(customerNumber) REFERENCES Customers(customerNumber),
checkNumber varchar(50) not null,
paymentDate date not null,
amount int not null,
primary key(customerNumber)
);

CREATE TABLE products(
productCode varchar(15) not null,
productName varchar(70) not null,
productScale varchar(10) not null,
productVendor varchar(50) not null,
productDescription text not null,
quantityInStock int not null,
buyPrice int not null,
MSRP int not null,
primary key(productCode)
);

CREATE TABLE productlines(
productLine varchar(50) not null,
textDescription text not null,
image varchar(100),
primary key(productLine)
);

CREATE TABLE employees(
employeeNumber int auto_increment,
lastName varchar(50) not null,
firstName varchar(50) not null,
email varchar(100) not null,
jobTitle varchar(50) not null,
primary key(employeeNumber)
);

CREATE TABLE offices(
officeCode int auto_increment,
city varchar(50) not null,
phone varchar(50) not null,
addressLine1 varchar(50) not null,
addressLine2 varchar(50),
state varchar(50),
country varchar(50) not null,
postalCode varchar(15) not null,
primary key(officeCode)
);

ALTER TABLE orders
ADD customerNumber INT not null,
ADD FOREIGN KEY(customerNumber) REFERENCES Customers(customerNumber);

CREATE TABLE OrderDetails(
orderNumber int not null, FOREIGN KEY(orderNumber) REFERENCES orders(orderNumber),
productCode varchar(15) not null, FOREIGN KEY(productCode) REFERENCES products(productCode)
);

ALTER TABLE products
ADD productLine varchar(50) not null,
ADD FOREIGN KEY(productLine) REFERENCES productlines(productLine);

ALTER TABLE payments
ADD salesRepEmployeeNumber int not null,
ADD FOREIGN KEY(salesRepEmployeeNumber) REFERENCES employees(employeeNumber);

ALTER TABLE employees
ADD reportTo int not null,
ADD FOREIGN KEY(reportTo) REFERENCES offices(officeCode);



