import { LitElement } from 'lit-element';

export class CustomLitElement extends LitElement {
  emit(name: string, detail?: any) {
    this.dispatchEvent(new CustomEvent(name, { detail }));
  }

  set(target: object | Array<any>, prop: string | number, value: any) {
    target[prop] = value;
    this.requestUpdate();
  }

  delete(target: object, prop: string) {
    delete target[prop];
    this.requestUpdate();
  }
}
