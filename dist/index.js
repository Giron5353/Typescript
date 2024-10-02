"use strict";
let nombre = "David";
nombre = "Giron";
console.log(nombre);
let numero = 12;
console.log(numero);
const e1 = {
    firstName: "David",
    lastName: "Giron",
    age: 18,
    address: {
        ad: "Calle 123",
        city: "Bogota",
        country: "Colombia"
    }
};
const e2 = {
    firstName: "Jose",
    lastName: "Borda",
    age: "22",
    address: {
        ad: "Calle 987",
        city: "Lima",
        country: "Peru"
    }
};
//mostrar informacion del estudiante
//version declarativa
const mostrarEstudiante = (estudiante) => {
    const { firstName, lastName, age, address } = estudiante;
    return `Nombre de estudiante: ${firstName} ${lastName} - edad: ${age} - direccion: ${address === null || address === void 0 ? void 0 : address.ad} -  ${address === null || address === void 0 ? void 0 : address.city} -  ${address === null || address === void 0 ? void 0 : address.country}`;
};
console.log(mostrarEstudiante(e1));
console.log(mostrarEstudiante(e2));
//Arreglos
//Crear un arreglo de estudiantes
//let estudiantes:estudiante[] = [e1, e2]
//recorrer el arreglo de estudiantes imprimiendo nombre y apellido utilizando el elemento de arreglos foreach
//estudiantes.forEach((estudiante)=>console.log(estudiante.firstName,estudiante.lastName));
let estudiantes = [];
const agregarEstudiante = (estudiante) => {
    estudiantes.push(estudiante);
};
agregarEstudiante({
    firstName: "Cristian",
    lastName: "Castiblanco",
    age: "19",
    address: {
        ad: "Calle 246",
        city: "Caracas",
        country: "Venezuela"
    }
});
agregarEstudiante({
    firstName: "Jose",
    lastName: "Borda",
    age: "22",
    address: {
        ad: "Calle 987",
        city: "Lima",
        country: "Peru"
    }
});
agregarEstudiante({
    firstName: "Paula",
    lastName: "Perez",
    age: "17",
    address: {
        ad: "Calle 12345",
        city: "Cali",
        country: "Colombia"
    }
});
agregarEstudiante({
    firstName: "Santiago",
    lastName: "Gonzalez",
    age: "20",
    address: {
        ad: "Calle 102",
        city: "Medellin",
        country: "Colombia"
    }
});
//Ahora un arreglo para eliminar estudiantes por apellido
const eliminarEstudiante = (apellido) => {
    estudiantes = estudiantes.filter((estudiante) => estudiante.lastName !== apellido);
};
eliminarEstudiante("Borda");
console.log(estudiantes);
