const bcrypt = require('bcryptjs');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Deals = sequelize.define('deals', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    inventory:DataTypes.INTEGER,
    deal_name: DataTypes.STRING,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    product_id:DataTypes.INTEGER
},{
    timeStamps: false,
})

module.exports = Deals;