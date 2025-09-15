const setObj = function (key, obj) {
  localStorage.setItem(key, JSON.stringify(obj))
}
const getObj = function (key) {
  return JSON.parse(localStorage.getItem(key))
}

function loadcustomapp() {
  if (!getObj('customapps')) {
    setObj('customapps', [])
  }
  var name = prompt('What should this app be named? (required)')
  var url = prompt("What's this app's url? (required)")
  var icon = prompt("What's this app's icon? (optional)")
  var description = prompt("What's this app's description? (optional)")

  if (!name || !url) return alert('All required fields must be filled in')
  if (name.length > 15) return alert('App name is too long (max 30 characters)')

  fetch('https://www.uuidtools.com/api/generate/v4')
    .then((response) => response.json())
    .then((data) => {
      var customapps = getObj('customapps') || []
      customapps.push(JSON.parse(`{ "title": "${name} (Custom app)", "url": "${url}", "id": "${data[0]}", "image": "${icon}", "description": "${description}" }`))
      setObj('customapps', customapps)
      window.location.href = self.location
    })
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


function debug() {
  console.log(getObj('customapps'))
}

function clearcustomapps() {
  setObj('customapps', [])
  console.log('Removed all custom apps!')
  window.location.reload()
}


// Themes
if (localStorage.getItem('theme')) {
  document.body.setAttribute('theme', localStorage.getItem('theme'))
} else {
  document.body.setAttribute('theme', 'main')
}

// Tab
if (localStorage.getItem('tabIcon')) {
  document.querySelector("link[rel='shortcut icon']").href = localStorage.getItem('tabIcon')
}

if (localStorage.getItem('tabName')) {
  document.title = localStorage.getItem('tabName')
}

if (localStorage.getItem('theme')) {
  document.body.setAttribute('theme', localStorage.getItem('theme'))
}
console.log(localStorage.getItem('theme'))

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
