const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const poemName = params.get('name');
const project = params.get('page');

var url;
var backurl;

switch(project){
    case 'CWPP':
        url = 'https://raw.githubusercontent.com/ChristopherJonMyers/christopherjonmyers.github.io/master/poetry/poems/CWPP.json';
        backurl = "../projects/Creative-Writing-Portfolio.html#Poems";
        break;
    case 'Week1':
        url = 'https://raw.githubusercontent.com/ChristopherJonMyers/christopherjonmyers.github.io/master/poetry/poems/Week1.json';
        backurl = "../projects/HTWP/Week-1.html#Poems";
        break;
}

function writeTitle(){
    document.getElementById('Title').innerHTML = poemName;
}

function setBackURL(backurl){
    document.getElementById('Back-Button').href = backurl;
}

function writePoem(){
    $.getJSON(url, function(data) {
        $.each(data, function(index){
            if(data[index].Title == poemName){
                document.getElementById('Text').innerHTML =  data[index].Text;
            }
        });
    });  
    writeTitle();
}

function writeOther(){
    $.getJSON(url, function(data) {
        $.each(data, function(index){
            if(data[index].Title != poemName){
                document.getElementById('otherPoems').innerHTML +=  '<a href="poems.html?page=' + project + '&name='+ data[index].Title + '"' + 'class="list-group-item list-group-item-action">' + data[index].Title + '<a/>';
            }
        });
    });  
}

writePoem();
writeOther();
