import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: uuidv4(), name: "Todo1", completed: false }
    ]);
  
  const todoNameRef = useRef<HTMLInputElement>(null);
  
  const handleAddTodo = () => {
    // タスクを追加する
    const name = todoNameRef.current?.value || '';
    
    // 可読性と保守性の向上
    const newTodo: Todo = {
      id: uuidv4(),
      name: name,
      completed: false,
    };

    setTodos((prevTodos) => 
      [...prevTodos, newTodo]
    );
    if (todoNameRef.current) todoNameRef.current.value = '';
    };
  
  const toggleTodo = (id: string) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク: 0</div>
    </>
  );
}

export default App;
