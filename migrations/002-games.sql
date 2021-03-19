-- UP

CREATE TABLE Orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userID INTEGER REFERENCES Users(id),
  title TEXT,
  description TEXT
);

INSERT INTO Orders (userID, title, description) values (1, "Nike Air Zoom", "nice shoes");
INSERT INTO Orders (userID, title, description) values (2, "Adidas", "Best shoes");
INSERT INTO Orders (userID, title, description) values (3, "New Balance", "Best shoes");
INSERT INTO Orders (userID, title, description) values (3, "Nike Shoes", "Best shoes");

-- DOWN
DROP TABLE Orders;
