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

