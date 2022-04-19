const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("postgres://user:pass@postgres:5432/codes");

const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
export { authenticate };