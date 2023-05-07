import { Link } from 'react-router-dom';
import css from './VideoCard2.module.css';

const VideoCard2 = props => {
	const { title, img, id, desc } = props;
	return (
		<Link className={css.link} to={`/videos/${id}`}>
			<div className={css.wrapper}>
				<div className={css.wrapImg}>
					<img src={img} alt='video img' className={css.img} />
				</div>
				<div className={css.wrapText}>
					<h3>{title}</h3>
					<p>{desc}</p>
				</div>
			</div>
		</Link>
	);
};

export default VideoCard2;
