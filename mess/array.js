let sentence = ["hello","my","name","is","Ahmed"]; 
let sen = document.getElementById("sentence");
let len = sentence.length;
let castle = {
    loctaion: "englend",
    priceBernigth:194,
    isItfree:true,
    tags:["englend","castel"]
}

console.log(len)

for(let i = 0;i < len;i += 1){
    sen.textContent += (sentence[i]) + " ";
}