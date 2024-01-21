const cards = document.getElementsByClassName('card');
const dropZone1 = document.getElementById('drop-zone1');
const dropZone2 = document.getElementById('drop-zone2');
const dropZone3 = document.getElementById('drop-zone3');
for (card of cards) {
    card.addEventListener('dragstart', function (e) {
        let selected = e.target;
    })
    dropZone1.addEventListener('dragover', function (e) {
        e.preventDefault()

    })
    dropZone1.addEventListener('drop', function (e) {
        dropZone1.appendChild(selected);
    })
}

for (card of cards) {
    card.addEventListener('dragstart', function (e) {
         selected = e.target;
    })
    dropZone2.addEventListener('dragover', function (e) {
        e.preventDefault()

    })
    dropZone2.addEventListener('drop', function (e) {
        dropZone2.appendChild(selected);
    })
}

for (card of cards) {
    card.addEventListener('dragstart', function (e) {
         selected = e.target;
    })
    dropZone3.addEventListener('dragover', function (e) {
        e.preventDefault()

    })
    dropZone3.addEventListener('drop', function (e) {
        dropZone3.appendChild(selected);
    })
}



