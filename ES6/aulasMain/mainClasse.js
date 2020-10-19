
class List{
    constructor(){
        this.data = []
    }
    add(data){
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List{
    // constructor(){
    //     this.todos = []
    // }
    // addTodo(){
    //     this.todos.push('novo Todo')
    //     console.log(this.todos)
    // }
}
const MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('novo Todo')
}