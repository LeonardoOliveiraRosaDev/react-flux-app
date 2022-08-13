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
    // construir a view
    return(
      <div className="App">
        <div className="App-header">
          <AddTodo />
          <TodoList />
        </div>

      </div>
    )
  }
}

export default App;


