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
  window.parent.window.location.replace(localStorage.getItem('panicurl') || 'https://classroom.google.com/h')
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


// Panic
document.addEventListener('keydown', async (e) => {
  if (localStorage.getItem('panickey') && localStorage.getItem('panickey') == e.key) window.parent.window.location.replace(localStorage.getItem('panicurl') || 'https://classroom.google.com/h')
})

// Random Messages
const randomMessages = [
  'welcome to potato university',
  'probably should be doing homework right now',
  'this website was coded by a sentient potato',
  'your teacher thinks you are studying',
  'procrastination level: expert',
  'why do math when you can play games',
  'potatoes have more brain cells than me',
  'art class but make it chaotic',
  'unblocked games for blocked minds',
  'definitely not educational content',
  'powered by pure chaos and caffeine',
  'still more useful than homework',
  'grades are temporary but games are forever',
  'secretly just a potato wearing a hat',
  'loading... please insert more potatoes',
  'your wifi password is probably password123',
  'certified potato approved website',
  'warning: may contain traces of fun',
  'broke student starter pack included',
  'more addictive than social media somehow',
  'potato chips not included unfortunately',
  'probably violating several school policies',
  'this site runs on pure teenage rebellion',
  'contains 47% recycled memes',
  'not responsible for failed assignments',
  'potato quality guaranteed or your money back',
  'made with love and questionable decisions',
  'side effects may include sudden urges to game',
  'no potatoes were harmed in making this site',
  'art class dropout success story'
]

function displayRandomMessage() {
  const messageElement = document.getElementById('random-message-text')
  if (messageElement) {
    const randomIndex = Math.floor(Math.random() * randomMessages.length)
    messageElement.textContent = randomMessages[randomIndex]
  }
}

// Display random message when page loads
document.addEventListener('DOMContentLoaded', displayRandomMessage)

// Debug
