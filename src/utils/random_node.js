/**
 * randomNode - to get a random node from an array of data
 *
 * @param {Array} data - to get node from
 */
const randomNode = data =>
  data[Math.floor(Math.random() * data.length)]['node'];

export default randomNode;
