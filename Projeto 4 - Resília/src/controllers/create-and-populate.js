const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

//==== Usuários
const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "HORARIO" varchar(64),
  );`;

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (ID, NOME, HORARIO)
VALUES 
    (1, 'Harry Potter e a Ordem da Fenix', '17:30'),
    (2, 'Star Wars', '20:30'),
    (3, 'Marley e Eu', '21:45')
`;

function criaTabelaUsr() {
  db.run(USUARIOS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de usuários");
  });
}

function populaTabelaUsr() {
  db.run(ADD_USUARIOS_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de usuários");
  });
}

db.serialize(() => {
  criaTabelaUsr();
  populaTabelaUsr();
});