import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/NovaTurma.css";

export default function Aluno() {

    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    const salvar = () => {
        if(!nome.trim()){
            alert("informe o nome do aluno");
            return;
        }
        console.log(nome);
        //TODO: salvar aluno no backend
    }

    return (
        <div className="page">
            <div className="card">
                <h1>Novo Aluno</h1>

                <label>Nome</label>

                <input 
                    type="text"
                    placeholder="Fulano da Silva"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                />

                <button onClick={salvar}>
                    Salvar
                </button>


            </div>
        </div>
    )
    
}
