import { Component } from './component';

export class Communication extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <div class="comunications">
      <p class="comunications__text display-1">Una frase.</p>
      <img class="comunications__picture" src="img/no-one.jpg" alt="Nombre y familia del que habla" />
    </div>
    `;
  }
}
