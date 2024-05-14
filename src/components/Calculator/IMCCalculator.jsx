import React, { useState } from "react";
import "./IMCCalculator.css";

const IMCCalculator = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState(null);
    // console.log(weight);

    const calculateIMC = () => {
        const weightValue = parseFloat(weight);
        const heightValue = parseFloat(height);

        if (!weightValue || !heightValue || heightValue === 0) {
            setResult(null);
            return;
        }

        const imc = weightValue / (heightValue * heightValue);
        // console.log(imc);
        setResult(imc.toFixed(2));
        // console.log(result);
        setHeight("");
        setWeight("");
    };

    return (
        <div className="imc-container">
            <h1>Calculadora IMC</h1>
            <div className="imc-input">
                <label>
                    Peso (kg):
                    <input
                        placeholder="Seu peso"
                        value={weight}
                        type="number"
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </label>
            </div>
            <div className="imc-input">
                <label>
                    Altura (m):
                    <input
                        placeholder="Sua altura"
                        value={height}
                        type="number"
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </label>
            </div>
            <button className="imc-button" onClick={calculateIMC}>
                Calcular imc
            </button>
            {result && (
                <div className="imc-result">
                    <h3>Seu IMC é : {result}</h3>
                    <table className="imc-table">
                        <thead>
                            <tr>
                                <th>Classificação</th>
                                <th>IMC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Magreza grave</td>
                                <td>{result < 16 ? "X" : "-"}</td>
                            </tr>
                            <tr>
                                <td>Magreza moderada</td>
                                <td>
                                    {result >= 16 && result < 17 ? "X" : "-"}
                                </td>
                            </tr>
                            <tr>
                                <td>Magreza leve</td>
                                <td>
                                    {result >= 17 && result < 18.6 ? "X" : "-"}
                                </td>
                            </tr>
                            <tr>
                                <td>Peso ideal</td>
                                <td>
                                    {result >= 18.6 && result < 25 ? "X" : "-"}
                                </td>
                            </tr>
                            <tr>
                                <td>Sobrepeso</td>
                                <td>
                                    {result >= 25 && result < 30 ? "X" : "-"}
                                </td>
                            </tr>
                            <tr>
                                <td>Obesidade Grau I</td>
                                <td>
                                    {result >= 30 && result < 35 ? "X" : "-"}
                                </td>
                            </tr>
                            <tr>
                                <td>Obesidade Grau II ou severa</td>
                                <td>
                                    {result >= 35 && result < 40 ? "X" : "-"}
                                </td>
                            </tr>
                            <tr>
                                <td>Obesidade Grau III ou mórbida</td>
                                <td>{result > 40 ? "X" : "-"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default IMCCalculator;
