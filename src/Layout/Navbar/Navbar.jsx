import Icons from '../../components/UI/Navbar/Icons/Icons';
import Logo from '../../components/UI/Navbar/Logo/Logo';
import Menu from '../../components/UI/Navbar/Menu/Menu';
import Search from '../../components/UI/Navbar/Search/Search';
import Userpic from '../../components/UI/Navbar/Userpic/Userpic';
import css from './Navbar.module.css';

const Navbar = () => {
	return (
		<div className={css.wrapper}>
			<Menu />
			<Logo />
			<Search />
			<Icons />
			<Userpic />
		</div>
	);
};

export default Navbar;
