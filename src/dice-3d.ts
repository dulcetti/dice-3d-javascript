interface Options {
  bgColor?: string;
  buttonId?: string;
  name?: string;
  quantityDices?: number;
  sides?: number;
}

export default class Dice3D {
  opts: Options;

  constructor(options: Options) {
    const _defaultOptions = {
      buttonId: 'roll-button',
      quantityDices: 1,
      sides: 6,
    };
    this.opts = {
      ..._defaultOptions,
      ...options,
    };
    this._buildDices();
    const fodasse = <HTMLButtonElement>document.getElementById(this.opts.buttonId!);
    fodasse.addEventListener('click', this._rollDice);
  }

  private _createButton(container: HTMLDivElement) {
    const button = document.createElement('button');
    button.classList.add('button-dice');
    button.id = this.opts.buttonId!;
    button.textContent = 'Fodasse';
    container.appendChild(button);
  }

  private _createDice() {
    const list: HTMLOListElement = document.createElement('ol');

    list.classList.add('dice3d-list', 'even-roll');

    list.dataset.roll = this._getRandomNumber().toString();
    this._createSides(list);
    return list;
  }

  private _buildDices() {
    const diceContainer: HTMLDivElement = document.createElement('div');
    diceContainer.classList.add('dice');
    let index = 1;

    for (index; index <= this.opts.quantityDices!; index++) {
      const list = this._createDice();
      diceContainer.appendChild(list);
    }

    this._createButton(diceContainer);
    document.body.appendChild(diceContainer);
  }

  private _createDots(item: HTMLLIElement, indexItem: number) {
    let index = 1;
    for (index; index <= indexItem; index++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      item.appendChild(dot);
    }

    return item;
  }

  private _createSides(list: HTMLOListElement) {
    let index = 1;

    for (index; index <= this.opts.sides!; index++) {
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

  private _rollDice() {
    const diceElements = document.querySelectorAll('.dice3d-list');
    const dices = { ...diceElements };

    for (const key in dices) {
      if (dices.hasOwnProperty(key)) {
        this._toggleClasses(dices[key]);
        const newValue = this._getRandomNumber();
        dices[key].setAttribute('data-roll', newValue.toString());
      }
    }
  }

  private _toggleClasses(dice: Element) {
    dice.classList.toggle('odd-roll');
    dice.classList.toggle('even-roll');
  }
}
