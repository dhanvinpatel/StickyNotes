import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    dueDate: String,
  },
  {
    timestamps: true
  },
);

const Note = mongoose.model('Note', noteSchema);
export default Note;