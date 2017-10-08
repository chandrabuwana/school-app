'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentSubject = sequelize.define('StudentSubject', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  })
  StudentSubject.associate=function(models){
    StudentSubject.belongsTo(models.Subject,{foreignKey:'SubjectId'});
    StudentSubject.belongsTo(models.Student,{foreignKey:'StudentId'})
  }
  return StudentSubject;
};
