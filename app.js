document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'Moto Guzzi',
            img: 'images/MotoGuzzi.png'
        },
        {
            name: 'Moto Guzzi',
            img: 'images/MotoGuzzi.png'
        },
        {
            name: 'Bmw',
            img: 'images/Bmw.png'
        },
        {
            name: 'Bmw',
            img: 'images/Bmw.png'
        },
        {
            name: 'Harley Davidson',
            img: 'images/HD.png'
        },
        {
            name: 'Harley Davidson',
            img: 'images/HD.png'
        },
        {
            name: 'Triumph',
            img: 'images/Triumph.png'
        },
        {
            name: 'Triumph',
            img: 'images/Triumph.png'
        },
        {
            name: 'Moto Bianchi',
            img: 'images/MotoBianchi.png'
        },
        {
            name: 'Moto Bianchi',
            img: 'images/MotoBianchi.png'
        },
        {
            name: 'Norton',
            img: 'images/Norton.png'
        },
        {
            name: 'Norton',
            img: 'images/Norton.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create your board

    function createBoard() {
        for (let i = 0; i<cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/black.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You Found A Match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/black.png')
            cards[optionTwoId].setAttribute('src', 'images/black.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip cards
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard() 
})