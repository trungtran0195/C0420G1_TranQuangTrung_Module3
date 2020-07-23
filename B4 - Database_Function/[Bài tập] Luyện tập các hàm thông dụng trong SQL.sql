select * from student where name = 'huong';

select * , sum(sotien) as total 
from student where name = 'huong'
group by student_name;

select distinct student_name from student;