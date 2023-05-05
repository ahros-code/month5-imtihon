import css from './ChannelVideos.module.css';

const ChannelVideos = props => {
	const { img, title } = props;
	return (
		<div className={css.wrapper}>
			<img src={img} alt={title} className={css.img}/>
			<h3 className={css.title}>{title}</h3>
		</div>
	);
};

export default ChannelVideos;
