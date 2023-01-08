import { useNavigate } from "react-router-dom"
import './Navbar.css'

export const Navbar = () => {
    const navigate = useNavigate()

    return (
        <div className="navbar">
            <h3>SM<b>Done</b></h3>
            <div className="nav-btns">
                <p onClick={() => navigate("/")}>Inicial</p>
                <p onClick={() => navigate("/adicionar")}>Adicionar</p>
            </div>
        </div>
    )
}