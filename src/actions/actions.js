// 1º parte - Declarar uma propriedade constante (const) para
// definir o nome da action.
export const ADD_TODO = 'ADD_TODO';

// 2º parte - Criar uma propriedade com let - para criar um proceso
// de incremento de tarefas que surgirão a partir da interção do
// usuário com a aplicação.
let nextTodoId = 0;

// 3º parte - Definir uma função para "executar" a descrição
// definida na action: criar um id numérico para cada tarefa
// que sera inserida na aplicação.
export function addTodo(text){
    return{
        type: ADD_TODO,
        id: nextTodoId ++,
        text 
    }
}

