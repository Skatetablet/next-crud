'use client';
import { useEffect, useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import { useRouter } from 'next/navigation';

const NewPage = ({ params }) => {
  const initialState = { title: '', description: '', done: false };
  const [task, setTask] = useState(initialState);
  const { createTask, getTask, updateTask, deleteTask } = useTasks();
  const router = useRouter();

  const getSingleTask = async (id) => {
    const resp = await getTask(id);

    setTask({
      title: resp.title,
      description: resp.description,
      done: resp.done,
    });
  };

  useEffect(() => {
    if (params.id) {
      getSingleTask(params.id);
    }
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      await updateTask({ ...task, id: params.id });
      console.log(params.id);
    } else {
      await createTask(task);
    }

    router.push('/');
  };

  const deletingTask = (id) => {
    deleteTask(id);
    router.push('/');
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <form className='bg-slate-700 p-10 w-3/4' onSubmit={handleSubmit}>
        <label htmlFor='title' className='font-bold text-md'>
          Task Title
        </label>
        <input
          id='title'
          type='text'
          className='border border-gray-400 p-2 mb-4 w-full text-black'
          placeholder='Title'
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <label htmlFor='descripton' className='font-bold text-md'>
          Task Description
        </label>
        <textarea
          id='description'
          rows={3}
          placeholder='Description'
          className='border border-gray-400 p-2 mb-4 w-full text-black
          '
          value={task.description}
          onChange={(e) =>
            setTask({ ...task, description: e.target.value })
          }></textarea>
        <div className='flex justify-between'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onChange={(e) => setTask({ title: e.target.value })}>
            {params.id ? 'Update task' : 'Create Task'}
          </button>
          {params.id && (
            <button
              type='button'
              onClick={() => deletingTask(params.id)}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewPage;
