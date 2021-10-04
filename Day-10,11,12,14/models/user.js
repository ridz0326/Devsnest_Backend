const {DataTypes} = require('sequelize');   // Import sequelize
const sequelize = require('../database')    // Import database connection

const User = sequelize.define('User', {     //Define the table name
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    confirmPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    }

})

module.exports = User