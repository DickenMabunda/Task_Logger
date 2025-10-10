import React from 'react';
import {useState} from 'react';
import { FaCheckCircle, FaHourglassHalf, FaClipboardList } from 'react-icons/fa';


const Task = () => {
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('');
    const [title, setTitle] = useState('');
    const [active1, setActive1]= useState('inactive');
    const [active2, setActive2]= useState('inactive');
    const [active3, setActive3]= useState('inactive');

    const handleClick1 = (e)=> {
        console.log(e.target)
        if (active1 == 'inactive') {
            setActive1('active')
            setActive2('inactive')
            setActive3('inactive')
        }
        else {
            setActive1('inactive')
        }
    }

    const handleClick2 = (e)=> {
        console.log(e.target)
        if (active2 == 'inactive') {
            setActive2('active')
            setActive1('inactive')
            setActive3('inactive')
        }
        else {
            setActive2('inactive')
        }
    }

    const handleClick3 = (e)=> {
        console.log(e.target)
        if (active3 == 'inactive') {
            setActive3("active")
            setActive1('inactive')
            setActive2('inactive')
        }
        else {
            setActive3('inactive')
        }
    }


    return (
     <div>
        <h2>Create a new Task</h2>
        <div>
            <div>
                <div
                    ><p>title</p>
                    <input
                    className="input"
                    type='text'
                    name='title'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <ul>
                        <li className={active1} onClick={handleClick1}>Todo</li>
                        <li className={active2} onClick={handleClick2}>In_progress</li>
                        <li className={active3} onClick={handleClick3}>Done</li>
                    </ul>
                </div>
            </div>

            <div>
                <div>
                <p><FaCheckCircle />Description</p>
                <input
                className="input"
                type='text'
                name='description'
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                />
                </div>

                <div>
                    <p>Due Date <FaHourglassHalf /></p>
                    <input
                    className="input"
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