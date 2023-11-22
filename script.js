let screen = document.getElementById('pantalla');

function appendToScreen(value) {
    screen.textContent += value;
}

function calculateResult() {
    try {
        screen.textContent = eval(screen.textContent);
    } catch (error) {
        screen.textContent = 'Error';
    }
}

function clearScreen() {
    screen.textContent = '';
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (/[0-9+\-*/%=]/.test(key)) {
        // Permitir solo caracteres válidos para la calculadora
        event.preventDefault();
        if (key === 'Enter' ) {
            event.preventDefault(); 
            calculateResult();
        } else if (key === '=') {
            calculateResult();
        
        } else {
            appendToScreen(key);
        }
   
    } else if (key === 'Backspace') {
        // Permitir el uso de la tecla "Backspace" para borrar
        event.preventDefault();
        screen.textContent = screen.textContent.slice(0, -1);
    }
});
