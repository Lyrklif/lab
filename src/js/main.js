'use strict'

// основные (универсальные) скрипты
import show from './functions/show'

// Скрипты для отдельных страниц
import showHideToggle from './pages-fun/show-hide-toggle'


window.addEventListener('load', () => {
  // основные (универсальные) скрипты
  window.show = show

  // Скрипты для отдельных страниц
  showHideToggle()
})


