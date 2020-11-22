

function writeCards(){
    
    let url = 'https://raw.githubusercontent.com/ChristopherJonMyers/christopherjonmyers.github.io/master/poetry/poems/CWPP.json';

    var poemsTitles = [];
    var poemsText = [];
    $.getJSON(url, function(data) {
        $.each(data, function(index){
            poemsTitles.push(data[index].Title);
            poemsText.push(data[index].Text);

            document.getElementById('poems-cards').innerHTML += '<div class="card mx-auto shadow" style="width: 18rem;">'
                                                                    +'<div class="col-xs-12 col-sm-6 col-lg-4">'
                                                                    +'<div class="card-body">'
                                                                        +'<h5 class="card-title">' + poemsTitles[index] + '</h5>' 
                                                                        +'<a href="../poetry/poems/poem.html?name="' + poemsTitles[index] + '" class="btn btn-primary">Read</a>'
                                                                        +'<div/><div/><div/><div/>';

        });
    });

   
}

writeCards();