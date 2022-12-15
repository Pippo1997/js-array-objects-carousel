function goToNextSlide(){

    if (itemActive < imagesArray.length -1) {

        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove(`active`);
    
        itemActive++;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add(`active`);
    
        }
    
        else {
    
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove(`active`);

        itemActive = 0;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add(`active`);
    
        }

}

//Creo 5 oggetti a dentro un array 
const imagesArray = [
    {
        image:"01.webp",
        title:"Spiderman",
        description:"Explore a new chapter in Marvel's Spider-Man universe as a more experienced Peter Parker. Starring one of the world's most iconic Super Heroes, Marvel's Spider-Man features the acrobatic abilities.",
    },
    {
        image:"02.webp",
        title:"Ratchet & Clank",
        description:"Ratchet & Clank is a series of action platformer and third-person shooter video games. The franchise was created and developed by Insomniac Games and published by Sony Interactive Entertainment for PlayStation consoles",
    },
    {
        image:"03.webp",
        title:"Fortnite",
        description:"Bleah",
    },
    {
        image:"04.webp",
        title:"Stray",
        description:"Stray is a third-person cat adventure game set amidst the detailed, neon-lit alleys of a decaying cybercity and the murky environments of its seedy underbelly.",
    },
    {
        image:"05.webp",
        title:"Marvel Avengers game",
        description:"Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
    } 
]

// Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = ``;
let itemsThumbsnails = ``;

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `
    <div class="item">
        <img src="./img/${imagesArray[i].image}">
    </div>
    <div class="item-description">
        <h2>${imagesArray[i].title}</h2>
        <p>${imagesArray[i].description}</p>
    </div>`

    itemsThumbsnails += `<div class="thumb"><img src="./img/${imagesArray[i].image}"></div>`;
 }

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

const thumbnailsPreview = document.querySelector(`.thumbnails`);
thumbnailsPreview.innerHTML = itemsThumbsnails;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const thumbnails = document.getElementsByClassName(`thumb`)
thumbnails[itemActive].classList.add(`active`);

for( let i=0; i < thumbnails.length; i++){
    let thumb = thumbnails[i];
    thumb.addEventListener('click', function(){

    items[itemActive].classList.remove('active');
    circles[itemActive].classList.remove('active');
    thumbnails[itemActive].classList.remove('active');

    itemActive = i

    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    })
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// **********************************************

next.addEventListener('click', function(){

    goToNextSlide();
 
});

// ***************************************************

prev.addEventListener('click', function(){

    if (itemActive > 0){

        //verifico l'elemento attivo (itemActive)
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove(`active`);

        //decremento il suo valore di 1
        itemActive--;

        //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
        //stessa cosa per i cerchi
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add(`active`);

    }

    else{

        //verifico l'elemento attivo (itemActive)
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove(`active`);

        //decremento il suo valore di 1
        itemActive = imagesArray.length -1;

        //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
        //stessa cosa per i cerchi
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add(`active`);

    }

})

// creo un set interval e al suo interno ci metto IF next per scorrere le img automaticamente

let myInterval = setInterval(goToNextSlide,2000);

document.getElementById(`play`).addEventListener(`click`, function(){
    myInterval = setInterval(goToNextSlide,2000);
})

document.getElementById(`stop`).addEventListener(`click`, function(){
    clearInterval(myInterval);
})

