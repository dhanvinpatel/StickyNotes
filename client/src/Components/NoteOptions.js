import { SquarePen } from 'lucide-react';
import { Trash2 } from 'lucide-react';

function NoteOptions({ setNoteColor, id, handleNoteDelete }) {
  const colorOptions = ['#FFA41B', '#5BBCFF', '#FF6D24', '#A376A2', '#D3DAD9', '#E8988A'];

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
        <Trash2 className='cursor-pointer ml-4' onClick={() => { handleNoteDelete(id) }} />
      </div>
    </div>
  )
}

export default NoteOptions;