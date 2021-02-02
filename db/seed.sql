USE employees;

INSERT INTO department
(name)
VALUES
('Street Gang Leader'),
('Boot Legger'),
('Hitman'),
('Drug Handler'),
('Body Guard'),
('Accountant'),
('House mom'),
('Working girls');

INSERT INTO role(title, salary, department_id)
VALUES
('Street Gang Leader', 15000, 1),
('Drug Handler', 15000, 1),
('Accountant', 5000, 1),
('Boot Legger',25000, 1),
('Hitman', 50000, 2),
('Body Guard', 7500, 2),
('House Mom,', 4000, 3),
('Working girls', 3000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Al', 'Capone', 1, NULL),
('Johnny', 'Torrio', 2, 1),
('Ben', 'Russo', 3, 2),
('Jim', 'Colosimo', 4, NULL),
('Charlie', 'Luciano', 5, NULL),
('Bugs', 'Moran', 6, 5),
('Beth', 'Steel', 7, 6),
('Lulu', 'White', 8, 7);

-- USE employees;
-- CREATE TABLE department (
--   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(30) UNIQUE NOT NULL
-- );
-- CREATE TABLE role (
--   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(30) UNIQUE NOT NULL,
--   salary DECIMAL UNSIGNED NOT NULL,
--   department_id INT UNSIGNED NOT NULL,
--   CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
-- );
-- CREATE TABLE employee (
--   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   role_id INT UNSIGNED NOT NULL,
--   INDEX role_ind (role_id),
--   CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
--   manager_id INT UNSIGNED,
--   CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
-- );
