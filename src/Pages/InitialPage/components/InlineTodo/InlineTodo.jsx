import './InlineTodo.css'

export const InlineTodo = (props) => {
    const todo = props.data
    let type

    switch (todo.priority) {
        case "A":
            type = "urgent"
            break;
        case "B":
            type = "moderate"
            break;
        default:
            type = "light"
            break;
    }

    return (
        <div className={`todo-container ${type}`}>   
            <div className="todo-title">
                <p>{todo.nome}</p>
            </div>
            <div className="todo-desc">
                <p>{todo.description}</p>
            </div>
        </div>
    )
}