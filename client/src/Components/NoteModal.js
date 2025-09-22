import { X } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

function NoteModal({ mode, setOpenModal, setNoteAdded }) {
  const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  // Handle creating notes
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newNote = {
      title: title,
      description: description,
      dueDate: date
    };

    try {
      await axios.post('https://sticky-notes-backend-ashen.vercel.app/api/notes', newNote);
      setOpenModal(false);
      setNoteAdded(true);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  }

  return (
    <div className='h-screen w-screen fixed flex justify-center items-center z-10 inset-0 bg-chalkboardLight bg-opacity-50'>
      <div className='flex flex-col h-max-3/4 w-2/5 min-w-80 rounded-lg bg-chalkboard'>
        <div className='flex justify-between items-center border-b border-black p-4'>
          <h2 className='text-3xl text-white font-bold'>Note</h2>
          <X className='text-red-500 hover:text-white cursor-pointer' onClick={() => { setOpenModal(false) }} />
        </div>
        <form className='flex flex-col justify-evenly py-4 grow' onSubmit={handleSubmit}>
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
            <input type='date' name='date' min={currentDate} className='rounded-md p-2 my-2' value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className='flex justify-end  border-t border-black px-4 py-4'>
            <button
              className='text-white bg-red-500 rounded-md px-6 py-2 mr-10 hover:bg-red-400'
              onClick={() => { setOpenModal(false) }}
            >
              Close
            </button>
            <button type='submit' className='text-white bg-yellow-900 rounded-md px-6 py-2 hover:bg-yellow-700'>Create Note</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NoteModal;