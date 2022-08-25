import { useState } from "react";
import "./App.css";
import { Boton } from "./componets/Boton";
import Pantalla from "./componets/Pantalla";
import { BotonClear } from "./componets/BotonClear";
import { evaluate } from "mathjs";
import { Title } from "./componets/Title";
import { Footer } from "./componets/Footer";

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input.length != 1) {
      setInput(evaluate(input));
    } else {
      console.log("Valores nulos");
    }
  };

  return (
    <div className="App">
      {/* <Logo logo={logoCodeCamp} /> */}
      <Title title={"Calculadora basica, construida en React"} />
      <div className="cnt-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={addInput}>1</Boton>
          <Boton manejarClic={addInput}>2</Boton>
          <Boton manejarClic={addInput}>3</Boton>
          <Boton manejarClic={addInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={addInput}>4</Boton>
          <Boton manejarClic={addInput}>5</Boton>
          <Boton manejarClic={addInput}>6</Boton>
          <Boton manejarClic={addInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={addInput}>7</Boton>
          <Boton manejarClic={addInput}>8</Boton>
          <Boton manejarClic={addInput}>9</Boton>
          <Boton manejarClic={addInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={addInput}>0</Boton>
          <Boton manejarClic={addInput}>.</Boton>
          <Boton manejarClic={addInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput(" ")}>Clear</BotonClear>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
