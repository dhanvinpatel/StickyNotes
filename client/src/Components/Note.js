import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Ellipsis } from 'lucide-react';
import OptionsModal from './NoteOptions';


function Note({ id, title, description, dueDate, handleNoteDelete }) {
  const nodeRef = useRef(null);
  const [noteColor, setNoteColor] = useState('#FFA41B');
  const [openOptions, setOpenOptions] = useState(false);
  const date = dueDate.split('-');

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className='w-full max-w-md rounded-md mb-4'>
        <div className='flex flex-col bg-white rounded-t-md p-4'>
          <div className='flex flex-col items-end'>
            <Ellipsis onClick={() => { setOpenOptions(prev => !prev) }} />
            {openOptions && <OptionsModal setNoteColor={setNoteColor} id={id} handleNoteDelete={handleNoteDelete} />}
          </div>
          <div>
            <h2 className='font-bold'>{title}</h2>
            <p>Due: {`${date[1]}/${date[2]}/${date[0]}`}</p>
          </div>
        </div>
        <div className='flex flex-col p-4 rounded-b-md resize' style={{ backgroundColor: noteColor }}>
          <p className='w-full break-words'>{description}</p>
        </div>
      </div>
    </Draggable>
  )
}

export default Note;