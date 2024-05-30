import React, {useState} from 'react';
import TaskList from './Tasks/TaskList';
import TimerScreen from './Timer/TimerScreen';

export interface ITabsProps {
}

export default function Tabs (props: ITabsProps) {
    const [selectedTab, setSelectedTab] = useState<number>(1)


  return (
    <div className='flex-row w-50 flex-end'>
       
        <div role="tablist" className=" tabs-lifted tabs-lg flex flex-row justify-between p-4">
            <div>
              <button role="tab" className={`tab rounded-xl text-white me-3 ${selectedTab === 0 ? "bg-custom" : "bg-darkPurple"}`}  onClick={()=>setSelectedTab(0)}>TIMER</button>
              <button role="tab"  className={`tab rounded-xl text-white me-3 ${selectedTab === 1 ? "bg-custom" : "bg-darkPurple"}`}  onClick={()=>setSelectedTab(1)}>PLANNER</button>
              <button role="tab"className={`tab rounded-xl text-white ${selectedTab === 2? "bg-custom" : "bg-darkPurple"}`}  onClick={()=>setSelectedTab(2)}>RESULT</button>
            </div>
            <button>Log Out</button>
        </div>
        {selectedTab === 0 && <TimerScreen/>}
        {selectedTab === 1 &&  <TaskList/> }
    </div>
  );
}
