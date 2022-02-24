var msg1 = document.getElementById("message1")  
 var msg2 = document.getElementById("message2")  
 var msg3 = document.getElementById("message3")  
 var answer = Math.floor(Math.random()*10) + 1;  
 var no_of_guesses = 0;  
 var guesses_num = [];  
 function play(){  
   var user_guess = document.getElementById("guess").value;  
   if(user_guess < 1 || user_guess > 10 ){  
     alert("Chỉ nhập số từ 1 đến 10");  
   }  
   else{  
     guesses_num.push(user_guess);  
     no_of_guesses+= 1;  
     if(user_guess < answer){  
  msg1.textContent = "Số bạn đoán nhỏ hơn kết quả"  
  msg2.textContent = "Số lần đoán : " +  
  no_of_guesses;  
  msg3.textContent = "Những số bạn đã đoán: " +  
  guesses_num;  
     }  
     else if(user_guess > answer){  
       msg1.textContent = "Số bạn đoán lớn hơn kết quả"  
       msg2.textContent = "Số lần bạn đã đoán: " +  
       no_of_guesses;  
       msg3.textContent = "Guessed Number Are: " +  
       guesses_num;  
     }  
     else if(user_guess == answer){  
         alert("XIN CHÚC MỪNG, BẠN ĐÃ ĐOÁN ĐÚNG!!!");
       msg1.textContent = "Chúc mừng bạn đã đoán đúng!!"  
       msg2.textContent = "Số đó chính là " + answer  
       msg3.textContent = " Bạn đã đoán " +  no_of_guesses  +" lần";   
     }  
   }  
 }  