import { Link } from 'react-router-dom';
import css from './ChannelVideos.module.css';

const ChannelVideos = props => {
	const { img, title, id } = props;

	return (
		<Link to={`/videos/${id}`}>
			<div className={css.wrapper}>
				<img src={img} alt={title} className={css.img} />
				<h3 className={css.title}>{title}</h3>
			</div>
		</Link>
	);
};

export default ChannelVideos;
