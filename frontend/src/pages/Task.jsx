import React from 'react';
import {useState} from 'react';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';



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
     <div className='Task'>
        <h2>Create a new Task</h2>
        <div>
            <div className='house-1'>
                <div className='inhouse-1'>
                    <input
                    className="input"
                    type='text'
                    placeholder='Give your task a title'
                    required
                    name='title'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <ul className='inhouse-2'>
                        <li className={active1} onClick={handleClick1}>Todo</li>
                        <li className={active2} onClick={handleClick2}>In_progress</li>
                        <li className={active3} onClick={handleClick3}>Done</li>
                    </ul>
                </div>
            </div>

            <div className=''>
                <div className='inhouse-3'>
                <input
                className="input"
                placeholder='Describe your task actions'
                type='text'
                name='description'
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                />
                </div>

                <div className='inhouse-4'>
                    <div>

                        <div>
                            <p className='due-date'>Set your due Date</p>
                            <HiOutlineCalendarDateRange className='HiOutlineCalendarDateRange' />
                        </div>                       
                        
                    </div>
                    <div className='dueDate'>
                        <input
                        className="input"
                        type='date'
                        name='due_date'
                        value={dueDate}
                        onChange={(e)=> setDueDate(e.target.value)}
                        />
                    </div>
                    
                </div>

                <div className='house-btn'>
                    <button className='btn-1'>Create</button>
                    <button className='btn-2'>Discard</button>
                </div>
            </div>
        </div>
     </div>
    )
}

export default Task