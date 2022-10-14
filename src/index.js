import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));
// es igual a: siempre q haya solo un argumento
//todoList.todos.forEach( crearTodoHtml );
//const newTodo = new Todo("Aprender Javascript");
//todoList.nuevoTodo(newTodo);
//todoList.todos[0].imprimirClase();

console.log( 'todos', todoList.todos );


// const tarea = new Todo('aprender javascript!!');
// todoList.nuevoTodo( tarea );

//tarea.completado = true;

// console.log( todoList);

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key','abc123');
// sessionStorage.setItem('mi-key', 'abc1234');

// setTimeout( ()=>{

//     localStorage.removeItem('mi-key')

// })



