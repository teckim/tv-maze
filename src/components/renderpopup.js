

const renderpopup = (show , id) => {
    const popupwindow= document.createElement('div');
    popupwindow.id=('pop-up');
    popupwindow.classList.add('pop-up');
  const projectcode = `
        <div class="pop-container">
            <div class="img-cont">
                <div class="pop-image">${show..original}</div>
                <div class="close">X</div>
            </div>
            <div class="pop-info">
                <div class="name">${show[id].name}</div>
                <div class="lang">${show[id].language}</div>
                <div class="run-time">${show[id].runtime}</div> 
            </div>
            <div class="pop-dsc">${show[id].summary}</div>
        </div>`;
    popupwindow.innerHTML += projectcode;
    document.body.appendChild(popupwindow);
    document.getElementById('close').addEventListener('click',()=>{
        popupwindow.innerHTML='';
        document.body.removeChild(popupwindow);
    })
  };
  export default renderpopup;