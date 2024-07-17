export const load = ({ params }) => {
	let res = {
		component: {
			apiName: `${params.component}`
		}
	};
	return res;
};
