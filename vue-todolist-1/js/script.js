
const { createApp } = Vue;
const app = createApp({
    data(){
        return{
            newTodo:{text:"",done:true},
            todo: []
        };
    },
    created(){  // on startup
        const localTodo = localStorage.getItem("todo");   // save localstorage tu variable
         // this.todo = localTodo !== null ? localTodo : "";
            if(localTodo !== null){   // if local storage is not empty
                this.todo = JSON.parse(localTodo);      // save localstorage in array
            }
        },
    methods: {
        addTodo: function(){ // name function
            if(this.newTodo.text !== ""){   // if input user not empty
                const copyNewTodo = {...this.newTodo }; // copy object
            this.todo.push(copyNewTodo);    // push newTodo in todoArray
            this.newTodo.text = "";         // clear user input
            const jsonTodo = JSON.stringify(this.todo); // save object trasform to string
            localStorage.setItem("todo", jsonTodo);  // save in local storage
            }
            
        },
        activeClass: function(index){
            if(this.todo[index].done === true){
                this.todo[index].done = false;
            } else{
                this.todo[index].done = true;
            }
        },
        removeTodo: function(index){
            this.todo.splice(index,1);
            // refresh local storage
            const jsonTodo = JSON.stringify(this.todo);
            localStorage.setItem("todo", jsonTodo);
        }
    },
}).mount("#app");