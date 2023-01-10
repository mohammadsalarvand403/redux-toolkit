
import './App.css';
import { Provider } from 'react-redux'
import { store } from './Features/Stor';
import CounterComponent from './components/CounterComponent';
function App() {
  return (
<Provider store={store}>
<div className='app'>
<CounterComponent/>
</div>
</Provider>
  );
}

export default App;
