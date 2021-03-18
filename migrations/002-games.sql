-- UP

CREATE TABLE Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  age INTEGER
);

INSERT INTO Users (username, age) values ('mannuel', 39);
INSERT INTO Users (username, age) values ('Jack', 49);
INSERT INTO Users (username, age) values ('Sally', 59);

CREATE TABLE Orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userID INTEGER REFERENCES Users(id)
  title TEXT
  description TEXT
);

INSERT INTO Orders (userID, title, description) values (1, "Nike Air Zoom", "nice shoes")
INSERT INTO Orders (userID, title, description) values (2, "Adidas", "Best shoes")
INSERT INTO Orders (userID, title, description) values (3, "New Balance", "Best shoes")

-- DOWN
DROP TABLE Users;
