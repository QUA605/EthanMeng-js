(function () {
  const form = document.querySelector('form')
  const displayArea = document.querySelector('ul')

  const toDoList = JSON.parse(localStorage.getItem('toDoList')) || []

  function displayToDoList() {
    toDoList.forEach(task => displayTask(task))
  }

  function displayTask(input) {
    displayArea.innerHTML += `
      <li>${input}<span>X</span></li>
    `
  }

  function updateLocalStorage() {
    //store the list back to localStorage
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
    
  }

  //display all the task on the list from localStorage
  displayToDoList()

  //add event listener to form
  form.addEventListener('submit', event => {
    //prevent auto send the form
    event.preventDefault()
    //get input value
    const input = document.querySelector('input[type="text"]')
    //add new task to the list
    displayTask(input.value)
    //add new task to the list
    toDoList.push(input.value)
    //add the task to localStorage
    updateLocalStorage(input.value)
    //clear up the input
    input.value = ''
  })

  displayArea.addEventListener('click', event => {
    if (event.target.tagName !== 'SPAN') { return }
    const li = event.target.parentElement
    li.remove()
    toDoList.splice(toDoList.indexOf(li.textContent.slice(0, -1)), 1)
    updateLocalStorage()
  })

})()
