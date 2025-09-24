import { X } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';

function EditNoteModal({ setOpenEditModal, note, setNotes }) {
  const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD  
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [dueDate, setDate] = useState(note.dueDate);

  // Handle updating notes
  const handleSubmit = async (e) => {
    e.preventDefault();

    const editedNote = {
      title: title,
      description: description,
      dueDate: dueDate
    };

    try {
      const updatedNote = await axios.patch(`https://sticky-notes-backend-ashen.vercel.app/api/notes/${note._id}`, editedNote);
      setOpenEditModal(false);
      setNotes((prev) =>
        prev.map((oldNote) =>
          oldNote._id === note._id ? { ...oldNote, ...updatedNote.data } : oldNote
        )
      );
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  return ReactDom.createPortal(
    <div className='h-screen w-screen font-caveat fixed flex justify-center items-center z-50 inset-0 bg-chalkboardLight bg-opacity-50'>
      <div className='flex flex-col h-max-3/4 w-2/5 min-w-80 rounded-lg bg-chalkboard'>
        <div className='flex justify-between items-center border-b border-black p-4'>
          <h2 className='text-3xl text-white font-bold'>Note (Edit)</h2>
          <X className='text-red-500 hover:text-white cursor-pointer' onClick={() => { setOpenEditModal(false) }} />
        </div>
        <form className='flex flex-col text-xl justify-evenly py-4 grow' onSubmit={handleSubmit}>
          <div className='flex flex-col mb-4 px-4'>
            <label htmlFor='title' className='text-white'>Title</label>
            <input type='text' name='title' placeholder='Tile' className='rounded-md p-2 mt-2' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='flex flex-col mb-4 px-4'>
            <label htmlFor='description' className='text-white'>Description</label>
            <textarea name='description' placeholder='Take a note...' className='min-h-20 max-h-40 rounded-md p-2 mt-2' value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className='flex flex-col px-4 pb-4'>
            <label htmlFor='date' className='text-white'>Due Date</label>
            <input type='date' name='date' min={currentDate} className='rounded-md p-2 my-2' value={dueDate} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className='flex justify-end  border-t border-black px-4 py-4'>
            <button
              className='text-white bg-red-500 rounded-md px-6 py-2 mr-10 hover:bg-red-400'
              onClick={() => { setOpenEditModal(false) }}
            >
              Close
            </button>
            <button type='submit' className='text-white bg-yellow-900 rounded-md px-6 py-2 hover:bg-yellow-700'>Update Note</button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('root')
  );
}

export default EditNoteModal;