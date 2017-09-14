var onReady = function(){
  var toDos = [];// "state"
  var addToDoForm = document.getElementById('addToDoForm');

  // creates new to-do..
  function createNewToDo() {
    var newToDoText = document.getElementById('newToDoText');
    // updates "state"..
    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';// clears the text input

    renderTheUI(toDos);// calls function to render the UI
  }

  // renders the UI..
  function renderTheUI(toDos) {
    var toDoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';// clears the toDoList var so it isn't repeated

    // applies a function to each item in the array..
    toDos.forEach((toDo) => {
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
      var deleteButton = document.createElement('button');

      checkbox.type = 'checkbox';// sets input type to checkbox
      deleteButton.type = 'button';

      newLi.innerHTML = toDo.title;// sets text for new line(to-do)
      deleteButton.innerHTML = 'Delete';// sets text on button

      toDoList.appendChild(newLi);// adds new line(to-do) to list
      newLi.appendChild(checkbox);// adds checkbox to that line
      newLi.appendChild(deleteButton);// adds delete button to that line

      // listens for delete button press..
      deleteButton.addEventListener('click', (event) => {
        event.preventDefault();// prevents default reload page action
        // deletes to-do..
        (function deleteToDo(){
          var list = toDos;
          toDoList.removeChild(newLi);
        })();
      });
    });
  }
  // listens for submit button press..
  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();// prevents default reload page action
    createNewToDo();// calls the createNewToDo function
  });
};

// runs when the page is done loading..
window.onload = function() {
  onReady();
};
