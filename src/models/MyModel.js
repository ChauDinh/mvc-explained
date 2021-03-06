const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * The model is where we store our data.
 * 
 * The model contains data and makes the correct models comes down to 
 * understanding what entity you need to model and what data should go on what model
 * 
 * 
 */

const MyModelSchema = new Schema({
  foo: String,
  bar: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("MyModel", MyModelSchema);