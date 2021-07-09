let actualTemp = 91;
let desiredTemp = 74;

if (actualTemp < desiredTemp) {
    console.log("Run heat");
}
else if (actualTemp > desiredTemp) {
    console.log("Run A/C")
}
else {
    console.log("Standby");
}

let tempCelsius = 23.333
let targetUnit = "F";
let original = tempCelsius;
switch(targetUnit) {
    case "C":
        console.log(`${tempCelsius} ${targetUnit}`);
        break;
    case "F":
        console.log(`${tempCelsius * 1.8 + 32} ${targetUnit}`);
        console.log(original + " C");
        break; 
    case "K":
        console.log(`${tempCelsius + 273.15} ${targetUnit}`);
        console.log(original + " C");
        break;
}