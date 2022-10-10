CREATE DATABASE probando;

-- no olvidar seleccionar la base de datos
use probando;
-- comando para crear la tabla persons
CREATE TABLE Persons (
    id int,
    lastName varchar(255),
    firstName varchar(255),
    addrees varchar(255),
    city varchar(255)
);   
-- comando para insertar un dato en una tabla -> persons

INSERT INTO Persons VALUES (2, "ramirez", "daniel","direccion","lambayeqye");

SELECT * FROM Persons