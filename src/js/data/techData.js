import axios from 'axios';

const getDev = () => new Promise((resolve, reject) => {
  axios
    .get('https://personal-site-55542.firebaseio.com/logos.json')
    .then((data) => {
      const devObject = data.data.developmentLogos;
      const devArray = [];
      if (devObject != null) {
        Object.keys(devObject).forEach((devLogoId) => {
          const devLogoForArray = devObject[devLogoId];
          devLogoForArray.id = devLogoId;
          devArray.push(devLogoForArray);
        });
      }
      resolve(devArray);
    })
    .catch((err) => {
      reject(err);
    });
});

const getNondev = () => new Promise((resolve, reject) => {
  axios
    .get('https://personal-site-55542.firebaseio.com/logos.json')
    .then((data) => {
      const nondevObject = data.data.nondevelopmentLogos;
      const nondevArray = [];
      if (nondevObject != null) {
        Object.keys(nondevObject).forEach((nondevLogoId) => {
          const nondevLogoForArray = nondevObject[nondevLogoId];
          nondevLogoForArray.id = nondevLogoId;
          nondevArray.push(nondevLogoForArray);
        });
      }
      resolve(nondevArray);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getDev, getNondev };
