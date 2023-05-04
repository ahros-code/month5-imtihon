import css from './Navbar.module.css';
import Menu from '../../components/UI/Navbar/Menu/Menu';
import Logo from '../../components/UI/Navbar/Logo/Logo'
import Search from '../../components/UI/Navbar/Search/Search';
import Icons from '../../components/UI/Navbar/Icons/Icons'
import Userpic from '../../components/UI/Navbar/Userpic/Userpic'

const Navbar = () => {
 return (
	<div className={css.wrapper}>
		<Menu />
		<Logo />
		<Search />
		<Icons />
		<Userpic />
	</div>
 )
}

export default Navbar