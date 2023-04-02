// функция будет принимать 2 типа иконки дефолтную(?) и перевернутую
export const createGameCard = (defaultIcon, flippedCardIcon) => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    const notFlippedCardI = document.createElement('i');
    const flippedCardI = document.createElement('i');

    //вопросительный знак fa-${defauiltIcon}
    notFlippedCardI.classList.add('fa', `fa-${defaultIcon}`);
    flippedCardI.classList.add('fa', `fa-${flippedCardIcon}`);

    card.append(flippedCardI, notFlippedCardI);

    return card;
}