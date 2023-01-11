
import './App.css';
import { Provider } from 'react-redux'
import { store } from './Features/Stor';
import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
import TotalCompleteItems from "./components/Todos/TotalCompleteTodo";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
<Provider store={store}>
<div className='App'>
<AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
</div>
</Provider>
  );
}

export default App;
