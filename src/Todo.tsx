import React from 'react'

interface TodoProps {
    todo: { id: string; name: string; completed: boolean };
    toggleTodo: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleTodo })  => {
    const handleTodoClick = () => {
        toggleTodo(todo.id);
    }
  
    return (
    <div>
        <label>
            <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={handleTodoClick} 
            />
        </label>
        {todo.name}
    </div>
  )
}

export default Todo