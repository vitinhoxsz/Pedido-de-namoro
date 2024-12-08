
function SIM() {
    alert("Duda, Eu Amo Você.")
}
function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraposicao(10,90);
    btn.style.left = geraposicao(10,90);
    console.log("Opa, Desviei...");
}


function geraposicao(min, max) {
return (Math.random() * (max - min) + min) + '%';
}
