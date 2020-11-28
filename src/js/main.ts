/* eslint-disable no-unused-vars */
'use strict'

// *** основные (универсальные) скрипты
import show from './functions/show'

// *** скрипты для отдельных страниц
import showHideToggle from './pages-fun/show-hide-toggle'

// *** указываем типы новых функций в window
declare global {
  interface Window { show: any }
}
window.show = window.show || {}

// *** после загрузки
window.addEventListener('load', () => {
  // делайм основные функции доступными из любого места программы
  window.show = show

  // запускаем функции отдельных страниц
  showHideToggle()
})


