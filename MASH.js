function mash(results){
    let MMM = "house";
    return MMM;
}
const result = mash();
console.log("You will live in a " + getHome() + ", and you will have " + getChildrenCount() +" kids, and drive a " + getCar() + " and work as a ");

function getHome(){
    let place = ["Mansion","Apartment","Shack","House","street"];
    if (process.argv[2] != undefined){
        place.push(process,argv[2]);
    }
    let times4 = Math.random() * place.length;
    let possibilities = Math.floor(times4);
    let crib = place[possibilities];
    return crib;
}
getHome();

function getChildrenCount(){
    let x = Math.floor(Math.random()*2);
    if (x == 0){
        i = Math.floor(Math.random()*10);
        return i;
    }else {
        if (process.argv[3]){
         i = Math.floor(Math.random()*10);
         return i;
        }else if (process.argv[3] == undefined){
         i = Math.floor(Math.random()*10);
         return i;
        }else{
            process.argv[3];
        }
    }
}
getChildrenCount();

function getCar(){
    let drive = ["lambo","convertible","box with wheels"];
    if (process.argv[4] != undefined){
        drive.push(process.argv[4]);
    }
    let times5 = Math.floor(Math.random() * drive.length);
    let drift = drive[times5];
    return drift;
}
getCar();



// console.log("You will live in a " + getHome() + ", and have " + getChildrenCount() + "many children");