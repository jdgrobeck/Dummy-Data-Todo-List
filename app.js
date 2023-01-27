    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
       
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {

        for(let i = 0; i < arrayOfTodos.length; i++){

        // Find ol by id and put it in variable
        let todoList = document.getElementById('todo-list');
        
        // Create an element for a list item - li
        let todoItem = document.createElement('LI');

        //Create text element for the title
        let todoTitle = document.createTextNode(arrayOfTodos[i].title);

        //Put the list item in the ol
        todoItem.appendChild(todoTitle);
        todoList.appendChild(todoItem);
        }
    
    }

    const getByUser = () => {
        clearTodos();
    
        //need the value from html input (num-input)
        const numInput = document.getElementById('num-input').valueAsNumber
    
    
        // filter where userID = num-input
        
        // store the currently filtered todos in a variable
        //
    
        const filteredArray = arrayOfTodos.filter((arr) => arr.userId === numInput && arr.completed == false );
    
    
        // populate the LIs with the filtered list
        for(let i = 0; i < filteredArray.length; i++){
    
            // Find ol by id and put it in variable
            let todoList = document.getElementById('todo-list');
            
            // Create an element for a list item - li
            let todoItem = document.createElement('LI');
    
            //Create text element for the title
            let todoTitle = document.createTextNode("User: " +filteredArray[i].userId + " Title: " +filteredArray[i].title);
    
            //Put the list item in the ol
            todoItem.appendChild(todoTitle);
            todoList.appendChild(todoItem);
            }
    
    }

const getCompletedByUser = () => {
        clearTodos();
        fetchTodos();

        const numInput = document.getElementById('num-input').valueAsNumber

        const filteredArray = arrayOfTodos.filter((arr) => arr.userId === numInput && arr.completed == true);
        
        printList(filteredArray);

} 

const getIncompleteByUser = () => {
    clearTodos();
    fetchTodos();

    const numInput = document.getElementById('num-input').valueAsNumber
    
    const filteredArray = arrayOfTodos.filter((arr) => arr.userId == numInput & arr.completed == false);

    printList(filteredArray);
}

const clearTodos = () => {
    
    const todos = document.getElementsByTagName("OL")    
    // loops over the HTML Collection of LIs and clears out the todos
    for (i=0; i < todos.length; i++) {
      // sets the innerHTML to null to replace the todos
      todos[i].innerHTML = null;
    }  

}

const printList = (arr) => {
    for(let i = 0; i < arr.length; i++) {

        // Find the ol by ID and put it in a variable
        let todoList = document.getElementById('todo-list');
  
        // Create and element for a list item - li
        let todoItem = document.createElement('LI'); // <li></li>
  
        // create the text element for the title
        let todoTitle = document.createTextNode("User: " + arr[i].userId + " Title: " + arr[i].title + " Completed: " + arr[i].completed);
  
        // put the list item in the ol
        todoItem.appendChild(todoTitle); //<li>lorem ipsum</li>
        todoList.appendChild(todoItem);  // puts the li inside the ol
     }     
    
}




    //  DONE - Using the assignment from yesterday, create a branch called: " Todo-Filtering ".
    //  DONE - Fetch the same data.
    //  DONE - Store the data in a variable.


    // DONE - Add an input for the userID. This input should only take in a number from 1 - 10.
    // DONE - Add a button that when clicked will:

    // DONE - clear the previous todos from the view


    // DONE - and populate it with only todos with the userID that matches the number inputted.
    // DONE - then stores the currently filtered todos in a variable so that ...
    // You can create two more buttons that when clicked:
    
    // removes those todos from the view
    // and shows only todos that are either:
    // completed
    // not completed