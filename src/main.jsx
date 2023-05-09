import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './assets/styles/globals.css';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { SearchContextProvider } from './context/SearchContext.jsx';
import { ThemeContextProvider } from './context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<AuthContextProvider>
			<SearchContextProvider>
				<ThemeContextProvider>
					<App />
				</ThemeContextProvider>
			</SearchContextProvider>
		</AuthContextProvider>
	</BrowserRouter>
);
