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

let characterBG = document.createElement('div');
characterBG.classList.add('characterBackground');

let chooseText = document.createElement('div');
chooseText.classList.add('text1');
chooseText.style.top = '5%';
chooseText.style.left = '50%';
chooseText.innerHTML = 'Choose your character';

let chooseCharKeysActive = false;
let chosenCharacter = "";
let jCardPos = '1';
let gCardPos = '4';
let cCardPos = '3';
let dCardPos = '2';

let charaCardName = document.createElement('div');
charaCardName.classList.add('charaCardName');
charaCardName.innerHTML = '';
let charaCardDesc = document.createElement('div');
charaCardDesc.classList.add('charaCardDesc');
charaCardDesc.classList.add('ccDescAnimclass');
charaCardDesc.innerHTML = '';

let jono = new Object();
jono.health = 80;
jono.damage = 8;
jono.speed = 8;
jono.firate = 20;
let jonoCard = document.createElement('img');
jonoCard.setAttribute('src','');
jonoCard.classList.add('cardfront');

let gabriel = new Object();
gabriel.health = 80;
gabriel.damage = 8;
gabriel.speed = 8;
gabriel.firate = 20;
let gabrielCard = document.createElement('img');
gabrielCard.setAttribute('src','');
gabrielCard.classList.add('cardright');

let cinder = new Object();
cinder.health = 80;
cinder.damage = 8;
cinder.speed = 8;
cinder.firate = 20;
let cinderCard = document.createElement('img');
cinderCard.setAttribute('src','');
cinderCard.classList.add('cardback');

let dark = new Object();
dark.health = 80;
dark.damage = 8;
dark.speed = 8;
dark.firate = 20;
let darkCard = document.createElement('img');
darkCard.setAttribute('src','');
darkCard.classList.add('cardleft');

let wdown = false;
let adown = false;
let sdown = false;
let ddown = false;

//! All voice sound effects
let voiceJono = new Audio('sounds/voice_jono.mp3')
let voiceRonald = new Audio('sounds/voice_ronald.mp3')

//! All messages from the first scene
let textLength = 0;
let currentMessage = "";
let sceneMsg1 = "";
let sceneMsg2 = "";
let sceneMsg3 = "";
let sceneMsg4 = "";
let sceneMsg5 = "";
let sceneMsg6 = "";
let sceneMsg7 = "";
let sceneMsg8 = "";
let sceneMsg9 = "";
let sceneMsg10 = "";
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
let s1m7j = "You shut your mouth about my costume, you meanie!"
let s1m8j = "Now I will show you why you should not mess with an alpha male like myself."
let s1m9j = "Dude,"
let s1m10j = "You are sooo weird..."

//! Fight UI elements and such
let fightText = document.createElement('div');
fightText.classList.add('fightText');

let ftMessage1 = "Ight kick his ***"
let ftMessage2 = "Start fighting already"
let ftMessage3 = "Beat eachother up"

function startGame() {
    if(startButtonClicked == false) {
        startButtonClicked = true;
        console.log('Start Button clicked');
        startButton.style.animation = 'disappear 0.1s ease 1';
        startButton.style.animationFillMode = 'forwards';
        makeTransition();
        function makeTransition() {
            let transition = document.createElement('div');
            transition.classList.add('transition');
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
            chooseCharKeysActive = true;
            chooseCharKeys();
            bodyvar.appendChild(chooseText);
            bodyvar.appendChild(charaCardName);
            bodyvar.appendChild(charaCardDesc);
            setCCName(jCardPos);
            //bodyvar.appendChild(characterBG);
            //document.addEventListener('mousemove', function(e) {
            //    characterBG.style.left = ((window.innerWidth) - ((window.innerWidth) / 1.9325)) + (e.pageX / 32) + 'px';
            //    characterBG.style.top = ((window.innerHeight) - ((window.innerHeight) / 1.9325)) + (e.pageY / 32) + 'px';
            // })
        }, 350);
        function chooseCharKeys() {
            document.addEventListener('keydown', logKeydown);
            function logKeydown(e) {
                let key = ` ${e.code}`
                key = key.toString();
                if (key == ' KeyA') {
                    setCards();
                   } else if (key == ' KeyD') {
                    setCards();
                   }
            }
        }
        function setCards() {
                jCardPos++;
                gCardPos++;
                cCardPos++;
                dCardPos++;
                if(jCardPos == 5) {
                    jCardPos = 1;
                } else if(gCardPos == 5) {
                    gCardPos = 1;
                } else if(cCardPos == 5) {
                    cCardPos = 1;
                } else if(dCardPos == 5) {
                    dCardPos = 1;
                }
                console.log('Jono: ' + jCardPos + 
                ', Gabriel: ' + gCardPos + 
                ', Cinder: ' + cCardPos +
                ', Dark: ' + dCardPos)
            moveCards(jonoCard, jCardPos);
            moveCards(gabrielCard, gCardPos);
            moveCards(cinderCard, cCardPos);
            moveCards(darkCard, dCardPos);
            setCCName(jCardPos);
        }
        function moveCards(x,y) {
                if(y == 1) {
                    x.classList.remove('cardright');
                    x.classList.add('cardfront');
                } else if(y == 2) {
                    x.classList.remove('cardfront');
                    x.classList.add('cardleft');
                } else if(y == 3) {
                    x.classList.remove('cardleft');
                    x.classList.add('cardback');
                } else if(y == 4) {
                    x.classList.remove('cardback');
                    x.classList.add('cardright');
                }
        }

        function setCCName (x) {
            if(x == 1) {
                charaCardName.style.color = "rgb(0,255,50)"
                charaCardName.innerHTML = "JONO";
                charaCardDesc.innerHTML = "He shoot Bullets. Lots and lots of bullets." +
                " Maybe even missiles? Who knows."
            } else if(x == 2) {
                charaCardName.style.color = "rgb(0,255,255)"
                charaCardName.innerHTML = "GABRIEL";
                charaCardDesc.innerHTML = "Uses the element of lightning and his legendary" +
                " katana to cut through his enemies."
            } else if(x == 3) {
                charaCardName.style.color = "rgb(255,100,50)"
                charaCardName.innerHTML = "CINDER";
                charaCardDesc.innerHTML = "Using her trusty staff, Cinder is able to manipulate" +
                " the elements of fire to burn those in her way."
            } else if(x == 4) {
                charaCardName.style.color = "rgb(255,0,0)"
                charaCardName.innerHTML = "???";
                charaCardDesc.innerHTML = "Referred to by few only as \"Dark,\" he fights for" +
                " control with his inner demons, utilizing both his controlled and unstable form" +
                " to destroy his victims. Also, he's really edgy."
            }
            charaCardDesc.classList.remove('ccDescAnimclass');``
            charaCardName.classList.remove('ccDescAnimclass');
                setTimeout(() => {
                    charaCardDesc.classList.add('ccDescAnimclass');
                    charaCardName.classList.add('ccDescAnimclass');
                }, 1);
        }

        function chooseYourCard() {
            jonoCard.style.backgroundColor = "rgb(0,255,50)"
            gabrielCard.style.backgroundColor = "rgb(0,200,255)"
            cinderCard.style.backgroundColor = "rgb(255,100,50)"
            darkCard.style.backgroundColor = "rgb(255,0,0)"
            bodyvar.appendChild(jonoCard)
            bodyvar.appendChild(gabrielCard)
            bodyvar.appendChild(cinderCard)
            bodyvar.appendChild(darkCard)

            jonoCard.addEventListener('click',function() {
                makeTransition();
                charToWeaponList(1);
            })
        }

        function charToWeaponList(x) {
            setTimeout(() => {
                bodyvar.removeChild(chooseText);
                bodyvar.removeChild(charaCardName);
                bodyvar.removeChild(charaCardDesc);
                removeCards();
                if (x == 1) {
                    document.body.style.backgroundColor = 'rgb(15,35,20)'
                }
            }, 350);
        }

        function removeCards() {
            bodyvar.removeChild(jonoCard);
            bodyvar.removeChild(gabrielCard);
            bodyvar.removeChild(cinderCard);
            bodyvar.removeChild(darkCard);
        }

        function createCharacter(x,y) {
            let player = document.createElement('img')
            player.classList.add(x);
            player.setAttribute('src',y);
            player.style.left = '10%';
            player.style.top = '50%';
            bodyvar.appendChild(player);
            chosenCharacter = x;
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
                sceneMsg9 = s1m9j;
                sceneMsg10 = s1m10j;
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
                        checkMessage();
                    });

                    messageIcon.setAttribute('src', messageIconChar1);
                    messageIcon.classList.add('messageIconAnim')
                    bodyvar.appendChild(nextMessage);
                    bodyvar.appendChild(messageIcon);

                    function checkMessage() {
                        if (textLength <= currentMessage.length) {
                            textLength = currentMessage.length;
                            textMessage.innerHTML = currentMessage;
                        } else {
                            createNextMessage();
                            console.log('test');
                        }
                    }

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
                            createMessage(sceneMsg5, 60, voiceJono);
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
                        } else if(currentMsgValue == 9) {
                            messageIcon.removeAttribute('src', messageIconEnemy);
                            messageIcon.setAttribute('src', messageIconChar2);
                            createMessage(sceneMsg9, 80, voiceJono);
                        } else if(currentMsgValue == 10) {
                            messageIcon.removeAttribute('src', messageIconChar2);
                            messageIcon.setAttribute('src', messageIconChar1);
                            createMessage(sceneMsg10, 50, voiceJono);
                        }
                        
                    }

            let currentMsgValue = 1;
            setTimeout(() => { 
                createMessage(sceneMsg1, 35, voiceJono);
            }, 200);
                function createMessage(x,y,z) {
                    currentMessage = x;
                    textLength = 0;
                    let text = x;
                    let speed = y;
                    let voice = z;
                    let voiceReady = true;
                    console.log(x);
                    textMessage.innerHTML = "";
                    typewriter();
                    playVoice();
        
                    function typewriter() {
                        if (textLength <= text.length) {
                          textMessage.innerHTML += text.charAt(textLength);
                          textLength++;
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
                        if (textLength <= text.length) {
                            let originalVoice = voice;
                            let newVoice = originalVoice.cloneNode();
                            newVoice.volume = 0.5;
                            newVoice.play();
    
                        }
                    }
                    if (textLength <= text.length) {
                        setTimeout(playVoice, 5);
                      }
                    }
                }

                
        }
        function activateMovement() {
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
}
