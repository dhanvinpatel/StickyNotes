import Note from "./Note.js";

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNote = async (req, res) => {
  try {
    const noteData = {
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
    };

    const newNote = await Note.create(noteData);

    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    await Note.findOneAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  getAllNotes,
  createNote,
  deleteNote,
}