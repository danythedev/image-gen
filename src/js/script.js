//API Call


//Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

//Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);


request.onload = function () {
    //Access JSON data here and parse it to JS
    var data = JSON.parse(this.response);

    //Access JSON data to stringify
    var dataStringify = JSON.stringify(this.response);

    //HTTP Error Handling.
    if(request.status >= 200 && request.status < 400){
        data.forEach((movie) => {
            //Title
            // console.log(movie.title);
            // console.log(movie.title);

        });

        //Displaying Objects on the console.
        //-------------------------------------------------------
        // console.log('JSON TO OBJECT (Console.log(object)) <>')
        // console.log(data);
        // console.log('JSON TO STRINGIFY <>')
        // console.log(dataStringify);
        // console.log('DIR OBJECT <>')
        // console.dir(data);
        //-------------------------------------------------------

        console.log('TABLE <>')
        console.table(data);
        console.log('Object.entries(object)')
        let objEntries = Object.entries(data);
        console.log(objEntries);

    }else{
        console.log('error');
    }

}

request.send();

