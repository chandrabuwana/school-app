'use strict';
module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  })
  Subject.associate= function(models) {
    Subject.hasMany(models.Teacher,{foreignKey:'SubjectId'})
    Subject.belongsToMany(models.Student,{through:'StudentSubject',foreignKey:'SubjectId'})
    Subject.hasMany(models.StudentSubject,{foreignKey:'StudentId'})
        // associations can be defined her
  }
  return Subject;
};
