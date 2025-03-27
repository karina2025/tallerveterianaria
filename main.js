let registromascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

function registrarMascota(callback) {
    setTimeout(() => {
        let nuevaMascota = {
            nombre: prompt("Ingrese el Nombre de la nueva mascota"),
            especie: prompt("Ingrese la especie de la mascota"),
            edad: prompt("Ingrese la edad de la mascota"),
            peso: prompt("Ingrese el peso de la mascota"),
            estado: prompt("Ingrese el estado de salud (Sano, Enfermo, En tratamiento)")
        };

        registromascotas.push(nuevaMascota);
        localStorage.setItem("mascotas", JSON.stringify(registromascotas));
        alert("Mascota registrada con éxito.");
        callback();
    }, 3000); 
}

function buscarMascota(nombre, callback) {
    setTimeout(() => {
        let mascota = registromascotas.find(m => m.nombre.toLowerCase() === nombre.toLowerCase());
        callback(mascota);
    }, 3000);  
}

function actualizarEstadoSalud(nombre, nuevoEstado, callback) {
    buscarMascota(nombre, (mascota) => {
        if (mascota) {
            setTimeout(() => {
                mascota.estado = nuevoEstado;
                localStorage.setItem("mascotas", JSON.stringify(registromascotas));
                alert("Estado de salud actualizado.");
                callback();
            }, 3000); 
        } else {
            alert("Mascota no encontrada.");
        }
    });
}
registrarMascota(() => {
    let nombreBuscar = prompt("Nombre de la mascota a buscar:");
    buscarMascota(nombreBuscar, (mascota) => {
        if (mascota) {
            console.log("Mascota encontrada:", mascota);
            let nuevoEstado = prompt("Ingrese el nuevo estado de salud:");
            actualizarEstadoSalud(nombreBuscar, nuevoEstado, () => {
                console.log("se ha actualizado co exito el estado de la mascota.");
            });
        } else {
            alert("Mascota no encontrada.");
        }
    });
});




