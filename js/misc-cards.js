

function writeCards(){
    
    let url = 'https://raw.githubusercontent.com/ChristopherJonMyers/christopherjonmyers.github.io/master/poetry/poems/misc.json';

    $.getJSON(url, function(data) {
        $.each(data, function(index){
            document.getElementById('poems-cards').innerHTML += '<div class="col-xs-12 col-sm-6 col-lg-4 mb-5">'
                                                                    +'<div class="card mx-auto shadow" style="width: 18rem;">'
                                                                    +'<div class="card-body">'
                                                                        +'<h5 class="card-title">' + data[index].Title + '</h5>' 
                                                                        +'<a href="../poems/poems.html?name=' + data[index].Title + '" class="btn btn-primary float-right">Read</a>'
                                                                        +'<div/><div/><div/><div/>';

        });
    });
}

writeCards();