"use strict"

//tableau tableaufriut=["index 0, index 1, index 2]

let tableaufruit=["Grenade", "mangue","cerisier"];

console.log(tableaufruit);
console.log(tableaufruit[0]);
console.log(tableaufruit.length);
console.log(tableaufruit.push("Fraise"));
console.log(tableaufruit[1]="Goyave");


//boucle condition(toujours voir si la boucle n'ai pas infini)
for(let i=0;i<tableaufruit.length;i++){
    console.log(tableaufruit[i]);
}