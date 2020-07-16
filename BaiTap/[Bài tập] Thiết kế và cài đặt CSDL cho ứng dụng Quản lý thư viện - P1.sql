create database library;

CREATE TABLE library.Student(
student_number varchar(15),
student_name varchar(50),
address varchar(500),
email varchar(50),
image varchar(100),
PRIMARY KEY(student_number)
);

create table library.Category(
category_id int auto_increment,
category_name varchar(50),
primary key(category_id)
);

create table library.Book(
book_id int,
book_name varchar(100),
category_id int, foreign key(category_id) references Category(category_id),
primary key(book_id)
);

create table library.BorrowOrder(
book_id int,foreign key(book_id) references Book(book_id),
student_number varchar(15),foreign key(student_number) references Student(student_number),
primary key(book_id,student_number)
);

INSERT INTO category (category_name) VALUES ('Children Book');
INSERT INTO category (category_name) VALUES ('Comic');
INSERT INTO category (category_name) VALUES ('Computer');
INSERT INTO category (category_name) VALUES ('Education');
INSERT INTO category (category_name) VALUES ('Food');

INSERT INTO student (student_number,student_name,address,email,image) VALUES ('SV01','Binh','HaNoi','binh@gmail.com','image01');
INSERT INTO student (student_number,student_name,address,email,image) VALUES ('SV02','Kien','DaNang','kien@gmail.com','image02');
INSERT INTO student (student_number,student_name,address,email,image) VALUES ('SV03','Linh','DaNang','linh@gmail.com','image03');
INSERT INTO student (student_number,student_name,address,email,image) VALUES ('SV04','Thanh','DaNang','thanh@gmail.com','image04');
INSERT INTO student (student_number,student_name,address,email,image) VALUES ('SV05','Bao','HoChiMinh','bao@gmail.com','image05');

INSERT INTO book (book_id,book_name,category_id) VALUES ('1','Java co ban','3');
INSERT INTO book (book_id,book_name,category_id) VALUES ('2','100 mon an','5');
INSERT INTO book (book_id,book_name,category_id) VALUES ('3','PHP nang cao','3');
INSERT INTO book (book_id,book_name,category_id) VALUES ('4','Tho va Rua','1');
INSERT INTO book (book_id,book_name,category_id) VALUES ('5','100 bai hat thieu nhi','1');
INSERT INTO book (book_id,book_name,category_id) VALUES ('6','SQL co ban','3');

INSERT INTO borroworder (book_id,student_number) VALUES ('1','SV01');
INSERT INTO borroworder (book_id,student_number) VALUES ('3','SV01');
INSERT INTO borroworder (book_id,student_number) VALUES ('5','SV03');
INSERT INTO borroworder (book_id,student_number) VALUES ('2','SV05');
INSERT INTO borroworder (book_id,student_number) VALUES ('6','SV02');

