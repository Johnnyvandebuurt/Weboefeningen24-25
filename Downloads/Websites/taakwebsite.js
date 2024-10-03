function toggleText() {
    let text = document.getElementById('toggleText');
    if (text.innerText === 'Ja') {
        text.innerText = 'Nee';
    } else {
        text.innerText = 'Ja';
    }
}

function bereken() {
    var getal1 = parseFloat(document.getElementById('input1').value);
    var getal2 = parseFloat(document.getElementById('input2').value);
    if (!isNaN(getal1) && !isNaN(getal2)) {
        var som = getal1 + getal2;
        document.getElementById('resultaat').value = som;
    }
}
const redBtn = document.getElementById('redBtn');
const greenBtn = document.getElementById('greenBtn');
const blueBtn = document.getElementById('blueBtn');

redBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});

greenBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});

blueBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});
