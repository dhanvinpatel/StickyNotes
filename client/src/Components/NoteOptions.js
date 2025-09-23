import axios from 'axios';
import { SquarePen } from 'lucide-react';
import { Trash2 } from 'lucide-react';

function NoteOptions({ setNoteColor, noteId, setNotes }) {
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

  return (
    <div className='flex flex-col'>
      <div className='flex justify-end mb-2'>
        {colorOptions.map((color, index) => (
          <div
            key={index}
            className='w-6 h-6 cursor-pointer rounded-full ml-1'
            style={{ backgroundColor: color }}
            onClick={() => { setNoteColor(color) }}
          ></div>
        ))}
      </div>
      <div className='flex justify-end'>
        <SquarePen className='cursor-pointer' />
        <Trash2 className='cursor-pointer ml-4' onClick={() => { handleNoteDelete(noteId) }} />
      </div>
    </div>
  )
}

export default NoteOptions;