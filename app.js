function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4) {
        console.log(pin);
        return pin;
    }else{
        console.log('got 3 sigit and calling again')
        return getPin();
    }
}
function generatePin(){
  const pin =  getPin();
  document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
   const number = event.target.innerText;
   const calc = document.getElementById('typed-numbers');
   if(isNaN(number)){
       if(number == 'C'){
           calc.value = '';
       }
   }else{    
        calc.value += number;
   }
})
function notification(action){
   const msg = document.getElementById('notify-'+action);
   msg.style.display = 'block';
}

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typed = document.getElementById('typed-numbers').value;
    const successMsg = document.getElementById('notify-success');
    const failMsg = document.getElementById('notify-fail');
    if(pin == typed){    
        successMsg.style.display = 'block';
        failMsg.style.display = 'none';
    }else{    
        failMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
}