// Datos de la gráfica
const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
const data = {
  labels: labels,
  datasets: [{
    label: "a",
    data: [10, 20, 30, 10, 30, 50, 10, 62, 35, 23, 13, 30, 62, 35, 28, 5, 23, 13, 30, 62, 23, 13, 30, 62, 35, 23, 13, 30, 6, 22],
    fill: true,
    borderColor: "crimson",
    tension: 0.1
  },
  {
    label: "b",
    data: [20, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62, 35, 23, 13, 30, 62],
    fill: false,
    borderColor: "rgb(75, 92, 192)",
    tension: 0.3
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


// line, bubble, bar, pie, polarArea, radar, scatter