import { css } from 'lit-element';
import { Switch } from '@material/mwc-switch/mwc-switch';

export class DwSwitch extends Switch {
  static get styles() {
    return [
      Switch.styles,
      css`
        :host([secondary]){
          --mdc-theme-primary: var(--mdc-theme-secondary);
        }
      `
    ]
  }
}

customElements.define('dw-switch', DwSwitch);


