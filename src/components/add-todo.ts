import { html, css, customElement, property } from 'lit-element';
import { CustomLitElement } from '../custom-lit-element';

@customElement('add-todo')
export class AddTodo extends CustomLitElement {

  @property({ type : String }) text = ''

  static get styles() {
    return css`
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
    return html`<div>
      <input type=text
        .value=${this.text}
        @input=${_ => this.text = _.target.value}
        @keypress=${_ => _.keyCode === 13 ? this.addTodo() : null}
      />
      <button ?disabled=${this.disabled} @click=${this.addTodo}>Add</button>
    </div> `;
  }
}
