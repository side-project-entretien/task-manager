import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import axios from 'axios';
import 'dayjs/locale/fr' // load on demand
import dayjs from 'dayjs';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import {store} from './store/store';
// import reportWebVitals from './reportWebVitals';

dayjs.locale('fr') // use Spanish locale globally


axios.defaults.baseURL = 'http://localhost:3001';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
      <ToastContainer />
        <App />
    </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
