const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  due_back: { type: Date, default: Date.now },
});

// Virtual for genre's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/genre/${this.name}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);
