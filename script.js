
    jedzenie = "";
  
document.getElementById("p1").style.display = "block";
document.getElementById("p2").style.display = "none";
document.getElementById("p3").style.display = "none";
document.getElementById("p4").style.display = "none";
document.getElementById("p5").style.display = "none";
document.getElementById("p6").style.display = "none";
document.getElementById("p7").style.display = "none";
document.getElementById("p8").style.display = "none";


function nie(){
    document.getElementById("pasek").innerHTML = "<h1><333</h1>";
    document.getElementById("Pytanie").innerHTML = "Zostaniesz moją walentynką :3";
    document.getElementById("nie").style.transform = "translateX(800px)";
    console.log("znikaj już");
    document.getElementById("Main").style.height = "300px";
    document.getElementById("tak").style.transform = "translate(140px, 20px)";
    document.getElementById("tak").style.scale = 3;
}

function tak(){
    document.getElementById("p1").style.display = "none";
    document.getElementById("Main").style.height = "800px";
    document.getElementById("p2").style.display = "block";
    stworzSerduszko()

}
function ukryj(){
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "none";
    klik()
    
}
function stworzSerduszko() {
    let serduszko = document.createElement("div");
    serduszko.classList.add("serduszko"); 
    serduszko.textContent = "❤";  
    serduszko.style.left = Math.random() * 100 + "%";  
    document.body.appendChild(serduszko);
    setTimeout(() => {
        serduszko.remove();
    }, 5000); // 
}
setInterval(stworzSerduszko, 240);

function klik(){
    
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "block";
    document.getElementById("Main").style.height = "400px";
}

function wybor(rodzaj){
    jedzenie = rodzaj;
    console.log(jedzenie);
    document.getElementById("p4").style.display = "none";
    document.getElementById("p5").style.display = "block";
    document.getElementById("Main").style.height = "800px";
}

function jedzonko(event){
    let id = event.target.id; 
    console.log("Kliknięto kafelek: ", id);
    let kafelki = document.querySelectorAll('.kafelek');
    kafelki.forEach(kafelek => kafelek.style.transform = 'scale(1)');  
    jedzenie = id;
    console.log("Wybrane jedzenie: ", jedzenie);
    event.target.style.border = '1px solid crimson';
    localStorage.setItem("jedzenie", id)
    console.log(localStorage.getItem("jedzenie"))
}
function dalej(){
    if(jedzenie == ""){
        alert("Wybierz jedzenie!");
    } else {
        console.log("Dalej");
        document.getElementById("p4").style.display = "none";
        document.getElementById("p5").style.display = "block";
    }
}
function wybierz(){
    document.getElementById("data").style.filter = "brightness(1.2)";
}
function dalejog(){
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "block";
    document.getElementById("Main").style.height = "450px";
}
function dalej2(){
    document.getElementById("p5").style.display = "none";
    document.getElementById("Main").style.height = "850px";
    document.getElementById("p6").style.display = "block";
}
const range = document.getElementById("range");
        const heart = document.getElementById("heart");

        function updateHearts() {
            heart.innerHTML = "❤️".repeat(range.value);
        }

        range.addEventListener("input", updateHearts);
        updateHearts(); 

function hepilevel(){
lvl = document.getElementById("poziomheppi")

var rangek = document.getElementById("suwak").value
document.getElementById("poziomheppi").innerHTML = "<h1>Poziom bycia heppi: " + rangek + "</h1>";

if(rangek == 10){
    lvl.style.color = "red";
    
}
else{
    lvl.style.color = "black";
}
}
function dalej3() {
    document.getElementById("p6").style.display = "none";
    document.getElementById("p7").style.display = "block";
    document.getElementById("Main").style.height = "997px";

    let rangek = document.getElementById("suwak").value; // Pobranie wartości suwaka
    
    localStorage.setItem("poziomHeppi", rangek);
    console.log(localStorage.getItem("poziomHeppi"));
    potem();
}
function potem(){
    console.log("potem");
    let zdjecie = document.getElementById("zdjecie");
    let jedzenie = localStorage.getItem("jedzenie") || "Brak wyboru";
    let rangek = localStorage.getItem("poziomHeppi") || "0";

    if(jedzenie == "pizza"){
        jedzenie1 = "Pizza";
        zdjecie.src = "https://kuchnialidla.pl/img/PL/1250x700/86b707cbec50-22934233c328-kw42-2023-lidl-new-york-pizza-przepis-na-pizze-w-stylu-nowojorskim.webp";
    }else if(jedzenie == "burger"){
        jedzenie1 = "Burger";
        zdjecie.src = "https://bbq.pl/upload/stblog/1/57/152/57152large.jpg";
    }else if(jedzenie == "sushi"){
        jedzenie1 = "Sushi";
        zdjecie.src = "https://kuchnia-domowa.pl/images/content/623/domowe_sushi.webp";

    }else if(jedzenie == "nalesniki"){
        jedzenie1 = "Naleśniki";
        zdjecie.src = "https://pl.vihaad.com/wp-content/uploads/2024/09/Nalesniki-z-twarogiem-i-truskawkami.webp";

    }
    document.getElementById("foodz").innerHTML = "Wybrane Jedzonko: " + jedzenie1;
    document.getElementById("tekst1").innerHTML = "⭐Poziom Heppi: " + rangek;
    document.body.style.zoom = "80%";
    
}

function dalej4(){
    document.getElementById("p7").style.display = "none";
    document.getElementById("p8").style.display = "block";
    document.getElementById("Main").style.height = "790px";

}

