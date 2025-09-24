import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Ellipsis } from 'lucide-react';
import NoteOptions from './NoteOptions';

function Note({ note, setNotes }) {
  const nodeRef = useRef(null);
  const [noteColor, setNoteColor] = useState(note.color);
  const [openOptions, setOpenOptions] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const date = note.dueDate.split('-');

  // Get the note position
  const getSavedPosition = (noteId) => {
    const positions = JSON.parse(localStorage.getItem('notePositions')) || {};
    return positions[noteId] || { x: 0, y: 0 };
  };

  // Save the note position
  const savePosition = (noteId, x, y) => {
    const positions = JSON.parse(localStorage.getItem('notePositions')) || {};
    positions[noteId] = { x, y };
    localStorage.setItem('notePositions', JSON.stringify(positions));
  };

  return (
    <Draggable nodeRef={nodeRef} bounds={{ left: 0 }} disabled={openEditModal}
      defaultPosition={getSavedPosition(note._id)}
      onStop={(e, data) => savePosition(note._id, data.x, data.y)}
    >
      <div ref={nodeRef} className='relative w-full max-w-xs rounded-md mb-4'>
        <div className='flex flex-col bg-noteHeading rounded-t-md px-4 py-2'>
          <div className='flex flex-col justify-between'>
            <Ellipsis className='cursor-pointer ml-auto' onClick={() => { setOpenOptions(prev => !prev) }} />
            {openOptions &&
              <NoteOptions
                setNoteColor={setNoteColor}
                note={note}
                setNotes={setNotes}
                openEditModal={openEditModal}
                setOpenEditModal={setOpenEditModal}
              />}
          </div>
          <div className='mt-2'>
            {note.title ? <h2 className='w-full font-bold text-2xl break-words'>{note.title}</h2> :
              <h2 className='font-bold text-2xl'>No Title</h2>
            }
            <p className='text-lg'>Due: {note.dueDate ? `${date[1]}/${date[2]}/${date[0]}` : 'No date set'}</p>
          </div>
        </div>
        <div className='flex flex-col p-4 rounded-b-md' style={{ backgroundColor: noteColor }}>
          {note.description ? <p className='w-full text-xl break-words'>{note.description}</p> :
            <p className='text-xl'>No Description</p>
          }
        </div>
      </div>
    </Draggable>
  );
}

export default Note;