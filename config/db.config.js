module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Ebutor@123",
    DB: "users_service_nodejs",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};