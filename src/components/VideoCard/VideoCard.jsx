import css from './Video.module.css';

const VideoCard = props => {
	const { title, img, id } = props;
	// console.log(id);
	return (
		<div className={css.wrapper}>
			<img src={img} alt='video img' className={css.img} />
			<h3>{title}</h3>
		</div>
	);
};

export default VideoCard;
