const fs = require('fs');

const collectionSize = 11;
const imageIpfs = 'ipfs://ipfsCid/';
const collectionName = 'Some Name';
const description = 'Description';

for (num = 1; num <= collectionSize; num++) {
	// creates JSON objects
	const metadata = {
		name: `${collectionName} #${num}`,
		description: `${description}`,
		image: `${imageIpfs}${num}`
	};

	// convert JSON object to string
	const data = JSON.stringify(metadata);

	fs.mkdirSync('metadata', { recursive: true });
	// write JSON string to a file
	fs.writeFile(`./metadata/${num}.json`, data, (err) => {
		if (err) {
			throw err;
		}
		console.log('JSON datas are saved.');
	});
}
