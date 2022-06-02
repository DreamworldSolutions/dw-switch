import { css } from 'lit-element';
import { Switch } from '@material/mwc-switch/mwc-switch';

export class DwSwitch extends Switch {
  static get styles() {
    return [
      Switch.styles,
      css`
      :host(:not([secondary])){
        --mdc-theme-secondary: var(--mdc-theme-primary);
      }
      `
    ]
  }
}

customElements.define('dw-switch', DwSwitch);


