     let counter = 30;
     let firstParam = 0;
     let secondParam = 0;
     let wins = 0;	
     let gameStarted = false;
     let userResponse = '';
     let timeInterval;

     function start() {
       document.querySelector('.startPlay-container').style['display'] = 'none';
       setRandomParams();
       timeInterval = setInterval(() => {
         counter--;
         document.querySelector('.calculator-time').innerText = `00:${counter.toString().length === 1 ? `0${counter}` : counter }`;
         
         if(!counter)
          resetGame();

         gameStarted = true; 
       }, 1000);
     }


     function resetGame() {
       document.querySelector('.end-container').style['display'] = 'flex';
       document.querySelector('.win-questions').innerText = `${wins} Hits`;

       clearInterval(timeInterval);
       
       counter = 30;
       userResponse = '';
       wins = 0;


       setTimeout(() => {
         document.querySelector('.end-container').style['display'] = 'none';
         document.querySelector('.startPlay-container').style['display'] = 'flex';
         gameStarted = false;
       }, 5000);
     }

     function setRandomParams() {
       firstParam = Math.floor(Math.random() * 10);
       secondParam = Math.floor(Math.random() * 10);

       document.querySelector('.calculator-screen').innerText = `${firstParam} x ${secondParam} = `;
     }

     function backClick() {
       if(!userResponse.length)
        return;

      userResponse = userResponse.slice(0, userResponse.length - 1);

       const calculatorScreen = document.querySelector('.calculator-screen');

       calculatorScreen.innerText = `${calculatorScreen.innerText.slice(0, calculatorScreen.innerText.length - 1)}`;
     }

     function buttonClick(button) {
       userResponse = `${userResponse}${button}`;
       document.querySelector('.calculator-screen').innerText = `${document.querySelector('.calculator-screen').innerText}${button}`;
     }

     function response() {
       let correctAnswer = firstParam * secondParam;
       let isCorrect = correctAnswer === Number(userResponse);

       if(correctAnswer === Number(userResponse)) {
         document.querySelector('.calculator-screen').classList = ['calculator-screen-correct calculator-screen'];
         wins++;
       } else {
         document.querySelector('.calculator-screen').classList = ['calculator-screen-error calculator-screen'];
       }

       setTimeout(() => {
         document.querySelector('.calculator-screen').classList = ['calculator-screen'];
         userResponse = '';
         setRandomParams();
       }, 1500);
     }

     function keyUp(event) {
      const key = event.key;
      const isNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(key) !== -1;

      if(!gameStarted) {
        if(key === 'Enter')
          start();
        return;
      }

      if(isNumber)
        return buttonClick(key);

      if(key === 'Backspace')
        return backClick();

      if(key === 'Enter')
        return response();
     }