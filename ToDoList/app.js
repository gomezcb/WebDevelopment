// to do list javaScript Application 

alert("Welome to Carlos' To Do application!\n")

let applicationOn = true
let todoList = []

function printOptions(){
    alert("Application choises:\n~~~~~~~~~~~~~~~~~~~\n[1] Add todo list item\n[2] Remove first todo\n[3] Remove todo by index\n[4] Print todo list\n[q] Quit\n~~~~~~~~~~~~~~~~~~~")
}

function priintToDoList(){
    alert("To Do List: ")
}

function addToDoItemToList(){
    let itemToAdd = prompt("Enter to do: ")
    todoList.push(itemToAdd)
    prompt(`to do added:\n${itemToAdd}`)
}

while(applicationOn){
    printOptions()

    let userInput = prompt("Enter item")

    if(userInput === "q"){
        applicationOn = false
    }
    else if(userInput === "1"){
        addToDoItemToList()   
    }
    else if(userInput === "4"){
        priintToDoList()
    }
}

alert("The todo application has terminated")