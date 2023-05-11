import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import css from './Layout.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react'

const Layout = () => {
	const {theme} = useContext(ThemeContext)
	return (
		<>
			<div className={theme == 'light' ? css.wrapper : css.lightWrapper}>
				<div className={css.container}>
					<Navbar />
				</div>
				<div className={css.mainWrapper}>
					<div className={css.left}>
						<Sidebar />
					</div>
					<div className={css.outlet}>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
