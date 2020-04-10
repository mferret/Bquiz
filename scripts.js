//Array Questions

let data = [
   {
        game: 'Nuggets',
        questions: [
            {questionName:'Quel est le vrai prénom de Chuck Norris?', answers: ["Dave Norris","Johnny Norris", 'Carlos Norris', 'Philippe Norris'], rightAnswer:2},
            {questionName:"Laquelle de ces écoles n'existe pas ?", answers: ['Une école de Sorcellerie', 'Une école de dresseur de Pokémon','Une école de Ninja','Une école de Jedi'], rightAnswer:1},
            {questionName:'Quel était le premier nom du RER, le Réseau Express Régional', answers: ['ZUT','CROTTE','MERDE','ENFOIRE'], rightAnswer:2},     
            {questionName:"Dans la liste suivante qu'est ce qui n'était pas autorisé à l'école en France dans les années 50 ?", answers: ['Ecrire au stylo bille','Arrêter les cours à 14 ans', 'Frapper les enfants', "Boire de l'alcool"], rightAnswer:0}, 
            {questionName:'Lequel de ces partis politiques existe vraiment ?', answers: ['Le parti Anti-Powerpoint', 'Le parti Anti-Pasti', 'Le parti Anti-Stylo-Bille', 'la parti Anti-Assiduité'], rightAnswer:0}, 
            {questionName:'Laquelle de ces infos people est vraie ?', answers: ['Tom Cruise a 6 doigts de pied','Sylvester Stallone a un seul testicule', 'André-Pierre Gignac a deux pieds gauches', 'Mark Wahlberg a 3 tétons'], rightAnswer:3}, 
            {questionName:"Un seul de ces magazines Tabloïds n'existe pas. Est-ce ?", answers: ['Ouah !','Psst !', 'Waaat ?', 'Scred !'], rightAnswer: 2},    
            {questionName:'Quelle affirmation esur les Japonais est vraie ?', answers: ['Ils sont en voie de disparition',"Leur population va doubler d'ici 25 ans", 'En 2980, leur île va se coller à la Chine', "Ce n'est pas eux qui ont inventé les sushis"], rightAnswer:0}, 
            {questionName: "Quelle est la particularité de l'usine d'assemblage du constructeur Boeing à Everett, au nord de Seattle", answers: ["C'est le plus grand bâtiment au monde", "C'est le plus haut bâtiment au monde", "C'est le plus plat bâtiment au monde", "C'est le plus petit bâtiment au monde"], rightAnswer:0}, 
            {questionName:"A quoi sert le bouton rouge sur le bureau du président Donald Trump", answers: ['A lâcher une bombe nucléaire','A appeler le chef du FBI', 'A passer en navigation privée sur Internet', 'A commander du Coca'], rightAnswer: 3},
            {questionName:"Quelle est la particularité de l'autruche", answers: ["Elle n'a que deux doigts","C'est l'oiseau terrestre le plus rapide", "C'est l'oiseau le plus gros sur Terre", 'A, B, C et donc D'], rightAnswer: 3},
            {questionName:"Laquelle de ces lois est fausse", answers: ["En France, il est interdit d'appeler un cochon Napoléon","Dans le Minnesota, il est interdit d'exciter les putois", "A Singapour, il est interdit de peindre sa maison en rose", "Dans le vermont, il est interdit de siffler sous l'eau"], rightAnswer: 2},
            {questionName:"Le tout premier SMS a été envoyé le 3 décembre 1992 par Neil Papworth. Quel était le contenu du message ?", answers: ['Merry Christmas','Happy Hanukkah', 'Joyeuse Saint Valentin', 'Sa va ?'], rightAnswer: 0}, 
            {questionName:"Comment appelle-t-on la pédale d'effet que l'on branche parfois sur les guitares éléctriques ? Est-ce :", answers: ['Une pédale Cui CUi','Une pédale Wah Wah', 'Une pédale Coin Coin', 'Une pédale Miaou Miaou'], rightAnswer: 1}, 
            {questionName:"Une seule de ces informations sur le monde animal est vraie, laquelle ?", answers: ["Le cou de la girafe n'a qu'une vertèbre de plus que l'être humain","Comme l'être humain, le koala a des empreintes digitales.", "La tortues a de toutes petites dents de lait", "Les chats sont en fait des extra-terresrtes déguisés en chats"], rightAnswer: 1}, 
            {questionName:"Quelle particularité possède la ville de Budford aux USA ?", answers: ["C'est la moins peuplée du monde","C'est la plus moche du monde", "C'est la plus étendue du monde", "On y sert le meilleur café du monde"], rightAnswer: 0}, 
            {questionName:"Les créateurs de 'South Park' ont été nommes aux Oscars pour une chanson de film. Comment sont-ils venurs à la cérémonie ?", answers: ['En limousine, ce serait logique','En robe de soirée, ce serrait extravagant', 'Sous acides, ce serait interdit par la loi', 'A, B, C et donc D, ce serait assez classe'], rightAnswer: 3}, 
            {questionName:"Quand il est 8h30 à Paris, quelle heure est-il à Singapour ?", answers: ['13h30','14h30', '15h30', '16h45'], rightAnswer: 1},  
            {questionName:"Parmi ces 4 mots, leque est un meuble IKEA", answers: ['Päivä','Fjällbo', 'Yrjänä', 'Boofmöalük'], rightAnswer: 1},   
            {questionName:"Quel 'Comment devenir ...' a été le plus recherché sur Google en 2017", answers: ['Belle','Célèbre', 'Con', 'Riche'], rightAnswer: 3},         
        ]
    },
    {
        game: 'Sel ou Poivre',
        questions: [
            {questionName:'A plusieurs bras', answers: ['Donald Trump','une étoile de mer', 'les 2'], rightAnswer:2},
            {questionName:'Vit à la Maison Blanche', answers: ['Donald Trump','une étoile de mer', 'les 2'], rightAnswer:0},
            {questionName:"Est sous l'eau", answers: ['Donald Trump','une étoile de mer', 'les 2'], rightAnswer:2},
            {questionName:"Apparaît dans Maman j'ai raté l'avion", answers: ['Donald Trump','une étoile de mer', 'les 2'], rightAnswer:0},
            {questionName:"Apparaît dans Bob l'Eponge", answers: ['Donald Trump','une étoile de mer', 'les 2'], rightAnswer:1},
            {questionName:"C'est un prédateur", answers: ['Donald Trump','une étoile de mer', 'les 2'], rightAnswer:2},
            {questionName:"S'inquiète du changement climatique", answers: ['Donald Trump','une étoile de mer', 'les 2'], rightAnswer:1},
            {questionName:'Peut faire rire', answers: ['Un Clone','Un Clown', 'les 2'], rightAnswer:1},
            {questionName:'Peut faire flipper', answers: ['Un Clone','Un Clown', 'les 2'], rightAnswer:2},
            {questionName:'Ils se ressemblent tous', answers: ['Un Clone','Un Clown', 'les 2'], rightAnswer:0},
            {questionName:'Il y en a dans Star Wars', answers: ['Un Clone','Un Clown', 'les 2'], rightAnswer:0},
            {questionName:'Il y en a dans des films', answers: ['Un Clone','Un Clown', 'les 2'], rightAnswer:2},
       
        ]
    }
]

// Default data

let currentSection = 0;
let currentQuestion = 0;
let currentScore = 0;


//Event Listener

window.addEventListener('load', ()=> {
    
    displayQuestion()


    //Replies click
    const btnReplyA = document.querySelector("#input-nuggets-a");
    btnReplyA.addEventListener("click", checkAnswer)
    const btnReplyB = document.querySelector("#input-nuggets-b");
    btnReplyB.addEventListener("click", checkAnswer)
    const btnReplyC = document.querySelector("#input-nuggets-c");
    btnReplyC.addEventListener("click", checkAnswer)
    const btnReplyD = document.querySelector("#input-nuggets-d");
    btnReplyD.addEventListener("click", checkAnswer)

    // const btnReplyA = document.querySelector("#input-soup-a");
    // btnReplyA.addEventListener("click", checkAnswer)
    // const btnReplyB = document.querySelector("#input-soup-b");
    // btnReplyB.addEventListener("click", checkAnswer)
    // const btnReplyC = document.querySelector("#input-soup-c");
    // btnReplyC.addEventListener("click", checkAnswer)

    

    checkAnswer()
    //Team selection
    // const btnKetchup = document.querySelector("#btn-ketchup");
    // btnKetchup.addEventListener("click", teamSelect)
    // const btnMayo = document.querySelector("#btn-mayo");
    // btnMayo.addEventListener("click", teamSelect)

})

//Functions

function displayQuestion(){

    document.querySelector("#bannersection").src = section[currentSection]
    // document.querySelector("#section-nuggets").innerText = data[currentSection].game
    document.querySelector("#input-nuggets").innerText = data[currentSection].questions[currentQuestion].questionName
    document.querySelector("#input-nuggets-a").innerText = data[currentSection].questions[currentQuestion].answers[0]
    document.querySelector("#input-nuggets-b").innerText = data[currentSection].questions[currentQuestion].answers[1]   
    document.querySelector("#input-nuggets-c").innerText = data[currentSection].questions[currentQuestion].answers[2]
    document.querySelector("#input-nuggets-d").innerText = data[currentSection].questions[currentQuestion].answers[3]


}
//goes from a question to another
function nuggetsIteration(currentQuestion){
    for(let = i = 0; i < currentQuestion.length; i++)
    // if (i > 9){
    //     return currentQuestion
    // }
    // else (i < 9){
    //     currentSection ++
    //     currentQuestion = 0
    //     console.log(currentQuestion)
    //     console.log(currentSection)
    // }
    return currentQuestion; 

}
let section =["./Assets/soup.gif","./Assets/nuggets.gif"]
// sources of images to display the score
let score =["./Assets/frame_00_delay-5s.png","./Assets/frame_01_delay-1s.png","./Assets/frame_02_delay-1s.png","./Assets/frame_03_delay-1s.png","./Assets/frame_04_delay-1s.png","./Assets/frame_05_delay-1s.png","./Assets/frame_06_delay-1s.png","./Assets/frame_07_delay-1s.png","./Assets/frame_08_delay-1s.png","./Assets/frame_09_delay-1s.png","./Assets/frame_10_delay-1s.png","./Assets/frame_11_delay-1s.png","./Assets/frame_12_delay-1s.png","./Assets/frame_13_delay-1s.png","./Assets/frame_14_delay-1s.png","./Assets/frame_15_delay-1s.png","./Assets/frame_16_delay-1s.png","./Assets/frame_17_delay-1s.png","./Assets/frame_18_delay-1s.png","./Assets/frame_19_delay-1s.png","./Assets/frame_20_delay-1s.png","./Assets/frame_21_delay-1s.png","./Assets/frame_22_delay-1s.png","./Assets/frame_23_delay-1s.png","./Assets/frame_24_delay-1s.png","./Assets/frame_25_delay-5s.png"]



function checkAnswer(event){
    const question =  data[currentSection].questions[currentQuestion]
    if (event.target.innerText === question.answers[question.rightAnswer]){
        console.log("correct"); 
        currentScore ++
    } else {
        console.log("wrong answer")
        // manipulation du DOM pour afficher la bonne réponse
    }

    if (currentQuestion < data[currentSection].questions.length-1) {
        currentQuestion++
    } else { 
        currentSection ++
        currentQuestion = 0 
    }//     if (currentQuestion < data.game['Nuggets'].questions.length){
    //       currentQuestion;   
    //     }
       
    // }   
    // else{ soupIteration()
    // }

    // // if{
    // //     currentQuestion = data[questions.length]
        
    // // }
    //check currentQUestion.lenght < currentQuestion size if true reinitialize  questionQuestion and move to currebtSection
    displayAnswer(currentScore)
    
         

    console.log(currentScore)

     displayQuestion()
}

function displayAnswer(currentScore){

    document.querySelector("#scoreimg").src = score[currentScore]
 //console.log(score[currentScore])
    console.dir(document.querySelector("#scoreimg"))
}

// function displaySection(currentSection){
// document.querySelector("#bannersection").src = section[currentSection]
// }
// function soupIteration()

// console.log(currentScore)


// function updateScore(checkAnswer){
//      for(let = score.imageScore = 0; score.imageScore < checkAnswer.length; score.imageScore++)
//      return 

// }

// function switchSection(data) {
//     // ... your code goes here
//     if (number === 0){
//       return "00";
//     } else if (number < 10) {
//       return "0" + number.toString();
//     } else {
//       return number.toString();
//     }
//   }



// 1) Loop throught the sections
// 2) Reveal the right answers with async function and await to make a transition on the rightAnswer
// 3) active sections
// 4) Match right answers

