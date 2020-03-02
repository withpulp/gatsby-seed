// randomKey - to get a random string value to set key prop when mapping data.
const randomKey = () => Math.random().toString(36).substr(2, 10);

export default randomKey;
