/*# proyecto1
Ejercicios curso Jonathan Mircha*/
//EJERCICIO 1 COMO LO HE HECHOs, YO----------------------------------------------------
const texto=34526;
function cadenaTexto(texto=""){
   
    if(!isNaN(texto)){
        console.log(`el numero contiene ${texto.toString().length} caracterers`);
        
    }else{
    console.log(`El texto contiene ${texto.length} caracterers`);
    }
}
cadenaTexto();



//EJERCICIO 2 COMO LO HE HECHO YO----------------------------------------------------

const texto1="hola que tal mundo, aqui estamos aprendiendo."; 
function cadenaTexto1(){

   console.log(texto1.slice(8));
}
cadenaTexto1();





//EJERCICIO NUMERO 3 COMO LO HE HECHO YO----------------------------------------

const texto2="hola que tal Kenay, como te va por Mejico :)";
const descompuesto=()=>console.log (texto2.split(" "));
descompuesto();

//EJERCICIO NUMERO 4 COMO LO HE HECHO YO---------------------------------------------

const multipleTexto=(a)=>{return a.repeat(4);};
console.log(multipleTexto("Este curso es genial!!!!")+":)");



//ahora lo haremos con bucle for y if

const contador=(texto4,e)=>{
 if(texto4===""){
      return console.log("introduce un texto");
 }
 if(isNaN(e)){

        return console.log("introduce un numero");
    }
    if(Math.sign(e)===-1){return console.error("negativos no porfavor")};

    
        for(let i=1;i<=e;i++){
                
            console.info(`${texto4} ${i}`);
        }
        
}  

contador("dinamismo",9);

//------------------------------------------------------------------------------------

//EJERCICIO NUM 5


let arreglo1=[]
const textoReves=(texto5)=>{
    
    if(typeof(texto5)!="string"){
        return console.log("introduce un texto y no un numero porfavor");
        
    }
    if(texto5===""){
        return console.log("introduce un texto");
    }
    
    for(let i=texto5.length-1;i>=0;i--){
    arreglo1.push(texto5.charAt(i));
    }
    console.log(arreglo1.join(""));
}
  
textoReves("un buen dia 100");

//texto reves con reverse y split y join

const prueba=(d)=>

    (typeof(d)!="string")
    ?console.log("no escribas un numero")
    :(d===(""))
        ?console.log("escribe un texto")
         :console.log(d.split("").reverse().join(""));

prueba("carlos 5564");




//EJERCICIO NUMERO 6-------------------------------------------------------------------
let encontradas=0;
let operador=0;
let veces=-1;
const mismaPalabra=(texto6,busqueda)=>{
    while(encontradas!=-1){
     
     encontradas=texto6.indexOf(busqueda,operador);
     operador=0;
    for(let i=0;i<=encontradas;i++){
        operador=operador+1 
    
    }
    //console.log(operador);
    veces++;
}
console.log (`la palabra ${busqueda} sale ${veces} vez es`);
    
}

mismaPalabra("veo muchos peces, peces de colores, muchos peces grandes de colores","muchos");

//EJERCICIO NUMERO 7----------------------------------------------------------------------
const textoReves1=[];
const palindromo=(texto7)=>{
    texto7=texto7.toLowerCase()// para convertir todo en minusculas

    for(let i=texto7.length;i>=0;i--){
        textoReves1.push(texto7.charAt(i));
    }
   const textoReves2=textoReves1.join("");
    (textoReves2===texto7)
        ?console.log("true")
         :console.log("false")
  
}

palindromo("ertyuuytre");

//EJERCICIO NUM 8-------------------------------------------------------------------------
let ale;

let removeCharacters=(text8="",clean)=>{
    text8=text8.toLowerCase();
    clean=clean.toLowerCase();
    (!text8)
        ? console.log("introduce un texto porfavor")
        :(!clean)
            ?console.log("introduce un texto")
            :ale=text8.replaceAll(clean,"");
                
               
            console.log(ale);
}

removeCharacters("zxc1,zxc2,zxc3,zxc4,zxc5,zxc6","X");




//EJERCICIO  9---------------------------------------------------------------------------
let rango=0;
const numeroAleatorio=()=>{
    
    while(rango<501 || rango>600){
    rango=(Math.round(Math.random()*1000));
    }
console.info( `el numero aleatorio es ${rango}`);
}
numeroAleatorio();





//EJERCICIO 10 CAPICUA-----------------------------------------------------------------------------



const capicua=(numero=0)=>{
    if(!numero)return console.warn("introduce un numero");
    
    if(typeof numero!=="number")return console.warn("introduce un  numero y no un texto");
     
    
        
     numero=numero.toString();
       
      let  numero10=(numero.split("").reverse().join(""))
      
    if(numero===numero10)return console.log(`numero ${numero} es capicua`);
    else{console.log("no es capicua")};

}
capicua(212.212);

//OTRA FORMA DE CAPICUA SIN CONVERTIR EL NUMERO EN UN STRING


let numeroR=0;
let numeroExaminar1;
let resto=0;
const capicua1=(numeroExaminar="")=>{

    if(numeroExaminar===""){
        return console.log("introduce un numero porfavor");
    }
    else if(typeof numeroExaminar!=="number"){
         return console.log("introduce un numero");
     }
     
    
    
    numeroExaminar1=numeroExaminar;

    while(numeroExaminar1>1 || numeroExaminar1===0){
       
        resto=numeroExaminar1%10;
        resto=(Math.trunc(resto));
        numeroR=(numeroR*10)+resto;
        numeroExaminar1=numeroExaminar1/10;
    
        
       
 }
        (numeroExaminar===numeroR)
        ?console.info(`el numero ${numeroExaminar} es capicua`)
        :console.info(`el numero ${numeroExaminar} no es capicua`)
}
capicua1(345.543);//aqui falla, tenemos que transformarlo como el ejercicio anrerior en string

// EJERCICIO 11 NUMERO FACTORIAL

let res=1;
const numeroFactorial=( numerof)=>{
    if(!numerof)console.info("introduce un numero porfavor");
       
    for(let i=numerof;i>1;i--){

        res=res*i;
        console.log(res);

    }
}
numeroFactorial(5);
   


//EJERCICIO 12 NUMERO PRIMO--------------------------------------------------------------------------

const numPrimo=(numero12)=>{
    if(numero12===0)return console.info(` el numero ${numero12} no es primo`)
    
    if(Math.sign(numero12)===-1)return(console.error("no puedes ingresar numero negativo"))

    if(!numero12)return console.warn("intorduce un numero");

    if(Number.isInteger(numero12)===false)return console.error("introduce un numero entero porfavor");
    
    let numero11=true;
    
    for(let i=numero12-1;i>1;i--){
        
        numero11=numero12/i;
        
        if(Number.isInteger(numero11)==true){
            numero11=false;
             break;
        }
        
}

return (numero11)
?console.info(`el numero ${numero12} es un numero primo`)
:console.info(`el numero ${numero12} no es un numero primo`)
}
numPrimo(112);





//EJERCICIO 13 PAR IMPAR--------------------------------------------------------------------------


const numParImpar=(numero13)=>{
    (numero13===0)
     ?console.info(`el numero ${numero13} es un numero par`)
     :(!numero13)
        ?console.warn("introduce un numero porfavor")
         :(numero13=="")
             ?console.warn("introduce numeros y no letras")
             :(typeof numero13!="number")
                 ?console.warn("no has introducido un numero")
                 :(Number.isInteger(numero13)===false)
                     ?console.error("has introducido un numero decimal")
                     :(numero13%10===2 || numero13%10===4 || numero13%10===6 || numero13%10===8 || numero13%10===0)
                         ?console.log(`el numero ${numero13} es un numero par`)
                         :console.log(`el numero ${numero13} es un numero impar`)

}

numParImpar(4556634);


//EJERCICIO NUMERO 14 CONVERSION GRADOS ----------------------------------------------------------------------
const convertGrados=(grados,medida)=>{
    medida=medida.toUpperCase();
    if(!grados || !medida)return console.warn("introduce los dos campos porfavor");
    if(typeof(grados)!="number")return console.error("el primer valor introducido no es un numero");
    if(typeof(medida)==="number")return console.error("el segundo valor introducido no es una medida valida");
    if(medida!="C" && medida!="F")return console.warn("inroduce c o f porfavor");
    
    if(medida=="C"){
        
       let resGradosC=grados*9/5+32;
        
        return console.info(`${grados} grados celsius son ${resGradosC.toFixed(2)} grados fahrenheit`);
    }
    if(medida=="F"){
        
        let resGradosF=(grados-32)*5/9;
        
        return console.info(`${grados} grados fharenheit son ${resGradosF.toFixed(2)} celsius`);
    }
}
convertGrados(678,"F");
//EJERCICIO 15 ---si en el numero binario lo empiezo por 0, por ejemplo 00110-se vuelve loco--------------------------------------------------------------------

const conversorBinDecs=(numeroC=undefined,base="")=>{
    console.log(numeroC);
    base.toLowercase;
    if(!numeroC)return console.log("introduce un valor numerico para convertir porfavor");
    if(!base)return console.log("introduce en el segundo parametro si es binario o decimal porfavor");
    if(typeof(numeroC)=="string")return console.log("introduce un valor valido porfavor");
    
      if(base==="binario" || base==="decimal"){
        if(base==="decimal"){
            console.log(0);
            return console.log(`El numero ${numeroC} a binario es ${numeroC.toString(2)} gracias`)
        
        }

        if(base==="binario"){
            console.log(1);
            console.log(numeroC);
            return console.log(`El numero ${numeroC} a decimal es ${parseInt(numeroC,2)} gracias`);
        
        }
    
    }   
    else {
        console.log("introduce binario o decimal porfavor");
    }

}

conversorBinDecs(342,"decimal");

//EJERCICIO 16---------------calcular descuentos----------------------------------------------------------------------
let resultadoD;
const rebajas=(precio=undefined,descuento=undefined)=>{

    (!precio)||(!descuento)
          ?console.log("introduce un precio y un descuento porfavor")
          :typeof(precio)===("number") && typeof(descuento)===("number")
                ?console.log(`el resultado del ${descuento} por ciento de descuento de ${precio} es ${resultadoD=precio-(precio*descuento)/100}`)
                :console.log("introduce valores correctos porfavor")
}

rebajas(400,20);
rebajas(1000,10);
rebajas();
rebajas("ee",8)
//EJERCICIO 17--------calcular años----------------------------------------------------------------------------

const fecha=(a,b,c)=>{
    

    if(typeof(a,b,c)!="number")return console.log("la fecha no es valida");
    if(Math.sign(a)===-1|| a>2100)return console.log("introduce un año valido");
    if(b<0 || b>12)return console.log("introduce un mes valido porfavor");
    if(c<1||c>31)return console.log("introduce un dia valido");
    if(b===3 || b===5 | b===8 ||b===10){
        if(c<1 || c>31){
            return console.log("introduce un dia valido porfavor, ten encuenta que hay meses que tienen solo 30 dias");

        }
    }
    if(b===2 && c>29)return (console.log("ten en cuenta que febrero solo puede tener 28 o 29 dias dependiendo del año"));
    b--

    let diaActual=new Date().getFullYear();

    let mismoDia=new Date(a,b,c).getFullYear();

    
    if(mismoDia === diaActual)return console.log("Estamos en el mismo año");

    
    let fecha2=Date.parse(new Date());
    let fecha1=Date.parse(a,b,c);
    let añosTranscurridos=fecha2-fecha1;


    console.info(`los años trancurridos son: ${Math.trunc(añosTranscurridos/(365*24*60*60*1000))} años`);
    


}
fecha(1983,11,18);


//EJERCICION NUMERO 18-----------------contar vocales y consonmantes------------------------------------------------------

const vocalConso=(texto19=undefined)=>{
    
    if(!texto19 || !(typeof texto19=== "string")) return console.error("intrtoduze un texto porfavor");
    
    let expRegular1=/[^aeiou]/ig;
    let totalLetras=texto19.match(expRegular1);
    
    
    let vocales=/[aeiou]/ig;
    const totalVocales=texto19.match(vocales);

    if(totalLetras===null)return console.info(`el total de vocales que hay son ${totalVocales.length} y el total de consonantes son 0`);
    if(totalVocales===null)return console.info(`no hay vocales y hay ${totalLetras.length} consonantes`);
    if(vocales!=null)return console.info(`el total de vocales que hay son ${totalVocales.length} y el total de consonantes son ${totalLetras.length}`);
    
    




}
vocalConso("Este curso Jonathan esta cundiendo muchisimo, gracias");

//Ejercicio 19----------------comprobar nombre y apellidos---------------------------------------------------------------

const nombreApell=(nom=undefined)=>{
    if(!nom)return console.warn("introduce un nombre y apellido porfavor");
    if(typeof(nom)==="number")return console.error("numeros no porfavor");
    let RegExp=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    let resultadoE=RegExp.test(nom);
    (resultadoE===true)
    ?console.info("el dato introducido si que es valido, muy bien campeon!!!!!:)")
    :console.info("el dato introducido no es valido, acuerdate de mirar de que tanto el nombre y el apellido esten en mayusculas")

}
nombreApell("Jorge Almiros");

//EJERCICIO 20-----------------comprobar email------------------------------

const comprobarmail=(correo=undefined)=>{

    if(!correo)return console.log("introduce un correo valido porfavor");
    
    let compCorreo=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;;
    let resCorreo=compCorreo.test(correo);
    console.log(resCorreo)
    if(resCorreo==true)return console.log("correo validado!!!!!");
    else{return console.log("el correo introducido no es valido, revisalo porfavor")};



}
comprobarmail("carlos.est@gmail.com");


//EJERCICO 21-------------------------array numeros cuadrado-----------------------------------


let arreglo2=[];
const arregNum=(...c)=>{
    if(c.length===0)return console.warn("introduce numeros porfavor");
    
for(i=0;i<c.length;i++){
   
    arreglo2.push(c[i]*c[i]);
    
}

console.info(`el valor de los numeros al cuadrado es ${arreglo2}`);

}
arregNum(2,5,8);


//EJERCICIO 22-------------------------numero mas alto y mas bajo----------------------------
 let numerosM;
 let numerosMen;
const numerosMayMen=(...c)=>{
    if(c.length===0)return console.warn("introduce numeros porfavor");
    numerosM=Math.max(...c);
    numerosMen=Math.min(...c);

    console.info(`el numero menor es ${numerosMen} y el numero mayor es ${numerosM}`);

}
numerosMayMen(56,98,2456,12);


//EJERCICIO 23------------------------doble array par impar---------------------------------------
 const arregloPar=[];
 const arregloImpar=[]
const dobleArr=(...c)=>{
    if(c.length===0)return console.warn("introduce numeros porfavor");
  
    for(i=0;i<c.length;i++)
         if(Math.sign(c[i])===-1)return console.warn("hay uno o mas numeros negativos, introduce solo numeros positivos");
                 else if(!(c[i]%1===0))return console.warn("hay uno o mas numeros decimales, porfavor corrige el error");
                         else if(c[i]%2===0){
                             arregloPar.push(c[i]);
                         }
    
                                 else if(c[i]%2===1){
                                 arregloImpar.push(c[i]);
                                 }
                                    else{console.error("error inesperado, lo siento no volvera a suceder :)")};

console.info(`pares: ${arregloPar}------------ impares: ${arregloImpar}`);

}
dobleArr(2,4,5,6,1,0,35,46,3);
//EJERCICIO 24---------------------------arreglos ascendentes y descendentes------------------------------------------------------------

const arrAsDes=(arre=undefined)=>{
    
    if(arre===undefined)return console.warn("no has introducido numeros");
    if(!(arre instanceof Array))return console.warn("no has introducido un arreglo");
    if(arre.length===0)return console.warn("introduce un arreglo lleno porfavor");

    for(rec of arre){
        if(!(typeof(rec)==="number"))return console.error("hay elementos que no son numeros");
    }
   

let ascendente=arre.map(el=>el).sort((a,b)=>(a-b));


let descendente=arre.map(el=>el).sort((a,b)=>(b-a));
  

console.log({
    ascendente:ascendente,
    descendente:descendente
});

}
arrAsDes([22,5,32,200,800]);

//EJERCICIO 25-----------------------eliminare los duplicados------------------------

const dupli=(carexa=undefined)=>{

    if(!carexa)return console.warn("introduce valores al array");
    if(!(carexa instanceof Array))return console.warn("introduce un array porfavor");

    carexa1=carexa.filter((car,pos)=>carexa.indexOf(car)===pos);
    console.info(`el array sin duplicados es ${carexa1}`);


}
dupli([5,7,7,"u","r","u",true,true,false])

//EJERCICIO 26 --------------------promedio-------------------------------------------

const promedio=(numpro=undefined)=>{
    if(!numpro)return console.warn("introduce numeros");
    if(!(numpro instanceof Array))return console.warn("introduce un array de numeros");
    for(npro of numpro){
        if(typeof npro!="number")return console.error("hay algun delemento del array que no es un numero")
    
    }
    
   const numPromedio=numpro.reduce((ac,el)=>ac+el,0);
   console.log (`el promedio del array ${numpro} es igual a ${numPromedio/2}`);
    
}
promedio([3,5,6,7,8,9,2,9,87]);


//EJERCICIO 27 ------------------------CLASES----------------------------------------------
const generosAceptados=["Action","Adult", "Adventure", "Animation", "Biography","Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
class Pelicula{

    constructor({id,titulo,director,estreno,paisOrigen,genero,calificacion}){
        
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.estreno=estreno;
        this.paisOrigen=paisOrigen;
        this.genero=genero;
        this.calificacion=calificacion;
        
        this.validar(id);
        this.validar1(titulo);
        this.validar2(director);
        this.validar3(estreno);
        this.validar4(paisOrigen);
        this.validar5(genero);
        this.validar6(calificacion);
        

    }


        validar(id){
                
            if(typeof(id)!="string")return console.warn("introduce una cadena de texto porfavor");
            if(!id)return console.warn("texto vacio del id");
            if((/^[a-z]{2}\d{7}$/).test(id)===false)return console.warn("Introduce un IMDB valido, dos letras seguidas de siete numeros, gracias ");
           
        }
        validar1(titulo){
            if(typeof(titulo)!="string")return console.log("introduce una cadena de texto porfavor");
            if(!titulo)return console.warn("texto vacio del titulo");
            if(titulo.length>100)return console.warn("el titulo es demasiado largo");

        }
        validar2(director){
            if(typeof(director)!="string")return console.log("introduce una cadena de texto porfavor en director");
            if(!director)return console.warn("texto vacio del director");
            if(director.length>50)return console.warn("el nombre del director es demasiado largo");
        }
        validar3(estreno){
            if(typeof(estreno)!="number")return console.warn("introduce el año en numeros porfavor en año de estreno");
            if(!estreno)return console.warn("texto vacio del año de estreno");
            if(Math.max(estreno)>2020||Math.min(estreno)<1895)return console.warn("no puede haberse estrenado una pelicula este año, porfavor revisa la entrada de año de estreno")


        }
        
        validar4(paisOrigen){
            if(!(paisOrigen instanceof Array))return console.warn("introduce un formato Array porfavor en pais de origen");
            if(!paisOrigen)return console.warn("texto vacio en pais de origen");


        }
        validar5(genero){
            
           if(!(genero instanceof Array))return console.warn("introduce un formato array porfavor en genero");
            if(!genero)return console.warn("texto vacio en genero");
            for(let gen of genero){
                
            if(generosAceptados.includes(gen)===false) return console.warn(`Introduce un genero valido, ejemplo: ${generosAceptados}`);
            }
        }
     
        validar6(calificacion=undefined){
            if(typeof(calificacion)!="number")return console.warn("introduce un valor numerico porfavor en calificacion");
            if(!calificacion)return console.warn("texto vacio en calificacion");
            (calificacion<0||calificacion>10)
            ?console.warn("la puntuacion tiene que ser entre 0 y 10")
            :this.calificacion=calificacion.toFixed(1)
        }
        static generosad(){
            return console.log (`los generos aceptados son ${generosAceptados}`);

        }
    
        fichaTecnica(){
        console.log(`FICHA TECNICA \n IMDB: ${this.id} \n TITULO: ${this.titulo}\n DIRECTOR: ${this.director}\n ESTRENO: ${this.estreno}\n PAIS ORIGEN: ${this.paisOrigen}\n GENERO: ${this.genero}\n PUNTUACION: ${this.calificacion}`);
        }
    
    }    
const peliculas1=new Pelicula({
    id:"da1234567",
    titulo:"Grand farwests",
    director:"Cower Simpl",
    estreno:1990,
    paisOrigen:["EEUA"],
    genero:["Comedy"],
    calificacion:8.35,

})
peliculas1.fichaTecnica();

const peliculas=[
{


    id:"ww3458678",
    titulo:"krakovia",
    director:"krudhi",
    estreno:1895,
    paisOrigen:["russia","portugal"],
    genero:["Horror"],
    calificacion:8.333,
   


},
{

    id:`ww3456768`,
    titulo:"Salmorejo",
    director:"Sr Tomate",
    estreno:1995,
    paisOrigen:["España"],
    genero:["Action","Drama"],
    calificacion:8.6




},
{

    id:`ww3456788`,
    titulo:"Montañas",
    director:"Sr Cumbre",
    estreno:1955,
    paisOrigen:["Francia"],
    genero:["Action","Drama"],
    calificacion:8.5




}];

peliculas.forEach(function(e){
    const tresPelis=new Pelicula(e)
 
    tresPelis.fichaTecnica();
})

Pelicula.generosad();
