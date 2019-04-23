var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, customElement, property } from 'lit-element';
import { CustomLitElement } from '../custom-lit-element';
let TodoItem = class TodoItem extends CustomLitElement {
    constructor() {
        super(...arguments);
        this.done = false;
        this.archived = false;
        this.text = '';
    }
    static get styles() {
        return css `
      * {
        user-select: none;
      }
      .remove {
        cursor: pointer;
      }
    `;
    }
    changeDoneStatus(e) {
        if (e.target) {
            this.emit('change', e.target.checked);
        }
    }
    actions() {
        return html `
      <span class="remove" @click=${_ => this.emit('delete')}>X</span>
    `;
    }
    render() {
        return html `
      <label>
        <input type="checkbox"
          ?checked=${this.done}
          @change=${this.changeDoneStatus}
        />
        ${this.done ? html `<del>${this.text}</del>` : html `<span>${this.text}</span>`}
      </label>
      ${this.actions()}
    `;
    }
};
__decorate([
    property({ type: Boolean })
], TodoItem.prototype, "done", void 0);
__decorate([
    property({ type: Boolean })
], TodoItem.prototype, "archived", void 0);
__decorate([
    property({ type: String })
], TodoItem.prototype, "text", void 0);
TodoItem = __decorate([
    customElement('todo-item')
], TodoItem);
export { TodoItem };
//# sourceMappingURL=todo-item.js.map