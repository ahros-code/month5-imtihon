import menu from '../../../../assets/images/Menu.svg';
import css from './Menu.module.css'

const Menu = () => {
 return (
	<img src={menu} alt="menu img" className={css.menu}/>
 )
}

export default Menu