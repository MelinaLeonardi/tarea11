let actividad1="Caminar 1 hora - Elongar";
let actividad2="Trotar 30 minutos - caminar 30 minutos - Elongar";
let actividad3="Hacer precalentamiento - 30 abdominales -30 flexiones- Elongar";
let actividad4="Hacer precalentamiento - 10 planchas- 30 fuerza biceps mancuernas- Elongar";
let actividad5="Hacer precalentamiento - 30 ejercitacion gluteos- 30 ejercitacion pectorales- Elongar";
let actividad6="Hacer precalentamiento- 30 ejercitacion piernas- 30 abdominales oblicuos- Elongar";
let actividad7="Hacer precalentamiento- 30 ejercitacion espalda- 30 flexiones- 30 fuerza triceps mancuernas- Elongar";


let diaSemana = prompt("¿Qué día es hoy?");
switch (diaSemana) {
case "lunes":
alert("Hoy es lunes" +  "Tu actividad de hoy es: "+ actividad1) ;
break;
case "martes":
alert("Hoy es martes." + " Tu actividad de hoy es: "+ actividad2)   ;
break;
case "miércoles":
alert("Hoy es miércoles." + " Tu actividad de hoy es: "+ actividad3) ;
break;
case "jueves":
alert("Hoy es jueves." + " Tu actividad de hoy es: "+ actividad4) ;
break;
case "viernes":
alert("Hoy es viernes."+ " Tu actividad de hoy es: "+ actividad5) ;
break;
case "sábado":
alert("Hoy es sábado."+ " Tu actividad de hoy es: "+ actividad6)  ;
break;
case "domingo":
alert("Hoy es domingo."+ " Tu actividad de hoy es: "+ actividad7) ;
break;
default:
alert("Escribe el día de la semana en minúsculas.");
}

/*ejercicio 11B> extructura base donde el indice de i va desde 0  a 4<

for(i=0;i<=4;i++){
    document.write("El número es: " + i + "<br>");
    } */
    

    /* modificamos la extructura base para que el bucle solo muestre  el indice desde 20 a 70*/
  

    for(i=20;i<=70;i++){
        document.write("El número es: " + i + "<br>");
        }

       