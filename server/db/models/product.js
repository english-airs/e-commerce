const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
})

module.exports = Product
