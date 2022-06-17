import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: String })
  name: string;

  render() {
    return html` <div>Hello from ${this.name}!</div> `;
  }
}
