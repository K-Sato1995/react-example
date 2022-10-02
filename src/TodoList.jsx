import { useState } from 'react';

/*
type todoItem = {
    id: number,
    text: string,
    isCompleted: boolean
}
*/
const TodoList = () => {
    const [todos, setTodos] = useState([{
        id: 1,
        text: 'Learn React',
        isCompleted: false
    }]);
    const [userInput, setUserInput] = useState('');

    const addTodo = () => { 
        if(!userInput) {
            alert('Todoを入力してください');
            return;
        }
        setTodos([...todos, {
            id: todos.length + 1,
            text: userInput,
            isCompleted: false,
        }]);
        setUserInput('');
    };

    const checkTood = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo;
        }));
    };
    return (
        <>
            <h1>Todo List</h1>
            <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <button onClick={addTodo}>追加</button>
            <ul>
                {todos.map(todo => (                
                    <li key={todo.id} style={{
                        textDecoration: todo.isCompleted ? 'line-through' : ''
                    }}>
                        <input type='checkbox' onClick={() => {
                            checkTood(todo.id);
                        }}/>                      
                        {todo.text}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;
