"use client"
import * as React from 'react';
import TaskList from 'src/components/Tasks/TaskList';

export interface ITabsProps {
}

export default function Task (props: ITabsProps) {
  return (
      <TaskList/>
  );
}
