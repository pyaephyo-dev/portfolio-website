// Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const tasksContainer = document.getElementById('tasks');
const taskCount = document.getElementById('taskCount');
const clearAllBtn = document.getElementById('clearAll');

// State
let tasks = []; // will hold objects: { id: number, text: string }
let nextId = 1;

function renderTasks() {
  // clear container
  tasksContainer.innerHTML = '';

  // render each task
  tasks.forEach(task => {
    const item = document.createElement('div');
    item.className = 'task';
    item.dataset.id = task.id;

    // text
    const text = document.createElement('div');
    text.className = 'text';
    text.textContent = task.text;

    // delete button
    const del = document.createElement('button');
    del.className = 'delete';
    del.textContent = 'Delete';
    del.addEventListener('click', () => {
      deleteTask(task.id);
    });

    item.appendChild(text);
    item.appendChild(del);

    tasksContainer.appendChild(item);
  });

  // update count
  taskCount.textContent = `${tasks.length} task${tasks.length !== 1 ? 's' : ''}`;
}


function addTask(text) {
  const trimmed = text.trim();
  if (!trimmed) return; // ignore empty

  tasks.push({ id: nextId++, text: trimmed });
  taskInput.value = '';
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

function clearAllTasks() {
  tasks = [];
  renderTasks();
}



// click add
addBtn.addEventListener('click', () => addTask(taskInput.value));

// enter key in input
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask(taskInput.value);
});

// clear all
clearAllBtn.addEventListener('click', clearAllTasks);


// load saved tasks
(function loadSaved(){
  const saved = localStorage.getItem('todo-tasks');
  const savedId = localStorage.getItem('todo-nextId');
  if (saved) {
    try {
      tasks = JSON.parse(saved);
      nextId = savedId ? Number(savedId) : (tasks.length ? (Math.max(...tasks.map(t=>t.id))+1) : 1);
      renderTasks();
    } catch(e) { console.warn('invalid saved tasks'); }
  }
})();

// save after each render
function saveTasks(){
  localStorage.setItem('todo-tasks', JSON.stringify(tasks));
  localStorage.setItem('todo-nextId', String(nextId));
}

// modify renderTasks to call saveTasks at the end
// just add saveTasks(); as the last line of renderTasks()
