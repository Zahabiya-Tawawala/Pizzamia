const mysql2 = require("mysql2");

const checkUserExistinTable = (table, email, password, callback) => {
let query; 

if (table === "user"){
    query = `SELECT * FROM ${table} WHERE email = ? AND password = ?`;
}
}