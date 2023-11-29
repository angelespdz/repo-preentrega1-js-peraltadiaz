//SIMULADOR DE PRÉSTAMOS 

alert('Bienvenido a nuestro simulador de préstamos.');

const simularPrestamo = () => {
  let subtotal = 0;
  let simularOtro = true;

  do {
    let prestamoSolicitado;

    do {
      prestamoSolicitado = parseInt(prompt('Ingrese el monto del préstamo al que desea acceder (Debe ser mayor a $12000 y menor a $100000).'));
      if (prestamoSolicitado < 12000 || prestamoSolicitado > 100000) {
        alert('El monto ingresado no es correcto. Debe ser mayor a $12000 y menor a $100000.');
      }
    } while (prestamoSolicitado < 12000 || prestamoSolicitado > 100000);

    alert('En interés es de 25% en 12 cuotas, 30% en 24 cuotas y 35% en 36 cuotas.')

    let cantidadDeCuotas = parseInt(prompt('¿Desea hacerlo en 12, 24 o 36 cuotas?'));

    switch (cantidadDeCuotas) {
      case 12:
        interes = 1.25;
        break;
      case 24:
        interes = 1.3;
        break;
      case 36:
        interes = 1.35;
        break;
      default:
        alert('La cantidad de cuotas ingresada no es correcta. Debe ser 12, 24 o 36.');
        continue;
    }

    subtotal += prestamoSolicitado * interes / cantidadDeCuotas;

    alert('El préstamo solicitado es: $' + prestamoSolicitado + '. Usted debería pagar ' + cantidadDeCuotas + ' cuotas de $' + subtotal.toFixed(2)); //Utilicé el to.Fixed para limitar a dos decimales el resultado.

    simularOtro = confirm('¿Desea simular otro préstamo?');
  } while (simularOtro);

  return subtotal;
}

simularPrestamo();