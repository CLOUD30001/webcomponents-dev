import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';

@customElement('dropdown-app')
export class DropDownApp extends LitElement {
  static styles = css`
      
      p { color: blue }
      
      /*the container must be positioned relative:*/
 .custom-select {
  position: relative;
  font-family: Arial;
}

.custom-select select {
  /*display: none;*/ /*hide original SELECT element:*/
}

.select-selected {
  background-color: Blue;
}

/*style the arrow inside the select element:*/
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/*point the arrow upwards when the select box is open (active):*/
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/*style the items (options), including the selected item:*/
.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;
}

/*style items (options):*/
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

/*hide the items when the select box is closed:*/
.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
      `;

    @property({ type: String, attribute: true})
    title = '';
  
  @property({type: Array, attribute: true})
  items = ["a", "b"];

  @property({type: Array, attribute: true, reflect: true})
  fakeUser = [];
  
  /*render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }*/
  
  render(){
   return html`
       <div class='custom-select'>
       <span>${this.title}</span>
       <select @change="${this.dispatch}">
        ${repeat(this.items, item => item, item => html`<option value=${item}>${item}</option>`)}    
       </select>
       </div>
       <button @click="${this.callDummyService}">Call dummy service</button>
   `
   }
  
  selectedValue(){
    //console.log(e.target.value);
  }
  
  private dispatch(e){
    this.dispatchEvent(new CustomEvent('selectChange',{
  bubbles: true,
  detail: { text: () => e.target.value }}));
  }
  
  async callDummyService(e){
    await fetch(`https://demo.vaadin.com/demo-data/1.0/people?count=10`)
        .then(r => r.json())
      .then(async data => {
        this.fakeUser = data.result;
        console.log(this.fakeUser);
      }); 
  }
    
}
