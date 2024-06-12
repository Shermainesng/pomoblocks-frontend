import * as React from 'react';
import TaskList from 'src/components/Tasks/TaskList';
import { getTasks } from 'src/lib/apis/TaskApi';



export default async function Task () {
  const tasks = await getTasks();
  console.log("tasks", tasks);
  return (
      <div>
        Task page
        <TaskList/>
      </div>
  );
}
