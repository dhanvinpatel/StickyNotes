import { useEffect, useState } from 'react';
import axios from 'axios';
import { Plus } from 'lucide-react';
import NoteModal from './Components/NoteModal';

function App() {

  return (
    <div className="h-screen bg-chalkboard">
      <div className='h-screen border-8 border-solid border-yellow-900 rounded-lg'>
        <h1 className='text-3xl font-bold text-white w-fit mx-auto border-4 border-solid border-yellow-900 border-t-0 rounded-b-lg p-2'>Sticky Notes</h1>
        <button className='flex items-center gap-2 ml-5 mt-5 text-white font-semibold border-collapse bg-yellow-900 rounded-lg px-4 py-2 hover:bg-yellow-700'
          onClick={() => { setOpenModal(true) }}
        >
          <Plus size={20} />
          New Note
        </button>
      </div>
    </div>
  );
}

export default App;
