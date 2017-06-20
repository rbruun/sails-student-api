/**
 * Instructor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    instructor_id: {
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
      major_id: {
          //type: 'integer'
          model: "major"
      },
      years_of_experience: {
          type: 'integer',
          max: 99
      }, 
      tenured: {
          type: 'boolean'
      }
  },
  autoPK: false
};

