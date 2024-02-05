function calcularArea() {
    
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
  
    
    if (!base || !altura || isNaN(base) || isNaN(altura)) {
      
      
      alert("Ingrese valores válidos para la base y la altura");
      return;
    }
   
    const area = base * altura
   
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `El área del rectángulo es: ${area}`;
  }
  
  function limpiar() {
    
    document.getElementById("base").value = "";
    document.getElementById("altura").value = "";
  

    document.getElementById("resultado").innerHTML = "";
  }

  function alert(text) {
    Swal.fire({
        icon: "error",
        title: "Ingrese valores válidos para la base y la altura",
        text: text
    });
}
