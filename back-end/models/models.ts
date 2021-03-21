const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
    comments: {type: DataTypes.STRING},
    orders: {type: DataTypes.STRING},
    baskets: {type: DataTypes.STRING},
    adress: {type: DataTypes.STRING},
    prices: {type: DataTypes.STRING}
})