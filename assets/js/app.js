let img = document.getElementById('content-img-id');
let imageSectionStyle = document.getElementById('content-div-img');
let parentContentStyle = document.getElementById('content-text-parent');
let startButton = document.getElementById('btn-start');
let contentChild1Style = document.getElementById('cnt-txt-ch1');
let contentChild2Stle = document.getElementById('cnt-txt-ch2');
let findWordSection = document.getElementById('find-words');
let inputSection = document.getElementById('input-tag');
let guessedLettersObj = document.getElementById('guessedLetters');
let guessNumber = document.getElementById('predictionChance');

let imgList = {
    Geralt: './assets/images/geralt of rivia.png',
    Cirilla: './assets/images/cirilla.jpg',
    Yennefer: './assets/images/Yennefer of Vengerberg.png',
    Vesemir: './assets/images/Vesemir.jpg',
    Dandelion: './assets/images/dandelion.jpg',
    Zoltan: './assets/images/zoltan.jpg',
    Triss: './assets/images/triss merigold.jpg',
    Lambert: './assets/images/lambert.jpg',
    Eskel: './assets/images/eskel.jpg',
    Anna: './assets/images/anna henrietta.jpg',
    Avallach: './assets/images/avallach.png',
    Dikstra: './assets/images/dikstra.jpg',
    Emhyr: './assets/images/emhyr var emreis.jpg',
    Eredin: './assets/images/eredin.jpeg',
    Radovid: './assets/images/radovid.jpg',
};

// Click start 
startButton.addEventListener('click', function () {
    imageSectionStyle.style.display = 'flex';
    parentContentStyle.style.width = '30vw';
    startButton.style.display = 'none';
    contentChild1Style.style.display = 'block';
    contentChild2Stle.style.display = 'block';
    game();
});

let count = 0;
let win = 0;
let winSection = document.getElementById('wins');
winSection.innerText = '0';
function game() {
    chance = 7;
    img.src = Object.values(imgList)[count];
    findWordSection.append(Object.keys(imgList).join(' '));
    found = findWord(Object.keys(imgList)[count]);
    inputSection.value = '';
    guessedLettersObj.innerText = '[]';
    guessedLetter = [];

}
// let guessed = [];
let guessedLetter = [];
let emptyWord
let word
let chance = 7;
let string;
const findWord = (text) => {
    string = text
    word = string.toLowerCase().split("")
    emptyWord = Array(string.length).fill("_")


    findWordSection.innerText = string.replace(/[a-z]/gi, '_');

    guessNumber.innerText = chance;
}
inputSection.addEventListener("keyup", (event) => {
    if (chance === 0) {
        guessLast(guessedLetter);
        guessedLettersObj.innerText = '';
        inputSection.value = '';

    } else {
        let pressedKey = event.key.toLowerCase();
        if (word.includes(pressedKey)) {
            emptyWord = replaceString(word, emptyWord, pressedKey)
            findWordSection.innerText = emptyWord.join('  ')
            if (emptyWord.join('') === string.toLowerCase()) {
                count++;
                win++;
                winSection.innerText = win;
                if (win === 15){
                    img.src = './assets/images/win.webp';
                    setTimeout(() => {
                        let winAudio = new Audio('./assets/sound/levelWin.mp4');
                        winAudio.play();
                        startButton.style.display = 'none';
                        contentChild1Style.style.display = 'none';
                        contentChild2Stle.style.display = 'none';
                    }, 500);
                }
                else{
                    let finalAudio = new Audio('./assets/sound/stepWin.wav');
                    finalAudio.play();
                    setTimeout(() => {
                        game();
                    }, 500)
                }
            }
        } else {
            chance--;
            guessNumber.innerText = chance;
            guessedLetter = guessedLet(guessedLetter, pressedKey);
            guessedLettersObj.innerText = `[${guessedLetter}]`
        }
    }

});


function replaceString(word, emptyWord, myEle) {
    let indexes = word.map((element, index) => {
        if (element === myEle) {
            return index
        }
    });
    for (let i of indexes) {
        if (!!i || i === 0)
            emptyWord[i] = myEle;
    }
    return emptyWord;
}


function guessedLet(list, word) {
    if (!list.includes(word)) {
        list.push(word);
    }
    return list;
};

// Click restart 
function guessLast(list) {
    let loseAudio = new Audio('./assets/sound/lose.mp4');
    loseAudio.playbackRate = 1.5;
    loseAudio.play();
    startButton.style.display = 'block';
    startButton.innerHTML = 'Restart';
    parentContentStyle.style.width = '60vw';
    contentChild1Style.style.display = 'none';
    contentChild2Stle.style.display = 'none';
    img.src = './assets/images/game over.jpg';
    findWordSection.innerText = '';
    guessedLetter = [];
    inputSection.innertext = '';
    list = [];
    inputSection.removeEventListener("keyup", (event) => {
        if (chance === 0) {
            guessLast(guessedLetter);
            guessedLettersObj.innerText = '';
            inputSection.value = '';

        } else {
            let pressedKey = event.key.toLowerCase();
            if (word.includes(pressedKey)) {
                emptyWord = replaceString(word, emptyWord, pressedKey)
                findWordSection.innerText = emptyWord.join('  ')
                if (emptyWord.join('') === string.toLowerCase()) {
                    console.log("here")
                    count++;
                    setTimeout(() => {
                        game();
                    }, 500)
                }
            } else {
                console.log(chance)
                chance--;
            }
        }

    })
    return list;
};