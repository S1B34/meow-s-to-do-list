// JavaScript to handle the To-Do List functionality and disperse effect
document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.getElementById('add-task-button');
  const taskInput = document.getElementById('task-input');
  const todoList = document.getElementById('todo-list');

  addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      listItem.classList.add('task');
      todoList.appendChild(listItem);

      // Reset input field after adding task
      taskInput.value = '';

      // Add click event to trigger dispersal
      listItem.addEventListener('click', () => {
        // Apply disperse animation
        listItem.classList.add('disperse');
        
        // Remove the task after animation ends
        listItem.addEventListener('animationend', () => {
          listItem.remove();
        });
      });
    }
  });
});
