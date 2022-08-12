/* Reestruturacao do arquivo index.js para que comporte a store
indicando, nele, o provedor (provider) de conteudo a apliação.
*/

import React,{Component} from "react";
import './index.css';
import App from './App'

// Realizar o novos importes para que a store seja criada e possa 
// servir como provedor de conteudo da aplicação - através do 
// armazenamento dos state.

import {render} from 'react-dom';
import { legacy_createStore as createStore} from "redux";
import {Provider} from 'react-redux';

// importante a constante que possui como valor atribuido os state
// do reducer

import todoApp from "./reducers/reducers";

// Definir a propriedade que será responsável por receber o valor a
// criação da store e, também, o armazenamento do states.
let criarStore = createStore(todoApp);

let rootElement = document.getElementById('root');

// Implementando o provider(provedor de conteudo)
render(
  <Provider proverStore = {criarStore}>
    <App />
  </Provider>,
  rootElement
)