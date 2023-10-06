import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  text: { type: String, required: true },
});

const Posts = mongoose.models.Posts || mongoose.model("Posts", postSchema);

export default Posts;
