import { useQuery } from 'react-query'
import './InitialPage.css'
import api from '../../services/api'
import { InlineTodo } from './components/InlineTodo/InlineTodo'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'

export const InitialPage = () => {
    const { data, isLoading } = useQuery("alltodos", () => api.get("todos").then(res => res.data))
    const navigate = useNavigate()

    if (isLoading) {
        return (
            <div>Carregando...</div>
        )
    }

    return (
        <div id="init-pg">
            <Navbar />
            <div className='content'>
                <h3>TAREFAS PENDENTES:</h3>
                <div className='todos-container'>
                    {data &&
                        data.map(todo => <InlineTodo data={todo}/>)
                    }
                </div>
            </div>
        </div>
    )
}