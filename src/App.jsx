import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout/Layout';
import Home from './pages/Home/Home';
import Trending from './pages/Trending/Trending';
import Subscriptions from './pages/Subscriptions/Subscriptions';
import Library from './pages/Library/Library';
import Watchlater from './pages/Watchlater/Watchlater';
import Favourites from './pages/Favourites/Favourites';
import Liked from './pages/Liked/Liked';
import Music from './pages/Music/Music';
import Games from './pages/Games/Games';

const App = () => {
 return (
	<Routes>
		<Route path='/' element={<Layout />}>
			<Route path='/' element={<Home />}/>
			<Route path='/trending' element={<Trending />}/>
			<Route path='/subscriptions' element={<Subscriptions />}/>
			<Route path='/library' element={<Library />}/>
			<Route path='/watchlater' element={<Watchlater />}/>
			<Route path='/favourites' element={<Favourites />}/>
			<Route path='/liked' element={<Liked />}/>
			<Route path='/music' element={<Music />}/>
			<Route path='/games' element={<Games />}/>
		</Route>
	</Routes>
 )
}

export default App