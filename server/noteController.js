import Note from "./Note.js";

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json(notes);
  } catch (error) {
    console.error('Error getting notes:', error);
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
    console.error('Error creating note:', error);
    res.status(500).json({ error: error.message });
  }
};

const updateNote = async (req, res) => {
  const noteId = req.params.id;
  const noteUpdates = req.body;
  
  try {
    const updatedNote = await Note.findByIdAndUpdate(noteId, noteUpdates, { new: true });

    if (!updatedNote) {
      res.status(404).json({ message: 'Resource not found' });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error('Error updating note:', error);
    res.status(500).json({ error: error.message });
  }
}

const deleteNote = async (req, res) => {  
  try {
    await Note.findByIdAndDelete(req.params.id);
    
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting note:', error);
    res.status(500).json({ error: error.message });
  }
}

export {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
}