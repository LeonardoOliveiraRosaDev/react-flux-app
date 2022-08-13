// ele e nosso componente para operar com um unico
// elemento que vai compor a lista <li></li>
import React, {Component} from "react";

// definir o componente
class Todo extends Component{
    render(){
        return(
            <li>{this.props.text}</li>
        )
    }
}

export default Todo;