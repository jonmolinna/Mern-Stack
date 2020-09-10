export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Permite Formatear Numeros y Cadenas
// Da un toque especial al numero con comas y puntos