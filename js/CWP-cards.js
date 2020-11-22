

function getPoems(){
    //for live
    //let poemjson = $.getJSON("../poems/CWPP.json");

    //for local
    let rawjson = $.getJSON("https://raw.githubusercontent.com/ChristopherJonMyers/christopherjonmyers.github.io/master/poetry/poems/CWPP.json");
    let jsonobj = JSON.parse(rawjson);
    window.alert(jsonobj);
}

getPoems();