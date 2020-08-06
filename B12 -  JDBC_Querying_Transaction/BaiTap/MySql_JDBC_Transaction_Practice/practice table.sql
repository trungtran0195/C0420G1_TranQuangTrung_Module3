create table Permision(

id int(11) primary key,

name varchar(50)

);

create table User_Permision(

permision_id int(11),

user_id int(11), 

FOREIGN KEY (permision_id) references permision (id),

FOREIGN KEY (user_id) references users (id)

)