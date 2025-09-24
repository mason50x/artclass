function setTab(
  name = document.querySelector("#tabname").value,
  icon = document.querySelector("#tabicon").value
) {
  localStorage.setItem("tabName", name);
  localStorage.setItem("tabIcon", icon);

  document.title = name;
  document.querySelector("link[rel='shortcut icon']").href = icon;
  if (localStorage.getItem("tabName"))
    document.querySelector("#tabname").value = localStorage.getItem("tabName");
  if (localStorage.getItem("tabIcon"))
    document.querySelector("#tabicon").value = localStorage.getItem("tabIcon");
}

var tabPresets = {
  google: {
    name: "Google",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/1920px-Google_Favicon_2025.svg.png",
  },
  drive: {
    name: "My Drive - Google Drive",
    icon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png",
  },
  docs: {
    name: "Google Docs",
    icon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico",
  },
  classroom: {
    name: "Home",
    icon: "https://ssl.gstatic.com/classroom/ic_product_classroom_32.png",
  },
  default: {
    name: "Art Class",
    icon: "/assets/images/artclass_logo.png",
  },
};

function setTabPreset(tab) {
  setTab(tabPresets[tab].name, tabPresets[tab].icon);
}

function resetToDefault() {
  // Clear custom tab settings
  localStorage.removeItem("tabName");
  localStorage.removeItem("tabIcon");

  // Reset to default Art Class settings
  setTab(tabPresets.default.name, tabPresets.default.icon);

  // Clear the input fields
  document.querySelector("#tabname").value = "";
  document.querySelector("#tabicon").value = "";

  // Show confirmation
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "Reset Complete!";
  button.style.backgroundColor = "#27ae60";

  setTimeout(() => {
    button.textContent = originalText;
    button.style.backgroundColor = "#3498db";
  }, 2000);
}

if (localStorage.getItem("tabName"))
  document.querySelector("#tabname").value = localStorage.getItem("tabName");
if (localStorage.getItem("tabIcon"))
  document.querySelector("#tabicon").value = localStorage.getItem("tabIcon");




function logout() {
  localStorage.clear();
  window.location.href = "/";
}

// Add auto-save event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Tab name auto-save
  document.querySelector("#tabname").addEventListener("input", function () {
    setTimeout(() => {
      setTab(this.value, document.querySelector("#tabicon").value);
    }, 300);
  });

  // Tab icon auto-save
  document.querySelector("#tabicon").addEventListener("input", function () {
    setTimeout(() => {
      setTab(document.querySelector("#tabname").value, this.value);
    }, 300);
  });
});
