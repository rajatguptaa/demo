const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Customers = sequelize.define('customer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    customer_name: DataTypes.STRING,
    customer_id: DataTypes.STRING,
    deal_id:DataTypes.INTEGER
  	},{
        timeStamps: false,
    });

module.exports = Customers;