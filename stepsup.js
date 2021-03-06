const parentContainer = document.querySelector('.container1');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('readme');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('read_more');

    currentText.classList.toggle('read_more--show');

})