create database ojoraSch;
use ojoraSch;

create table student(
id int auto_increment primary key,
name varchar(10) not null,
department_id varchar(1) not null,
period int
);

create table department(
department_id varchar(1) not null,
departmentName varchar(10) not null
);

insert into student(name, department_id, period)
value("Amarachi", "C", 2022),
("oke", "B", 2023),
("KEMI", "A", 2024),
("ANTHONY", "A", 2023),
("SAMAON", "C", 2021);

insert into department(department_id, departmentName)
value("A", "SCIENCE"),
("B", "ART"),
("C", "COMMERCIAL");

select name, departmentName from student
right join department on student.department_id = department.department_id
order by departmentName;
