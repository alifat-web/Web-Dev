const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const showAllBtn = document.getElementById('show-all');
const showCompletedBtn = document.getElementById('show-completed');

showAllBtn.addEventListener('click', function () {
    const items = document.querySelectorAll('.todo-item');
    items.forEach(function (item) {
        item.style.display = 'flex';
    });
});

showCompletedBtn.addEventListener('click', function () {
    const items = document.querySelectorAll('.todo-item');
    items.forEach(function (item) {
        const checkbox = item.querySelector('input[type="checkbox"]');

        if (checkbox.checked) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === '') {
        return;
    }

    addTodoItem(taskText);
    input.value = '';
});

function addTodoItem(text) {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    const leftSection = document.createElement('div');
    leftSection.className = 'todo-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'todo-text';

    checkbox.addEventListener('change', function () {
        span.classList.toggle('done');
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<img src = "delete.png" width = "15">';
    deleteButton.className = 'delete-btn';

    deleteButton.addEventListener('click', function () {
        todoList.removeChild(listItem);
    });

    leftSection.appendChild(checkbox);
    leftSection.appendChild(span);

    listItem.appendChild(leftSection);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
}
