function modalOpen() {
  document.querySelector('.modal_wrap').style.display = 'block';
  document.querySelector('.modal_background').style.display = 'block';
}

function modalClose() {
  document.querySelector('.modal_wrap').style.display = 'none';
  document.querySelector('.modal_background').style.display = 'none';
}

document.querySelector('#modal_btn').addEventListener('click', modalOpen);