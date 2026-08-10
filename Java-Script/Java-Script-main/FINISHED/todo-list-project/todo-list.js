let toDoList = [];

const saved = localStorage.getItem("todos");
if (saved) {
  toDoList = JSON.parse(saved);
  addToDo(toDoList);
}

function addToDo() {
  let toDoListHtml = "";


  toDoList.forEach((toDoObject,i) =>{
    const {name, date} = toDoObject
    const html =` 
    <div class="todo-row">
    <div class="name">${name}</div>
    <div class="date">${date}</div>
     <button class="remove js-remove-button " 
>Remove</button> </div> `

toDoListHtml+=html
  })
  document.querySelector(".js-show").innerHTML = toDoListHtml;


  document.querySelectorAll('.js-remove-button')
.forEach((btn, index) => {
    btn.addEventListener("click",() => {
   toDoList.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(toDoList));
    addToDo()
})
});
}


document.body.addEventListener('keydown',(event)=>{
  if(event.key==='Enter'){
   const name = document.querySelector(".js-input").value;
  const date = document.querySelector(".js-date").value;
  if (name === "") return;
   if(date ==="") return;
  toDoList.push({ name: name, date: date });

  localStorage.setItem("todos", JSON.stringify(toDoList));
  addToDo(toDoList);

  document.querySelector(".js-input").value = "";
  document.querySelector(".js-date").value = "";
  }
})

document.querySelector(".js-btn").addEventListener("click", () => {
  const name = document.querySelector(".js-input").value;
  const date = document.querySelector(".js-date").value;

  if (name === "") return;

  if(date ==="") return;

  toDoList.push({ name: name, date: date });

  localStorage.setItem("todos", JSON.stringify(toDoList));
  addToDo(toDoList);

  document.querySelector(".js-input").value = "";
  document.querySelector(".js-date").value = "";
});

