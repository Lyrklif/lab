const show = (elem = null, params = {}) => {
  if (!elem) return false

  console.log('show', params)

  elem.classList.add('d-block')

  return null
}

export default show

