interface Options {
  bgColor?: string;
  button?: string;
  name?: string;
  sides?: number;
}

export default function Dice3D({ sides = 6 }: Options) {
  const _createDots = (item: HTMLLIElement, indexItem: number) => {
    let index = 1;
    for (index; index <= indexItem; index++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      item.appendChild(dot);
    }

    return item;
  };

  const _createSides = (list: HTMLUListElement) => {
    let index = 1;

    for (index; index <= sides; index++) {
      const item: HTMLLIElement = document.createElement('li');
      item.classList.add('item');
      item.setAttribute('data-side', `${index}`);
      _createDots(item, index);
      list.appendChild(item);
    }

    return list;
  };

  const _getRandomNumber = (min = 1, max = 6) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const _rollDice = () => {
    const diceElements = document.querySelectorAll('.dice3d-list');
    const dices = { ...diceElements };

    for (const key in dices) {
      if (dices.hasOwnProperty(key)) {
        _toggleClasses(dices[key]);
        const newValue = _getRandomNumber();
        dices[key].setAttribute('data-roll', newValue.toString());
      }
    }
  };

  const _toggleClasses = (dice: Element) => {
    dice.classList.toggle('odd-roll');
    dice.classList.toggle('even-roll');
  };

  _createDice();
}
