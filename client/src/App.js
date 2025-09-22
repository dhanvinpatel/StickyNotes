import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import NoteModal from './Components/NoteModal';
import Note from './Components/Note';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteAdded, setNoteAdded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const allNotes = await axios.get('https://sticky-notes-backend-ashen.vercel.app/api/notes');
        setNotes(allNotes.data);
      } catch (error) {
        console.error('Error fetching notes: ', error);
      }
    }

    fetchNotes();
  }, [noteAdded]);

  const handleNoteDelete = async (id) => {
    try {
      await axios.delete(`https://sticky-notes-backend-ashen.vercel.app/api/notes/${id}`);
      setNotes((prev) => prev.filter(note => note._id !== id));
    } catch (error) {
      console.error('Failed to delete note: ', error);
    }
  }

  return (
    <div className='h-screen overflow-y-auto bg-chalkboard'>
      <div className='h-screen overflow-y-auto border-8 border-solid border-yellow-900 rounded-lg px-4 pb-4'>
        <h1 className='text-3xl font-bold text-white w-fit mx-auto border-4 border-solid border-yellow-900 border-t-0 rounded-b-lg p-2'>Sticky Notes</h1>
        <button className='flex items-center gap-2 ml-5 my-5 text-white font-semibold border-collapse bg-yellow-900 rounded-lg px-4 py-2 hover:bg-yellow-700'
          onClick={() => { setOpenModal(true) }}
        >
          <Plus size={20} />
          New Note
        </button>
        {openModal && <NoteModal setOpenModal={setOpenModal} setNoteAdded={setNoteAdded} />}
        {notes.map((note) => (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            description={note.description}
            dueDate={note.dueDate}
            handleNoteDelete={handleNoteDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
