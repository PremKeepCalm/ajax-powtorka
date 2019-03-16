const btn = document.getElementById('get-offers');
const output = document.getElementById('offers');

function getOffersAsync() {
    let httpReq = new XMLHttpRequest();
    let template = '';

    httpReq.open('GET', 'http://leguralnie.pl/json/ogloszenia-json.json');

    httpReq.addEventListener('readystatechange', function () {
        if (this.readyState == 4 && this.status == 200) {
            let content = this.responseText;
            content = JSON.parse(content);


            content.forEach(element => {
                template += `<div class='offer'
                            <figure>
                                <img src='${element.image}'>
                            </figure>
                            <div class='offer_description'>
                                <small>ID: ${element.id}</small>
                            </div>   
                </div>`
            })
            if(template != '') {
                output.innerHTML = template;
            }
        }
    });

    httpReq.send();
}

btn.addEventListener('click', getOffersAsync);

