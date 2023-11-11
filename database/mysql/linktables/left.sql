CREATE DATABASE theCurve;

USE theCurve;

CREATE TABLE theCurveStudents (
id INT,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
department_id INT
);

CREATE TABLE Department (
id INT,
departmentName VARCHAR(10) NOT NULL
);


INSERT INTO theCurveStudents(id, name, email, department_id)
VALUE(1, "Anthony", "anthony@gmail.com", 1),
(2, "Emanuel", "emmanuel@gmail.com", 2),
(3, "David", "david@gmail.com", 1),
(4, "Daniel", "daniel@gmail.com", 2),
(5, "Vivian", "vivi@gmail.com", 1);

INSERT INTO Department(id, departmentName)
VALUE(1, "backend"),
(2, "frontend");

SELECT theCurveStudents.id, theCurveStudents.name, Department.departmentName FROM theCurveStudents 
left JOIN Department ON theCurveStudents.department_id = Department.id