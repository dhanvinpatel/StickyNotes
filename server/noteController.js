import Note from "./Note.js";

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNote = async (req, res) => {
  try {
    const noteData = {
      title: req.body.title,
      description: req.body.description,
      dueDate: req.dueDate,
    };

    const newNote = await Note.create(noteData);

    res.status(200).json(newNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getAllNotes,
  createNote,
}