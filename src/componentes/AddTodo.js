// importar somente os recurso para criar nosso componente
// de classe
import React, {Component} from "react";

// Definir o componente de classe
class AddTodo extends Component {
    //  1º parte - indicar um construtor (função/método especial) 
    // da classe para priorizar o data binding desta 
    // classe/componente com o componente principal.
    constructor(props){
        super(props)
        // criar uma ref (referência) para que um item 
        // seja recebido no componente e enviado para o 
        // componente principal
        this.input = React.createRef();
    }

    // 2º parte - criar uma estrutura de código para a 
    // captura de um valor que será inserido na view através
    // de um input.
    // Essa função será um manipulador de evento
    inserirItem(e){
        e.preventDefault()
        // Criar uma sequencia de implementações que irão
        // tratar os dados que serão inseridos no input
        var node = this.input.current.value;
        var text = node.trim()
        this.props.onAddClick(text)
    }
    // 3º parte - construção da view e disparo do 
    // evento de captura do valor de item a partir 
    // do input
    render(){
        return(
            <div>
                <input type = 'text' ref = {this.input}/>
                <button className ="btn-insert" onClick= {(e) => this.inserirItem(e)}>
                    Incluir Item na Lista
                </button>
            </div>
        )
    }
}

export default AddTodo;
