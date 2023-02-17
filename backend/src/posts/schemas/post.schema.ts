import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  htmlContent: String,
  // userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
  userId: Number,
});
