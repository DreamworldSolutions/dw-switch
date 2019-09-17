import { LitElement, html, css } from 'lit-element';
import '../dw-switch';
import { ThemeStyle } from '@dreamworld/material-styles/theme.js';


export class DwSwitchDemo extends LitElement {
  static get styles() {
    return [
      ThemeStyle,
      css`
        :host{
          display: block;
          padding: 16px;
        }
      `
    ]
  }
  render() {
    return html`
      <h2>Primary Color</h2>
      <dw-switch></dw-switch>

      <h2>Secondary Color</h2>
      <dw-switch secondary></dw-switch>
    `
  }
}

customElements.define('dw-switch-demo', DwSwitchDemo);


