create database burgers_db;

use burgers_db;

create table burgers {
    id INT PRIMARY KEY AUTO_INCREMENT,
    burger_name text,
    devoured boolean default false
}