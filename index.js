const req = new XMLHttpRequest;
req.open('GET','https://restcountries.com/v3.1/all');
req.send(null);
req.onload = function(){
    const response = JSON.parse(req.responseText);
    //console.log(response);

    response.forEach(({ flag, name:{common},region,subregion,population}) => {
        console.log(flag,common);
        
        console.log(region,subregion,population);
    });

}

