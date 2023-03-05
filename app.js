 "use strict";
let info=[];
function place(place){
   if (place=="yes"){
            info.push("yes");
        }
    if (place=="no"){
            info.push("no");
        }
    if (place==""){
            info.push("Invalid");
        }
}

function ownCar(haveCar){
    if (haveCar=="yes"){
             info.push("yes");
         }
     if (haveCar=="no"){
             info.push("no");
         }
     if (haveCar==""){
             info.push("Invalid");
         }
 }

 function ownLaptop(haveLaptop){
    if (haveLaptop=="yes"){
             info.push("yes");
         }
     if (haveLaptop=="no"){
             info.push("no");
         }
     if (haveLaptop==""){
             info.push("Invalid");
         }
 }
place(prompt("Do you live in Jordan?"));
ownCar(prompt("Do you have a car?"));
ownLaptop(prompt("Do you have a laptop?"));
console.log(info);

