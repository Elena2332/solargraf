// Datos de la gráfica
let labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
let consumo = [20, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62, 35, 23, 13,]
let produccion = [10, 20, 30, 10, 30, 50, 10, 62, 35, 23, 13, 30, 62, 35, 28, 5, 23, 13, 30, 62, 23, 13, 30, 62, 35, 23, 13, 30, 6, 22]
let excedente = [20, 35, 23, 23, 13, 30, 30, 62, 35, 23, 13, 30, 62, 62, 35, 13, 62, 35, 23, 13, 30, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62]

const data = {
  labels: labels,
  datasets: [
    {
      label: "produccion",
      data: produccion,
      fill: true,
      borderColor: "rgb(119, 201, 11)",
      tension: 0.1
    },{
      label: "consumo",
      data: consumo,
      fill: false,
      borderColor: "rgb(205, 22, 62)",
      tension: 0.1
  },{
      label: "fugas",
      data: excedente,
      fill: false,
      borderColor: "rgb(22, 184, 205)",
      tension: 0.1
  }]
};

// Opciones de la gráfica
const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};


// Crear la gráfica
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options
});



//// ficheros
  function leerFichero(nom_fich)
  {
    lineas = []
    fetch(nom_fich)
      .then(res => res.text())
        .then(content => {
          let lines = content.split(/\r\n/);
          lines.forEach(line => lineas.push(line.split(/\t/)));
      });
      return lineas
  }
  // leerFichero('../22_12_31.log')
  console.log(leerFichero('../22_12_31.log'))



///// actualizar datos

  // Función para actualizar los datos de las tres series
  function actualizarDatos(consumo, excedente, produccion) {
    // Actualizar los datos de las tres series
    myChart.data.datasets[0].data = consumo;
    myChart.data.datasets[1].data = excedente;
    myChart.data.datasets[2].data = produccion;
    // Actualizar la gráfica
    myChart.update();
  }

  
  function actualizar()
  {
    this.actualizarDatos(consumo,excedente,produccion)
  }