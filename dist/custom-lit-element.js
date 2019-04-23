import { LitElement } from 'lit-element';
export class CustomLitElement extends LitElement {
    emit(name, detail) {
        this.dispatchEvent(new CustomEvent(name, { detail }));
    }
    set(target, prop, value) {
        target[prop] = value;
        this.requestUpdate();
    }
    delete(target, prop) {
        delete target[prop];
        this.requestUpdate();
    }
}
//# sourceMappingURL=custom-lit-element.js.map