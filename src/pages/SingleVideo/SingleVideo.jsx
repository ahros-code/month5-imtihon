import { useEffect, useState } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import Navbar from '../../Layout/Navbar/Navbar';
import Next from '../../components/Next/Next';
import css from './SingleVideo.module.css';

const SingleVideo = () => {
	let { id } = useParams();
	const [singleVideoData, setSingleVideoData] = useState([]);
	const [showMore, setShowMore] = useState(false);

	let VideoUrl = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`;
	const VideoOptions = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9282378fe6mshf1ef0b35c55f161p1bc4dajsn47cebfd72cb4',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	async function getSingleVideoData() {
		try {
			const response = await fetch(VideoUrl, VideoOptions);
			const result = await response.json();
			// console.log(result.items);
			setSingleVideoData(result.items);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getSingleVideoData();
	}, []);

	let url = `https://www.youtube.com/embed/${id}?autoplay=1`;

	return (
		<div className={css.container}>
			<nav className={css.nav}>
				<Navbar />
			</nav>

			<main>
				<div className={css.leftt}>
					<iframe
						width='1000'
						height='500'
						src={url}
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
						className={css.video}
					></iframe>
					{singleVideoData.map((video, index) => (
						<div className={css.wrapper}>
							<h3 className={css.vidTitle}>{video.snippet.title}</h3>
							<div className={css.statsWrapper}>
								<div className={css.views}>
									<p className={css.vidViews}>
										{video.statistics.viewCount} views
									</p>
								</div>
								<div className={css.right}>
									<div className={css.like}>
										<AiOutlineLike />
										<span>{video.statistics.likeCount}</span>
									</div>
									<div className={css.disLike}>
										<AiOutlineDislike />
										<span>0</span>
									</div>
									<div className={css.share}>
										<span>Share</span>
									</div>
									<div className={css.more}>
										<FiMoreHorizontal />
									</div>
								</div>
							</div>
							<div className={css.channelWrapper}>
								<div className={css.channelLeft}>
									<div className={css.chLeft}>
										<img
											src={
												'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg'
											}
											alt='cat img'
											className={css.channelNameImg}
										/>
									</div>
									<div className={css.chRight}>
										<h4>{video.snippet.channelTitle}</h4>
										<span className={css.publishedOn}>
											Published on {video.snippet.publishedAt}
										</span>
										<p
											className={css.desc}
											style={{
												overflow: showMore ? 'hidden' : '',
											}}
										>
											<button
												type='button'
												onClick={e => setShowMore(prev => !prev)}
											>
												Show more
											</button>
											{video.snippet.description}
										</p>
									</div>
								</div>
								<div className={css.channelRight}>
									<button type='button' className={css.subsBtn}>
										Subscribe
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className={css.rightt}>
					<div className={css.nextLeft}>
						<Next />
					</div>
				</div>
			</main>
		</div>
	);
};

export default SingleVideo;
