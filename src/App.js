
import './App.css';
import Counter from './Counter';
import TodoList from './TodoList';
import DataFetch from './DataFetch';

function App() {
  return (
    <div className="App">
      <body>
        <h1>Counter</h1>
        <Counter />
        <TodoList />
        <DataFetch />
      </body>
    </div>
  );
}

export default App;
