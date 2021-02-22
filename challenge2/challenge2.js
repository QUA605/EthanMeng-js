var height=prompt("What's your height?(In meters)",'')
var weight=prompt("What's your weight?(In KG)","")
var Fheight=prompt("What's your friend's height?(In meters)",'')
var Fweight=prompt("Waht's your friend's weight?(In KG)",'')
var BMI = weight/(height*height)
var FBMI = Fweight/(Fheight*Fheight)
document.write(`My height: ${height}`)
document.write(`<br>`)
document.write(`My weight: ${weight} kg.`) 
document.write(`<br>`)
document.write(`My BMI: ${BMI}.`)
document.write("<br>")
if(BMI<=18.5){
    document.write(`I am underwieght.`)
}
else if(BMI>=18.5 && BMI<=24.9){
    document.write(`My BMI is normal`)
}
else if(BMI>=25.0 && BMI<=29.9){
    document.write(`I am overweight`)
}
else if(BMI>=30.0){
    document.write("I am obese")
}
document.write("<br><br>")
document.write(`My friend's height: ${Fheight} meters.`)
document.write(`<br>`)
document.write(`My friend's weight: ${Fweight} kg.`)
document.write(`<br>`)
document.write(`My friend's BMI: ${FBMI}.`)
document.write("<br>")
if(FBMI<=18.5){
    document.write(`My friend is underwieght.`)
}
else if(FBMI>=18.5 && FBMI<=24.9){
    document.write(`My friend's BMI is normal`)
}
else if(FBMI>=25.0 && FBMI<=29.9){
    document.write(`My friend is overweight`)
}
else if(FBMI>=30.0){
    document.write("My friend is obese")
}

document.write("<br><br>") 

if(BMI>FBMI){
    document.write("I have heigher BMI")
}
else if(FBMI>BMI){
    document.write("My friend has higher BMI.")
}