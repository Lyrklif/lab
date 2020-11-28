'use strict'

const showHideToggle = () => {
  const btnShow = document.querySelector('.js-show')

  if (!btnShow) return

  btnShow.addEventListener('click', () => {
    show(btnShow)
  })
}

export default showHideToggle
