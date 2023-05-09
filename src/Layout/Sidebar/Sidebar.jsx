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
import Button from '../../components/UI/Sidebar/Button/Button'

const Sidebar = () => {
	return (
		<div className={css.wrapper}>
			<ul className={css.firstPart}>
				<li className={css.li}>
					<AiOutlineHome />
					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? 'red' : '',
							};
						}}
						to={'/'}
					>
						Home
					</NavLink>
				</li>
				<li className={css.li}>
					<AiOutlineFire />
					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? 'red' : '',
							};
						}}
						to={'/trending'}
					>
						Trending
					</NavLink>
				</li>
				<li className={css.li}>
					<BsFolder2Open />
					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? 'red' : '',
							};
						}}
						to={'/subscriptions'}
					>
						Subscriptions
					</NavLink>
				</li>
			</ul>
			<ul className={css.secondPart}>
				<li className={css.li}>
					<AiOutlineFolder />
					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? 'red' : '',
							};
						}}
						to={'/library'}
					>
						Library
					</NavLink>
				</li>
				<li className={css.li}>
					<RiFilePaper2Line />
					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? 'red' : '',
							};
						}}
						to={'/history'}
					>
						History
					</NavLink>
				</li>
				<li className={css.li}>
					<BsAlarm />
					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? 'red' : '',
							};
						}}
						to={'/watchlater'}
					>
						Watchlater
					</NavLink>
				</li>
				<li className={css.li}>
					<AiOutlineStar />
					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? 'red' : '',
							};
						}}
						to={'/favourites'}
					>
						Favourites
					</NavLink>
				</li>
				<li className={css.li}>
					<AiOutlineHeart />
					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? 'red' : '',
							};
						}}
						to={'/liked'}
					>
						Liked
					</NavLink>
				</li>
				<li className={css.li}>
					<CiMusicNote1 />
					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? 'red' : '',
							};
						}}
						to={'/music'}
					>
						Music
					</NavLink>
				</li>
				<li className={css.li}>
					<GrGamepad />
					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? 'red' : '',
							};
						}}
						to={'/games'}
					>
						Games
					</NavLink>
				</li>
			</ul>
			<Button />
		</div>
	);
};

export default Sidebar;
