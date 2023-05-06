import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Layout/Navbar/Navbar';
import css from './SingleVideo.module.css';

const SingleVideo = () => {
	let { id } = useParams();
	const [singleVideoData, setSingleVideoData] = useState([]);

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

	// useEffect(() => {
	// 	getSingleVideoData();
	// }, []);

	let url = `https://www.youtube.com/embed/${id}`;

	return (
		<div className={css.container}>
			<nav>
				<Navbar />
			</nav>

			<main>
				<iframe
					width='1000'
					height='500'
					src={url}
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
				></iframe>
			</main>
		</div>
	);
};

export default SingleVideo;
