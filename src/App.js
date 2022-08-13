// Importar recursos nescessários os componentes do projeto
import AddTodo from './componentes/AddTodo';
import TodoList from './componentes/TodoList';
// importa o css
import './App.css';
// importar o recurso para definir o componente da Classe
import React, {Component} from 'react';
// importar os novos recursos para o componente principal
import { connect } from 'react-redux';
import {addTodo} from './actions/actions';

// Definir o componente classe
class App extends Component{
  // chamar o metodo render()
  render(){
    // Definir uma const para referenciar as propriedades
    // dispatch e a exibição da lista de itens que será
    // selecionada a partir do state armazenando na store.
    const {dispatch, todosVisiveis} = this.props;
    // construir a view
    return(
      <div className="App">
        <div className="App-header">
          <AddTodo onAddClick = {(text) => dispatch(addTodo(text)) }/>
          <TodoList todos = {todosVisiveis} />
        </div>

      </div>
    )
  }
}

// Fazer uso de uma função de seleção para que o state
// oriundo da store - possa ser obtido e associado a const
// todosVisiveis.
function select(state){
  return{
    todosVisiveis: state.todos
  }
}  

// criar a conexão entre o componente principal - que será
// renderizado no index.js - com a store (também criada no
// index.js)
export default connect(select)(App);



