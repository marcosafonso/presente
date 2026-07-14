import { useNavigate } from "react-router-dom";
import "../styles/Home.css"

export default function Home() {

    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="home-card">
            <h1>Sistema de Chamada</h1>
            <p>Escolha uma opção para continuar.</p>

            <button
                className="primary-button"
                onClick={() => navigate("/turmas")}
            >
                📚 Turmas
            </button>

            <button
                className="secondary-button"
                onClick={() => navigate("/turma/nova")}
            >
                ➕ Nova turma
            </button>
            </div>
        </div>
    );

}