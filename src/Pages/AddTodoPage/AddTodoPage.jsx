import { Navbar } from '../../components/Navbar/Navbar'
import './AddTodoPage.css'

import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import api from '../../services/api';

const prioridades = [
    {label: 'Urgente', value: 'A'},
    {label: 'Moderado', value: 'B'},
    {label: 'Leve', value: 'c'},
];

export const AddTodoPage = () => {
    const [prioridade, setPrioridade] = useState("C")
    const [nome, setNome] = useState()
    const [desc, setDesc] = useState()
    const addTodo = useMutation((postData) => api.post("todos", postData))

    const handlePost = () => {
        const postData = {
            nome: nome,
            description: desc,
            priority: prioridade
        }

        addTodo.mutate(postData)
    }

    return (
        <div id="add-pg">
            <Navbar />
            <div className='content'>
                <h3>ADICIONAR TODO</h3>
                <form>
                    <div className='txt-input'>
                        <label>Nome</label>
                        <input 
                            type="text" 
                            placeholder='Nome do todo'
                            onChange={(e) => setNome(e.target.value)} 
                        />
                    </div>
                    <div className='txt-input'>
                        <label>Descrição</label>
                        <input 
                            type="text" 
                            placeholder='Descrição do todo'
                            onChange={(e) => setDesc(e.target.value)} 
                        />
                    </div>
                    <Dropdown 
                        value={prioridade} 
                        options={prioridades} 
                        onChange={(e) => setPrioridade(e.value)} 
                        placeholder="Selecione uma prioridade"
                    />
                </form>
                <button className="sv-btn" onClick={handlePost}>Salvar</button>
            </div>
        </div>
    )
}