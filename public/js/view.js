document.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM loaded!');

  const form = document.getElementById('todo-form')
  const newTodoInput = document.querySelector('input.new-item')


form.addEventListener('submit', e => {
  e.preventDefault()
  const todoText = newTodoInput.value
  fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({text})
  }).then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err))

})
  // your code here...

  
});