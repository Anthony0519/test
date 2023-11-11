create database company;
use company;

create table orderItems(
order_item_id int auto_increment primary key,
productName varchar(20) not null,
quantity int not null,
price int not null,
order_id int
);

create table orders(
id int auto_increment primary key,
order_id int,
orderDate varchar(15) not null
);

insert into orderItems(productName, quantity, price, order_id)
value("itel p37", 5, 60000, 412),
("tecno sp5", 7, 55000, 402),
("samsung j5", 15, 62000, 410),
("blackbery", 5, 60000, 421),
("itel p20", 8, 40000, 411),
("iphone 6", 30, 65000, 415),
("tecno sp2", 15, 30000, 402),
("samsung A20", 25, 90000, 410),
("itel p3", 35, 65000, 411),
("iphone x", 55, 100000, 415);
select *from orderItems;
insert into orders(order_id, orderDate)
value(402, "10-2-2023"),
(410, "31-9-2023"),
(411, "15-4-2023"),
(412, "10-11-2023"),
(415, "20-10-2023"),
(421, "25-12-2022");
select *from orders;

select productName, sum(quantity) as totalQuantity, avg(price) as Average from orders
inner join orderItems on orderItems.order_id = orders.order_id group by productName 