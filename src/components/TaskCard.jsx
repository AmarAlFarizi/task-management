import React from 'react';
import logo from '../assets/checklist.svg';
const TaskCard = ({ task, onDone, onDelete }) => (
  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
    <span className="text-white">{task.name}</span>
    <div className="flex space-x-2">
      <button onClick={() => onDone(task.id)} className="text-green-400 hover:text-green-600">
      <img src={logo} alt="done" className="w-8 h-8 " /> 
      </button>
      <button onClick={() => onDelete(task.id)} className="text-green-400 hover:text-green-600">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
          <path d="M20.5001 6H3.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
          <path d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
          <path d="M9.5 11L10 16" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
          <path d="M14.5 11L14 16" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
        </svg>
</button>
    </div>
  </div>
);

export default TaskCard;
