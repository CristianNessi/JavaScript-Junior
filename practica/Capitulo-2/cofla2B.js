// PROBLEMA B // Sistema de registro

function respuestaB() {
    
alert("Problema B")


let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "P" || presencia == "p"){
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}  


for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________ Asistencias: ${alumnosTotales[alumno][1]}<br>
    ________ Inasistencias: ${30 - alumnosTotales[alumno][1]}<br>`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIA</b><br><br>";
        } else {
        resultado+= "<br><br>";
        }
document.write(resultado)  

}
}