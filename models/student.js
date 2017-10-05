'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:{
       type:DataTypes.STRING,
       validate:{
         isEmail:{
           args:true,
           msg:"Format Email tidak Benar"
         }
       }
    },createdAt:new Date(),
    updatedAt:new Date()
  });
  Student.prototype.fullname=function(){
    return this.first_name+" "+this.last_name
  }
  return Student;
};
