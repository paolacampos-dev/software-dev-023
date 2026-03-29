-- create customers table

CREATE TABLE IF NOT EXISTS customers (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255)
);

INSERT INTO customers (name) VALUES ('Manny'), ('Bertie'), ('Tim');

-- create biscuits table
CREATE TABLE IF NOT EXISTS biscuits(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  biscuit_name VARCHAR(255),
  src TEXT,
  description TEXT,
  crunchiness INT,
  customer_id INT REFERENCES customers(id) --foreign key (NOT GENERATED)
);

INSERT INTO biscuits (biscuit_name, src, description, crunchiness, customer_id) VALUES (
'Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 6, 2),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Pretty sweet', 5, 1 ),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4, 3),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4, 3 ),
('Chocolate Cookies', 'https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Delicious cookie with scrumptious chocolate', 4, 1);

-- read the biscuit name and customer name
SELECT biscuits.biscuit_name AS "biscuit name", customers.name AS "customer name" FROM customers
JOIN biscuits ON biscuits.customer_id = customers.id;