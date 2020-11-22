

function writeCards(){
    
    let url = 'https://raw.githubusercontent.com/ChristopherJonMyers/christopherjonmyers.github.io/master/poetry/poems/CWPP.json';

    fetch(url)
    .then(res => res.json())
    .then((out) => {
            console.log('Checkout this JSON! ', out);
    })
    .catch(err => { throw err });
}

writeCards();