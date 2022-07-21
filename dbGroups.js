import mongoose from "mongoose";

const groupsSchema = mongoose.Schema({
  name: String,
});

export default mongoose.model("groups", groupsSchema);
