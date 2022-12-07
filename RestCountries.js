var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all', true)
request.send();
request.onload = function(){
    if(request.status == 200){
        var data = JSON.parse(request.responseText)
        console.log(data);
        for(var i =0; i<data.length; i++){
            console.log(`country name : ${data[i].name}, region: ${data[i].region}, sub region: ${data[i].subregion}, population: ${data[i].population}.`);
            console.log("flag :"), console.log( data[i].flags)
        }   
    }
}

