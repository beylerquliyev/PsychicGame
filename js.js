let win=document.querySelector("#win")
let lose=document.querySelector("#lose")
let keys=document.querySelector("#keys")
let randomletter;

const Game={
    
    guesses:9,
    letters:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","l","z","x","c","v","b","n","m",],
    Random:function(){
        let length=this.letters.length-1
        let random=Math.random()*length
        let round= Math.round(random)
        let randomletter=this.letters[round]
        return randomletter
    },
    Presleters:[],
    win:0,
    lose:0,

    reset:function(){
         Game.Presleters.splice(0)
        randomletter=Game.Random()
    console.log(randomletter);
    }
}

randomletter=Game.Random()

let test=function(num){
    if(Game.Presleters.includes(num)==false){
        Game.Presleters.push(num)
    }
    else(alert("herif birdefe geyd olunub"))

}
this.window.addEventListener("keypress",function(e){
    
test(e.key)
     if(e.key==randomletter){
        Game.win++
        win.innerHTML=`Wins:${Game.win}`
        Game.reset()
    }
     else if(Game.Presleters.length==9){
        Game.Presleters.splice(0)
        Game.lose++
        lose.innerHTML=`Losses:${Game.lose}` 
        this.alert(`Herif duzgun texmin edilmedi.Duzgun herif ${randomletter}`)
        Game.reset()
     }
     keys.innerHTML=` Your Guesses so far:${Game.Presleters.join(", ")}`
   })

   console.log(randomletter);

   
 













