create database iNotes;

use iNotes;

create table note_type(
type_id int(11) AUTO_INCREMENT primary key,
name varchar(100),
description_note varchar(200)
);

create table note(
note_id int(11) auto_increment primary key,
title varchar(100),
content varchar(500),
type_id int(11),
foreign key (type_id) REFERENCES note_type(type_id)
);

INSERT INTO `inotes`.`note_type` (`type_id`, `name`, `description_note`) VALUES ('1', 'action', 'lot of fights');
INSERT INTO `inotes`.`note_type` (`type_id`, `name`, `description_note`) VALUES ('2', 'horror', 'ghost story');
INSERT INTO `inotes`.`note_type` (`type_id`, `name`, `description_note`) VALUES ('3', 'educate', 'teach knowledge');

insert into note(title,content,type_id) value ('learn sql' ,  'today we learn about JDBC', 3);
insert into note(title,content,type_id) value ('haunted house' ,  'a house where happen a family murder before', 2);

-- paging list procedure
DELIMITER //
create procedure paged_list(in `offset` int , noOfRecords int)
begin
select note_id,title, content, note_type.type_id,`name` from note 
inner join note_type on note.type_id = note_type.type_id limit `offset` , noOfRecords ;
SELECT FOUND_ROWS();
end //
DELIMITER ;

call paged_list(0,2)

-- select note procedure
DELIMITER //
create procedure select_note(in `noteId` int)
begin
select note_id,title, content, note_type.type_id,`name` from note inner join note_type on note.type_id = note_type.type_id where note_id = noteId ;
end //
DELIMITER ;

-- delete note
DELIMITER //
create procedure delete_note(in `noteId` int)
begin
SET FOREIGN_KEY_CHECKS=0;
update note set title = false , content = false, type_id = false where note_id = noteId ;
SET FOREIGN_KEY_CHECKS=1;
end //
DELIMITER ;