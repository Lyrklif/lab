const showHideToggle = () => {
  const btnShow = document.querySelector('.js-show')

  if (!btnShow) return

  btnShow.addEventListener('click', () => {
    window.show(btnShow)
  })
}

export default showHideToggle
