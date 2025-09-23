import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Ellipsis } from 'lucide-react';
import NoteOptions from './NoteOptions';

function Note({ note, setNotes }) {
  const nodeRef = useRef(null);
  const [noteColor, setNoteColor] = useState('#FFA41B');
  const [openOptions, setOpenOptions] = useState(false);
  const date = note.dueDate.split('-');

  return (
    <Draggable nodeRef={nodeRef} bounds={{ left: 0 }}>
      <div ref={nodeRef} className='w-full max-w-xs rounded-md mb-4'>
        <div className='flex flex-col bg-noteHeading rounded-t-md px-4 py-1'>
          <div className='flex flex-col items-end'>
            <Ellipsis className='cursor-pointer' onClick={() => { setOpenOptions(prev => !prev) }} />
            {openOptions && <NoteOptions setNoteColor={setNoteColor} noteId={note._id} setNotes={setNotes} />}
          </div>
          <div>
            {note.title ? <h2 className='font-bold text-2xl'>{note.title}</h2> :
              <h2 className='font-bold text-2xl'>No Title</h2>
            }
            <p className='text-lg'>Due: {note.dueDate ? `${date[1]}/${date[2]}/${date[0]}` : 'No date set'}</p>
          </div>
        </div>
        <div className='flex flex-col p-4 rounded-b-md resize' style={{ backgroundColor: noteColor }}>
          {note.description ? <p className='w-full text-xl break-words'>{note.description}</p> :
            <p className='text-xl'>No Description</p>
          }
        </div>
      </div>
    </Draggable>
  );
}

export default Note;