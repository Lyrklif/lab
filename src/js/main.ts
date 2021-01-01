/* eslint-disable no-unused-vars */
'use strict'

// *** основные (универсальные) скрипты
import { hide, show, toggle } from './functions/show-hide-toggle'
import { getTransitionEndEventName } from './functions/app-info'


// *** скрипты для отдельных страниц
import showHideToggle from './pages-fun/show-hide-toggle'

// *** указываем типы новых функций в window
declare global {
  interface Window {
    show: Function,
    hide: Function,
    toggle: Function,
    getTransitionEndEventName: Function,
    transitionEndName: String
  }
}

// *** после загрузки
window.addEventListener('load', () => {
  // сделать основные функции доступными из любого места программы
  window.show = show || {}
  window.hide = hide || {}
  window.toggle = toggle || {}
  window.getTransitionEndEventName = getTransitionEndEventName || {}

  // сделать параметры доступными из любого места программы
  window.transitionEndName = getTransitionEndEventName()

  // запускаем функции отдельных страниц
  showHideToggle()
})
