    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        location.reload();
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let keuze = randomizer(arrayLength);
        let keuze1 = randomizer(arrayLength);
        let keuze2 = randomizer(arrayLength);
        let woord1 = onderwerp[keuze];
        let woord2 = werkwoord[keuze1];
        let woord3 = restwoord[keuze2];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 3; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["Damon", "He", "Leon"];
    const werkwoord = ["Plays", "Hates", "Makes Jokes of"];
    const restwoord = ["Call Of Duty", "Boardgames", "Videogames"];
        
    let plaatjes = ["https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB16Ojbd.img?h=571&w=799&m=6&q=60&o=f&l=f", "https://static1.fjcdn.com/comments/These+comics+about+the+busses+and+such+they+re+_9e3f7c83c5edda875c039a9c8aa7cbd1.jpg", "https://i.redd.it/3ajwvs33hmt21.jpg", "https://media.tenor.com/images/b8802f9ae65229efd44ca81546d76bd1/tenor.gif"]
    let arrayLength = onderwerp.length;
