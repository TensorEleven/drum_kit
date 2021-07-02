var drums = document.querySelectorAll(".drum")

drums.forEach(drum => {
    drum.addEventListener("click", function(){
        alert("drum hit")
        console.log(this)
    })
})