    const cardArray  = [
        {
            name : 'fries',
            img:'images/fries.png'
            
        },
        {
            name : 'cheeseburger',
            img:'images/cheeseburger.png'
            
        },
        {
            name : 'hotdog',
            img:'images/hotdog.png'
            
        },
        {
            name : 'ice-cream',
            img:'images/ice-cream.png'
            
        },
        {
            name : 'milkshake',
            img:'images/milkshake.png'
            
        },
        {
            name : 'pizza',
            img:'images/pizza.png'
            
        },
        {
            name : 'fries',
            img:'images/fries.png'
            
        },
        {
            name : 'cheeseburger',
            img:'images/cheeseburger.png'
            
        },
        {
            name : 'hotdog',
            img:'images/hotdog.png'
            
        },
        {
            name : 'ice-cream',
            img:'images/ice-cream.png'
            
        },
        {
            name : 'milkshake',
            img:'images/milkshake.png'
            
        },
        {
            name : 'pizza',
            img:'images/pizza.png'
            
        },
        
    ];

    cardArray.sort(() => 0.5 - Math.random());
    const gridDisplay = document.querySelector('#grid');
    const resultDisplay = document.querySelector('#result');
    let cardChosen = [];
    let cardChosenIds=[];
    const cardWon =[];
    function createBoard(){
        for(var i=0 ; i<cardArray.length; i++){
        const  card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('dataId',i)
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
        }
    };
    createBoard();
    function checkMatch(){
    const cards = document.querySelectorAll('#grid img')//find all the images on the grid
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];
        console.log("check for match");
        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optionTwoId].setAttribute('src','images/blank.png')
            alert("You have clicked same image")
            clearArray();
            return;
        }
        if(cardChosen [0] == cardChosen[1]){
            alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardWon.push(cardChosen);
        }
        else{
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optionTwoId].setAttribute('src','images/blank.png')
            alert('sorry try again');
        }
    resultDisplay.textContent = cardWon.length;
    clearArray();

        if(cardWon.length == (cardArray.length/2)){
        resultDisplay.textContent = 'You found them'
        }
    }
    function flipCard(){
    const cardId = this.getAttribute('dataId')//gets clicking image id
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    console.log(cardChosen);
    console.log(cardChosenIds);
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }

    }

    function clearArray(){
        cardChosen = [];
        cardChosenIds= [];
    }