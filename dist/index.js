var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement, property } from 'lit-element';
import { CustomLitElement } from './custom-lit-element';
import './components/todo-list';
let App = class App extends CustomLitElement {
    constructor() {
        super(...arguments);
        this.todos = [
            { id: 1, done: false, text: 'todo 1', archived: false },
            { id: 2, done: false, text: 'todo 2', archived: false },
            { id: 3, done: true, text: 'todo 3', archived: false },
            { id: 4, done: true, text: 'todo 4', archived: false },
        ];
    }
    onListUpdated() {
        this.requestUpdate();
    }
    render() {
        return html `
      <todo-list
        .todos=${this.todos}
        @change=${_ => this.onListUpdated()}
      ></todo-list>
    `;
    }
};
__decorate([
    property()
], App.prototype, "todos", void 0);
App = __decorate([
    customElement('app-root')
], App);
export { App };
//# sourceMappingURL=index.js.map