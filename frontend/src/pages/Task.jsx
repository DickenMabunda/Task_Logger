import React from 'react';
import {useState} from 'react';
import { FaCheckCircle, FaHourglassHalf, FaClipboardList } from 'react-icons/fa';


const Task = () => {
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('')
    const [status, setStatus] = useState('')

    return (
     <div>
        <h2>Create a new Task</h2>
        <div>
            <div>
                <div><p>title</p></div>
                <div>
                    <ul>
                        <li onClick={(e)=> setStatus('todo')}>Todo</li>
                        <li onClick={(e)=> setStatus('in_progress')}>In_progress</li>
                        <li onClick={(e)=> setStatus('Done')}>Done</li>
                    </ul>
                </div>
            </div>

            <div>
                <div>
                <p><FaCheckCircle />Description</p>
                <input
                type='text'
                name='description'
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                />
                </div>

                <div>
                    <p>Due Date <FaHourglassHalf /></p>
                    <input
                    type='date'
                    name='due_date'
                    value={dueDate}
                    onChange={(e)=> setDueDate(e.target.value)}
                    />
                </div>

                <div>
                    <button className='btn-1'>Create</button>
                    <button className='btn-2'>Discord</button>
                </div>
            </div>
        </div>
     </div>
    )
}

export default Task