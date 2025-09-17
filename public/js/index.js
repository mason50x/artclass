const setObj = function (key, obj) {
  localStorage.setItem(key, JSON.stringify(obj))
}
const getObj = function (key) {
  return JSON.parse(localStorage.getItem(key))
}


if (localStorage.getItem('launchblank') && window.self !== window.top) {
  launchab()
}

function launchab() {
  const tab = window.open('about:blank', '_blank')
  const iframe = tab.document.createElement('iframe')
  const stl = iframe.style
  stl.border = stl.outline = 'none'
  stl.width = '100vw'
  stl.height = '100vh'
  stl.position = 'fixed'
  stl.left = stl.right = stl.top = stl.bottom = '0'
  iframe.src = self.location
  tab.document.body.appendChild(iframe)
  window.parent.window.location.replace('https://classroom.google.com/h')
}

function showUpdateLog() {
  window.location.href = '/updates.html'
}


if (window.self !== window.self) document.querySelector('#launchab').style.display = 'none'





// Clear any old theme and custom app data
localStorage.removeItem('theme')
localStorage.removeItem('customapps')

// Tab
if (localStorage.getItem('tabIcon')) {
  document.querySelector("link[rel='shortcut icon']").href = localStorage.getItem('tabIcon')
}

if (localStorage.getItem('tabName')) {
  document.title = localStorage.getItem('tabName')
}









// Random Messages
const randomMessages = [
  'yeah, you should be doing homework right now',
  'proxy = peak school',
  'this website has been made by a potato',
  'your teacher thinks you are studying',
  'you are a nerd',
  'look behind you, a little potato is watching you',
  'braincells are a myth.',
  'why does this exist',
  'unblocked games',
  '1.2 gpa',
  'dogs > cats',
  'still more useful than homework',
  'grades are temporary but games are forever',
  'if you are reading this, you are part of the 1% that knows the secret',
  'loading...',
  'typescript is better than javascript yet this website is written in javascript',
  'you should probably go back to that assignment',
  'grammeer is joust a mith',
  'more addictive than social media somehow',
  'chromebook is a piece of sh*t, yet it can run doom',
  'probably violating several school policies',
  'you are welcome for no ads',
  'not responsible for failed assignments',
  'ts > js',
  'find domains in the settings',
  'dont listen to these messages, they are just a bunch of lies',
  'nothing',
  'if you are a teacher, check out our games 🥺'
]

function displayRandomMessage() {
  const messageElement = document.getElementById('random-message-text')
  if (messageElement) {
    const randomIndex = Math.floor(Math.random() * randomMessages.length)
    messageElement.textContent = randomMessages[randomIndex]
  }
}

// Display random message when page loads
document.addEventListener('DOMContentLoaded', function() {
  displayRandomMessage()
})

// Debug
