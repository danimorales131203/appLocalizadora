const lineaDestino = document.getElementById("lineaDestino");

function mostrarUbicacion(posicion) {
    const latitud = posicion.coords.latitude;
    const longitud = posicion.coords.longitude;

    lineaDestino.textContent = `Lat: ${latitud.toFixed(6)}, Long: ${longitud.toFixed(6)}`;
}

function mostrarError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            lineaDestino.textContent = "Permiso de ubicación denegado";
            break;
        case error.POSITION_UNAVAILABLE:
            lineaDestino.textContent = "Ubicación no disponible";
            break;
        case error.TIMEOUT:
            lineaDestino.textContent = "Tiempo de espera agotado";
            break;
        default:
            lineaDestino.textContent = "Ocurrió un error al obtener la ubicación";
            break;
    }
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion, mostrarError);
} else {
    lineaDestino.textContent = "Geolocalización no compatible con este navegador";
}