function conversion1(){
    var Num1=parseInt(document.getElementById('Num1').value);
    var result;
    
    result=Num1/24.00
    result2=Num1/28.86
    result3=Num1/1.19
 console.log("el total en Dolares es:"+result)
 console.log("El total en Euros es:"+result2)
 console.log("El total en Pesos Mexicano es:"+result3)
    
 }


function conversion(){
    var Num1=parseInt(document.getElementById('Num1').value);
    var Num2=parseInt(document.getElementById('Num2').value);
    var Num3=parseInt(document.getElementById('Num3').value);
    var result;
result;
            
            if(Num1==Num2 && Num2==Num3) {
               console.log(' El triangulo es equilatero ');
               alert(" El triangulo es equilatero");
            } else if(Num1==Num2 || Num2==Num3 || Num1==Num3) {
                console.log(' El triangulo es isosceles ');
                alert("El triangulo es isosceles");
            } else { //(Num2!=Num3 && Num3!=Num4)
                console.log(' El triangulo es escaleno ');
                alert("El triangulo es escaleno");
            }
 } 

 
 function sumarNumerosArreglo(numeros) {
    if (numeros instanceof Array) {
        let suma = 0;

        for(let i = 0; i < numeros.length; ++i) {
            suma += numeros[i];
            
        }

        return suma;
    } else {
    }

    console.log('La Suma total es:'+sumarNumerosArreglo([5, 12, 33, 45, 34, 24, 65, 76, 43]));
    alert('La Suma total es:'+sumarNumerosArreglo([5, 12, 33, 45, 34, 24, 65, 76, 43]));
 
    if (numeros instanceof Array) {
        let suma = 0;

        for(let i = 0; i < numeros.length; ++i) {
            suma += numeros[i];
            
        }

        return suma;
    } else {
    }

    console.log('El Promedio Aritmetico:'+sumarNumerosArreglo([5, 12, 33, 45, 34, 24, 65, 76, 43])/9); 
    alert('El Promedio Aritmetico: '+sumarNumerosArreglo([5, 12, 33, 45, 34, 24, 65, 76, 43])/9);
 
}