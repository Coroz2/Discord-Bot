const { DataTypes, STRING } = require("sequelize");
//format of our database table
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tictactoe', {
        user_id: {
            type: DataTypes.STRING, 
            primaryKey: true,
        },
        score: {
            type: DataTypes.INTEGER, 
            defaultValue: 0,
            allowNull: false, 
        }
    })
}
