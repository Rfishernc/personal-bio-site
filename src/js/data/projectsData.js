import $ from 'jquery';

function getProjects() {
  return new Promise((resolve, reject) => {
    $.get('localhost:3003/projects')
      .done((data) => {
        resolve(data.projects);
      })
      .fail((error) => {
        reject(error);
      });
  });
}

export default { getProjects };
