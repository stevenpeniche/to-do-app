var onReady = function(){
  // selects the html elements..
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  // listens for submit press..
  addToDoForm.addEventListener('submit', (event) => {
    // prevents default form behavior of reloading page..
    event.preventDefault();

    // get the text..
    let title = newToDoText.value;

    // create a new li..
    let newLi = document.createElement('li');

        // set the title..
        newLi.textContent = title;

    // create a new input for the checkbox..
    let checkbox = document.createElement('input');

        // set the input's type to checkbox..
        checkbox.type = 'checkbox';

    // create a new input for the delete button..
    let deleteButton = document.createElement('button');

        // set the button's type to submit..
        deleteButton.type = 'button';

        // set the text on the button..
        deleteButton.textContent = 'Delete';

        // listens for delete press..
        deleteButton.addEventListener('click', (event) => {
          toDoList.removeChild(newLi);
        });

    // attach it to the ul..
    toDoList.appendChild(newLi);

    // attach the checkbox to the li..
    newLi.appendChild(checkbox);

    // attach a delete button to the li..
    newLi.appendChild(deleteButton);

    // empty the input..
    newToDoText.value = '';
  });
};

// runs when the page is done loading..
window.onload = function() {
  onReady();
};
