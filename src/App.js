import './App.css';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import Vending from './pages/Vending';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Vending />
      </div>
    </Provider>
  );
}

export default App;
