
interface ParamsInterface {
  showClass?: String // [название класса раскрытого блока]
  hideClass?: String // [название класса скрытого блока]
  removeStyleInTheEnd?: Boolean // [нужно ли удалять аттрибут style после выполнения функции]
  callback?: Function | null // [функция, которая срабатывает после выполнения hide()]
}

const defaultParams: ParamsInterface = {
  showClass: 'show',
  hideClass: 'hide',
  removeStyleInTheEnd: true,
  callback: null,
}

/**
 * скрывает html элемент
 *
 * @param {HTMLElement} elem
 * @param {ParamsInterface} [params={}]
 */
const hide = (elem: HTMLElement, params: ParamsInterface): void => {
  // если элемента не существует
  if (!elem) return


  const localParams = {...defaultParams, ...params}

  const {
    showClass,
    hideClass,
    removeStyleInTheEnd,
    callback,
  } = localParams

  const element = elem
  const height = elem.scrollHeight

  const elementTransition = element.style.transition
  element.style.transition = ''

  requestAnimationFrame(function() {
    element.style.height = `${height}px`
    element.style.transition = elementTransition

    requestAnimationFrame(function() {
      element.style.height = `0px`
    })
  })

  element.addEventListener(`${window.transitionEndName}`, end)

  // когда анимация скрытия блока закончена
  function end() {
    element.classList.add(`${hideClass}`)
    element.classList.remove(`${showClass}`)
    // если нужно - удалить атрибут style
    if (removeStyleInTheEnd) element.removeAttribute("style")
    // удаляем обработчк окончания анимации
    element.removeEventListener(`${window.transitionEndName}`, end)

    if (callback) callback(true)
  }
}

export default hide

