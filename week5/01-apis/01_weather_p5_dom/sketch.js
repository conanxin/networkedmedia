// jsfiddle version: http://jsfiddle.net/rover/bnz198Lv/

function setup() {
    noCanvas();
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial',parseStuff);   
}

function parseStuff(data){
    //console.log(data); // the whole thing
    //console.log(data.weather[0].main); // the first weather condition (eg, Rain)

    for (i in data.weather){
        console.log(data.weather[i].main); 
        createP(data.weather[i].main);
    }
    
}