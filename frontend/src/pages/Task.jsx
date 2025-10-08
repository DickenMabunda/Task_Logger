import React from 'react';
import { useState } from 'react';

function Task() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div>
        <form>
            <div>
                <div>
                    <label className='label' htmlFor='title'>Task Title:</label>
                    <input
                    type='text'
                    name='title'
                    value={title}
                    onChange={e=> setTitle(e.eventPhase.target)}
                    
                    />
                </div>

                <div>
                    <label htmlFor='description' className='label'>Description:</label>
                    <input
                    type='text'
                    name='description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                </div>

                <div>

                    <button className='btn-1'>Todo</button>

                    <button className='btn-2'>In_progress</button>
                    
                    <button className='btn-3'>Done</button>

                </div>
            
            </div>
        </form>
    </div>
  )
}

export default Task