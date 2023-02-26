import './App.css';
import store from './store/store';
import { Provider } from 'react-redux'
import Counter from './components/CounterComponent';
import Shop from './components/Shop';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>Hello</div>
        <Counter />
        <Shop />
      </div>
    </Provider>
  );
}

export default App;
