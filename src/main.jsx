import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './assets/styles/globals.css';
import { SearchContextProvider } from './context/SearchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<SearchContextProvider>
			<App />
		</SearchContextProvider>
	</BrowserRouter>
);
