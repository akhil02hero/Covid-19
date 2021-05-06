fetch(
  "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    getdata(data);
  })
  .catch((err) => console.log(err));

function getdata(data) {
  console.log(data);
  xlabel = [];
  ylabel = [];
  for (var i = 1; i < data.regionData.length; i++) {
    xlabel.push(data.regionData[i].region);
    ylabel.push(data.regionData[i].activeCases);
  }
  console.log(xlabel);
  console.log(ylabel);
  const ctx = document.getElementById("Chart").getContext("2d");
  const myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels:xlabel,
            datasets:[
                {
                    label:"covid-19 cases",
                    data:ylabel,
                    backgroundColor:['rgba(255, 99, 132, 0.2)'],
                    borderColor: ["rgba(255, 99, 132, 1)"],
                    borderWidth: 1,
                    
                },
            ],
        },
    });
  
}

// const ctx = document.getElementById("Chart").getContext("2d");
//   const myChart = new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: xlabel,
//       datasets: [
//         {
//           label: "covid cases",
//           data: ylabel,
//           backgroundColor: ["rgba(255, 99, 132, 0.2)"],
//           borderColor: ["rgba(255, 99, 132, 1)"],
//           borderWidth: 1,
//         },
//       ],
//     }}
    // 