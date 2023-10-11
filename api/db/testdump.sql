CREATE TABLE todos(
       id INT PRIMARY KEY AUTO_INCREMENT, 
       title VARCHAR(255),
       completed BOOLEAN DEFAULT false
);

INSERT INTO todos(title) VALUES("Todo 1");
INSERT INTO todos(title, completed) VALUES("Todo 2", true);
INSERT INTO todos(title) VALUES("Todo 3");
