var onReady = function(){
  // state..
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');

  // creates new to-do..
  function createNewToDo() {
    var newToDoText = document.getElementById('newToDoText');
    // updates state..
    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';// clears the text input

    renderTheUI(toDos);// calls the renderTheUI function
  }
  // renders the UI..
  function renderTheUI(toDos) {
    var toDoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';// ?

    // applies function to each item in the array..
    toDos.forEach(function(toDo) {
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');

      checkbox.type = 'checkbox';// sets input type to checkbox
      
      newLi.innerHTML = toDo.title;// sets inner html(text) for new line

      toDoList.appendChild(newLi);// adds new line to list
      newLi.appendChild(checkbox);// adds checkbox to that line
    });
  }
  // listens for submit button press..
  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();// prevents default reload page action
    createNewToDo();// calls the createNewToDo function
    console.log(toDos);
  });

  renderTheUI(toDos);
};

// runs when the page is done loading..
window.onload = function() {
  onReady();
};
