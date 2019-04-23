import { html, css, customElement, property } from 'lit-element';
import { CustomLitElement } from '../custom-lit-element';

import './add-todo';
import './todo-item';
import { ITodoItem } from './todo-item';

@customElement('todo-list')
export class TodoList extends CustomLitElement {

  @property({ type : Array }) todos: ITodoItem[] = []

  static get styles() {
    return css`
      todo-item {
        display: block;
      }
    `;
  }

  updateTodo(todo: ITodoItem, done: boolean) {
    this.set(todo, 'done', done);
  }

  addTodo(todo: ITodoItem) {
    this.set(this.todos, this.todos.length, todo);
  }

  deleteTodo(todo: ITodoItem) {
    todo.archived = true;
    this.requestUpdate();
  }

  todoItems = function* (this: TodoList) {
    for (const todo of this.todos.filter(el => !el.archived)) {
      yield html`
        <todo-item
          @change=${e => this.updateTodo(todo, e.detail)}
          @delete=${_ => this.deleteTodo(todo)}
          .text=${todo.text}
          ?done=${todo.done}
        ></todo-item>
      `;
    }
  }

  render() {
    return html`
      ${this.todoItems()}

      <add-todo @add=${_ => this.addTodo(_.detail)}></add-todo>
    `;
  }
}
