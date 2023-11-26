import Header from './Components/Header'
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import { useState } from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'Feb 5th at 2:30 pm',
                reminder: true,
            }, { 
                id: 2,
                text: 'Meeting at School',
                day: 'Feb 6th at 4:00 pm',
                reminder: true,
            }, {
                id: 3,
                text: 'Visiting',
                day: 'Mar 6th at 1:30 pm',
                reminder: false,
            }
        ]
  );

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask ])
  }
  
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleRem = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title={'Task Manager'} onAdd={() => setShowAddTask(!showAddTask) } showAdd={showAddTask} />
     {showAddTask && <AddTask onAdd={ addTask } />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={ toggleRem } /> : "No Task!"}
    </div>
  )
}

export default App;
