function calculate() {
    let weight = 0;
    let height = 0;

    weight = document.getElementsByClassName('x-weight')[0].value;
    height = document.getElementsByClassName('x-height')[0].value;

    if (!weight || !height) {
        alert('Por favor, preencha os dois campos!')
    }

    const result = weight / (height * height);

    switch (true) {
        case result <= 18.5:
            document.getElementsByClassName('x-calculator-result')[0].innerText = `Seu índice é de Magreza`
            break;
            
        case result <= 24.9:
            document.getElementsByClassName('x-calculator-result')[0].innerText = `Seu índice está normal`
            break;
        
        case result <= 30:
            document.getElementsByClassName('x-calculator-result')[0].innerText = `Seu índice é de Sobrepeso`
            break;
        
        case result > 30:
            document.getElementsByClassName('x-calculator-result')[0].innerText = `Seu índice é de Obesidade`
            break;
    }

}