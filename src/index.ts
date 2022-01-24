import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-counter')
export class SimpleGreeting extends LitElement {


  @property({type: Object, attribute: true, reflect: true})
  myData = '{}'

  render() {
    return html`
      Check console log.
    `;
  }

  update(changedProperties: Map<string, unknown>) {
  if (changedProperties.has("myData")) {
    const oldValue = changedProperties.get("myData") as Object;
    const newValue = this.myData;
    console.log(newValue);
    //this.loadAddress(newValue);
  }
  super.update(changedProperties);
}
  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

}
