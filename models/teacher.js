'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:"Formatnya benerin COK"
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  })
  Teacher.associate=function(models){
    Teacher.belongsTo(models.Subject)
    // Teacher.hasMany(models.Subject,{foreignKey:'SubjectId',sourceKey:'id'})
  }
  Teacher.prototype.fullname=function(){
    return this.first_name+" "+this.last_name
  }

  return Teacher;
};
