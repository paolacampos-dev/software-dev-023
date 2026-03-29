-- create tables
CREATE TABLE IF NOT EXISTS authors (
id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
author_name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS genres(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  genre_name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS books (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255),
  year INT,
  author_id INT REFERENCES authors(id) --foreign key
);

CREATE TABLE IF NOT EXISTS books_genres (
  book_id INT REFERENCES books(id), --foreign key
  genre_id INT REFERENCES genres(id), --foreign key
  PRIMARY KEY (book_id, genre_id)
);

-- the primary key in the junction table is a constraint to make sure the relationship between entries in different tables is unique

-- seed the tables
INSERT INTO books (title, year, author_id) VALUES
('The Hobbit', 1937, 1),
('Tiny Habits', 2019, 2),
('The Lord of the Rings', 1947, 1),
('The Silmarillion', 1977, 1),
('Misery', 1987, 3),
('The Lion, the Witch and the Wardrobe', 1950, 4),
('Steal Like An Artist', 2012, 5),
('1984', 1949, 6);

INSERT INTO authors (author_name) values
('JRR Tolkien'),
('BJ Fogg'),
('Stephen King'), 
('C.S.Lewis'),
('Austin Kleon'), 
('George Orwell');

INSERT INTO genres (genre_name) VALUES
('children'),
('fantasy'),
('dystopian'),
('thriller'),
('horror'),
('fiction'),
('non-fiction'),
('art'),
('self help');

INSERT INTO books_genres (book_id, genre_id) VALUES
(1, 2),
(1, 6),
(1, 1),
(2, 7),
(2, 9);

-- READ data form the tables

-- READ author name and book title from the database
SELECT authors.author_name, books.title FROM authors JOIN books ON authors.id = books.author_id;

-- READ author name, book title, book year, genre from the database
SELECT authors.author_name, books.title, books.year, genres.genre_name FROM authors 
JOIN books ON authors.id = books.author_id
JOIN books_genres ON books.id = books_genres.book_id
JOIN genres ON genres.id = books_genres.genre_id;