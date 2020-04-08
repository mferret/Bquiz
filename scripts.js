let data = [
   {
        game: 'Nuggets',
        questions: [
            {questionName:'Quel est le vrai prénom de Chuck Norris?', answers: ["Dave Norris","Johnny Norris", 'Carlos Norris', 'Philippe Norris'], rightAnswer:2},
            {questionName:"Laquelle de ces écoles n'existe pas ?", answers: ['Une école de Sorcellerie', 'Une école de dresseur de Pokémon','Une école de Ninja', 'Une école de dresseur de Pokémon', 'Une école de Jedi'], rightAnswer:1},
            {questionName:'Quel était lepremier nom du RER, le Réseau Express Régional', answers: ['ZUT','CROTTE','MERDE','ENFOIRE'], rightAnswer:2},     
            {questionName:"Dans la liste suivante qu'est ce qui n'était pas autorisé à l'école en France dans les années 50 ?", answers: ['Ecrire au stylo bille','Arrêter les courds à 14 ans', 'Frapper les enfants', 
            "Boire de l'alcool"], rightAnswer:0}, 
            {questionName:'Lequel de ces partis politiques existe vraiment ?', answers: ['Le parti Anti-Powerpoint', 'Le parti Anti-Pasti', 'Le parti Anti-Stylo-Bille', 'la parti Anti-Assiduité'], rightAnswer:0}, 
            {questionName:'Laquelle de ces infos people est vraie ?', answers: ['Tom Cruise a 6 doigts de pied','Sylvester Stallone a un seul testicule', 'André-Pierre Gignac a deux pieds gauches', 'Mark Wahlberg a 3 tétons'], rightAnswer:3}, 
            {questionName:"Un seul de ces magazines Tabloïds n'existe pas. Est-ce ?", answers: ['Ouah !','Psst !', 'Waaat ?', 'Scred !'], rightAnswer: 2},    
            {questionName:'Quelle affirmation esur les Japonais est vraie ?', answers: ['Ils sont en voie de disparition',"Leur population va doubler d'ici 25 ans", 'En 2980, leur île va se coller à la Chine', "Ce n'est pas eux qui ont inventé les sushis"], rightAnswer:0}, 
            {questionName: "Quelle est la particularité de l'usine d'assemblage du constructeur Boeing à Everett, au nord de Seattle", answers: ["C'est le plus grand bâtiment au monde", "C'est le plus haut bâtiment au monde", "C'est le plus plat bâtiment au monde", "C'est le plus petit bâtiment au monde"], rightAnswer:0}, 
            //{questionName:'quel est ton prenom?', answers: ['a','b']},     
        ]
    },
    {
        game: 'Sel ou Poivre',
        questions: [
            {questionName:'quel est ton prenom?', answers: ['a','b'], rightAnswer:0},
            {questionName:'quel est ton prenom?', answers: ['a','b'], rightAnswer:1},
            {questionName:'quel est ton prenom?', answers: ['a','b']},            
        ]
    }
]

let score =[
    {imageScore:["./Assets/frame_00_delay-5s.png","./Assets/frame_01_delay-1s.png","./Assets/frame_02_delay-1s.png","./Assets/frame_03_delay-1s.png","./Assets/frame_04_delay-1s.png","./Assets/frame_05_delay-1s.png","./Assets/frame_06_delay-1s.png","./Assets/frame_07_delay-1s.png","./Assets/frame_08_delay-1s.png","./Assets/frame_09_delay-1s.png","./Assets/frame_10_delay-1s.png","./Assets/frame_11_delay-1s.png","./Assets/frame_12_delay-1s.png","./Assets/frame_13_delay-1s.png","./Assets/frame_14_delay-1s.png","./Assets/frame_15_delay-1s.png","./Assets/frame_16_delay-1s.png","./Assets/frame_17_delay-1s.png","./Assets/frame_18_delay-1s.png","./Assets/frame_19_delay-1s.png","./Assets/frame_20_delay-1s.png","./Assets/frame_21_delay-1s.png","./Assets/frame_22_delay-1s.png","./Assets/frame_23_delay-1s.png","./Assets/frame_24_delay-1s.png","./Assets/frame_25_delay-5s.png"]}

]

let currentSection = 0;
let currentQuestion = 0;
let currentScore = 0;

window.addEventListener('load', ()=> {
    
    displayQuestion()
    //document.querySelector("#input-nuggets-b").innerText = data[currentSection].questions[currentQuestion].answers

    const btnReplyA = document.querySelector("#input-nuggets-a");
    btnReplyA.addEventListener("click", checkAnswer)
    const btnReplyB = document.querySelector("#input-nuggets-b");
    btnReplyB.addEventListener("click", checkAnswer)
    const btnReplyC = document.querySelector("#input-nuggets-c");
    btnReplyC.addEventListener("click", checkAnswer)
    const btnReplyD = document.querySelector("#input-nuggets-d");
    btnReplyD.addEventListener("click", checkAnswer)

})

function displayQuestion(){
    document.querySelector("#section-name").innerText = data[currentSection].game
    document.querySelector("#input-nuggets").innerText = data[currentSection].questions[currentQuestion].questionName
    document.querySelector("#input-nuggets-a").innerText = data[currentSection].questions[currentQuestion].answers[0]
    document.querySelector("#input-nuggets-b").innerText = data[currentSection].questions[currentQuestion].answers[1]   
    document.querySelector("#input-nuggets-c").innerText = data[currentSection].questions[currentQuestion].answers[2]
    document.querySelector("#input-nuggets-d").innerText = data[currentSection].questions[currentQuestion].answers[3]
}

function nuggetsIteration(currentQuestion){
    for(let = i = 0; i < currentQuestion.length; i++)
    return currentQuestion; 

}

function checkAnswer(event){
    const question =  data[currentSection].questions[currentQuestion]
    if (event.target.innerText === question.answers[question.rightAnswer]){
        // increment score
        // faire la manip DOM correspondante
        return score
    } else {

        // manipulation du DOM pour afficher la bonne réponse
    }
    currentQuestion++ //check currentQUestion.lenght < currentQuestion size if true reinitialize  questionQuestion and move to currebtSection
    displayQuestion()
}

function updateScore(checkAnswer){
     for(let = score.imageScore = 0; score.imageScore < checkAnswer.length; score.imageScore++)
     return 

}




// 1) Loop throught the sections
// 2) Reveal the right answers with async function and await to make a transition on the rightAnswer
// 3) active sections
// 4) Match right answers

