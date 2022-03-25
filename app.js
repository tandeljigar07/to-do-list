const addTastBtn = document.getElementById('add-task-btn');
const taskInputElement = document.getElementById('task-input');

let taskNum = 0;
let arr = []; 

function addnum() {     
  taskNum++;
  arr.push(taskNum);
  
  return arr[arr.length - 1];
}

function createNewTask() {
  const taskInput = taskInputElement.value;
  const taskListElement = document.getElementById('tasklists');
  let newListElement;
  
  if (taskInput) {
    // console.log(taskInput);
    //creating your list element;
    newListElement = document.createElement('li');
    newListElement.classList.add('task');
    newListElement.classList.add('task-' + addnum());
    const newDoneElement = document.createElement('div');
    newDoneElement.classList.add('done');
    newDoneElement.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    const newParagraphElement = document.createElement('p');
    newParagraphElement.textContent = taskInput;
    const newDeleteElement = document.createElement('button');
    newDeleteElement.textContent = 'X'
    newDeleteElement.classList.add('delete')
    newListElement.appendChild(newDoneElement);
    newListElement.appendChild(newParagraphElement);
    newListElement.appendChild(newDeleteElement);
    
    // add task to the task list
    taskListElement.appendChild(newListElement);
    taskInputElement.value = "";

  } else {
    alert('Kindly write something');
  }

  if (newListElement) {
    newListElement.addEventListener('click', function(event) {
      event.target.parentNode.remove();
      arr.pop();
      taskNum--;
    })
  }
}

addTastBtn.addEventListener('click', createNewTask);
document.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    createNewTask();
  }
})