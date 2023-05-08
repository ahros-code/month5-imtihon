import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
	const [data, setData] = useState([]);

	async function getData() {
		try {
			const response = await fetch(url, options);
			const result = await response.json();
			setData(result.items);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(()=>{
		getData()
	}, [])

 return {data}
}

export default useFetch