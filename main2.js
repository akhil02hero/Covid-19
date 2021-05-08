var sb=document.getElementById('searchbar');
sb.addEventListener('keypress',(e)=>{
    // document.getElementById('search').addEventListener('click',fetchdata);
    // to make this variable global no type is given
    if (e.key==="Enter"){
        if (e.target.value.length<=2){
            searchstr=(e.target.value).toUpperCase();
            fetchdata();
        }
        else{
            searchstr=(e.target.value)[0].toUpperCase()+((e.target.value).slice(1)).toLowerCase();
            fetchdata();
        }
    } 
})

function fetchdata(){
    fetch("https://api.covid19india.org/data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        //   console.log(Object.keys(data.statewise));
        createpie(data);
    })
    .catch((err) => console.log(err));
}

function createpie(data){
    var state={},elements=[];
    for (var i=1;i<data.statewise.length-1;i++){
        elements.push({state:data.statewise[i].state,active:Number(data.statewise[i].active),confirmed:Number(data.statewise[i].confirmed,),recovered:Number(data.statewise[i].recovered),deaths:Number(data.statewise[i].deaths),statecode:data.statewise[i].statecode})
    }
    
    console.log(elements);
    // cont filteredstatedata=elements.filter(())
    // console.log(searchstr);
    
    const filtereddata=elements.filter((data)=>{
        return (data.state.includes(searchstr)||data.statecode.includes(searchstr));
    });
    // console.log(filtereddata);
    displaydata(filtereddata);
}
    
function displaydata(data){
    console.log(data);
    var display=document.getElementById('displayinfo');
    var html=`
    <h1 id="dispt"><strong>State</strong></h1><h1 id="dispi"><strong>${data[0].state}</strong></h1>
    <h1 id="dispt"><strong>State Code </strong></h1><h1 id="dispi"><strong>${data[0].statecode}</strong></h1>
    <h1 id="dispt"><strong>Active Cases</strong></h1><h1 id="dispi"><strong>${data[0].active}</strong></h1>
    <h1 id="dispt"><strong>Confirmed Cases</strong></h1><h1 id="dispi"><strong>${data[0].confirmed}</strong></h1>
    <h1 id="dispt"><strong>Recovered Cases</strong></h1><h1 id="dispi"><strong>${data[0].recovered}</strong></h1>
    <h1 id="dispt"><strong>Death Cases</strong></h1><h1 id="dispi"><strong>${data[0].deaths}</strong></h1>
    `;
    display.innerHTML=html;

}
    

// function createpiechartfromlist(data1,data2,data3,data4,data5){
//     console.log(data1,data2,data3,data4,data5);
// }
    
// function statedata(id,state,active,confirmed,recovered,deaths){
//     this.id=id;
//     this.state=state;
//     this.active=active;
//     this.confirmed=confirmed;
//     this.recovered=recovered;
//     this.deaths=deaths;

// }
    