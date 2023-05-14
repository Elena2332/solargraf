// Datos de la gráfica
let labels = [1,2,3,4,5,6,7,8,9,10]
let potencia_consumida = new Array()
let energia_consumida  = []
let energia_excedente  = []
let potencia_producida = []
let energia_producida  = []

var data = {
  // labels: labels,
  datasets: [
    {
      label: "potencia consumida",
      data: labels,
      fill: false,
      borderColor: "rgb(119, 201, 11)",
      tension: 0.1
    },{
      label: "energia consumida",
      data: labels,
      fill: false,
      borderColor: "rgb(205, 22, 62)",
      tension: 0.1
    },{
      label: "energia excedente",
      data: labels,
      fill: false,
      borderColor: "rgb(22, 184, 205)",
      tension: 0.1
    },{
      label: "potencia producida",
      data: labels,
      fill: false,
      borderColor: "rgb(220, 180, 125)",
      tension: 0.1
    },{
      label: "energia producida",
      data: labels,
      fill: false,
      borderColor: "rgb(120, 130, 125)",
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
var canvas = document.getElementById("myChart")
var ctx = canvas.getContext("2d")
var myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options
});



//// ficheros
  function leerFichero(nom_fich)
  {
    let lines   //fichero bruto
    let len
    let lin
    fetch(nom_fich)
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
            labels[i-2] = i-2
            // labels[i-2] = lin[0]
            potencia_consumida[i-2] = parseInt(lin[1])       // potencia consumida
            energia_consumida [i-2] = parseInt(lin[2])      // energia consumida
            energia_excedente [i-2] = parseInt(lin[3])      // energia excedente
            potencia_producida[i-2] = parseInt(lin[4])       // potencia producida
            energia_producida [i-2] = parseInt(lin[5])      // energia producida
          }
         
      });
      console.log('leerFichero FIN')
  }
  // leerFichero('../22_12_31.log')
  // console.log(leerFichero('../22_12_31.log'))


  function gestionarArrays()
  {
    leerFichero('../22_12_31.log')
  }

 
  let consumo = [20, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62, 35, 23, 13,]

///// actualizar datos  
  function actualizar()
  {    
    gestionarArrays()
    // myChart.data.labels = labels
    // consumo = potencia_consumida
    
    for(let i=0; i<potencia_consumida.length; i++)
      consumo[i]=potencia_consumida[i]

    for(let i=0; i<potencia_consumida.length; i++)
      myChart.data.labels[i]=i
      
      // consumo=potencia_consumida
    myChart.data.datasets[0].data = consumo
    // myChart.data.labels = labels
    myChart.update()
    
    // myChart.render()
    // actualizarDatos(potencia_consumida, energia_consumida, energia_excedente,potencia_producida,energia_producida)
    
  }