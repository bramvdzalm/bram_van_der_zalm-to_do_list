const toDoInput = document.querySelector('.todo-input')
const toDoButton = document.querySelector('.todo-button')
const toDoList = document.querySelector('.task-list')
const toDoForm = document.querySelector('.todo-form')

const addToDoList = async() => {
    toDoList.innerHTML = ""
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
    trashButton.addEventListener('click', () => {deleteData(item._id), addToDoList()}) 

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

        addToDoList()
    });
    
};
postNewTodo();


// Hi Stijn, top dankjewel voor je feedback, daar sta ik altjd voor open. Dat is eigenlijk ook
// het enige wat ik aan de opleiding mis. Het live sparren met elkaar en gedachtengang delen.
// Op de een of andere manier hoefde ik hier niet te vernieuwen om de zojuist toegevoegde taak tevoorschijn te toveren.
// En zo dus ook met de Delete button, ben benieuwd of ik het nu wel juist heb toegepast.
// Als ik in de button op het prullenbakje klikte, pakte hij hem niet, maar op de button naast het prullenbakje wel.




