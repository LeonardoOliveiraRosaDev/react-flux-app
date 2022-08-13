// componente que sera a Lista de itens - contruidas
// com um item de cada vez - <ul><li></li></ul>
import React, {Component} from "react";
import Todo from "./Todo";
// Definir o componente
class TodoList extends Component{
    render(){
        return(
            <ul className ="list-clean">
                {
                this.props.todos.map( todo =>
                    <Todo 
                        key = {todo.id}
                        {...todo}/>
                )
                }
            </ul>
        )
    }
}

export default TodoList;