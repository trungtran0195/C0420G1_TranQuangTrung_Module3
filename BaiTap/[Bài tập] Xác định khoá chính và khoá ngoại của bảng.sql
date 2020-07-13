CREATE TABLE Customers(
customer_number INT not null auto_increment,
fullname  varchar(50),
address varchar(50),
email varchar(50),
phone varchar(50),
primary key(customer_number)
);

CREATE TABLE Accounts(
account_number INT not null auto_increment,
customer_number int , FOREIGN KEY(customer_number) REFERENCES Customers(customer_number),
account_type varchar(10) default "thường",
date date,
balance int,
primary key(account_number)
);

CREATE TABLE Transactions(
tran_number INT not null auto_increment,
account_number int , FOREIGN KEY(account_number) REFERENCES Accounts(account_number),
date  date,
amounts int,
descriptions text,
primary key(tran_number)
);