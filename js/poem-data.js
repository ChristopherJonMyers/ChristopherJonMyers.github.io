const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const poemName = params.get('name');
const project = params.get('page');

function writeTitle(){
    document.getElementById('Title').innerHTML = poemName;
}

function writePoem(page){
    var url;

    switch(page){
        case 'CWPP':
            url = 'https://raw.githubusercontent.com/ChristopherJonMyers/christopherjonmyers.github.io/master/poetry/poems/CWPP.json';
            break;
        case 'Week1':
            url = 'https://raw.githubusercontent.com/ChristopherJonMyers/christopherjonmyers.github.io/master/poetry/poems/Week1.json';
            break;
    }

    $.getJSON(url, function(data) {
        $.each(data, function(index){
            if(data[index].Title == poemName){
                document.getElementById('Text').innerHTML =  data[index].Text;
            }
        });
    });  
    writeTitle();
}

writePoem(project);