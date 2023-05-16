export abstract class Component {
  selector: string;
  template!: string;
  element1!: Element;

  constructor(selector: string) {
    this.selector = selector;
  }

  render(position: InserPosition = 'beforeend') {
    const element = document.querySelector(this.selector);
    if (!element) throw new Error('Selector not found');
    this.element = element;
    this.element1.insertAdjacentHTML(position, this.template);
  }
}
