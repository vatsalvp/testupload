import axios from 'axios';
export const getBanner = async () => {
	try {
		const banner = await axios.get(
			'https://wordpress.crescentek.co.uk/anand/streamlab/api/home'
		);
		return banner.data.result;
	} catch (error) {
		console.log(error);
	}
};
