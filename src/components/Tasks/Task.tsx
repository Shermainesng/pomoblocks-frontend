"use client"

import React, {useEffect, useState} from 'react';
import { Block, Task as TaskType} from '../../type';
import { IoMdAddCircleOutline } from "react-icons/io";
import twentyfive from '../../../public/images/clock-25.png'
import fifty from '../../../public/images/clock-50.png'
import Image from 'next/image'

type TaskProps = {
    task: TaskType
    addBlockToTask: (taskId: string, taskDuration: number)=>void
}

export default function Task ({task, addBlockToTask}: TaskProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [workBlocks, setWorkBlocks] = useState<Block[]>(task.blocks || [])


  useEffect(() => {
    setWorkBlocks(task.blocks || []);
  }, [task.blocks]);

  return (
    <div className='flex flex-col pb-4'>
        <p className='self-end'>Add Block</p>
        <div className='border-4 border-white p-2 mb-3 bg-brightOrange rounded-lg text-white flex flex-row justify-between items-center'>
            <h1>{task.title}</h1>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn bg-white border-none text-4xl text-darkPurple" onClick={()=>setShowDropdown((prev)=>!prev)}>
                <IoMdAddCircleOutline/>
              </div>
              {showDropdown && (
               <ul tabIndex={-1} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                <li><button onClick={()=>addBlockToTask(task.id, 25)}>25 minutes</button></li>
                <li><button onClick={()=> addBlockToTask(task.id, 50)}>50 minutes</button></li>
             </ul>
              )}
            </div>
        </div>

        <div className='flex flex-row'>
        {workBlocks.length > 0 && workBlocks.map((block) => (
          <div key={block.id}>
              {block.duration===25? 
                 <Image
                src={twentyfive}
                 width={50}
                 height={50}
                 alt="25 minutes session"
               />:
               <Image
                 src={fifty}
                 width={50}
                 height={50}
                 alt="50 minutes session"
                 />
              }
            </div>
        ))}
        </div>
    </div>
  );
}
