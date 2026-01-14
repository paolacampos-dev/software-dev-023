-- create biscuits table
CREATE TABLE IF NOT EXISTS biscuits(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  biscuit_name VARCHAR(255),
  src TEXT,
  description TEXT,
  crunchiness INT
);

-- insert data into the biscuits table
-- CREATE new data in the table --> POST http method
INSERT INTO biscuits (biscuit_name, src, description, crunchiness) VALUES (
'Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 6),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Pretty sweet', 5 ),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4 ),
('Chocolate Cookies', 'https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Delicious cookie with scrumptious chocolate', 4);

-- Select the name and description of the biscuits
-- READ data in the table --> GET http method
-- SELECTing data does not alter the table
SELECT biscuit_name, description FROM biscuits;

-- Select the name and description of the biscuits only for custard creams
SELECT biscuit_name, description FROM biscuits WHERE biscuit_name = 'Custard Cream'; -- case sensitive

-- Select the name and crunchiness of the biscuits in alphabetical order
SELECT biscuit_name, crunchiness FROM biscuits ORDER BY biscuit_name ASC;
SELECT biscuit_name, crunchiness FROM biscuits ORDER BY biscuit_name DESC;

-- Select the name and crunchiness of the biscuits in alphabetical order only the first 3 results
SELECT biscuit_name, crunchiness FROM biscuits ORDER BY biscuit_name ASC LIMIT 3;

-- Select all columns in biscuits and rename those that are confusing
SELECT id, biscuit_name AS biscuit, src AS "image link", description, crunchiness FROM biscuits;

-- Update the custard cream entry in the biscuits table
-- ALWAYS specify WHERE to UPDATE
-- UPDATE action --> PUT / PATCH http method
UPDATE biscuits SET crunchiness = 4, biscuit_name = 'custard cream' WHERE biscuit_name = 'Custard Cream';
-- Update the custard cream entry in the biscuits table and get confirmation_sent_at
UPDATE biscuits SET crunchiness = 5, biscuit_name = 'Custard Cream' WHERE id = 2 RETURNING *;


-- Delete an entry in the table
-- ALWAYS specify WHERE to DELETE
-- DELETE action --> DELETE http method
DELETE FROM biscuits WHERE id = 5;