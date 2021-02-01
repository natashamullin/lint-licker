DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE departments (
    id INTEGER PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role(
    id INTEGER PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,    
    department_id INTEGER NOT NULL
);

CREATE TABLE employee (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    salary DECIMAL INTEGER NOT NULL,
    role_id INTEGER NOT NULL,
    department_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL;
);