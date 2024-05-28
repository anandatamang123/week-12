# week-12
# Task Management Application

A simple task management app that lets users add, filter, sort, and save tasks with a title, description, due date, category, and priority.

## Features

- **Add Tasks**: Include title, description, due date, category, and priority.
- **Filter Tasks**: By title, due date, category, and priority.
- **Sort Tasks**: Various sorting criteria.
- **Persistent Storage**: Tasks are saved in local storage.

## Getting Started

### Installation

1. Clone the repository or download the ZIP file.
2. Open `index.html` in your web browser.

### Usage

1. **Add a Task**:
   - Fill in the task details and click "Add Task".

2. **Filter and Sort Tasks**:
   - Use the filter fields and sort dropdown to manage the task list.

### Code Overview

- **Event Listeners**:
  - `DOMContentLoaded`: Load tasks from local storage.
  - `addTaskButton`: Add a new task.
  - `filterTitle`, `filterDueDate`, `filterCategory`, `filterPriority`, `sortTasks`: Filter and sort tasks.

- **Functions**:
  - `addTask`: Adds a task to the DOM.
  - `saveTasks`: Saves tasks to local storage.
  - `loadTasks`: Loads tasks from local storage.
  - `filterAndSortTasks`: Filters and sorts the task list.

#### Example Task Form

```html
<form id="taskForm">
  <input type="text" id="taskTitle" placeholder="Task Title">
  <input type="text" id="taskDescription" placeholder="Task Description">
  <input type="date" id="taskDueDate">
  <input type="text" id="taskCategory" placeholder="Task Category">
  <select id="taskPriority">
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
  </select>
  <button id="addTaskButton">Add Task</button>
</form>
