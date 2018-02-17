DROP DATABASE IF EXISTS burgers_db;
create database burgers_db;

use burgers_db;

create table burgers(
id int(10) primary key auto_increment,
burger_name varchar(100),
devoured boolean not null default 0
);
