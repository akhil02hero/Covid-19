fetch('https://api.covid19india.org/data.json').then((response) => {
                    response.json().then((data) => {
                        let datalist = data.statewise;
                        let state = datalist.map(i => i.state);
                        let active = datalist.map(i => i.deaths);
                        console.log(state);
                        console.log(active);
                        var data = [{
                            x: state,
                            y: active,
                            type: "bar"
                        }];
                        var layout = {
                            title: "Covid 19"
                        };

                        Plotly.newPlot("disdis", data, layout);
                    })
                })