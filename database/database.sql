CREATE DATABASE ng_user_db;
USE ng_user_db;


CREATE TABLE user(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    carne INT(20),
    nombre VARCHAR(180),
    apellido VARCHAR(180),
    contrasena VARCHAR(40),
    correo VARCHAR(40),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE user to users;
DESCRIBE users ;


CREATE TABLE curso(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    codigo_curso INT(20),
    nombre_curso VARCHAR(180),
    profesor VARCHAR(180),
    auxiliar VARCHAR(40),
    seccion VARCHAR(40),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    creditos VARCHAR(100)
);

RENAME TABLE curso to cursos;
DESCRIBE cursos ;

CREATE TABLE comentario(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    titulo VARCHAR(180),
    contenido VARCHAR(180),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE comentario to comentarios;
DESCRIBE comentarios ;


