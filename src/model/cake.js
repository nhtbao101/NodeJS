const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const { Schema } = mongoose;

mongoose.plugin(slug);

const CakeSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
    slug: { type: String, slug: 'name', unique: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Cakes', CakeSchema);
