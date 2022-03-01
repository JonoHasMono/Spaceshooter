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

let chosenCharacter = "";

let jono = new Object();
jono.health = 5;
jono.damage = 1;
jono.speed = 4;
jono.firate = 10;

let wdown = false;
let adown = false;
let sdown = false;
let ddown = false;

//! All voice sound effects
let voiceJono = new Audio('sounds/voice_jono.mp3')
let voiceRonald = new Audio('sounds/voice_ronald.mp3')

//! All messages from the first scene
let sceneMsg1 = "";
let sceneMsg2 = "";
let sceneMsg3 = "";
let sceneMsg4 = "";
let sceneMsg5 = "";
let sceneMsg6 = "";
let sceneMsg7 = "";
let sceneMsg8 = "";
let messageCreated = false;
let messageIcon = document.createElement('img');
let messageIconChar = '';
let messageIconEnemy = '';
messageIcon.classList.add('messageIcon');
let s1m1j = "Ayo, I think you took a wrong turn at the Anime Convention, homie."
let s1m2j = "Are you insulting my costume, beta male?"
let s1m3j = "That wasn't very poggers of you."
let s1m4j = "..."
let s1m5j = "That was, without a doubt,"
let s1m6j = "The dumbest thing that I have ever heard."
let s1m7j = "You shut your mouth about my costume, virgin!"
let s1m8j = "Me and my friends ought to teach you a lesson!"

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
                characterBG.style.left = ((window.innerWidth) - ((window.innerWidth) / 1.9325)) + (e.pageX / 32) + 'px';
                characterBG.style.top = ((window.innerHeight) - ((window.innerHeight) / 1.9325)) + (e.pageY / 32) + 'px';
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
            chosenCharacter = x;
            setTimeout(() => {
                startSceneOne();
            }, 2000);
        }

        function startSceneOne() {
            if(chosenCharacter == 'jono') {
                sceneMsg1 = s1m1j
                sceneMsg2 = s1m2j;
                sceneMsg3 = s1m3j;
                sceneMsg4 = s1m4j;
                sceneMsg5 = s1m5j;
                sceneMsg6 = s1m6j;
                sceneMsg7 = s1m7j;
                sceneMsg8 = s1m8j;
                messageIconChar1 = "images/" + chosenCharacter + "_exp_1.png"
                messageIconChar2 = "images/" + chosenCharacter + "_exp_2.png"
                messageIconChar3 = "images/" + chosenCharacter + "_exp_3.png"
                messageIconEnemy = 'images/ronald_exp_1.png'
            }
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

                    messageIcon.setAttribute('src', messageIconChar1);
                    messageIcon.classList.add('messageIconAnim')
                    bodyvar.appendChild(nextMessage);
                    bodyvar.appendChild(messageIcon);

                    function createNextMessage() {
                        currentMsgValue++
                        if(currentMsgValue == 2) {
                            messageIcon.removeAttribute('src', messageIconChar1);
                            messageIcon.classList.remove('messageIconAnim')
                            messageIcon.setAttribute('src', messageIconEnemy);
                            setTimeout(() => {
                                messageIcon.classList.add('messageIconAnim')
                            }, 1);
                            createMessage(sceneMsg2, 35, voiceRonald);
                        } else if(currentMsgValue == 3) {
                            createMessage(sceneMsg3, 80, voiceRonald);
                        } else if(currentMsgValue == 4) {
                            messageIcon.removeAttribute('src', messageIconEnemy);
                            messageIcon.classList.remove('messageIconAnim')
                            messageIcon.setAttribute('src', messageIconChar2);
                            setTimeout(() => {
                                messageIcon.classList.add('messageIconAnim')
                            }, 1);
                            createMessage(sceneMsg4, 500, voiceJono);
                        } else if(currentMsgValue == 5) {
                            messageIcon.removeAttribute('src', messageIconChar2);
                            messageIcon.setAttribute('src', messageIconChar1);
                            createMessage(sceneMsg5, 6, voiceJono);
                        } else if(currentMsgValue == 6) {
                            messageIcon.removeAttribute('src', messageIconChar1);
                            messageIcon.setAttribute('src', messageIconChar3);
                            createMessage(sceneMsg6, 40, voiceJono);
                        } else if(currentMsgValue == 7) {
                            messageIcon.removeAttribute('src', messageIconChar3);
                            messageIcon.classList.remove('messageIconAnim')
                            messageIcon.setAttribute('src', messageIconEnemy);
                            setTimeout(() => {
                                messageIcon.classList.add('messageIconAnim')
                            }, 1);
                            createMessage(sceneMsg7, 35, voiceRonald);
                        } else if(currentMsgValue == 8) {
                            createMessage(sceneMsg8, 45, voiceRonald);
                        }
                        
                    }

            let currentMsgValue = 1;
            setTimeout(() => { 
                createMessage(sceneMsg1, 35, voiceJono);
            }, 200);
                function createMessage(x,y,z) {
                    let i = 0;
                    let text = x;
                    let speed = y;
                    let voice = z;
                    let voiceReady = true;
                    console.log(x);
                    textMessage.innerHTML = "";
                    typewriter();
                    playVoice();
        
                    function typewriter() {
                        if (i <= text.length) {
                          textMessage.innerHTML += text.charAt(i);
                          i++;
                          setTimeout(typewriter, speed);
                        }
                      }

                    function playVoice() {
                        if (voiceReady == true) {
                            voiceReady = false;
                            if(speed > 100) {
                                setTimeout(() => {
                                    voiceReady = true;
                                }, speed);
                            } else{
                                setTimeout(() => {
                                    voiceReady = true;
                                }, 100);
                            }
                        if (i <= text.length) {
                            let originalVoice = voice;
                            let newVoice = originalVoice.cloneNode();
                            newVoice.volume = 0.5;
                            newVoice.play();
    
                        }
                    }
                        setTimeout(playVoice, 5);
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
