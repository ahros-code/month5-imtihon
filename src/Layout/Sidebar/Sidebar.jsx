import {
	AiOutlineFire,
	AiOutlineFolder,
	AiOutlineHeart,
	AiOutlineHome,
	AiOutlineStar,
} from 'react-icons/ai';
import { BsAlarm, BsFolder2Open } from 'react-icons/bs';
import { CiMusicNote1 } from 'react-icons/ci';
import { GrGamepad } from 'react-icons/gr';
import { RiFilePaper2Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import css from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={css.wrapper}>
			<ul className={css.firstPart}>
				<li className=''>
					<AiOutlineHome />
					<NavLink to={'/'}>Home</NavLink>
				</li>
				<li>
					<AiOutlineFire />
					<NavLink to={'/trending'}>Trending</NavLink>
				</li>
				<li>
					<BsFolder2Open />
					<NavLink to={'/subscriptions'}>Subscriptions</NavLink>
				</li>
			</ul>
			<ul className={css.secondPart}>
				<li>
					<AiOutlineFolder />
					<NavLink to={'/library'}>Library</NavLink>
				</li>
				<li>
					<RiFilePaper2Line />
					<NavLink to={'/history'}>History</NavLink>
				</li>
				<li>
					<BsAlarm />
					<NavLink to={'/watchlater'}>Watchlater</NavLink>
				</li>
				<li>
					<AiOutlineStar />
					<NavLink to={'/favourites'}>Favourites</NavLink>
				</li>
				<li>
					<AiOutlineHeart />
					<NavLink to={'/liked'}>Liked</NavLink>
				</li>
				<li>
					<CiMusicNote1 />
					<NavLink to={'/music'}>Music</NavLink>
				</li>
				<li>
					<GrGamepad />
					<NavLink to={'/games'}>Games</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
