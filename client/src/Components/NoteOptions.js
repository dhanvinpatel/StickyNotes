import { SquarePen } from 'lucide-react';
import { Trash2 } from 'lucide-react';

function NoteOptions({ setNoteColor, id, handleNoteDelete }) {
  const colorOptions = ['#FFA41B', '#00A8CC', '#FF6D24', '#A64D79', '#713045'];

  return (
    <div className='flex flex-col'>
      <div className='flex justify-end my-2'>
        {colorOptions.map((color, index) => (
          <div
            key={index}
            className='w-6 h-6 rounded-full ml-1'
            style={{ backgroundColor: color }}
            onClick={() => { setNoteColor(color) }}
          ></div>
        ))}
      </div>
      <div className='flex justify-end'>
        <SquarePen />
        <Trash2 className='ml-4' onClick={() => { handleNoteDelete(id) }} />
      </div>
    </div>
  )
}

export default NoteOptions;