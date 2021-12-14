
function validator(){
  var name= document.getElementById("name");            //get first name
  var email= document.getElementById("email");              //get last name
     //get facilitator name
  var regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;                                      //regex for alpha characters

  if(name.value.length<=2) { 
      alert("Your name should contain at least three (3) characters")                                //check if the first name is at least 3-character-length                            
      name.focus();
      return false;}
  if(email.value.search(regex)==-1) {   
        alert("Email format is not valid, please check your email adress!")      
        email.focus();
        return false;
    }


  else { alert("I got your message, thank you!");}


}

function BlackScholes(PutCallFlag, S, X, T, r, v) {
  var PutCallFlag= document.getElementById("flag").value; 
  
  var S= parseFloat(document.getElementById("stock").value); 
  var X= parseFloat(document.getElementById("strike").value); 
  var T= parseFloat(document.getElementById("maturity").value); 
  var r= parseFloat(document.getElementById("interest").value); 
  var v= parseFloat(document.getElementById("vol").value); 

  var d1, d2;
  d1 = (Math.log(S / X) + (r + v * v / 2.0) * T) / (v * Math.sqrt(T));
  d2 = d1 - v * Math.sqrt(T);
  
  
  if (PutCallFlag == "C") {
  return alert(`Call option price is ${S * CND(d1)-X * Math.exp(-r * T) * CND(d2)}`) }
  else {
  return alert(`Put option price is ${X * Math.exp(-r * T) * CND(-d2) - S * CND(-d1)}`)}
  
  }
  
  /* The cummulative Normal distribution function: */
  
  function CND(x){
  
  var a1, a2, a3, a4 ,a5, k ;
  
  a1 = 0.31938153, a2 =-0.356563782, a3 = 1.781477937, a4= -1.821255978 , a5= 1.330274429;
  
  if(x<0.0)
  return 1-CND(-x);
  else
  k = 1.0 / (1.0 + 0.2316419 * x);
  return 1.0 - Math.exp(-x * x / 2.0)/ Math.sqrt(2*Math.PI) * k
  * (a1 + k * (-0.356563782 + k * (1.781477937 + k * (-1.821255978 + k * 1.330274429)))) ;
  }