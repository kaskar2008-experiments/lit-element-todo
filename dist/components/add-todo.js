var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, customElement, property } from 'lit-element';
import { CustomLitElement } from '../custom-lit-element';
let AddTodo = class AddTodo extends CustomLitElement {
    constructor() {
        super(...arguments);
        this.text = '';
    }
    static get styles() {
        return css `
      div {
        display: block;
        margin-top: 1rem;
      }
    `;
    }
    get disabled() {
        return this.text === '';
    }
    addTodo() {
        if (this.disabled) {
            return;
        }
        this.emit('add', {
            done: false,
            text: this.text
        });
        this.text = '';
    }
    render() {
        return html `<div>
      <input type=text
        .value=${this.text}
        @input=${_ => this.text = _.target.value}
        @keypress=${_ => _.keyCode === 13 ? this.addTodo() : null}
      />
      <button ?disabled=${this.disabled} @click=${this.addTodo}>Add</button>
    </div> `;
    }
};
__decorate([
    property({ type: String })
], AddTodo.prototype, "text", void 0);
AddTodo = __decorate([
    customElement('add-todo')
], AddTodo);
export { AddTodo };
//# sourceMappingURL=add-todo.js.map