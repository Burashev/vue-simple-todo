export default {
  getTasks() {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  },
  setTasks(task) {
    localStorage.setItem('tasks', JSON.stringify(task));
  },
};
