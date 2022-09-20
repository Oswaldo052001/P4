CREATE DATABASE ng_user_db;
USE ng_user_db;


CREATE TABLE user(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    carne INT(20),
    nombre VARCHAR(180),
    apellido VARCHAR(180),
    contraseña VARCHAR(40),
    correo VARCHAR(40),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE user to users;
DESCRIBE users ;


