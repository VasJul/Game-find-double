import { confetti } from "./confetti.js";
import { createGameCard } from "./gameCard.js";
import { createGameMenu } from "./gameMenu.js";
import { createIconsArray, dublicateArray, shuffle } from "./utils.js";

export const startGame = (difficult) => {
    let firstCard = null;
    let secondCard = null;
    //возможность кликнуть по карте чтобы мы могли перевернуть ее или нет
    let clickable = true;

    //доска с картами
    const gameSection = document.querySelector('.game-section__container')
    //таблица
    const gameTable = document.createElement('div');

    const cardsIcons = createIconsArray(difficult);
    const dublicatedCardsIcons = dublicateArray(cardsIcons);

    //кнопка рестарт
    const restartBtn = document.createElement('button');

    //когда нажимаем на рестарт сменяется контент, должен чиститься контейнер с контентом
    gameSection.innerHTML = '';

    restartBtn.textContent = 'Рестарт';
    gameTable.classList.add('game-table');
    restartBtn.classList.add('restart-btn');
    //перемещиваем массив
    shuffle(dublicatedCardsIcons);

    //после того как перемешиваем массив мы будем проходиться по нему при помощи forEach будем получать иконку будем обращаться к нашему блоку с картами и append в нее наши карты. вызываем функцию кот возвращает карту и первый аргумент будет передавать название для иконки question-circle, второй icon, то есть элемент массива где перемещаны иконки
    dublicatedCardsIcons.forEach(icon => gameTable.append(createGameCard('question-circle', icon)));

    gameSection.append(gameTable, restartBtn);

    const cards = document.querySelectorAll('.game-card');

    restartBtn.addEventListener('click', createGameMenu);

    cards.forEach((card, index) => card.addEventListener('click', () => {
        if (clickable == true && !card.classList.contains('successfully')) {
            card.classList.add('flip');
            //запрещаем разворачивать больше двух карт
            if (firstCard == null) {
                firstCard = index;
            } else {
                if (index != firstCard) {
                    secondCard = index;
                    clickable = false;
                }
            }

            if (firstCard != null && secondCard != null && firstCard != secondCard) {
                if (
                    cards[firstCard].firstElementChild.className ===
                    cards[secondCard].firstElementChild.className
                ) {
                    setTimeout(() => {
                        cards[firstCard].classList.add('successfully');
                        cards[secondCard].classList.add('successfully');

                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 500);
                } else {
                    setTimeout(() => {
                        cards[firstCard].classList.remove('flip');
                        cards[secondCard].classList.remove('flip');

                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 500);
                }
            }

            //добавляем конфетти hode.list карточек превращаем просто в массив. проверяем все ли карты имеют класс flip
            if (Array.from(cards).every(card => card.className.includes('flip'))) {
                document.querySelector('.confetti').innerHTML = confetti;
            }
        }
    }))
}