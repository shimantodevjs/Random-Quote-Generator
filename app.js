const generate= document.getElementById("btn")
const quote= document.getElementById("quote")


function generateQuote(){
    fetch("https://api.quotable.io/random")
    .then(res=> res.json())
    .then(data=>{
        quote.innerText = data.content
    })

}


generate.addEventListener('click',generateQuote)