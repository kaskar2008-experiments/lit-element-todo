import { html, customElement, property } from 'lit-element';
import { CustomLitElement } from './custom-lit-element';

import './components/todo-list';
import { ITodoItem } from './components/todo-item';

@customElement('app-root')
export class App extends CustomLitElement {

  @property()
  todos: ITodoItem[] = [
    { id: 1, done: false, text: 'todo 1', archived: false },
    { id: 2, done: false, text: 'todo 2', archived: false },
    { id: 3, done: true, text: 'todo 3', archived: false },
    { id: 4, done: true, text: 'todo 4', archived: false },
  ]

  onListUpdated() {
    this.requestUpdate()
  }

  render() {
    return html`
      <todo-list
        .todos=${this.todos}
        @change=${_ => this.onListUpdated()}
      ></todo-list>
    `;
  }
}
