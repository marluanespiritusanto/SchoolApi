module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: "postgres",
    password: "mysecretpassword",
    database: "school_QA",
    host: "localhost",
    dialect: "postgres"
  }
};
