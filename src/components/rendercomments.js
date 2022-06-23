import posts from '../api/posts.js';

export const findLengthOnly = (data) => {
  if (data.length === undefined) { data.length = 0; }
  const modal = document.querySelector('.commentarea');
  const comm = document.createElement('div');
  comm.innerHTML = `<h2 class="t" id="${data.length}">Comments(${data.length})</h2> `;
  modal.appendChild(comm);
  const lenght = data.length;
  return lenght;
};

const renderComments = async (id) => {
  await posts.get(id).then((data) => {
    findLengthOnly(data);
    data.forEach((element) => {
      const modal = document.querySelector('.commentarea');
      const comm = document.createElement('div');
      comm.innerHTML = ` 
       <div class="t">${element.creation_date} ${element.username}: ${element.comment}</div>
       `;
      modal.appendChild(comm);
    });
  });
};

// export  = findLengthOnly;
export default renderComments;