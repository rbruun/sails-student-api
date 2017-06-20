/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      student_id: {
          type: 'integer',
          primaryKey: true,
          autoIncrement: true
      },
      first_name: {
          type: 'string',
          minLength: 2,
          maxLength: 30
      },
      last_name: {
          type: 'string',
          minLength: 2,
          maxLength: 30
      },
      start_date: {
          type: 'date',
      },
      toJSON: function() {
      var obj = this.toObject();
      if(obj.start_date){
        obj.start_date = obj.start_date.slice(0,-14);
      }
      return obj;
    },
      gpa: {
          type: 'decimal'
      },
      sat: {
          type: 'integer'
      }, 
      major_id: {
//          type: 'integer'
          model: 'major'
      }
  },
    autoPK: false
};

