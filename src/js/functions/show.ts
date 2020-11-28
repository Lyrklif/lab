const show = (elem: HTMLElement, params = {}) => {
  // если элемента не существует
  if (!elem) return false

  // если элемент сейчас НЕ скрыт
  if (!elem.classList.contains('hide')) return false

  console.log('*** show', elem, params)

  elem.classList.remove('hide')
  elem.classList.add('fadeInDown')

  return null
}

export default show

