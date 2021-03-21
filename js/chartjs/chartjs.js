window.addEventListener('load', (event) => {

    var ctx = document.getElementById('myChart');
    var chart = new Chart(ctx, {
        type: 'bubble',
        data: {
            labels: "Zon",
            datasets: [
                {
                    label: ["Almere"],
                    backgroundColor: "rgba(166,206,227,0.2)",
                    borderColor: "rgba(166,206,227,1)",
                    data: [{
                        x: 52.35,
                        y: 1650,
                        r: 30
                    }]
                }, {
                    label: ["Amersfoort"],
                    backgroundColor: "rgba(31,120,180,0.2)",
                    borderColor: "rgba(31,120,180,1)",
                    data: [{
                        x: 52.15,
                        y: 1590,
                        r: 30
                    }]
                }, {
                    label: ["Amsterdam"],
                    backgroundColor: "rgba(178,223,138,0.2)",
                    borderColor: "rgba(178,223,138,1)",
                    data: [{
                        x: 52.37,
                        y: 1670,
                        r: 15
                    }]
                }, {
                    label: ["Den Burg"],
                    backgroundColor: "rgba(51,160,44,0.2)",
                    borderColor: "rgba(51,160,44,1)",
                    data: [{
                        x: 53.05,
                        y: 1620,
                        r: 15
                    }]
                }, {
                    label: ["Groningen"],
                    backgroundColor: "rgba(227,26,28,0.2)",
                    borderColor: "rgba(227,26,28,1)",
                    data: [{
                        x: 53.21,
                        y: 1540,
                        r: 15
                    }]
                }, {
                    label: ["Krommenie"],
                    backgroundColor: "rgba(253,191,111,0.2)",
                    borderColor: "rgba(253,191,111,1)",
                    data: [{
                        x: 52.5,
                        y: 1640,
                        r: 15
                    }]
                }, {
                    label: ["Maastricht"],
                    backgroundColor: "rgba(255,127,0,0.2)",
                    borderColor: "rgba(255,127,0,1)",
                    data: [{
                        x: 50.85,
                        y: 1530,
                        r: 15
                    }]
                }, {
                    label: ["Rotterdam"],
                    backgroundColor: "rgba(202,178,214,0.2)",
                    borderColor: "rgba(202,178,214,1)",
                    data: [{
                        x: 51.92,
                        y: 1590,
                        r: 15
                    }]
                },
            ]
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        city = data.datasets[tooltipItem.datasetIndex].label[0];
                        return city + ': noorderbreedte van deze plaats is ' + tooltipItem.xLabel + ' met het aantal zonuren: ' + tooltipItem.yLabel;
                    }
                }
            },
            title: {
                display: true,
                text: 'De ligging van in Nederland en het gemiddelde aantal zonuren'
            }, scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Zonuren",
                        position: 'left'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Noorderbreedte",
                        position: 'right'
                    }
                }]
            }
        }
    });

});