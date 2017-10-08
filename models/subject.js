'use strict';
module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  })
      Subject.associate= function(models) {
        Subject.hasMany(models.Teacher)

        // associations can be defined her
  }
  return Subject;
};
