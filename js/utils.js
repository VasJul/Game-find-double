//функция перемещивания элементов в массиве
export const shuffle = (array) =>{
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

//дубликат массива чтобы по 2 картинки
export const dublicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);

export const createIconsArray = (initialCount) => {
    const cardsIcons = [
        'music',
        'hippo',
        'mug-hot',
        'ghost',
        'plane',
        'city',
        'tree',
        'fish',
    ];

    //количество карт выбираем
    switch (initialCount) {
        case 10:
            return cardsIcons.slice(0, 5);
        case 12:
            return cardsIcons.slice(0, 6);
        case 14:
            return cardsIcons.slice(0, 7);
        case 16:
            return cardsIcons;
        default:
            break;
    }
}