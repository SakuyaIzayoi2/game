"use strict";
let pastraipa = document.querySelector('p');
let random = Math.floor(Math.random() * 1000000) + 1;
let count = document.getElementById(`count`).textContent;
let forma = document.forms[0];
 
forma.addEventListener('submit', function(e){
    e.preventDefault();
    ++count;
    document.getElementById('count').textContent=count
    if(document.querySelector('input').value==random){
        pastraipa.textContent=`${document.querySelector('input').value}: Valio! Atspėjai.`;
    }
    else if(document.querySelector('input').value<random){
        pastraipa.textContent=`${document.querySelector('input').value}: Neatspėjai, teisingas atsakymas buvo didesnis. Bandyk vel!`;
    }
    else if(document.querySelector('input').value>random){
        pastraipa.textContent=`${document.querySelector('input').value}: Neatspėjai, teisingas numeris buvo maženis. Bandyk vėl!`;
    }
});