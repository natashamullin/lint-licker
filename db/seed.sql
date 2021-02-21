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

