import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('star-rating')
export class StarRating extends LitElement {

  static styles = css`
    :host {
      --star-size: 60px;
      --star-color: #fff;
      --star-background: #fc0;
      --start-count: var(--star-count, 1);
    }

    .Stars {
      --percent: calc(var(--rating) / var(--start-count) * 100%);
      display: inline-block;
      font-size: var(--star-size);
      font-family: Times; // make sure ★ appears correctly
      line-height: 1;
      background-color: #eee;
    }

    .Stars::after {
      content: '★★★★★';
      letter-spacing: 3px;
      background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

  `;

  render() {
    return html`
      <div class="Stars"></div>
    `;
  }

}
