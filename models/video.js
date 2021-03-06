const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: { type: String, required: true },
  date_added: { type: Date, default: Date.now },
  description: { type: String, required: true },
  src: { type: String, required: true },
  type: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Videos = mongoose.model("Videos", videoSchema);

module.exports = Videos;
