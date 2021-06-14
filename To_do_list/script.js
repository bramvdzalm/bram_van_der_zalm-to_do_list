const toDoInput = document.querySelector('.todo-input')
const toDoButton = document.querySelector('.todo-button')
const toDoList = document.querySelector('.task-list')
const toDoForm = document.querySelector('.todo-form')

const addToDoList = async() => {
    const data = await getData();
    const getTodo = data.map((item) => {
        addToDo(item);
    });
};
addToDoList();

const addToDo = (item) =>  {

    const complete = function() {
        completeButton.classList.toggle("green-background")
        todoP.classList.toggle("line-through")
    }
    
    const todoDiv = document.createElement('div')
    todoDiv.setAttribute("id", item._id)
    todoDiv.classList.add('todo-div')

    const todoP = document.createElement('p')
    todoP.innerHTML = item.description;
    todoP.classList.add('todo-par')

    const completeButton = document.createElement('button')
    completeButton.innerHTML = '<i class="fas fa-check-square"></i>'
    completeButton.classList.add('complete-button')
    completeButton.addEventListener("click", complete)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-button')
    trashButton.addEventListener('click', deleteData) 

    toDoList.insertAdjacentElement("afterbegin", todoDiv);

    todoDiv.append(todoP, completeButton, trashButton)
}


const postNewTodo = async() => {
    toDoButton.addEventListener("click", async(event) => {
        event.preventDefault()
        let item = {
            description: toDoInput.value,
            done: false,
        };
        const post = await postData(item)
    
        const data = await getData();
    });
    
};
postNewTodo();






