let miPantalla;

function inicializar(){
    miPantalla = document.getElementById("pantalla")
    console.log(miPantalla)

    miPantalla.addEventListener('mousedown',ratonPulsado)
    miPantalla.addEventListener('mouseup',ratonSoltado)
    miPantalla.addEventListener('mousemove',ratonMueve)

}

function ratonPulsado(){
console.log("has pulsado el ratón")
}

function ratonSoltado(){
    console.log("has soltado el ratón")
}

function ratonMueve(e){
   
    let x = e.pageX
    let y = e.pageY
    console.log("X: "+x+" -Y: "+y)
}
 let personaje = function(x,y,nom,edad){
    this.x = x;
    this.y = y;
    this.nombre = nom;
    this.age = edad;
    
    this.hablar = function (){

        console.log("Hola me llamo "+ this.nombre,"y tengo "+this.age,"años.")
    }
 }

 let p1 = new personaje(10,20, "Moncho","10");
 let p2 = new personaje(100,200, "Poncho","23");
 let p3 = new personaje(50,100, "Concho","33");

p1.hablar();
p2.hablar();
p3.hablar();