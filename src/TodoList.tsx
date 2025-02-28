import React from 'react';
import Todo from './Todo';

interface TodoListProps {
  todos: { id: string; name: string; completed: boolean }[];
  toggleTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
      ))}
    </div>
  );
}

export default TodoList;