module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: "postgres",
    password: "mysecretpassword",
    database: "school_dev",
    host: "localhost",
    dialect: "postgres",
    logging: false
  }
};
