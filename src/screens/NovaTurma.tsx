import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/NovaTurma.css";

export default function NovaTurma() {

    const navigate = useNavigate();

    const [nome, setNome] = useState("");

    const salvar = () => {
        if(!nome.trim()) {
            alert("Informe um nome para a turma.");
            return;
        }
        console.log(nome);
        //TODO: salvar a turma no backend
    }



    return (
        <div className="page">

            <div className="card">

                <h1>Nova Turma</h1>

                <p>
                    Informe o nome da turma.
                </p>

                <label>Nome</label>

                <input
                    type="text"
                    placeholder="Ex.: 3º Ano A"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <button onClick={salvar}>
                    Salvar turma
                </button>

            </div>

        </div>
    );

}