var onReady = function(){
  // state..
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');

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
    toDos.forEach(function(todo) {
      var newLi = document.createElement('li');// creates new line variable
      var checkbox = document.createElement('input');// creates input variable
      checkbox.type = 'checkbox';// sets input type to checkbox

      newLi.innerHTML = toDo.title;// sets value of inner html for new line

      toDoList.appendChild(newLi);// new line
      newLi.appendChild(checkbox);// adds checkbox to that line
    });
  }
  // listens for submit button press..
  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();// prevents default reload page action
    createNewToDo();// calls the createNewToDo function
  });

  renderTheUI(todos);
};

// runs when the page is done loading..
window.onload = function() {
  onReady();
};
