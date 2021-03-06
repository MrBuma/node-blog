const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// add slug plugin
const slug = require('mongoose-slug-generator');


// add soft deleted plugin
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name:{ type: String,  maxLength: 255, required: true },
    description: {type: String},
    image: { type: String},
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, require: true },
    level: { type: String }
    }, 
     { timestamps: true }
  );

  // Add plugin
  mongoose.plugin(slug);
  Course.plugin(mongooseDelete, { 
    deletedAt : true,
      overrideMethods: true
     });
  module.exports = mongoose.model('Course', Course );