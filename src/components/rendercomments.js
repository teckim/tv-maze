import posts from '../api/posts.js'; 
 const renderComments= async (id) => {
    await posts.get(id).then((data) => {
    if (data.length === undefined) { data.length = 0; }
    const modal = document.querySelector('.commentarea');
    const comm = document.createElement('div');
    comm.innerHTML = `<h2 class="t">Comments(${data.length})</h2> `;
    modal.appendChild(comm);
    data.forEach((element) => {
      const modal = document.querySelector('.commentarea');
      const comm = document.createElement('div');
      comm.innerHTML = ` 
       <div class="t">${element.creation_date} ${element.username}: ${element.comment}</div>
       `;
      modal.appendChild(comm);
    });
  });
    }

    const findLengthOnly = async (id)=> {
      await posts.get(id).then((data) => {
        if (data.length === undefined) { data.length = 0; }
      const Length = data.length;
      return Length
    })
  }
module.exports= findLengthOnly
export default renderComments