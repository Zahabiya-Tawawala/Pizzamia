const mysql2 = require("mysql2/promise");

const dbConnect = async () => {
  try {
    const connect = await mysql2.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
console.log("Connected to the database: ", process.env.DB_NAME, process.env.DB_HOST);
return connect; // return the connection for reuse in other files

  } catch (err) {
    console.log("Database Connection Failed: ",err.message);
    process.exit(1); // exit the process if the connection fails
  }
};

module.exports = dbConnect;

// DB_HOST=localhost
// DB_NAME=pizzamia_application
// DB_USER=root
// DB_PASSWORD=
