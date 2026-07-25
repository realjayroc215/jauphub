export class OfficeAgent {
  tasks: Array<{ task: string; status: string }> = [];

  addTask(task: string) {
    this.tasks.push({ task, status: 'pending' });
  }

  runTasks() {
    this.tasks = this.tasks.map((task) => ({
      ...task,
      status: 'completed',
    }));
  }

  getTasks() {
    return this.tasks;
  }
}
