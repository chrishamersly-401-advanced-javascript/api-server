'use strict';

class DataModel {

  constructor(schema) {
    this.schema = schema;
  }

  get(id) {
    if (id) {
      return this.schema.findById(id);
    }
    else {
      return this.schema.find({});
    }
  }

  post(record) {
    console.log('in the post function');
    const newRecord = new this.schema(record);
    return newRecord.save();
  }

  put(record) {
    // find a record
    //change it
    //resave the changes
    console.log('in the put function');

    // let newRecord = appendthis.schema(record);
    // return newRecord.put();
  }

  delete(record) {
    //find a record and delete it
    console.log('in the delete function');
    // let newRecord = new this.schema(record);
    // return newRecord.delete();
    // return this.schema.findById(id);
  }
  
}

console.log('in the model.js file');

module.exports = DataModel;