-- UP

CREATE TABLE Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  age INTEGER
);

INSERT INTO Users (username, age) values ('mannuel', 39);


-- DOWN
DROP TABLE Users;
