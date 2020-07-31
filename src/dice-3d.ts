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

  const _createDice = () => {
    const diceContainer: HTMLDivElement = document.createElement('div');
    const list: HTMLUListElement = document.createElement('ul');

    diceContainer.classList.add('dice');
    list.classList.add('dice3d-list', 'even-roll');

    list.dataset.roll = _getRandomNumber().toString();
    _createSides(list);
    diceContainer.appendChild(list);
    document.body.appendChild(diceContainer);
  };

  const _toggleClasses = (dice: Element) => {
    dice.classList.toggle('odd-roll');
    dice.classList.toggle('even-roll');
  };

  _createDice();
}
