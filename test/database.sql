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
drop procedure if exists paged_list;
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
drop procedure if exists select_note;
create procedure select_note(in `noteId` int)
begin
select note_id,title, content, note_type.type_id,`name` from note inner join note_type on note.type_id = note_type.type_id where note_id = noteId and delete_note != 1;
end //
DELIMITER ;

-- delete note
ALTER TABLE note ADD delete_note int;
DELIMITER //
drop procedure if exists delete_note;
create procedure delete_note(in `noteId` int)
begin
update note set delete_note = 1 where note_id = noteId ;
end //
DELIMITER ;

-- search note by title
DELIMITER //
drop procedure if exists search_note_title;
create procedure search_note_title(in _searchTitle varchar(100))
begin
SET @query = CONCAT(
'select note_id,title, content, note_type.type_id,`name` from note 
inner join note_type on note.type_id = note_type.type_id where title like "%',_searchTitle,'%" and delete_note != 1');
PREPARE stmt FROM @query;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
end //
DELIMITER ;

-- select note by type procedure 
DELIMITER //
drop procedure if exists select_note_by_type;
create procedure select_note_by_type(in `typeId` int)
begin
select note_id,title, content, note_type.type_id,`name` from note inner join note_type on note.type_id = note_type.type_id where note.type_id = typeId and note.delete_note != 1;
end //
DELIMITER ;
