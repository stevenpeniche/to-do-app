// ..
var onReady = function(){
  // selects the html elements..
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  //
  addToDoForm.addEventListener('submit', (event) => {
    // prevents default form behavior of reloading page..
    event.preventDefault();

    // get the text..
    let title = newToDoText.value;

    // create a new li..
    let newLi = document.createElement('li');

    // create a new input for the checkbox..
    let checkbox = document.createElement('input');

    // set the input's type to checkbox..
    checkbox.type = 'checkbox';

    // set the title..
    newLi.textContent = title;

    // attach it to the ul..
    toDoList.appendChild(newLi);

    // attach the checkbox to the li..
    newLi.appendChild(checkbox);

    // empty the input..
    newToDoText.value = '';
  });
};

// runs when the page is done loading..
window.onload = function() {
  onReady();
};
