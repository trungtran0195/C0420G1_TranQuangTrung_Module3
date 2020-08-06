-- find all users function 
DELIMITER //

CREATE PROCEDURE findAllUser()

BEGIN

  SELECT * FROM users;

END //

DELIMITER ;

-- update user function
DELIMITER $$

CREATE PROCEDURE update_user(

IN user_name varchar(50),

IN user_email varchar(50),

IN user_country varchar(50),

IN id_users int

)

BEGIN

    update users set name = user_name , email= user_email , country =user_country where id = id_users;

    END$$

DELIMITER ;

-- delete user function
DELIMITER $$

CREATE PROCEDURE delete_user(

IN id_users int

)

BEGIN

    delete from users where id = id_users;

    END$$

DELIMITER ;