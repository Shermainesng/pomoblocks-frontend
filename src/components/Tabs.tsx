"use client"
import React, {useState} from 'react';
import TaskList from './Tasks/TaskList';
import TimerScreen from './Timer/TimerScreen';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface ITabsProps {
}

export default function TabComponent (props: ITabsProps) {
    const [selectedTab, setSelectedTab] = useState<number>(0)
    const pathname = usePathname()

  return (
    <nav>
    <ul className=" tabs-lifted tabs-lg flex flex-row p-4">
      <li>
        <Link className={`tab rounded-xl text-white me-3 ${pathname === '/timer' ? 'active bg-custom' : 'bg-darkPurple'}`} href="/timer">
          Timer
        </Link>
      </li>
      <li>
        <Link
          className={`tab rounded-xl text-white me-3 ${pathname === '/tasks' ? 'active bg-custom' : 'bg-darkPurple'}`}
          href="/tasks"
        >
          Tasks
        </Link>
      </li>
    </ul>
  </nav>
    // <div className='flex-row w-50 flex-end'>

        /* <div role="tablist" className=" tabs-lifted tabs-lg flex flex-row justify-between p-4">
            <div>
              <button role="tab" className={`tab rounded-xl text-white me-3 ${selectedTab === 0 ? "bg-custom" : "bg-darkPurple"}`}  onClick={() =>{
                setSelectedTab(0)
                router.push('/timer')
              }}>TIMER</button>
              <button role="tab"  className={`tab rounded-xl text-white me-3 ${selectedTab === 1 ? "bg-custom" : "bg-darkPurple"}`}  onClick={()=>{
                setSelectedTab(1)
                router.push("/tasks")
                }}>PLANNER</button>
              <button role="tab"className={`tab rounded-xl text-white ${selectedTab === 2? "bg-custom" : "bg-darkPurple"}`}  onClick={()=>setSelectedTab(2)}>RESULT</button>
            </div>
            <button>Log Out</button>
        </div> */
    // </div>
  );
}
