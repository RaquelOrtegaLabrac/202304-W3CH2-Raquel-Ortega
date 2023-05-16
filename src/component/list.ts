import { Component } from './component';

export class List extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  create Template() {
    return `
      <ul class="characters-list row list-unstyled">

      </ul>
    ` 
  }
}
