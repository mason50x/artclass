
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
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/500px-Google_Favicon_2025.svg.png'
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
        name: 'Art Class',
        icon: '/assets/images/icon.png'
    }
}

function setTabPreset(tab) {
    setTab(tabPresets[tab].name, tabPresets[tab].icon)
}

if (localStorage.getItem("tabName")) document.querySelector("#tabname").value = localStorage.getItem("tabName")
if (localStorage.getItem("tabIcon")) document.querySelector("#tabicon").value = localStorage.getItem("tabIcon")

if (localStorage.getItem("panickey")) document.querySelector("#panickey").value = localStorage.getItem("panickey")
if (localStorage.getItem("panicurl")) document.querySelector("#panicurl").value = localStorage.getItem("panicurl")


// Guided Panic Key Setup Functions
var currentPanicStep = 1;
var selectedPanicUrl = '';
var detecting = false;

function goToPanicStep(step) {
    // Hide all steps
    for (let i = 1; i <= 4; i++) {
        const stepEl = document.querySelector(`#panic-step-${i}`);
        if (stepEl) stepEl.style.display = 'none';
    }

    // Show current step
    const currentStepEl = document.querySelector(`#panic-step-${step}`);
    if (currentStepEl) {
        currentStepEl.style.display = 'block';
        currentPanicStep = step;
    }
}

function setPanicUrlAndContinue(preset) {
    var url = panicUrlPresets[preset];
    selectedPanicUrl = url;
    localStorage.setItem("panicurl", url);

    // Update the display in step 3
    document.querySelector("#selected-panic-url").textContent = url;

    goToPanicStep(3);
}

function setCustomPanicUrlAndContinue() {
    var url = document.querySelector("#panicurl").value;
    if (!url) {
        alert("Please enter a URL");
        return;
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    selectedPanicUrl = url;
    localStorage.setItem("panicurl", url);

    // Update the display in step 3
    document.querySelector("#selected-panic-url").textContent = url;

    goToPanicStep(3);
}

function startGuidedDetection() {
    var button = document.querySelector("#guided-detect-btn");
    var status = document.querySelector("#detection-status");

    button.disabled = true;
    button.innerHTML = "Press any key now...";
    status.style.display = 'block';
    status.innerHTML = '<p style="color: #f39c12;">⏳ Waiting for key press...</p>';

    detecting = true;
    document.addEventListener("keydown", guidedDetectHandler);

    function guidedDetectHandler(e) {
        e.preventDefault();

        var keyName = e.key;
        localStorage.setItem("panickey", keyName);

        status.innerHTML = `<p style="color: #27ae60;">✅ Key detected: <strong>${keyName}</strong></p>`;
        button.innerHTML = "Key Set!";
        button.disabled = false;
        detecting = false;

        document.removeEventListener("keydown", guidedDetectHandler);

        // Auto-advance to success step after a short delay
        setTimeout(() => {
            finishPanicSetup(keyName, selectedPanicUrl);
        }, 1500);
    }
}

function setManualKeyAndFinish() {
    var keyInput = document.querySelector("#panickey");
    var keyName = keyInput.value.trim();

    if (!keyName) {
        alert("Please enter a key name");
        return;
    }

    localStorage.setItem("panickey", keyName);
    finishPanicSetup(keyName, selectedPanicUrl);
}

function finishPanicSetup(keyName, url) {
    document.querySelector("#final-key").textContent = keyName;
    document.querySelector("#final-url").textContent = url;
    goToPanicStep(4);
}

function testPanicKey() {
    var panicKey = localStorage.getItem("panickey");
    var panicUrl = localStorage.getItem("panicurl");

    if (!panicKey || !panicUrl) {
        alert("Panic key not properly configured");
        return;
    }

    if (confirm(`This will redirect to: ${panicUrl}\n\nContinue with test?`)) {
        window.location.href = panicUrl;
    }
}

function closePanicSetup() {
    // After completing setup, show the current configuration
    checkPanicKeyConfiguration();
}

function toggleAdvancedPanic() {
    var advanced = document.querySelector("#panic-advanced");
    var toggle = document.querySelector("#advanced-toggle");

    if (advanced.style.display === 'none' || !advanced.style.display) {
        advanced.style.display = 'block';
        toggle.textContent = 'Hide Advanced Settings';

        // Sync with existing values
        if (localStorage.getItem("panickey")) {
            document.querySelector("#panickey-advanced").value = localStorage.getItem("panickey");
        }
        if (localStorage.getItem("panicurl")) {
            document.querySelector("#panicurl-advanced").value = localStorage.getItem("panicurl");
        }
    } else {
        advanced.style.display = 'none';
        toggle.textContent = 'Show Advanced Settings';
    }
}

// Original detectPanic function for advanced mode
function detectPanic() {
    var key = document.querySelector("#panickey-advanced")
    var button = document.querySelector("#panickeybtn")
    button.disabled = true
    button.innerHTML = "Press any key..."

    detecting = true
    document.addEventListener("keydown", detectPanicHandler)

    function detectPanicHandler(e) {
        key.value = e.key;
        localStorage.setItem("panickey", e.key);
        button.innerHTML = "Auto-detect panic key";
        button.disabled = false;
        detecting = false;

        document.removeEventListener("keydown", detectPanicHandler)
    }
}

function setPanicKey() {
    var key = document.querySelector("#panickey")
    localStorage.setItem("panickey", key.value)
}

function setPanicUrl() {
    var url = document.querySelector("#panicurl")
    localStorage.setItem("panicurl", url.value)
}

var panicUrlPresets = {
    google: 'https://www.google.com',
    drive: 'https://drive.google.com',
    docs: 'https://docs.google.com',
    classroom: 'https://classroom.google.com'
}

function setPanicUrlPreset(preset) {
    var url = panicUrlPresets[preset]
    document.querySelector("#panicurl").value = url
    localStorage.setItem("panicurl", url)
}

// Current panic key configuration functions
function checkPanicKeyConfiguration() {
    var panicKey = localStorage.getItem("panickey");
    var panicUrl = localStorage.getItem("panicurl");

    var currentConfig = document.querySelector("#panic-current-config");
    var setupContainer = document.querySelector("#panic-setup-container");

    if (panicKey && panicUrl) {
        // Show current configuration
        document.querySelector("#current-panic-key").textContent = panicKey;
        document.querySelector("#current-panic-url").textContent = panicUrl;
        currentConfig.style.display = 'block';
        setupContainer.style.display = 'none';
    } else {
        // Show setup wizard
        currentConfig.style.display = 'none';
        setupContainer.style.display = 'block';
        goToPanicStep(1);
    }
}

function testCurrentPanicKey() {
    var panicKey = localStorage.getItem("panickey");
    var panicUrl = localStorage.getItem("panicurl");

    if (!panicKey || !panicUrl) {
        alert("Panic key not properly configured");
        return;
    }

    if (confirm(`This will test your panic key by redirecting to: ${panicUrl}\n\nPress OK to test, then press your panic key (${panicKey}) to see if it works.`)) {
        // Give user time to press the panic key
        var testButton = event.target;
        testButton.innerHTML = "Press your panic key now...";
        testButton.disabled = true;

        setTimeout(() => {
            testButton.innerHTML = "🧪 Test Panic Key";
            testButton.disabled = false;
            alert("Test timeout. If the page didn't redirect when you pressed your panic key, try reconfiguring it.");
        }, 5000);
    }
}

function reconfigurePanicKey() {
    var currentConfig = document.querySelector("#panic-current-config");
    var setupContainer = document.querySelector("#panic-setup-container");

    currentConfig.style.display = 'none';
    setupContainer.style.display = 'block';
    goToPanicStep(1);
}

function clearPanicKey() {
    if (confirm("Are you sure you want to remove your panic key configuration? This will disable the panic key functionality.")) {
        localStorage.removeItem("panickey");
        localStorage.removeItem("panicurl");

        // Clear input fields
        var keyInput = document.querySelector("#panickey");
        var urlInput = document.querySelector("#panicurl");
        if (keyInput) keyInput.value = '';
        if (urlInput) urlInput.value = '';

        // Update display
        checkPanicKeyConfiguration();

        alert("Panic key configuration removed successfully.");
    }
}

// Add auto-save event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Check and display current panic key configuration
    checkPanicKeyConfiguration();
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

    // Panic key auto-save
    document.querySelector('#panickey').addEventListener('input', function() {
        setTimeout(() => {
            localStorage.setItem("panickey", this.value)
        }, 300)
    })

    // Panic URL auto-save
    document.querySelector('#panicurl').addEventListener('input', function() {
        setTimeout(() => {
            localStorage.setItem("panicurl", this.value)
        }, 300)
    })
})
