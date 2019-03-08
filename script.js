'use strict';

//Wrap all codes in an Immediately Invoked Function Expression (IIFE).
(() => {

let invalidClicks = 0;

const armstrongNumberChecker = () => {
    
    //Initialize variable that will be used throughout the code.
    const userValue = document.querySelector('#userValue').value,
          message = document.querySelector('#message'),
          btn = document.querySelector('#btn'), 

          //Convert the user input value to an array of number.
          toArray = userValue.toString().split('').map(Number),

          //Get the cube root and add the value.
          newValue = toArray.map(a =>  a ** 3).reduce((a, b) => a + b);
    
    //Check to make sure the user input is a 3-digit number.
    if(userValue > 99 && userValue <= 999){

        //Compare the new value with the user input value for result.
        if(newValue == userValue){

    //(Math.pow(toArray[0], 3) + Math.pow(toArray[1], 3) + Math.pow(toArray[2], 3) == userValue)

        message.innerText = 'Yes! ' + userValue + ' is an Armstrong Number.';
        }else{

        message.innerText = 'No! ' + userValue + ' is not an Armstrong Number. Check another Number.';
        }
    }
    //Deactivate the button for invalid inputs.
    else if (userValue <= 99 || userValue > 999) {
        clicks();
    }  
};

const clicks = () => {

    invalidClicks++;    
    if(invalidClicks == 1){
        btn.disabled = true;
    }else{
        message.innerText = 'Your input is invalid. Please enter a 3-digit number.';
        btn.disabled = false;
    } 
} 

//Listen for button click event and execute the code.
const check = () => {
    
    btn.addEventListener('click', () => {
        armstrongNumberChecker();
    });

    userValue.addEventListener('keydown', (e) => {
        if(e.keyCode == 13){ 
          armstrongNumberChecker();
        }
     });
  };

  check();

})();
