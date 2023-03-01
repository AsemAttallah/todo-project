// "use strict";
nam=prompt("What's your name?");
x=prompt("Are you male of female?");
if((y=prompt("What's your Age?"))>0){
        if((confirm("Continue to welcoming message ?"))==true){
            if(x == 'male'){
                alert("Hello Mr. "+ nam);} 
            if (x == 'female'){
                    alert("Hello Ms. "+ nam);}
            if((x != 'female')&&(x!= 'male')){
                    alert("Hello "+ nam);
            }
                
            
            }


        }else{
            alert("please write a real age");} 
            
        


    

