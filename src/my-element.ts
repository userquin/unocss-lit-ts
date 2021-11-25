/* @unocss-include */
import { html, css, LitElement, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import unocss from '/@unocss/my-element.css'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
    ${unsafeCSS(unocss)}
  `

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <h1 class="mt-6em">Hello, ${this.name}!</h1>
      <button mt-6em @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `
  }

  private _onClick() {
    this.count++
  }

  foo(): string {
    return 'foo'
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
