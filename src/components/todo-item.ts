import { html, css, customElement, property } from 'lit-element';
import { CustomLitElement } from '../custom-lit-element';

@customElement('todo-item')
export class TodoItem extends CustomLitElement {

  @property({ type : Boolean }) done = false
  @property({ type : Boolean }) archived = false
  @property({ type : String })  text = ''

  static get styles() {
    return css`
      * {
        user-select: none;
      }
      .remove {
        cursor: pointer;
      }
    `;
  }

  public changeDoneStatus(e: Event) {
    if (e.target) {
      this.emit('change', (e.target as HTMLInputElement).checked);
    }
  }

  public actions() {
    return html`
      <span class="remove" @click=${_ => this.emit('delete')}>X</span>
    `;
  }

  public render() {
    return html`
      <label>
        <input type="checkbox"
          ?checked=${this.done}
          @change=${this.changeDoneStatus}
        />
        ${this.done ? html`<del>${this.text}</del>` : html`<span>${this.text}</span>`}
      </label>
      ${this.actions()}
    `;
  }
}

export interface ITodoItem {
  id: number;
  text: string;
  done: boolean;
  archived?: boolean;
}
