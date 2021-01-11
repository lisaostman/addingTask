

// -------------- for terminal 
const TaskManager = require('./js/taskManager.js');
const assert = require('assert');

console.log(TaskManager);
// Create a test suite (group) called Math
describe("TaskManager", () => {
  // Test One: A string explanation of what we're testing
  // also an older function! How do we convert it to ES6 fat arrow notation?
  it("should add a task", function () {
    const taskManager = new TaskManager(0);
    let len = taskManager.tasks.length;
    taskManager.addTask("name", "description", "assignedTo", "dueDate")
    if (len < taskManager.tasks.length) {
      assert.ok(taskManager.tasks[0].assignedTo,'assignedTo');
    }
  })
  
})


