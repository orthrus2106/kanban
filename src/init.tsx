import './styles/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App';
import { BrowserRouter } from 'react-router';
import { store } from './store/store';
import { Provider } from 'react-redux';

const init = async () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default init;
