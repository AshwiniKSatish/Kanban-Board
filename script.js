document.addEventListener('DOMContentLoaded', function() {
    const todoColumn = document.getElementById('todo');
    const inProgressColumn = document.getElementById('inProgress');
    const doneColumn = document.getElementById('done');

    // Sample tasks
    const tasks = [
        { id: 1, title: 'Task 1', status: 'todo' },
        { id: 2, title: 'Task 2', status: 'inProgress' },
        { id: 3, title: 'Task 3', status: 'done' }
    ];

    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        if (task.status === 'todo') {
            todoColumn.appendChild(taskElement);
        } else if (task.status === 'inProgress') {
            inProgressColumn.appendChild(taskElement);
        } else {
            doneColumn.appendChild(taskElement);
        }
    });

    function createTaskElement(task) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.textContent = task.title;
        taskElement.setAttribute('data-id', task.id);

        taskElement.addEventListener('click', function() {
            moveTask(taskElement, task);
        });

        return taskElement;
    }

    function moveTask(taskElement, task) {
        if (task.status === 'todo') {
            todoColumn.removeChild(taskElement);
            task.status = 'inProgress';
            inProgressColumn.appendChild(taskElement);
        } else if (task.status === 'inProgress') {
            inProgressColumn.removeChild(taskElement);
            task.status = 'done';
            doneColumn.appendChild(taskElement);
        } else {
            doneColumn.removeChild(taskElement);
            task.status = 'todo';
            todoColumn.appendChild(taskElement);
        }
    }
});
