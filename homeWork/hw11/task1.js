function printAfterDelay(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}

// Виклик функції
printAfterDelay("Hasta la vista, baby", 2000); // Виведе "Hasta la vista, baby" через 2 секунди
