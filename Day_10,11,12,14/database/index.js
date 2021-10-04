const {Sequelize} = require('sequelize'); 
// const { sequelize_database,
//     sequelize_username,
//     sequelize_password,
//     sequelize_host,
//     sequelize_dialect,
// } = require("../config");

// const sequelize = new Sequelize( 
//     sequelize_username,
//     sequelize_password,
//     {
//         host: sequelize_host,
//         dialect: sequelize_dialect
//     }
// );

const sequelize = new Sequelize( 
    "postgres", // database
    "postgres", // username
    "postgres-0326", // password
    {
        host: "localhost",
        dialect: "postgres",
    }
);

sequelize.sync(); 

(async () => {
    try {
        await sequelize.authenticate();
        console.log("connection established with DB")
    } catch (err) {
        console.error("unable to connect to DB")
    }
})();

module.exports = sequelize;