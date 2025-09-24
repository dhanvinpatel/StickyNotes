import axios from 'axios';
import { SquarePen } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import EditNoteModal from './EditNoteModal';

function NoteOptions({ setNoteColor, note, setNotes, openEditModal, setOpenEditModal }) {
  const colorOptions = ['#FFA41B', '#5BBCFF', '#FF6D24', '#A376A2', '#D3DAD9', '#E8988A'];

  // Delete the note from the database
  const handleNoteDelete = async (id) => {
    try {
      await axios.delete(`https://sticky-notes-backend-ashen.vercel.app/api/notes/${id}`);
      setNotes((prev) => prev.filter(note => note._id !== id));
    } catch (error) {
      console.error('Failed to delete note: ', error);
    }
  };

  // Handle note color update
  const handleUpdateColor = async (color) => {
    const editedNote = { color };

    try {
      const updatedNote = await axios.patch(`https://sticky-notes-backend-ashen.vercel.app/api/notes/${note._id}`, editedNote);
      setNoteColor(color)
      setNotes((prev) =>
        prev.map((oldNote) =>
          oldNote._id === note._id ? { ...oldNote, ...updatedNote.data } : oldNote
        )
      );
    } catch (error) {
      console.error('Error updating note color:', error);
    }
  }

  return (
    <div className='absolute flex items-start mt-1'>
      <div className='flex'>
        {colorOptions.map((color, index) => (
          <div
            key={index}
            className='w-6 h-6 cursor-pointer rounded-full mr-1'
            style={{ backgroundColor: color }}
            onClick={() => { handleUpdateColor(color) }}
          ></div>
        ))}
      </div>
      <div className='flex ml-6'>
        <SquarePen className='cursor-pointer' onClick={() => { setOpenEditModal(true) }} />
        {openEditModal &&
          <EditNoteModal
            setOpenEditModal={setOpenEditModal}
            note={note}
            setNotes={setNotes}
          />}
        <Trash2 className='cursor-pointer ml-2' onClick={() => { handleNoteDelete(note._id) }} />
      </div>
    </div>
  )
}

export default NoteOptions;