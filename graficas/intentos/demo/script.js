// Datos de la gráfica
let labels = ["08:00","08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];
let labels_2 = ["08:00","08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00","20:30"];
let consumo = [30,70, 80,50, 70,120, 135,123, 240,330, 342,935, 923,213, 230,162, 185,236, 303,320, 362,225, 334,360, 330,402, 385, 23, 13,]
let produccion = [0,0, 0,0, 100,130, 120,160, 620,750, 888,930, 1020,896, 920,810, 760,530, 560,713, 570,530, 380,430, 400,350, 313, 213, 30, 6, 22]
let excedente = [0,0, 0,0, 30,10, 0,42, 390,423, 500,5, 102,462, 735,653, 620,305, 230,393, 200,205, 40,30, 30,120, 0,23, 13,30, 62]
let pot_producida = [0,0, 0,30, 60,50, 71,77, 91,83 ,93,83 ,66,50 ,78,65 ,72,63, 80,86, 73,63, 68,52, 30,23, 13, 30, 6, 22]
let en_producida = [0,0, 0,33, 73,65, 90,83, 98,124, 110,124, 96,84, 75,87, 72,85, 93,113, 100,85, 73,81, 53, 62, 35, 23, 13, 30, 62]

const data = {
  labels: labels,
  datasets: [
    {
      label: "potencia consumida",
      data: produccion,
      fill: false,
      borderColor: "rgb(119, 201, 11)",
      tension: 0.1
    },{
      label: "energia consumida",
      data: consumo,
      fill: false,
      borderColor: "rgb(205, 22, 62)",
      tension: 0.1
  },{
    label: "energia excedente",
    data: excedente,
    fill: false,
    borderColor: "rgb(247, 227, 7)",
    tension: 0.1
  },{
    label: "potencia producida",
    data: pot_producida,
    fill: false,
    borderColor: "rgb(175, 42, 252)",
    tension: 0.1
  },{
    label: "energia producida",
    data: en_producida,
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
  function actualizarDatos(labels,series1, series2, series3) {
    // Actualizar los datos de las tres series
    // myChart.data.datasets[0].data = series1;
    // myChart.data.datasets[1].data = series2;
    // myChart.data.datasets[2].data = series3;
    myChart.data.labels = labels_2
    // Actualizar la gráfica
    myChart.update();
  }

  
  function actualizar()
  {
    this.actualizarDatos(labels_2,consumo,excedente,produccion)
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
  //leerFichero()