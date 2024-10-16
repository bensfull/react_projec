import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100; 
      const imc = peso / (alturaMetros * alturaMetros);
      setResultado({
        valor: imc.toFixed(2),
        
        classificacao: classificarIMC(imc),
      });
    }
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc < 34.9) return 'Obesidade grau 1';
    if (imc >= 35 && imc < 39.9) return 'Obesidade grau 2';
    return 'Obesidade grau 3';
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div className="form-group">
        <label htmlFor="altura">Altura (cm):</label>
        <input
          type="number"
          id="altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Digite sua altura em cm"
        />
      </div>
      <div className="form-group">
        <label htmlFor="peso">Peso (kg):</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Digite seu peso em kg"
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>

      {resultado && (
        <div className="resultado">
          <p>Seu IMC é: <strong>{resultado.valor}</strong></p>
          <p>Classificação: <strong>{resultado.classificacao}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;
