import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChannelVideos from '../../components/ChannelVideos/ChannelVideos';
import VideoCard from '../../components/VideoCard/VideoCard';
import css from './Home.module.css';

const Home = () => {
	const [data, setData] = useState([]);
	const [data2, setData2] = useState([]);
	const url =
		'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9282378fe6mshf1ef0b35c55f161p1bc4dajsn47cebfd72cb4',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	const url2 =
		'https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50';
	const options2 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9282378fe6mshf1ef0b35c55f161p1bc4dajsn47cebfd72cb4',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	async function getChannelVideos() {
		try {
			const response = await fetch(url2, options2);
			const result = await response.json();
			setData2(result.items);
		} catch (error) {
			console.error(error);
		}
	}

	async function getData() {
		try {
			const response = await fetch(url, options);
			const result = await response.json();
			setData(result.items);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getData();
		getChannelVideos();
	}, []);

	console.log(data);

	return (
		<>
			<div className={css.channelVideos}>
				<Swiper slidesPerView={6} spaceBetween={30}>
					{data2.map((vid, index) => (
						<SwiperSlide key={index}>
							<ChannelVideos
								key={index}
								title={vid.snippet.title}
								img={vid.snippet.thumbnails.high.url}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className={css.recommend}>
				<h2 className={css.recom}>Recommended</h2>
				<Swiper slidesPerView={3} spaceBetween={30}>
					{data.map((vid, index) => (
						<SwiperSlide key={index}>
							<VideoCard
								key={index}
								title={vid.snippet.title}
								img={vid.snippet.thumbnails.high.url}
								id={vid.id.videoId}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default Home;
