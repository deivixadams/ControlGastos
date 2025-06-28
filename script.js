document.addEventListener('DOMContentLoaded', function() {
  const gastosForm = document.getElementById('gastosForm');
  const listaGastos = document.getElementById('listaGastos');

  gastosForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const fecha = document.getElementById('fecha').value;
    const categoria = document.getElementById('categoria').value;
    const descripcion = document.getElementById('descripcion').value;
    const monto = document.getElementById('monto').value;

    const nuevoGasto = document.createElement('li');
    nuevoGasto.textContent = `${fecha} - ${categoria} - ${descripcion} - $${parseFloat(monto).toFixed(2)}`;

    listaGastos.appendChild(nuevoGasto);

    gastosForm.reset();
  });
});
