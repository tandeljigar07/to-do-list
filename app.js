const addTastBtn = document.getElementById('add-task-btn');
const taskInputElement = document.getElementById('task-input');

function createNewTask() {
  const taskInput = taskInputElement.value;
  const taskListElement = document.getElementById('tasklists');
  if (taskInput) {
    console.log(taskInput);
    //creating your list element;
    const newListElement = document.createElement('li');
    newListElement.classList.add('task');
    const newDoneElement = document.createElement('div');
    newDoneElement.classList.add('done');
    newDoneElement.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    const newParagraphElement = document.createElement('p');
    newParagraphElement.textContent = taskInput;
    const newDeleteElement = document.createElement('div');
    newDeleteElement.classList.add('icon')
    newDeleteElement.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'
    newListElement.appendChild(newDoneElement);
    newListElement.appendChild(newParagraphElement);
    newListElement.appendChild(newDeleteElement);
    
    // add task to the task list
    taskListElement.appendChild(newListElement);
    taskInputElement.value = "";
  } else {
    alert('Kindly write something');
  }
}

addTastBtn.addEventListener('click', createNewTask)
