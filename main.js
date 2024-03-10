function showFocus(event) {
  let focus = event.target.dataset.focus;
  let div = document.getElementById(focus);
  div.classList.add('activate');
}

function HideFocus(event) {
  let focus = event.target.dataset.focus;
  document.getElementById(focus).classList.remove('activate')
}
