const mongoose = require('mongoose')

// const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
  
//   author: ObjectId,
  name: { type: String,required:true, maxLength:255 },
  description: { type: String, maxLength:600 },
  image: { type: String,maxLength:255 },
  slug: {type: String,slug: 'name',unique:true},
  videoid: {type: String,required:true,maxLength:255},
  level: {type: String, maxLength:255}
},{timestamps:true});

module.exports = mongoose.model("Course",Course)