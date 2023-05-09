import { Link } from 'react-router-dom';
import css from './ChannelVideos.module.css';
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const ChannelVideos = props => {
	const { img, title, id } = props;
	const {theme} = useContext(ThemeContext)

	return (
		<Link to={`/videos/${id}`}>
			<div className={css.wrapper}>
				<img src={img} alt={title} className={css.img} />
				<h3 className={theme == 'light' ? css.title : css.lightTitle}>{title}</h3>
			</div>
		</Link>
	);
};

export default ChannelVideos;
