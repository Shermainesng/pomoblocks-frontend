"use client"
import * as React from 'react';
import TimerScreen from 'src/components/Timer/TimerScreen';

export interface ITabsProps {
}

export default function Timer (props: ITabsProps) {
  return (
    <div className='bg-teal-700'>
        <TimerScreen/>
     </div>
  );
}
