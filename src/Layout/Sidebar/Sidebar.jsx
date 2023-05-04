import { NavLink } from 'react-router-dom';
import css from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={css.wrapper}>
			<ul className={css.firstPart}>
				<li>
					<NavLink to={'/'}>Home</NavLink>
				</li>
				<li>
					<NavLink to={'/trending'}>Trending</NavLink>
				</li>
				<li>
					<NavLink to={'/subscriptions'}>Subscriptions</NavLink>
				</li>
			</ul>
			<ul className={css.secondPart}>
				<li>
					<NavLink to={'/library'}>Library</NavLink>
				</li>
				<li>
					<NavLink to={'/watchlater'}>Watchlater</NavLink>
				</li>
				<li>
					<NavLink to={'/favourites'}>Favourites</NavLink>
				</li>
				<li>
					<NavLink to={'/liked'}>Liked</NavLink>
				</li>
				<li>
					<NavLink to={'/music'}>Music</NavLink>
				</li>
				<li>
					<NavLink to={'/games'}>Games</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
