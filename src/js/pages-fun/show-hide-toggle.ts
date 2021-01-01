const showHideToggle = (): boolean => {
  const btnShow = document.querySelector('.js-show')
  const btnHide = document.querySelector('.js-hide')
  const hiddenBlock = document.querySelector('.js-hidden-block')

  if (btnShow) {
    btnShow.addEventListener('click', () => {
      window.show(hiddenBlock)
    })
  }

  if (btnHide) {
    btnHide.addEventListener('click', () => {
      window.hide(hiddenBlock, {
        callback: () => {
          console.log('Слок скрыт')
        }
      })
    })
  }

  return true
}

export default showHideToggle
