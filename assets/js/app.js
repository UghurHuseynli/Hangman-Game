let img = document.getElementById('content-img-id');
let imageSectionStyle = document.getElementById('content-div-img');
let parentContentStyle = document.getElementById('content-text-parent');
let startButton = document.getElementById('btn-start');
let contentChild1Style = document.getElementById('cnt-txt-ch1');
let contentChild2Stle = document.getElementById('cnt-txt-ch2');
let findWordSection = document.getElementById('find-words');

let imgList = {
    Geralt: './assets/images/geralt of rivia.png',
    // Cirilla: './assets/images/cirilla.jpg',
    // Yennefer: './assets/images/Yennefer of Vengerberg.png',
    // Vesemir: './assets/images/Vesemir.jpg',
    // Dandelion: './assets/images/dandelion.jpg',
    // Zoltan: './assets/images/zoltan.jpg',
    // Triss: './assets/images/triss merigold.jpg',
    // Lambert: './assets/images/lambert.jpg',
    // Eskel: './assets/images/eskel.jpg',
    // Anna: './assets/images/anna henrietta.jpg',
    // Avallach: './assets/images/avallach.png',
    // Dikstra: './assets/images/dikstra.jpg',
    // Emhyr: './assets/images/emhyr var emreis.jpg',
    // Eredin: './assets/images/eredin.jpeg',
    // Radovid: './assets/images/radovid.jpg',
};


// Click enter 
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     startButton.click();
    }
});

// Click start 
startButton.addEventListener('click', function(){
    imageSectionStyle.style.display = 'flex';
    parentContentStyle.style.width = '30vw';
    startButton.style.display = 'none';
    contentChild1Style.style.display = 'block';
    contentChild2Stle.style.display = 'block';
    game();
});

function game(){
    for (const [key, value] of Object.entries(imgList)) {
        img.src = value;
        findWordSection.innerText = '';
        findWord(key);
    }
};

function findWord(words){
    let word = [];
    let emptyWord = []
    let guessed = [];
    let chance = 7;
    let findTrue = 0;
    // let win = 0;
    let inputSection = document.getElementById('input-tag');
    let guessedLettersObj = document.getElementById('guessedLetters')
    let guessedLetter = [];
    let guessNumber = document.getElementById('predictionChance');
    // let winningNumber = document.getElementById('wins');
    // winningNumber.innerText = win;
    guessNumber.innerText = chance;
    for (const i of words.toLowerCase()) {
        word.push(i);
        emptyWord.push('_')
    };
    findWordSection.append(Object.values(emptyWord).join(' '));
    console.log(Object.values(emptyWord).join(' '));
    document.addEventListener('keydown', function(event){
        if (event.keyCode === 65) {
            if(word.includes('a')){
                replaceString(word, emptyWord, 'a');
            } else{
                guessedLet(guessed, 'a');
                wrongChose(guessedLetter, 'a');
                chance--;
            }
            
        } else if (event.keyCode === 66){
            if(word.includes('b')){
                replaceString(word, emptyWord, 'b');
            } else{
                guessedLet(guessed, 'b');
                wrongChose(guessedLetter, 'b');
                chance--;
            }

        } else if (event.keyCode === 67){
            if(word.includes('c')){
                replaceString(word, emptyWord, 'c');
            } else{
                guessedLet(guessed, 'c');
                wrongChose(guessedLetter, 'c');
                chance--;
            }


        } else if (event.keyCode === 68){
            if(word.includes('d')){
                replaceString(word, emptyWord, 'd');
            } else{
                guessedLet(guessed, 'd');
                wrongChose(guessedLetter, 'd');
                chance--;
            }

        } else if (event.keyCode === 69){
            if(word.includes('e')){
                replaceString(word, emptyWord, 'e');
            } else{
                guessedLet(guessed, 'e');
                wrongChose(guessedLetter, 'e');
                chance--;
            }

        } else if (event.keyCode === 70){
            if(word.includes('f')){
                replaceString(word, emptyWord, 'f');
            } else{
                guessedLet(guessed, 'f');
                wrongChose(guessedLetter, 'f');
                chance--;
            }


        } else if (event.keyCode === 71){
            if(word.includes('g')){
                replaceString(word, emptyWord, 'g');
            } else{
                guessedLet(guessed, 'g');
                wrongChose(guessedLetter, 'g');
                chance--;
            }


        } else if (event.keyCode === 72){
            if(word.includes('h')){
                replaceString(word, emptyWord, 'h');
            } else{
                guessedLet(guessed, 'h');
                wrongChose(guessedLetter, 'h');
                chance--;
            }

        } else if (event.keyCode === 73){
            if(word.includes('i')){
                replaceString(word, emptyWord, 'i');
            } else{
                guessedLet(guessed, 'i');
                wrongChose(guessedLetter, 'i');
                chance--;
            }


        } else if (event.keyCode === 74){
            if(word.includes('j')){
                replaceString(word, emptyWord, 'j');
            } else{
                guessedLet(guessed, 'j');
                wrongChose(guessedLetter, 'j');
                chance--;
            }

        } else if (event.keyCode === 75){
            if(word.includes('k')){
                replaceString(word, emptyWord, 'k');
            } else{
                guessedLet(guessed, 'k');
                wrongChose(guessedLetter, 'k');
                chance--;
            }

        } else if (event.keyCode === 76){
            if(word.includes('l')){
                replaceString(word, emptyWord, 'l');
            } else{
                guessedLet(guessed, 'l');
                wrongChose(guessedLetter, 'l');
                chance--;
            }

        } else if (event.keyCode === 77){
            if(word.includes('m')){
                replaceString(word, emptyWord, 'm');
            } else{
                guessedLet(guessed, 'm');
                wrongChose(guessedLetter, 'm');
                chance--;
            }

        } else if (event.keyCode === 78){
            if(word.includes('n')){
                replaceString(word, emptyWord, 'n');
            } else{
                guessedLet(guessed, 'n');
                wrongChose(guessedLetter, 'n');
                chance--;
            }

        } else if (event.keyCode === 79){
            if(word.includes('o')){
                replaceString(word, emptyWord, 'o');
            } else{
                guessedLet(guessed, 'o');
                wrongChose(guessedLetter, 'o');
                chance--;
            }

        } else if (event.keyCode === 80){
            if(word.includes('p')){
                replaceString(word, emptyWord, 'p');
            } else{
                guessedLet(guessed, 'p');
                wrongChose(guessedLetter, 'p');
                chance--;
            }

        } else if (event.keyCode === 81){
            if(word.includes('q')){
                replaceString(word, emptyWord, 'q');
            } else{
                guessedLet(guessed, 'q');
                wrongChose(guessedLetter, 'q');
                chance--;
            }

        } else if (event.keyCode === 82){
            if(word.includes('r')){
                replaceString(word, emptyWord, 'r');
            } else{
                guessedLet(guessed, 'r');
                wrongChose(guessedLetter, 'r');
                chance--;
            }

        } else if (event.keyCode === 83){
            if(word.includes('s')){
                replaceString(word, emptyWord, 's');
            } else{
                guessedLet(guessed, 's');
                wrongChose(guessedLetter, 's');
                chance--;
            }

        } else if (event.keyCode === 84){
            if(word.includes('t')){
                replaceString(word, emptyWord, 't');
            } else{
                guessedLet(guessed, 't');
                wrongChose(guessedLetter, 't');
                chance--;
            }

        } else if (event.keyCode === 85){
            if(word.includes('u')){
                replaceString(word, emptyWord, 'u');
            } else{
                guessedLet(guessed, 'u');
                wrongChose(guessedLetter, 'u');
                chance--;
            }

        } else if (event.keyCode === 86){
            if(word.includes('v')){
                replaceString(word, emptyWord, 'v');
            } else{
                guessedLet(guessed, 'v');
                wrongChose(guessedLetter, 'v');
                chance--;
            }

        } else if (event.keyCode === 87){
            if(word.includes('w')){
                replaceString(word, emptyWord, 'w');
            } else{
                guessedLet(guessed, 'w');
                wrongChose(guessedLetter, 'w');
                chance--;
            }

        } else if (event.keyCode === 88){
            if(word.includes('x')){
                replaceString(word, emptyWord, 'x');
            } else{
                guessedLet(guessed, 'x');
                wrongChose(guessedLetter, 'x');
                chance--;
            }

        } else if (event.keyCode === 89){
            if(word.includes('y')){
                replaceString(word, emptyWord, 'y');
            } else{
                guessedLet(guessed, 'y');
                wrongChose(guessedLetter, 'y');
                chance--;
            }

        } else if (event.keyCode === 90){
            if(word.includes('z')){
                replaceString(word, emptyWord, 'z');
            } else{
                guessedLet(guessed, 'z', chance);
                wrongChose(guessedLetter, 'z');
                chance--;
            }
        }
        if(chance === 0){
            guessLast(guessedLetter);
            guessedLettersObj.innerText = '';
            inputSection.value = '';
        } else{
            findWordSection.innerText = emptyWord.join(' ');  
            // winningNumber.innerText = win;
            guessNumber.innerText = chance;
            guessedLettersObj.innerText = `[${guessedLetter}]`
        }
    });
};

function replaceString(word, emptyWord, myEle){
    for(let i = 0; i < word.length; i++){
        let index = word.indexOf(myEle, i);
        emptyWord[index] = myEle;
    }
    console.log(emptyWord)
    return emptyWord;
}


function guessedLet(list, word){
    if(!list.includes(word)){
        list.push(word);
    } return list;
};

function wrongChose(list, word){
    if(!list.includes(word)){
        list.push(word);
    } return list;
};

// Click restart 
function guessLast(list){
    startButton.style.display = 'block';
    startButton.innerHTML = 'Restart';
    parentContentStyle.style.width = '60vw';
    contentChild1Style.style.display = 'none';
    contentChild2Stle.style.display = 'none';
    img.src = './assets/images/game over.jpg';
    findWordSection.innerText = '';
    list = [];
    return list;
};




