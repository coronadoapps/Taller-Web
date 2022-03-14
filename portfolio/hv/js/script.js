const main = () => {

    var elementos = document.getElementsByClassName("accordion");

    var miFuncion = function(){
        e = this.nextElementSibling;
        do {
            if (e.style.display == "none") {
                e.style.display = "block"
            } else{
                e.style.display = "none";
            }
        } while (e = e.nextElementSibling);
    };

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener("click", miFuncion, false);
    }
    
    document.querySelector("#tema1").addEventListener("click", function(){
        document.body.style.setProperty("--primary-color", "gold");
        document.body.style.setProperty("--text-color", "#333652");
        document.body.style.setProperty("--secondary-color", "#90ADC6");
        document.body.style.setProperty("--background-color", "#ECF1F2");
    })
    
    document.querySelector("#tema2").addEventListener("click", function(){
        document.body.style.setProperty("--primary-color", "#145214");
        document.body.style.setProperty("--text-color", "whitesmoke");
        document.body.style.setProperty("--secondary-color", "#238F23");
        document.body.style.setProperty("--background-color", "#222");
    })

    document.querySelector("#tema3").addEventListener("click", function(){
        document.body.style.setProperty("--primary-color", "purple");
        document.body.style.setProperty("--text-color", "black");
        document.body.style.setProperty("--secondary-color", "#B2D2A4");
        document.body.style.setProperty("--background-color", "white");
    })

}