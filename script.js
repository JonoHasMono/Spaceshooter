const bodyvar = document.createElement('div');
bodyvar.classList.add('bodyvar');
document.body.appendChild(bodyvar);

let startButton = document.createElement('div');
startButton.innerHTML = 'START';
startButton.setAttribute('class', 'start');
startButton.addEventListener('click', startGame);
bodyvar.appendChild(startButton);
let startButtonClicked = false;

let centerX = document.createElement('div');
centerX.classList.add('centerX');

let transition = document.createElement('div');
transition.classList.add('transition');

let characterBG = document.createElement('div');
characterBG.classList.add('characterBackground');

let chooseText = document.createElement('div');
chooseText.classList.add('text1');
chooseText.style.top = '5%';
chooseText.style.left = '50%';
chooseText.innerHTML = 'Choose your character';

let jono = new Object();
jono.health = 5;
jono.damage = 1;
jono.speed = 4;
jono.firate = 10;

let wdown = false;
let adown = false;
let sdown = false;
let ddown = false;

//! All messages from the first scene
let messageCreated = false;
let s1m1 = "Sometimes, when I'm home alone for the day, I'll turn off all the lights in my room and cry for several hours."
let s1m2 = "Am I proud of this? No, not really. Am I going to do anything about it? Of course not, goofball."

function startGame() {
    if(startButtonClicked == false) {
        startButtonClicked = true;
        console.log('Start Button clicked');
        startButton.style.animation = 'disappear 0.1s ease 1';
        startButton.style.animationFillMode = 'forwards';
        makeTransition();
        function makeTransition() {
            bodyvar.appendChild(transition);
            setTimeout(() => {
                bodyvar.removeChild(transition);
            }, 1500);
        }
        setTimeout(() => {
            bodyvar.removeChild(startButton);
        }, 200);
        setTimeout(() => {
            chooseYourCard();
            bodyvar.appendChild(chooseText);
            bodyvar.appendChild(characterBG);
            document.addEventListener('mousemove', function(e) {
                characterBG.style.left = (1440 - (1440 / 1.9325)) + (e.pageX / 32) + 'px';
                characterBG.style.top = (788 - (788 / 1.9325)) + (e.pageY / 32) + 'px';
            })
        }, 350);
        function chooseYourCard() {
            let jonoCard = document.createElement('img');
            jonoCard.setAttribute('src','images/jono_card.png');
            jonoCard.classList.add('card');
            jonoCard.style.left = '20%';
            jonoCard.addEventListener('click',function() {
                makeTransition();
                setTimeout(() => {
                    bodyvar.removeChild(characterBG);
                    bodyvar.removeChild(chooseText);
                    createCharacter('jono','images/jono_idle.png')
                    removeCards();
                    document.body.style.backgroundColor = 'rgb(100,150,240)'
                }, 350);
            })
            bodyvar.appendChild(jonoCard)
            function removeCards() {
                bodyvar.removeChild(jonoCard);
            }
        }

        function createCharacter(x,y) {
            let player = document.createElement('img')
            player.classList.add(x);
            player.setAttribute('src',y);
            player.style.left = '10%';
            player.style.top = '50%';
            bodyvar.appendChild(player);
            setTimeout(() => {
                startSceneOne();
            }, 2000);
        }

        function startSceneOne() {
            let messageBG = document.createElement('div');
            messageBG.classList.add('messageBG');
            bodyvar.appendChild(messageBG);

            let textMessage = document.createElement('div');
                    textMessage.classList.add('textMessage');
                    bodyvar.appendChild(textMessage);

            let nextMessage = document.createElement('div');
                    nextMessage.classList.add('nextMessage');
                    nextMessage.addEventListener('click', function() {
                        createNextMessage();
                    });
                    bodyvar.appendChild(nextMessage);

                    function createNextMessage() {
                        currentMsgValue++
                        if(currentMsgValue == 2) {
                            createMessage(sceneMsg2);
                            console.log('message stuff')
                        }
                    }

            let currentMsgValue = 1;
            let sceneMsg1 = s1m1;
            let sceneMsg2 = s1m2;
            setTimeout(() => {
                createMessage(sceneMsg1);
            }, 200);
                function createMessage(x) {
                    let i = 0;
                    let text = x;
                    let speed = 25;
                    console.log(x);
                    textMessage.innerHTML = "";
                    typewriter();
        
                    function typewriter() {
                        if (i < text.length) {
                          textMessage.innerHTML += text.charAt(i);
                          //console.log(textMessage.innerHTML);
                          i++;
                          setTimeout(typewriter, speed);
                        }
                      }
                }

                
        }
        document.addEventListener('keydown', logKeydown);
        function logKeydown(e) {
            let key = ` ${e.code}`
            key = key.toString();
            if (key == ' KeyW') {
                wdown = true;
               } else if (key == ' KeyA') {
                adown = true;
               } else if (key == ' KeyS') {
                sdown = true;
               } else if (key == ' KeyD') {
                ddown = true;
               }
        }

        document.addEventListener('keyup', logKeyup);
        function logKeyup(e) {
            let key = ` ${e.code}`
            key = key.toString();
            if (key == ' KeyW') {
                wdown = false;
               } else if (key == ' KeyA') {
                adown = false;
               } else if (key == ' KeyS') {
                sdown = false;
               } else if (key == ' KeyD') {
                ddown = false;
               }
        }
    }
}