const elements = document.querySelectorAll('.element'); // Seleciona todos os elementos com a classe 'element'
const cpu = document.querySelector('.cpu'); // Seleciona o elemento com a classe 'cpu'

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); // Retorna uma promessa que aguarda por um atraso
}

async function processElement(element) {
  element.style.opacity = '1'; // Torna o elemento visível
  element.style.transform = 'translateY(0)'; // Move o elemento para cima
  await delay(1000); // Espera 1 segundo
  element.style.transform = 'translateY(-100px)'; // Move o elemento para cima novamente
  await delay(500); // Espera meio segundo
  cpu.style.opacity = '1'; // Torna o processador visível
  await delay(1000); // Espera 1 segundo
  cpu.style.opacity = '0'; // Torna o processador invisível
  element.style.transform = 'translateY(0)'; // Move o elemento de volta para baixo
  await delay(500); // Espera meio segundo
  element.style.opacity = '0'; // Torna o elemento invisível
}

async function animate() {
  for (let i = 0; i < elements.length; i++) {
    await processElement(elements[i]); // Processa cada elemento
  }
  
  for (let i = elements.length - 1; i >= 0; i--) {
    await delay(300); // Espera 300 milissegundos
    elements[i].style.opacity = '1'; // Torna o elemento visível
    elements[i].style.transform = 'translateY(-100px)'; // Move o elemento para cima
    await delay(500); // Espera meio segundo
    cpu.style.opacity = '1'; // Torna o processador visível
    await delay(1000); // Espera 1 segundo
    cpu.style.opacity = '0'; // Torna o processador invisível
    elements[i].style.transform = 'translateY(0)'; // Move o elemento de volta para baixo
    await delay(500); // Espera meio segundo
    elements[i].style.opacity = '0'; // Torna o elemento invisível
  }
}

animate(); // Inicia a animação