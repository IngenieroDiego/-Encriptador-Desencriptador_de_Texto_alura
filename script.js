function process() {
    const method = document.getElementById("method").value;
    const input = document.getElementById("input-text").value;
    let output = "";
    if (method === "1") {
      output = encrypt(input);
    } else if (method === "2") {
      output = decrypt(input);
    }
    document.getElementById("output-text").value = output;
  }
  
  function encrypt(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 + 3) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 + 3) % 26) + 97);
      } else {
        result += text.charAt(i);
      }
    }
    return result;
  }
  
  function decrypt(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 - 3 + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 - 3 + 26) % 26) + 97);
      } else {
        result += text.charAt(i);
      }
    }
    return result;
  }
  
  function copyOutput() {
    const output = document.getElementById("output-text");
    output.select();
    document.execCommand("copy");
    alert("Copied the text: " + output.value);
  }
  
  // Agregamos un listener para cambiar la vista según el dispositivo
  window.addEventListener("resize", function () {
    const width = window.innerWidth;
    if (width <= 600) {
      const container = document.querySelector(".container");
      container.style.gridTemplateAreas = `
        "header"
        "options"
        "input"
        "output"
        "buttons"
      `;
      container.style.gridTemplateRows = "auto auto auto auto auto";
    } else {
      const container = document.querySelector(".container");
      container.style.gridTemplateAreas = `
        "header header"
        "options input-output"
        "buttons buttons"
      `;
      container.style.gridTemplateRows = "auto 1fr auto";
    }
  });
  
  // Ejecutamos la función una vez para definir la vista inicial
  const width = window.innerWidth;
  if (width <= 600) {
    const container = document.querySelector(".container");
    container.style.gridTemplateAreas = `
      "header"
      "options"
      "input"
      "output"
      "buttons"
    `;
    container.style.gridTemplateRows = "auto auto auto auto auto";
  } else {
    const container = document.querySelector(".container");
    container.style.gridTemplateAreas = `
      "header header"
      "options input-output"
      "buttons buttons"
    `;
    container.style.gridTemplateRows = "auto 1fr auto";
  }
  const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
  const inputText = document.getElementById("input-text");
  const outputText = document.getElementById("output-text");

  inputText.value = "";
  outputText.value = "";
});