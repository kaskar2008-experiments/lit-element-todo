var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, customElement, property } from 'lit-element';
import { CustomLitElement } from '../custom-lit-element';
import './add-todo';
import './todo-item';
let TodoList = class TodoList extends CustomLitElement {
    constructor() {
        super(...arguments);
        this.todos = [];
        this.todoItems = function* () {
            for (const todo of this.todos.filter(el => !el.archived)) {
                yield html `
        <todo-item
          @change=${e => this.updateTodo(todo, e.detail)}
          @delete=${_ => this.deleteTodo(todo)}
          .text=${todo.text}
          ?done=${todo.done}
        ></todo-item>
      `;
            }
        };
    }
    static get styles() {
        return css `
      todo-item {
        display: block;
      }
    `;
    }
    updateTodo(todo, done) {
        this.set(todo, 'done', done);
    }
    addTodo(todo) {
        this.set(this.todos, this.todos.length, todo);
    }
    deleteTodo(todo) {
        todo.archived = true;
        this.requestUpdate();
    }
    render() {
        return html `
      ${this.todoItems()}

      <add-todo @add=${_ => this.addTodo(_.detail)}></add-todo>
    `;
    }
};
__decorate([
    property({ type: Array })
], TodoList.prototype, "todos", void 0);
TodoList = __decorate([
    customElement('todo-list')
], TodoList);
export { TodoList };
//# sourceMappingURL=todo-list.js.map