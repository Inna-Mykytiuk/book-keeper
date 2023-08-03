import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from 'components/App';
import { GlobalStyle } from 'GlobalStyle';
import { Provider } from 'react-redux';
import {store, persistor} from 'components/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
      <GlobalStyle />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
