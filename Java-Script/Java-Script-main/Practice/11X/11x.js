       const todoList = JSON.parse(localStorage.getItem('todos')) || [];
//                ↑ sahifa ochilganda oldingi ma'lumot olinadi



function renderTodos(){

  if(todoList.length===0) return;
 
   let todoListHTML='';

   
 for (let i=0;i<todoList.length;i++){
 
   
     const todoObject=todoList[i]
   //const name=todoObject.name
   // const date=todoObject.date

      const {name,date}=todoObject

   
      const html=`
        <div class="todo-grid">
      <div>${name}</div>   

      <div>${date}</div>

         <button onclick="todoList.splice(${i},1);
        localStorage.setItem('todos', JSON.stringify(todoList)); 
        renderTodos();" class="delete-btn">Delete
        </button>
     </div> `
      todoListHTML+=html
     }
        document.querySelector('.js-task').innerHTML=todoListHTML
    }


     function addTodo(){
 
    
      const inputElement=document.querySelector('.js-input')
      const name=inputElement.value

      const dateInput=document.querySelector('.js-date');
      const date=dateInput.value

       if(name===''|| date==='') return
      todoList.push({name,date})

        localStorage.setItem('todos', JSON.stringify(todoList));
    
      inputElement.value='';
      renderTodos()
     }
    