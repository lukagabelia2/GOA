let audios = ["./audio/crash.mp3",
    "audio/kick-bass.mp3",
    "./audio/snare.mp3",
    "./audio/tom-1.mp3",
    "./audio/tom-2.mp3",
    "./audio/tom-3.mp3",
    "./audio/tom-4.mp3",
]

document.addEventListener("keyup",function(event){
    if(event.key == "w"){
        let music = new Audio(audios[0])
        music.play()
    }
})

let premiums = document.getElementsByClassName("premium")
premiums[0].addEventListener("click",function(e){
    alert("you can play this saound once")
},{once:true})


















