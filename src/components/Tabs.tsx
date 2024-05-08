import React, {useState} from 'react';
import TaskList from './Tasks/TaskList';

export interface ITabsProps {
}

export default function Tabs (props: ITabsProps) {
    const [selectedTab, setSelectedTab] = useState<number>(1)


  return (
    <div className='flex-row w-50'>
        <div role="tablist" className=" tabs-lifted tabs-lg">
            <button role="tab" className={`tab text-white ${selectedTab === 0 ? "bg-custom" : "bg-darkPurple"}`}  onClick={()=>setSelectedTab(0)}>TIMER</button>
            <button role="tab"  className={`tab text-white ${selectedTab === 1 ? "bg-custom" : "bg-darkPurple"}`}  onClick={()=>setSelectedTab(1)}>PLANNER</button>
            <button role="tab"className={`tab text-white ${selectedTab === 2? "bg-custom" : "bg-darkPurple"}`}  onClick={()=>setSelectedTab(2)}>RESULT</button>
        </div>
        {selectedTab === 1 &&  <TaskList/> }
    </div>
  );
}
