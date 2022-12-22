const ingressos = [];

function addRedBorder(id) {
    Element = document.querySelector("#" + id);
    Element.style.border = "5px solid red";
}

function highlightCard(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight")
}

function checkKeyboardCode() {
    document.addEventListener('keydown', (Event) => {
        var name = Event.key;
        var code = Event.code;
        alert(`Tecla Pressionada ${name} \r\n key code: ${code}`);
    }, false);
}

function selectCard(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

function showSelectedCars() {
    if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);
}

addKeyboardEventListeners();