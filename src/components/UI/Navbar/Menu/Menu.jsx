import menu from '../../../../assets/images/Menu.svg';
import lightMenu from '../../../../assets/images/Light/Menu.svg'
import css from './Menu.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../../context/ThemeContext'

const Menu = () => {
	const {theme} = useContext(ThemeContext)
 return (
	<img src={theme == 'light' ? menu : lightMenu} alt="menu img" className={css.menu}/>
 )
}

export default Menu