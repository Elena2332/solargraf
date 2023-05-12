// Datos de la gráfica
let labels = []
let potencia_consumida = []
let energia_consumida = []
let energia_excedente = []
let potencia_producida = []
let energia_producida = []

const data = {
  labels: labels,
  datasets: [
    {
      label: "potencia consumida",
      data: potencia_consumida,
      fill: false,
      borderColor: "rgb(119, 201, 11)",
      tension: 0.1
    },{
      label: "energia consumida",
      data: energia_consumida,
      fill: false,
      borderColor: "rgb(205, 22, 62)",
      tension: 0.1
    },{
        label: "energia excedente",
        data: energia_excedente,
        fill: false,
        borderColor: "rgb(22, 184, 205)",
        tension: 0.1
    },{
      label: "potencia producida",
      data: potencia_producida,
      fill: false,
      borderColor: "rgb(220, 180, 125)",
      tension: 0.1
    },{
      label: "energia producida",
      data: energia_producida,
      fill: false,
      borderColor: "rgb(220, 180, 125)",
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
          let lines = content.split(/\r\n/);    // array, string lineas del fichero
          let len = lines.length
          for(let i=0; i<len ; i++)
          {
            let lin = lines[i].split(/\t/)    // array, partes de la linea
            if(lin.length == 4)
            {
              lin[4] = '0'
              lin[5] = '0'
            }
            lineas[i] = lin
            console.log('lin: '+lin)
          }
          
          // lines.forEach(line => {
          //   let lin = line.split(/\t/)
          //   if(lin.length == 4)
          //   {
          //     lin[4] = '0'
          //     lin[5] = '0'
          //   }
          //   lineas.push(lin)
          // })
      });
      console.log('lineas leerFichero: ' +lineas)
      return lineas
  }
  // leerFichero('../22_12_31.log')
  // console.log(leerFichero('../22_12_31.log'))


  function gestionarArrays()
  {
      lineas = leerFichero('../22_12_31.log')
      console.log('lineas gestionarArray: '+lineas)
      lineas.forEach(line => {
        this.labels.push(line[0])   // hora
        this.potencia_consumida.push(line[1])   // potencia consumida
        this.energia_consumida.push(line[2])   // energia consumida
        this.energia_excedente.push(line[3])   // energia excedente
        this.potencia_producida.push(line[4])   // potencia producida
        this.energia_producida.push(line[5])   // energia producida
        console.log('linea:'+line)
      })
    /*
      for (let line in lineas) {
        this.labels.push(line[0])   // hora
        this.potencia_consumida.push(line[1])   // potencia consumida
        this.energia_consumida.push(line[2])   // energia consumida
        this.energia_excedente.push(line[3])   // energia excedente
        this.potencia_producida.push(line[4])   // potencia producida
        this.energia_producida.push(line[5])   // energia producida
        // console.log(line)
      }
    */
  }

 

///// actualizar datos

  // Función para actualizar los datos de las tres series
  function actualizarDatos(potencia_consumida, energia_consumida, energia_excedente,potencia_producida,energia_producida) {
    // Actualizar los datos de las tres series
    myChart.data.datasets[0].data = potencia_consumida;
    myChart.data.datasets[1].data = energia_consumida;
    myChart.data.datasets[2].data = energia_excedente;
    myChart.data.datasets[3].data = potencia_producida;
    myChart.data.datasets[4].data = energia_producida;

    // console.log(potencia_consumida)
    // Actualizar la gráfica
    myChart.update();
  }

  
  function actualizar()
  {    
    gestionarArrays()
    actualizarDatos(potencia_consumida, energia_consumida, energia_excedente,potencia_producida,energia_producida)
  }