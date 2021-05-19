'use strict'

{
  const btn = document.getElementById('btn');
  let i = 0

  btn.addEventListener('click', () => {

    const elemNewTask = document.getElementById('newtask');
    const newTask = elemNewTask.value;
    
    const taskList = document.getElementById('tasklist');

    const task = document.createElement('tr');
    taskList.appendChild(task);

    const taskId = document.createElement('td');
    const taskComment = document.createElement('td');
    const taskStatus = document.createElement('button');
    const taskDelete = document.createElement('button');

    taskId.textContent = i++;
    taskComment.textContent = newTask;
    taskStatus.textContent = '作業中';
    taskDelete.textContent = '削除';

    taskList.appendChild(taskId);
    taskList.appendChild(taskComment);
    taskList.appendChild(taskStatus);
    taskList.appendChild(taskDelete);

    elemNewTask.value = '';
  });
}