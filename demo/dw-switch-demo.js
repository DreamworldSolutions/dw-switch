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
        .custom{
          --mdc-switch-unselected-handle-color: goldenrod;
          --mdc-switch-unselected-track-color: palegoldenrod;
        }
      `
    ]
  }
  render() {
    return html`
      <h2>Primary Color</h2>
      <dw-switch></dw-switch>

      <h2>Secondary Color with Selected </h2>
      <dw-switch secondary selected></dw-switch>

      <h2>Custom Switch </h2>
      <dw-switch class="custom"></dw-switch>

      <h2>Disabled Switch </h2>
      <dw-switch  disabled></dw-switch>
    `
  }
}

customElements.define('dw-switch-demo', DwSwitchDemo);