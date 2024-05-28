document.addEventListener('DOMContentLoaded', () => {
    // Selecting elements from the DOM
    const taskTitle = document.getElementById('taskTitle');
    const taskDescription = document.getElementById('taskDescription');
    const taskDueDate = document.getElementById('taskDueDate');
    const taskCategory = document.getElementById('taskCategory'); // Added task category
    const taskPriority = document.getElementById('taskPriority'); // Added task priority
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const sortTasks = document.getElementById('sortTasks');
    const filterTitle = document.getElementById('filterTitle');
    const filterDueDate = document.getElementById('filterDueDate');
    const filterCategory = document.getElementById('filterCategory'); // Added filter category
    const filterPriority = document.getElementById('filterPriority'); // Added filter priority
  
    // Adding event listener for adding tasks
    addTaskButton.addEventListener('click', (e) => {
      e.preventDefault();
      const title = taskTitle.value.trim();
      const description = taskDescription.value.trim();
      const dueDate = taskDueDate.value;
      const category = taskCategory.value; // Get category value
      const priority = taskPriority.value; // Get priority value
  
      if (!title || !description || !dueDate || !category || !priority) {
        alert('Please fill in all fields!');
        return;
      }
  
      const id = new Date().getTime().toString();
      addTask(id, title, description, dueDate, category, priority);
      saveTasks();
      clearInputs();
      filterAndSortTasks();
    });
  
    // Adding event listeners for filters
    filterTitle.addEventListener('input', filterAndSortTasks);
    filterDueDate.addEventListener('change', filterAndSortTasks);
    filterCategory.addEventListener('change', filterAndSortTasks); // Added event listener for category filter
    filterPriority.addEventListener('change', filterAndSortTasks); // Added event listener for priority filter
    sortTasks.addEventListener('change', filterAndSortTasks);
  
    // Function to add task to the DOM
    function addTask(id, title, description, dueDate, category, priority) {
      const taskItem = document.createElement('div');
      taskItem.classList.add('taskItem', 'list-group-item');
      taskItem.setAttribute('data-id', id);
      taskItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <small>Due: ${dueDate}</small>
        <small>Category: ${category}</small> <!-- Display category -->
        <small>Priority: ${priority}</small> <!-- Display priority -->
      `;
      taskList.appendChild(taskItem);
    }
  
    // Function to save tasks to local storage
    function saveTasks() {
      const tasks = [];
      document.querySelectorAll('.taskItem').forEach(taskItem => {
        tasks.push({
          id: taskItem.getAttribute('data-id'),
          title: taskItem.querySelector('h3').innerText,
          description: taskItem.querySelector('p').innerText,
          dueDate: taskItem.querySelector('small:nth-of-type(1)').innerText.replace("Due: ", ''),
          category: taskItem.querySelector('small:nth-of-type(2)').innerText.replace("Category: ", ''), // Save category
          priority: taskItem.querySelector('small:nth-of-type(3)').innerText.replace("Priority: ", '') // Save priority
        });
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Function to load tasks from local storage
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach(task => {
        addTask(task.id, task.title, task.description, task.dueDate, task.category, task.priority);
      });
    }
  
    // Call the loadTasks function to load tasks when the page is loaded
    loadTasks();
  });