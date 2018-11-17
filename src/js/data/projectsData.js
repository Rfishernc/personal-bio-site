import axios from 'axios';

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get('https://personal-site-55542.firebaseio.com/projects.json')
    .then((data) => {
      const projectsObject = data.data;
      const projectsArray = [];
      if (projectsObject != null) {
        Object.keys(projectsObject).forEach((projectId) => {
          const projectForArray = projectsObject[projectId];
          projectForArray.id = projectId;
          projectsArray.push(projectForArray);
        });
      }
      resolve(projectsArray);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getProjects };
