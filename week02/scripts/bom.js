const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // you need to fill in the blank to reference the HTML element that is a unordered list element.
const li = document.createElement('li');
const deleteButton = document.createElement('button');

deleteButton.textContent = '❌';
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        list.appendChild(li);
        li.textContent = input.value;
        li.append(deleteButton);
        input.value = ''
    } else {
        input.focus()
    }
})

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
    input.value = ''
})