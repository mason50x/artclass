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


// Panic Key Implementation
function triggerPanicKey() {
  window.parent.window.location.replace(localStorage.getItem('panicurl') || 'https://classroom.google.com/h')
}

function handlePanicKeyEvent(e) {
  if (localStorage.getItem('panickey') && localStorage.getItem('panickey') == e.key) {
    triggerPanicKey()
  }
}

// Main document panic key listener
document.addEventListener('keydown', handlePanicKeyEvent)

// Iframe panic key support
function setupIframePanicKey() {
  // Monitor all existing iframes
  const iframes = document.querySelectorAll('iframe')

  iframes.forEach(iframe => {
    try {
      // Wait for iframe to load
      iframe.addEventListener('load', function() {
        try {
          // Add panic key listener to iframe document
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document
          if (iframeDoc) {
            iframeDoc.addEventListener('keydown', handlePanicKeyEvent)
          }
        } catch (error) {
          // Cross-origin iframe - use postMessage instead
          setupCrossOriginPanicKey(iframe)
        }
      })

      // If iframe is already loaded
      if (iframe.contentDocument) {
        iframe.contentDocument.addEventListener('keydown', handlePanicKeyEvent)
      }
    } catch (error) {
      // Cross-origin iframe - use postMessage instead
      setupCrossOriginPanicKey(iframe)
    }
  })

  // Monitor for new iframes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1 && node.tagName === 'IFRAME') {
            setupSingleIframePanicKey(node)
          }
          // Check for iframes within added elements
          if (node.nodeType === 1 && node.querySelectorAll) {
            const newIframes = node.querySelectorAll('iframe')
            newIframes.forEach(setupSingleIframePanicKey)
          }
        })
      }
    })
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
}

function setupSingleIframePanicKey(iframe) {
  try {
    iframe.addEventListener('load', function() {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document
        if (iframeDoc) {
          iframeDoc.addEventListener('keydown', handlePanicKeyEvent)
        }
      } catch (error) {
        setupCrossOriginPanicKey(iframe)
      }
    })

    if (iframe.contentDocument) {
      iframe.contentDocument.addEventListener('keydown', handlePanicKeyEvent)
    }
  } catch (error) {
    setupCrossOriginPanicKey(iframe)
  }
}

function setupCrossOriginPanicKey(iframe) {
  // For cross-origin iframes, we use multiple approaches for maximum compatibility
  let iframeFocused = false

  // Method 1: Focus tracking
  iframe.addEventListener('focus', () => {
    iframeFocused = true
  })

  iframe.addEventListener('blur', () => {
    iframeFocused = false
  })

  // Listen for mouse events to detect when iframe might be focused
  iframe.addEventListener('mouseenter', () => {
    iframeFocused = true
  })

  iframe.addEventListener('mouseleave', () => {
    // Small delay to prevent immediate unfocus
    setTimeout(() => {
      if (document.activeElement !== iframe) {
        iframeFocused = false
      }
    }, 100)
  })

  // Method 2: Enhanced global keydown listener
  const panicKeyHandler = (e) => {
    if (iframeFocused && document.activeElement === iframe) {
      handlePanicKeyEvent(e)
    }
  }

  document.addEventListener('keydown', panicKeyHandler)

  // Method 3: Try to inject panic handler script
  function injectPanicHandler() {
    try {
      const iframeWindow = iframe.contentWindow
      const iframeDoc = iframe.contentDocument || iframeWindow.document

      if (iframeDoc) {
        // Try to inject our panic handler script
        const script = iframeDoc.createElement('script')
        script.src = '/js/panic-handler.js'
        script.onload = function() {
          // Send panic key config after script loads
          setTimeout(() => {
            const panicKey = localStorage.getItem('panickey')
            const panicUrl = localStorage.getItem('panicurl')

            if (panicKey && iframeWindow.postMessage) {
              iframeWindow.postMessage({
                type: 'SETUP_PANIC_KEY',
                panicKey: panicKey,
                panicUrl: panicUrl
              }, '*')
            }
          }, 100)
        }

        // Add to head or body
        const target = iframeDoc.head || iframeDoc.body || iframeDoc.documentElement
        if (target) {
          target.appendChild(script)
        }
      }
    } catch (error) {
      // Cross-origin restrictions - fall back to postMessage
      fallbackPostMessage()
    }
  }

  // Method 4: PostMessage fallback
  function fallbackPostMessage() {
    try {
      iframe.addEventListener('load', function() {
        setTimeout(() => {
          try {
            const iframeWindow = iframe.contentWindow
            if (iframeWindow && iframeWindow.postMessage) {
              const panicKey = localStorage.getItem('panickey')
              const panicUrl = localStorage.getItem('panicurl')

              if (panicKey) {
                iframeWindow.postMessage({
                  type: 'SETUP_PANIC_KEY',
                  panicKey: panicKey,
                  panicUrl: panicUrl
                }, '*')
              }
            }
          } catch (error) {
            // Cross-origin restrictions
          }
        }, 500)
      })
    } catch (error) {
      // Handle cross-origin restrictions
    }
  }

  // Try injection first, fall back to postMessage
  iframe.addEventListener('load', function() {
    setTimeout(() => {
      injectPanicHandler()
    }, 100)
  })

  // If iframe is already loaded
  if (iframe.contentDocument) {
    setTimeout(() => {
      injectPanicHandler()
    }, 100)
  }

  // Cleanup function
  iframe.panicCleanup = () => {
    document.removeEventListener('keydown', panicKeyHandler)
  }
}

// Listen for messages from iframes
window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'TRIGGER_PANIC_KEY') {
    triggerPanicKey()
  } else if (event.data && event.data.type === 'PANIC_HANDLER_READY') {
    // Iframe is ready to receive panic key config
    const panicKey = localStorage.getItem('panickey')
    const panicUrl = localStorage.getItem('panicurl')

    if (panicKey && event.source) {
      event.source.postMessage({
        type: 'SETUP_PANIC_KEY',
        panicKey: panicKey,
        panicUrl: panicUrl
      }, '*')
    }
  }
})

// Enhanced iframe monitoring with focus tracking
function enhancedIframeMonitoring() {
  let currentActiveElement = document.activeElement
  let lastIframeInteraction = null

  // Track mouse interactions with iframes
  document.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === 'IFRAME') {
      lastIframeInteraction = e.target
      setTimeout(() => {
        if (document.activeElement === e.target) {
          enhanceIframeKeyCapture(e.target)
        }
      }, 50)
    }
  })

  // Monitor active element changes
  setInterval(() => {
    if (document.activeElement !== currentActiveElement) {
      currentActiveElement = document.activeElement

      // If an iframe is focused, set up enhanced monitoring
      if (currentActiveElement && currentActiveElement.tagName === 'IFRAME') {
        enhanceIframeKeyCapture(currentActiveElement)
        lastIframeInteraction = currentActiveElement
      }
    }

    // Also check if user is likely interacting with an iframe
    if (lastIframeInteraction &&
        document.activeElement === lastIframeInteraction &&
        lastIframeInteraction.tagName === 'IFRAME') {
      enhanceIframeKeyCapture(lastIframeInteraction)
    }
  }, 100)

  // Global keydown fallback for when iframe steals focus
  document.addEventListener('keydown', (e) => {
    // If we recently interacted with an iframe and now there's a keydown
    // but the active element isn't the iframe, the iframe likely stole focus
    if (lastIframeInteraction &&
        lastIframeInteraction.tagName === 'IFRAME' &&
        document.activeElement !== lastIframeInteraction) {

      // Check if cursor is over the iframe
      const rect = lastIframeInteraction.getBoundingClientRect()
      const mouseEvent = window.lastMouseEvent

      if (mouseEvent &&
          mouseEvent.clientX >= rect.left &&
          mouseEvent.clientX <= rect.right &&
          mouseEvent.clientY >= rect.top &&
          mouseEvent.clientY <= rect.bottom) {
        handlePanicKeyEvent(e)
      }
    }
  })

  // Track mouse position for better iframe interaction detection
  document.addEventListener('mousemove', (e) => {
    window.lastMouseEvent = e
  })
}

function enhanceIframeKeyCapture(iframe) {
  // Skip if iframe already has enhancement
  if (iframe.hasEnhancedCapture) return
  iframe.hasEnhancedCapture = true

  // Method 1: Try to capture events directly from iframe document
  function setupDirectCapture() {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document
      if (iframeDoc) {
        iframeDoc.addEventListener('keydown', handlePanicKeyEvent, true)
        return true
      }
    } catch (error) {
      // Cross-origin restriction
    }
    return false
  }

  // Method 2: Use overlay for capture (fallback)
  function setupOverlayCapture() {
    let overlay = document.getElementById('panic-key-overlay-' + Math.random().toString(36).substr(2, 9))

    if (!overlay) {
      overlay = document.createElement('div')
      overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999999;
        background: transparent;
        pointer-events: none;
        display: none;
      `

      // Position overlay over iframe
      const updateOverlayPosition = () => {
        const rect = iframe.getBoundingClientRect()
        overlay.style.position = 'fixed'
        overlay.style.top = rect.top + 'px'
        overlay.style.left = rect.left + 'px'
        overlay.style.width = rect.width + 'px'
        overlay.style.height = rect.height + 'px'
      }

      updateOverlayPosition()
      document.body.appendChild(overlay)

      // Update position on scroll/resize
      const resizeObserver = new ResizeObserver(updateOverlayPosition)
      resizeObserver.observe(iframe)
      window.addEventListener('scroll', updateOverlayPosition)
      window.addEventListener('resize', updateOverlayPosition)
    }

    let overlayActive = false

    // Show overlay when iframe might have focus
    const showOverlay = () => {
      if (!overlayActive) {
        overlay.style.display = 'block'
        overlay.style.pointerEvents = 'auto'
        overlay.focus()
        overlayActive = true
      }
    }

    const hideOverlay = () => {
      if (overlayActive) {
        overlay.style.display = 'none'
        overlay.style.pointerEvents = 'none'
        overlayActive = false
      }
    }

    // Enhanced focus detection
    iframe.addEventListener('mousedown', showOverlay)
    iframe.addEventListener('click', showOverlay)
    iframe.addEventListener('focus', showOverlay)

    // Hide when clicking outside
    document.addEventListener('click', (e) => {
      if (!iframe.contains(e.target) && e.target !== iframe) {
        hideOverlay()
      }
    })

    // Capture keydown on overlay
    overlay.addEventListener('keydown', (e) => {
      handlePanicKeyEvent(e)

      // Forward event to iframe if possible
      try {
        const iframeWindow = iframe.contentWindow
        if (iframeWindow) {
          const forwardedEvent = new KeyboardEvent('keydown', {
            key: e.key,
            code: e.code,
            keyCode: e.keyCode,
            which: e.which,
            shiftKey: e.shiftKey,
            ctrlKey: e.ctrlKey,
            altKey: e.altKey,
            metaKey: e.metaKey,
            bubbles: true,
            cancelable: true
          })

          // Briefly disable overlay to let event through
          overlay.style.pointerEvents = 'none'
          setTimeout(() => {
            overlay.style.pointerEvents = 'auto'
          }, 1)
        }
      } catch (error) {
        // Cross-origin restrictions
      }
    })

    // Store cleanup function
    iframe.cleanupOverlay = () => {
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay)
      }
    }
  }

  // Try direct capture first, fall back to overlay
  iframe.addEventListener('load', () => {
    setTimeout(() => {
      if (!setupDirectCapture()) {
        setupOverlayCapture()
      }
    }, 100)
  })

  // If already loaded
  if (!setupDirectCapture()) {
    setupOverlayCapture()
  }
}

// Initialize iframe panic key support when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  setupIframePanicKey()
  enhancedIframeMonitoring()
})

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
  'setup a panic key before its too late',
  'grammeer is joust a mith',
  'more addictive than social media somehow',
  'chromebook is a piece of sh*t, yet it can run doom',
  'probably violating several school policies',
  'click the panic key before its too late',
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
