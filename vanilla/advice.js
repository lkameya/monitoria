function addScreen(advice) {
    const paragraph = document.createElement('p');
    const body = document.getElementById('body');
  
    paragraph.textContent = advice;
    body.appendChild(paragraph);
  }
  
  async function getData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const resultado = await response.json();
    addScreen(resultado.slip.advice);
  }
  
  getData();
    
  function refresh() {
    getData();
  }
  