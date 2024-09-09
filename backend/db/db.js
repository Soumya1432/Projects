const Sequelize = require('sequelize');
const dbName = 'notes_application';
const dbUser ='root';
const dbPassword ='2580';

const sequelize = new Sequelize(dbName,dbUser,dbPassword,{
    host:'localhost',
    port:3306,
    dialect:'mysql'
})
const db ={};
db.Sequelize=Sequelize;
db.sequelize =sequelize;

db.notes = require("../models/note.model")(sequelize,Sequelize);

module.exports =db;