const asscup = require('asscup')

const inputArea = document.getElementById('input-area'),
      outputArea = document.getElementById('output-area')

inputArea.focus()

inputArea.addEventListener('input', () => {
    outputArea.innerHTML = asscup.format(inputArea.value).replace(/\n/g, '<br>')
})
