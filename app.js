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
        // .then(() => populateTodos())
        // .then ( () => logTodos())
        // .then(() => populateTodos2())
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

    const clearTodos = () => {
        const todos = document.getElementsByTagName("OL");
    
  

         // loops over the HTML Collection of TDs and clears out the Xs and Os
        for (let i=0; i < todos.length; i++) {

        // will log out the id of each square as it loops over them.
        console.log(todos[i].id)

        // sets the innerHTML to null to replace the "X" or "O"
        todos[i].innerHTML=null;
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