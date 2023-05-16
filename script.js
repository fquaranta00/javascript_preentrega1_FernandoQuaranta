/*

Programa para gestion en salud, de pacientes y obras sociales
En el mismo encontraran 1 funcion y 1 switch:
                1. Función de login
                2. Switch para seleccionar paciente e informacion general
*/

//Comienzo funcion login
function login(usuarioLower, contrasena) {
    const usuarioValidador = "fernando";
    const mailValidador = "fquaranta00@gmail.com";
    const passValidador = "p3p3";   
    if (
        (usuarioLower === usuarioValidador || usuarioLower === mailValidador) &&
        contrasena === passValidador
    )   {
        alert("Usuario correcto");
        console.log("Usuario correcto");
        alert("Bienvenido " + usuarioValidador);
        console.log("Bienvenido " + usuarioLower);
        return true;
        }else {
        alert("Usuario/contraseña inválida");
        console.log("Usuario/contraseña inválida");
        alert("Intente nuevamente");
        console.log("Intente nuevamente");
        return false;
        }
}
//Fin funcion Login



let intentos = 3;
let loginKey = false;

while (intentos > 0 && loginKey === false) {
    let usuario = prompt("Ingrese Usuario o Mail: ");
    let usuarioLower = usuario.toLowerCase();
    let contrasena = prompt("Ingrese su contraseña: "); 
    loginKey = login(usuarioLower, contrasena); //Acá se ejecuta la funcion login
    console.log("Resultado de la función: " + loginKey);    
    if (loginKey === false) {
        intentos--;
        console.log("Intentos restantes: " + intentos);
    }
}

if (intentos === 0) {
    console.log("Se agotaron los intentos. Programa finalizado.");
} else {
    let numeroPaciente = prompt(
    "Seleccione el paciente:\n1. Juancito Perez\n2. Francisca Lemes\n3. Jacinto Ceres"
    );
  // Comienzo del switch
}


















// Comienzo función de login
// se envía usuario y contraseña y devuelve true or false
// function login(usuarioLower, contrasena) {
//     const usuarioValidador = "fernando";
//     const mailValidador = "fquaranta00@gmail.com";
//     const passValidador = "p3p3";
//     if (
//         (usuarioLower == usuarioValidador || usuarioLower == mailValidador) &&
//         contrasena == passValidador
//     ) {
//         alert("Usuario correcto");
//         console.log("Usuario correcto");
//         alert("Bienvenido " + usuarioValidador);
//         console.log("Bienvenido " + usuarioLower);
//         return true;
//     } else {
//         alert("Usuario/contraseña invalida");
//         console.log("Usuario/contraseña invalida");
//         alert("Intente nuevamente");
//         console.log("Intente nuevamente");
//         return false;
//         }
// }

// FIN función de login

//Comienzo funcion paciente donde, ingresando el nombre, se recupera que obra social tiene y cuantas sesiones disponibles tiene
// if(numeroPaciente == 1) {

// FIN funcion paciente

// let intentos = 3;
// let loginKey = false;

// do {
//     for(let i=0; i<intentos; i++){  
//         let usuario = prompt("Ingrese Usuario ó Mail: ");
//         let usuarioLower = usuario.toLowerCase();
//         let contrasena = prompt("Ingrese su password: ");
        
//         loginKey = login(usuarioLower, contrasena); //En este punto se ejecuta la funcion login
//         console.log("resultado de la funcion: " + loginKey);
        
//         if(loginKey == true){
//             break;
//         }else {
//             intentos--;
//             console.log("Intentos restantes: " + intentos)
//         }
//         if(intentos == 0) {
//             break
//         }
//     }
// }while (loginKey == false);

// let numeroPaciente = prompt(
//   "Seleccione la/él paciente:\n1. Juancito Perez\n2. Francisca Lemes\n1. Jacinto Ceres"
// );

// var pacienteKey = paciente(numeroPaciente); //En este punto se ejecuta paciente
// console.log("Paciente: " + numeroPaciente);

// switch (numeroPaciente) {
//   case "1":
//     let pacienteNombre = "Juancito Perez";
//     let pacienteOS = "OSDE";
//     let sesionesDisponibles = 10;
//     let sesionesTomadas = 0;

//     for(let i = sesionesDisponibles; i > 0; i--){
//         sesionesTomadas = sesionesTomadas++
//         sesionesDisponibles = sesionesDisponibles--
//         console.log(
//             "El/la Paciente " +
//               pacienteNombre +
//               " tiene obra social " +
//               pacienteOS +
//               " y cuenta con " +
//               sesionesDisponibles +
//               " sesiones disponibles"
//           );
//     break
//     }

//     break;
//   case "2":
//     break;
//   case "3":
//     break;
//   default:
//     alert("No seleccionó ningún paciente valido")
//     console.log("No seleccionó ningún paciente valido")
//     break;
// }

// var vidas = 3;

// const NUMEROMAGICO = 7;

// var pedirNumero = 0;

// for (let i = 0; i < 50; i++) {
//   //modulo...%
//   pedirNumero = parseInt(prompt("elegir numero"));

//   if (pedirNumero == NUMEROMAGICO) {
//     alert("GANASTE!!!");
//     break;
//   } else {
//     alert("intente de nuevo");
//     vidas--;
//     console.log(vidas);
//   }
// }

// var dinero = 15000

// var opcion = prompt("ingrese alguna opcion del cajero")

// switch(opcion) {
//     case "1":
//       alert("Extraer")
//        var extraDinero = parseInt(prompt("ingrese un monto a extraer"))
//        dinero = dinero - extraDinero
//        alert("te quedan " + dinero)

//       break
//     case "2":
//         alert("Consultar")
//         alert("usted tiene el saldo: " + dinero)
//       break
//     case "3":
//         alert("transferir")
//     break
//     default:
//         alert("no ha elegido una opcion")
//     break;
//    }
