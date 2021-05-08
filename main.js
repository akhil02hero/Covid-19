// fetch the data from covid19india api

fetch("https://api.covid19india.org/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    states(data);
  })
  .catch((err) => console.log(err));

// function to display the details of the covid-19 in india statewise

function states(data) {
  // console.log(data.statewise);
  
  var arr = Object.values(data.statewise);
  // console.log(arr)
  addalldata(arr);

}

// function to add data in the html

function addalldata(arr) {
  let td = document.querySelector("#table_content");
  
  for (var i = 1; i < arr.length - 1; i++) {
    let state_h1 = document.createElement("h1");
    state_h1.setAttribute("id", "feeds");
    let active_h1 = document.createElement("h1");
    active_h1.setAttribute("id", "feeds");
    let confirmed_h1 = document.createElement("h1");
    confirmed_h1.setAttribute("id", "feeds");
    let recovered_h1 = document.createElement("h1");
    recovered_h1.setAttribute("id", "feeds");
    let deaths_h1 = document.createElement("h1");
    deaths_h1.setAttribute("id", "feeds");
    let state = document.createElement("strong");
    let active = document.createElement("strong");
    let deaths = document.createElement("strong");
    let recovered = document.createElement("strong");
    let confirmed = document.createElement("strong");
    state.appendChild(document.createTextNode(arr[i].state));
    confirmed.appendChild(document.createTextNode(arr[i].confirmed));
    active.appendChild(document.createTextNode(arr[i].active));
    recovered.appendChild(document.createTextNode(arr[i].recovered));
    deaths.appendChild(document.createTextNode(arr[i].deaths));
    state_h1.appendChild(state);
    confirmed_h1.appendChild(confirmed);
    active_h1.appendChild(active);
    recovered_h1.appendChild(recovered);
    deaths_h1.appendChild(deaths);
    td.appendChild(state_h1);
    td.appendChild(confirmed_h1);
    td.appendChild(active_h1);
    td.appendChild(recovered_h1);
    td.appendChild(deaths_h1);
  }
}

