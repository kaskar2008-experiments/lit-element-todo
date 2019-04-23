var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement } from 'lit-element';
import { TodoItem } from './todo-item';
let TodoItemArchived = class TodoItemArchived extends TodoItem {
    changeDoneStatus(e) {
        if (e.target) {
            this.emit('change', e.target.checked);
        }
    }
    actions() {
        return html `
      <span class="restore" @click=${_ => this.emit('restore')}>Restore</span>
    `;
    }
};
TodoItemArchived = __decorate([
    customElement('todo-item')
], TodoItemArchived);
export { TodoItemArchived };
//# sourceMappingURL=todo-item-achived.js.map