import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddTaskForm from '../components/AddTaskForm';
import TaskCard from '../components/TaskCard';
import TaskDoneSection from '../components/TaskDoneSection';
import ProfileSection from '../components/ProfileSection';
import CountTasks from '../components/CountTasks';

const Task = () => {
  
  const [tasks, setTasks] = useState([
    { id: 1, name: 'belajar javascript' },
    { id: 2, name: 'belajar javascript lagi' },
    { id: 3, name: 'belajar lagi javascript' }
  ]);

  const [doneTasks, setDoneTasks] = useState([
    { id: 101, name: 'belajar doang javascript' },
    { id: 102, name: 'belajar dong' },
  ]);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: localStorage.getItem('userName') || 'User',
    avatar: localStorage.getItem('userAvatar') || '',
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setUser({
        name: localStorage.getItem('userName') || 'User',
        avatar: localStorage.getItem('userAvatar') || '',
      });
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleAddTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName };
    setTasks([...tasks, newTask]);
  };

  const handleDoneTask = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setDoneTasks([...doneTasks, task]);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditProfile = () => {
    navigate('/update-profile');
  };

  const handleSignOut = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userAvatar'); 
    navigate('/login');
  };

  return (
    <div className="flex space-x-4 p-6 bg-gray-900 min-h-screen">
      <div className="w-1/4 bg-gray-800 p-4 rounded-lg flex justify-center items-center">
        <ProfileSection user={user} onEditProfile={handleEditProfile} onSignOut={handleSignOut} />
      </div>
      <div className="w-3/4 bg-gray-800 p-4 rounded-lg">
        <AddTaskForm onAddTask={handleAddTask} />

        <div className="mt-10">
          <CountTasks count={tasks.length} />
        </div>

        <div className="space-y-4 mt-8">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDone={handleDoneTask}
                onDelete={handleDeleteTask}
              />
            ))
          ) : (
            <p className="text-gray-400">No tasks to do.</p>
          )}
        </div>

       {}
        {doneTasks.length > 0 && (
          <div className="mt-10">
            <TaskDoneSection tasks={doneTasks} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;