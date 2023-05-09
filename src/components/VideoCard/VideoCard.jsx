import { Link } from 'react-router-dom';
import css from './Video.module.css';
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const VideoCard = props => {
	const { title, img, id } = props;
	const {theme} = useContext(ThemeContext)
	return (
		<Link className={theme == 'light' ? css.link : css.lightLink} to={`/videos/${id}`}>
			<div className={css.wrapper}>
				<img src={img} alt='video img' className={css.img} />
				<h3 className={css.title}>{title}</h3>
			</div>
		</Link>
	);
};

export default VideoCard;
