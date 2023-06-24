let arrayOfDrums = document.getElementsByClassName("drum")

function makeSounds(key){
    let sound = new Audio(`sounds/${key}.mp3`)
    sound.play();
}

let words = document.getElementById("set");

words.addEventListener("click", (e) =>{
    let char = e.target.innerHTML;
    makeSounds(char);
    animations(char);
})

words.addEventListener("keydown", (e) =>{
    let char = e.key;
    let arr = ["a", "s", "w", "d", "j", "k","l"]
    if(arr.includes(char)==false){
        alert(`Wrong key ${char} pressed!`)
        return;
    }
    makeSounds(char);
    animations(char);

})

function animations(k){
    console.log(k)
    let active = document.querySelector(`.${k}`);
    active.classList.add("pressed");
    setTimeout(() => active.classList.remove("pressed"),100);
}
