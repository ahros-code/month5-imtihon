import css from './NextVideo.module.css';

const NextVideo = props => {
	const { title, img, id } = props;
	return (
		<Link className={css.link} to={`/videos/${id}`}>
			<div className={css.wrapper}>
				<img src={img} alt='video img' className={css.img} />
				<h3>{title}</h3>
			</div>
		</Link>
	);
};

export default NextVideo;
