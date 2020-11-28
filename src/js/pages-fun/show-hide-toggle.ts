const showHideToggle = () => {
  const btnShow = document.querySelector('.js-show')
  const hiddenBlock = document.querySelector('.js-hidden-block')

  if (!btnShow) return

  btnShow.addEventListener('click', () => {
    window.show(hiddenBlock)
  })
}

export default showHideToggle
