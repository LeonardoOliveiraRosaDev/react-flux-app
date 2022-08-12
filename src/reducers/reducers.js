// Especificar o que a Action vai executar.
// Fazer os imports nescessários.

// 1º import: trazer a action para esse "pedaço"do
// projeto
import {ADD_TODO} from '../actions/actions';

// 2º import: importar uma função nativa do react
// chamada combineReducers , por que ela auxiliara
// na "junção" das funcionalidades expecificadas
// durante a implementação do reducer
import { combineReducers } from 'redux';

// 1º parte de expecifição da action pelo reducer - criar
// uma função para receber o valor que será inserido na
// aplicação.
function todo(state, action){
    // fazer uso da instrução switch/case para verificar
    // se a action esta definida/existe e, assim, dessa
    // forma especificar aquilo que vai acontecer.
    switch(action.type){
        case ADD_TODO:
        return{
            id: action.id,
            text: action.text
        }
        default:
            return state;
    }

}

// Criar uma nova função para gerar uma coleção de dados 
// lista de itens de tarefas apartir de cada item obtido 
// pela aplicação
function todos(state = [], action){
    // fazer o uso da instrução switch/case
    // verificar se a nossa action esta definida/existe
    // e, assim, fazer uso de sua especificação para 
    // "popular" o array atribuido ao parametro state
    switch(action.type){
        case ADD_TODO:
            return [
                // faz uma "cópia" da atualização/alteração
                // do state e retorna a coleção de dados
                // acrescentada de qualquer item.
                ...state, // ... spread operator
                        // operador de espalhamento.
                      
                todo(undefined, action) //Função todo() sendo chamada 
                // á execução
            ]
            default:
                return state;
    }
}

// criar uma constante para receber a "junção/combinação"
// das duas funções  - todo() e todos()
// fazendo uso do recurso combineReducers
const todoApp = combineReducers({todos })

// exporta o reducer para todo os outros pedaçõs do projeto
export default todoApp;