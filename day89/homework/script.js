let img = document.getElementById("img")
let shopcart = document.getElementById("shopcart")
let close = document.getElementById("closebut")

img.addEventListener("click", function () {
    shopcart.style.transform = "translate(0px)"
})

close.addEventListener("click", function () {
    shopcart.style.transform = "translate(400px)"
})

let but = document.getElementsByClassName("but")


let count = 0
let total = 0



for (let i of but) {
    i.addEventListener("click", function () {

        let am = document.getElementById("am")
        let to = document.getElementById("to")

        count += 1
        am.textContent = `amount:${count}`







        let price = i.parentElement.querySelector("#span").textContent
        total += Number(price)
        to.textContent = `Total:${total}$`

        let nam = i.parentElement.querySelector("#name-pc").textContent
        let img = i.parentElement.querySelector("#img1").src
        shopcart.innerHTML += ` <div style="height: 250px;width: 100%;background-color: gray;">
            <h1>Name:${nam} </h1>
            <h1>price:${price} </h1>
            <br>
            <img src="${img}" width="100px" height="100px" alt="">
            <br>
            <button class="delate" style="width: 60px;background-color: green;color: white; padding: 10px">dellate</button>


        </div>`

        let delate = document.getElementsByClassName("delate")

        for (let element of delate) {
            element.addEventListener("click", function () {
                let am = document.getElementById("am")
                let to = document.getElementById("to")
                count -= 1
                am.textContent = `amount:${count}`
                element.parentElement.remove()

                let price = i.parentElement.querySelector("#span").textContent
                total -= Number(price)
                to.textContent = `Total:${total}$`

            })
        }


    })
}
