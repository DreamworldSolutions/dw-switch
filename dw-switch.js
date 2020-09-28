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

  /**
   * Web view crashing on iOS 14 b5 and Safari Technology Preview when interacting with mwc elements
   * for Details see this[https://github.com/material-components/material-components-web-components/issues/1720]
   * @override
   */
  createRenderRoot() {
    // don't set delegatesFocus: true due to https://bugs.webkit.org/show_bug.cgi?id=215732
    return this.attachShadow({mode: 'open'});
  }
}

customElements.define('dw-switch', DwSwitch);


