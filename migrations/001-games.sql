-- UP

CREATE TABLE Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  age INTEGER
);

INSERT INTO Users (username, age) values ('mannuel', 39);
INSERT INTO Users (username, age) values ('Jack', 49);
INSERT INTO Users (username, age) values ('Sally', 59);

-- DOWN
DROP TABLE Users;
