const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const poemName = params.get('name');

function writeTitle(){
    document.getElementById('Title').innerHTML = poemName;
}

function writePoem(){
    
    let url = 'https://raw.githubusercontent.com/ChristopherJonMyers/christopherjonmyers.github.io/master/poetry/poems/CWPP.json';

    $.getJSON(url, function(data) {
        $.each(data, function(index){
            if(data[index].Title == poemName){
                document.getElementById('Text').innerHTML =  data[index].Text;
            }
        });
    });  
}

writeTitle();
writePoem();