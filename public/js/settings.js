
function setTab(name = document.querySelector('#tabname').value, icon = document.querySelector("#tabicon").value) {
    localStorage.setItem("tabName", name)
    localStorage.setItem("tabIcon", icon)

    document.title = name
    document.querySelector("link[rel='shortcut icon']").href = icon
    if (localStorage.getItem("tabName")) document.querySelector("#tabname").value = localStorage.getItem("tabName")
    if (localStorage.getItem("tabIcon")) document.querySelector("#tabicon").value = localStorage.getItem("tabIcon")

}

var tabPresets = {
    google: {
        name: 'Google',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/1920px-Google_Favicon_2025.svg.png'
    },
    drive: {
        name: 'My Drive - Google Drive',
        icon: 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'
    },
    docs: {
        name: 'Google Docs',
        icon: 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico'
    },
    classroom: {
        name: 'Home',
        icon: 'https://ssl.gstatic.com/classroom/ic_product_classroom_32.png'
    },
    default: {
        name: 'Infinite',
        icon: '/assets/images/logo.png'
    }
}

function setTabPreset(tab) {
    setTab(tabPresets[tab].name, tabPresets[tab].icon)
}

if (localStorage.getItem("tabName")) document.querySelector("#tabname").value = localStorage.getItem("tabName")
if (localStorage.getItem("tabIcon")) document.querySelector("#tabicon").value = localStorage.getItem("tabIcon")

function logout() {
    localStorage.clear()
    window.location.href = '/'
}


// Add auto-save event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Tab name auto-save
    document.querySelector('#tabname').addEventListener('input', function() {
        setTimeout(() => {
            setTab(this.value, document.querySelector("#tabicon").value)
        }, 300)
    })

    // Tab icon auto-save
    document.querySelector('#tabicon').addEventListener('input', function() {
        setTimeout(() => {
            setTab(document.querySelector('#tabname').value, this.value)
        }, 300)
    })
})
