/* eslint-disable no-unused-vars */
'use strict'

// *** основные (универсальные) скрипты
import show from './functions/show'
import hide from './functions/hide'
import getTransitionEndEventName from './functions/getTransitionEndEventName'

// *** скрипты для отдельных страниц
import showHideToggle from './pages-fun/show-hide-toggle'

// *** указываем типы новых функций в window
declare global {
  interface Window { show: any, hide: any, getTransitionEndEventName: any, transitionEndName: String }
}
// window.show = window.show || {}
// window.hide = window.hide || {}

// *** после загрузки
window.addEventListener('load', () => {
  // сделать основные функции доступными из любого места программы
  window.show = show || {}
  window.hide = hide || {}
  window.getTransitionEndEventName = getTransitionEndEventName || {}

  // сделать параметры доступными из любого места программы
  window.transitionEndName = getTransitionEndEventName()

  // запускаем функции отдельных страниц
  showHideToggle()
})


