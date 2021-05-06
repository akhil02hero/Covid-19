fetch('https://api.covid19india.org/data.json').then((response) => {
                    response.json().then((data) => {
                        let datalist = data.statewise;
                        let state = datalist.map(i => i.state).slice(1);
                        let active = datalist.map(i => i.deaths).slice(1);
                        console.log(state);
                        console.log(active);
                        var data = [{
                            x: state,
                            y: active,
                            type: "bar"
                        }];
                        var layout = {
                            title: "Covid 19 Death Rate"
                        };

                        Plotly.newPlot("disdis", data, layout);
                    })
                })