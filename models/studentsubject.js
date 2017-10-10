'use strict';
const desc=require('../helper/description');
module.exports = function(sequelize, DataTypes) {
  var StudentSubject = sequelize.define('StudentSubject', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    score:DataTypes.INTEGER
  })
  StudentSubject.associate=function(models){
    StudentSubject.belongsTo(models.Subject);
    StudentSubject.belongsTo(models.Student)
  }
  StudentSubject.prototype.desc=function(){
    return desc(this.score)
  }
  return StudentSubject;
};
