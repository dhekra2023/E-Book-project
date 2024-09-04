const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql' 
});
// testing the connection
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnection();

module.exports = sequelize;
