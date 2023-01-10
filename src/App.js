
import './App.css';
import { Provider } from 'react-redux'
import { store } from './Features/Stor';
function App() {
  return (
<Provider store={store}>
<div>

</div>
</Provider>
  );
}

export default App;
