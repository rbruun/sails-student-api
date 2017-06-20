/**
 * Major_class.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    major_class_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    major_id: {
      //type: 'integer'
      model: "major"
    },
    class_id: {
      //type: 'integer'
        model: "class"
    }
  },
  autoPK: false
};

