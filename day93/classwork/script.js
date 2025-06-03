let day = document.getElementById("day")
let hourse = document.getElementById("hourse")
let minute = document.getElementById("minutes")
let second = document.getElementById("second")


function gamotvla(){
    let date = new Date()
    let dro = new Date("January 01 2026 00:00:00")
    let final =  dro - date
    let newDay = Math.floor(final / (1000 * 60 * 60 *24))
    let newhourse = (Math.floor(final / (1000 * 60 * 60)% 24))
    let newMinute = (Math.floor(final / (1000 * 60)% 60))
    let newsecond = (Math.floor(final / 1000)% 60)

    day.textContent = newDay
    hourse.textContent = newhourse
    minute.textContent = newMinute
    second.textContent = newsecond
    

}

const  finalll = setInterval(gamotvla , 1000)