import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    dueDate: String,
    color: {
      type: String,
      default: '#FFA41B',
    },
  },
  {
    timestamps: true
  },
);

const Note = mongoose.model('Note', noteSchema);
export default Note;