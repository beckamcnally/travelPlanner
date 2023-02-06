const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {};

Trips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        trip_budget: {
            type: DataTypes.DECIMAL(10,4),
            allowNull: false,

        },
        traveller_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        traveller_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "trips"
    }
);

module.exports = Location;