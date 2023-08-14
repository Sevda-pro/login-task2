module.exports = (sequelize, Sequelize) => {
    const customers = sequelize.define('customer', {

        Name: {
            type: Sequelize.STRING
        },
        Email: {
            type: Sequelize.STRING,
            primaryKey:true
        },
        Password: {
            type: Sequelize.STRING,

        }
    });
    return customers
}

