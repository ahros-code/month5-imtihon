import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout/Layout';
import { AuthContext } from './context/AuthContext';
import { ThemeContext } from './context/ThemeContext';
import Favourites from './pages/Favourites/Favourites';
import Games from './pages/Games/Games';
import History from './pages/History/History';
import Home from './pages/Home/Home';
import Library from './pages/Library/Library';
import Liked from './pages/Liked/Liked';
import Login from './pages/Login/Login';
import Music from './pages/Music/Music';
import SingleVideo from './pages/SingleVideo/SingleVideo';
import Subscriptions from './pages/Subscriptions/Subscriptions';
import Trending from './pages/Trending/Trending';
import Watchlater from './pages/Watchlater/Watchlater';

const App = () => {
	const { token } = useContext(AuthContext);
	const { theme } = useContext(ThemeContext);
	return (
		<div className={theme}>
			<Routes>
				{!token ? (
					<Route path='/' element={<Login />} />
				) : (
					<Route path='/' element={<Layout />}>
						<Route path='/' element={<Home />} />
						<Route path='/trending' element={<Trending />} />
						<Route path='/subscriptions' element={<Subscriptions />} />
						<Route path='/library' element={<Library />} />
						<Route path='/history' element={<History />} />
						<Route path='/watchlater' element={<Watchlater />} />
						<Route path='/favourites' element={<Favourites />} />
						<Route path='/liked' element={<Liked />} />
						<Route path='/music' element={<Music />} />
						<Route path='/games' element={<Games />} />
					</Route>
				)}
				<Route path='videos/:id' element={<SingleVideo />} />
			</Routes>
		</div>
	);
};

export default App;
