import axios from 'axios';

function getProjects() { return axios.get('http://localhost:3003/projects'); }

export default { getProjects };
