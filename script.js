// Variables

const forwardBtn = document.querySelector('.forward');
const backwardBtn = document.querySelector('.backward');
const randomEl = document.querySelector('.surprise-btn');
const imageEl = document.querySelector('#person-img');
const nameEl = document.querySelector('.person-name');
const professionEl = document.querySelector('.proffession');
const descEl = document.querySelector('.description');


let personDetails = [
    {
        id: 1,
        name: "Abhishek Hallur",
        profession: "The Boss",
        image : "images/insta profile pic.jpg",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo obcaecati voluptates dolore. Eveniet ipsum voluptatibus nam sequi, earum libero quia.lore i akl n lfvaoi  vanb  v aoivnhoia pibvoiwa"
    },
    {
        id:2,
        name:"Mokey D Luffy",
        profession:"Pirate King",
        image: "images/Luffy.png",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus labore fuga, blanditiis asperiores reprehenderit fugit voluptatem qui, sint laudantium ut unde laborum vitae quibusdam debitis, libero cumque consequuntur praesentium reiciendis!*20"
    },
    {
        id:3,
        name:"Naruto Uzumaki",
        profession:"The Hokage",
        image:"images/Naruto.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam necessitatibus pariatur vero eum perferendis iure, nam maxime quod assumenda ad deleniti mollitia consectetur deserunt exercitationem ipsa reprehenderit, dignissimos blanditiis ullam."
    },
    {
        id:4,
        name:"Roronoa Zoro",
        profession:"King of Hell",
        image:"images/Zoro.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia nam officia, dicta totam autem sit iste quae similique perferendis illo voluptas cumque deserunt quod impedit dolorum, libero, blanditiis molestiae."
    }
];

let currentItem = 0;

// To show next person review

forwardBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > personDetails.length -1)
        currentItem = 0;
    showCurrentItem(currentItem);

});

// To show previous person review

backwardBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem <= 0)
        currentItem = 0;

    showCurrentItem(currentItem);
})

// To change the DOM details

function showCurrentItem(item){
    imageEl.src = personDetails[item].image;
    nameEl.textContent = personDetails[item].name;
    professionEl.textContent = personDetails[item].profession;
    descEl.textContent = personDetails[item].desc;
}


// To show random person review on clicking surprise me button

randomEl.addEventListener('click', function(){

    currentItem = Math.floor(Math.random()* personDetails.length);

    showCurrentItem(currentItem);
})
