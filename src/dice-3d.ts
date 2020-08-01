import './styles.scss';

interface Options {
  bgColor?: string;
  buttonId?: string;
  buttonLabel?: string;
  container?: string;
  randInitVals?: boolean;
  quantityDices?: number;
  sides?: number;
}

export default class Dice3D {
  defaultOptions: Options = {
    buttonId: 'roll-button',
    buttonLabel: 'Jogar',
    quantityDices: 1,
    sides: 6,
  };
  opts: Options;

  constructor(options: Options) {
    this.opts = {
      ...this.defaultOptions,
      ...options,
    };
    this._buildDices();
    this.rollDice = this.rollDice.bind(this);
    const button = <HTMLButtonElement>document.getElementById(this.opts.buttonId!);
    button.addEventListener('click', this.rollDice);
  }

  rollDice() {
    const diceElements = document.querySelectorAll('.dice3d-list');
    const dices = { ...diceElements };
    let values = [];

    for (const key in dices) {
      if (dices.hasOwnProperty(key)) {
        this._toggleClasses(dices[key]);
        const newValue = this._getRandomNumber();
        dices[key].setAttribute('data-roll', newValue.toString());
        values.push(newValue);
      }
    }

    return values;
  }

  private _appendElements(container: HTMLDivElement) {
    if (this.opts.buttonId === this.defaultOptions.buttonId) {
      this._createButton(container);
    }

    if (this.opts.container) {
      const userContainer = document.querySelector(this.opts.container);
      userContainer?.appendChild(container);
    } else {
      document.body.appendChild(container);
    }
  }

  private _createButton(container: HTMLDivElement) {
    const button = document.createElement('button');
    button.classList.add('button-dice');
    button.id = this.opts.buttonId!;
    button.textContent = this.opts.buttonLabel!;
    container.appendChild(button);
  }

  private _createDice() {
    const list: HTMLOListElement = document.createElement('ol');

    list.classList.add('dice3d-list', 'even-roll');

    list.dataset.roll = this.opts.randInitVals ? this._getRandomNumber().toString() : '1';
    this._createSides(list);
    return list;
  }

  private _buildDices() {
    const diceContainer: HTMLDivElement = document.createElement('div');
    diceContainer.classList.add('dice');
    let index = 1;

    for (; index <= this.opts.quantityDices!; index++) {
      const list = this._createDice();
      diceContainer.appendChild(list);
    }

    this._appendElements(diceContainer);
  }

  private _createDots(item: HTMLLIElement, indexItem: number) {
    let index = 1;

    for (; index <= indexItem; index++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      item.appendChild(dot);
    }

    return item;
  }

  private _createSides(list: HTMLOListElement) {
    let index = 1;

    for (; index <= this.opts.sides!; index++) {
      const item: HTMLLIElement = document.createElement('li');
      item.classList.add('item');
      item.setAttribute('data-side', `${index}`);
      this._createDots(item, index);
      list.appendChild(item);
    }

    return list;
  }

  private _getRandomNumber(min = 1, max = 6) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private _toggleClasses(dice: Element) {
    dice.classList.toggle('odd-roll');
    dice.classList.toggle('even-roll');
  }
}
