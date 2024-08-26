import { backend } from '@/utils/backend';

export const useTasks = () => {
  const getTasks = async () => {
    try {
      const resp = await backend.get('/tasks/');
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      const resp = await backend.post('/tasks/', task);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const resp = await backend.get(`/tasks/${id}/`);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (task) => {
    try {
      const resp = await backend.patch(`/tasks/${task.id}/`, task);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const resp = await backend.delete(`/tasks/${id}/`);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };
  return { getTasks, createTask, getTask, updateTask, deleteTask };
};
