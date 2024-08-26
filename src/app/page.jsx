'use client';
import { useEffect, useState } from 'react';
import { useTasks } from './hooks/useTasks';
import TaskCard from './components/TaskCard';

const HomePage = () => {
  const { getTasks } = useTasks();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const resp = await getTasks();
    setTasks(resp);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <section className='container mx-auto'>
      {tasks && (
        <div className='grid grid-cols-3 gap-3 mt-10'>
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default HomePage;
