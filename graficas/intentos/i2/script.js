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



///// actualizar datos

  // Función para actualizar los datos de las tres series
  function actualizarDatos(series1, series2, series3) {
    // Actualizar los datos de las tres series
    myChart.data.datasets[0].data = series1;
    myChart.data.datasets[1].data = series2;
    myChart.data.datasets[2].data = series3;
    // Actualizar la gráfica
    myChart.update();
  }

  
  function actualizar()
  {
    this.actualizarDatos(consumo,excedente,produccion)
  }


  function leerFichero()
  {
    let lines   //fichero bruto
    let len
    let lin
    fetch('../22_12_31.log')
      .then(res => res.text())
        .then(content => {
          lines = content.split(/\r\n/);    // array, string lineas del fichero
          len = lines.length
          for(let i=2; i<len ; i++)
          {
            lin = lines[i].split(/\t/)    // array, partes de la linea
            if(lin.length < 6)
            {
              lin[4] = '0'
              lin[5] = '0'
            }
            console.log(lin)
          }
         
      });
  }
  leerFichero()