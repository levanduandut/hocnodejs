const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
// const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');


const Schema = mongoose.Schema;

const Course = new Schema({

  //   author: ObjectId,
  name: { type: String, required: true, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  slug: { type: String, slug: 'name', unique: true },
  videoid: { type: String, required: true, maxLength: 255 },
  level: { type: String, maxLength: 255 },
  deletedAt: {}
}, { timestamps: true });

// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete,{ overrideMethods: 'all' });



module.exports = mongoose.model("Course", Course)