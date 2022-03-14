const main = () => {
    const btn1 = document.getElementById("tema1");
    const btn2 = document.getElementById("tema2");
    const frutas = Array.from(document.querySelectorAll('li'));

    btn1.addEventListener("click", function(){
        for (let i = 0; i < frutas.length; i++) {
            var indice = i + 1;
            if (indice % 2 === 0) {
                frutas[i].classList.add("resaltar");
            }else{
                frutas[i].classList.remove("resaltar");
            }
        }
    })

    btn2.addEventListener("click", function(){
        for (let i = 0; i < frutas.length; i++) {
            var indice = i + 1;
            if (indice % 2 === 0) {
                frutas[i].classList.remove("resaltar");
            }else{
                frutas[i].classList.add("resaltar");
            }
        }
    })
}