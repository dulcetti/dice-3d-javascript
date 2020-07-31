interface Options {
  bgColor?: string;
  button?: string;
  name?: string;
  sides?: number;
}

  const _createButton = (container: HTMLDivElement) => {
    const button = document.createElement('button');
    button.classList.add('button-dice');
    button.id = buttonId;
    button.textContent = 'Fodasse';
    container.appendChild(button);
  };

  const _createDice = () => {
    const list: HTMLOListElement = document.createElement('ol');

    list.classList.add('dice3d-list', 'even-roll');

    list.dataset.roll = _getRandomNumber().toString();
    _createSides(list);
    return list;
  };

  const _buildDices = () => {
    const diceContainer: HTMLDivElement = document.createElement('div');
    diceContainer.classList.add('dice');
    let index = 1;

    for (index; index <= quantityDices; index++) {
      const list = _createDice();
      console.info(quantityDices);
      diceContainer.appendChild(list);
    }
    console.info(diceContainer);

    _createButton(diceContainer);
    document.body.appendChild(diceContainer);
  };
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
