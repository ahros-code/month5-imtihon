import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './assets/styles/globals.css';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { SearchContextProvider } from './context/SearchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<AuthContextProvider>
			<SearchContextProvider>
				<App />
			</SearchContextProvider>
		</AuthContextProvider>
	</BrowserRouter>
);
