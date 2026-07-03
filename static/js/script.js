// ============================================================
// Webliert Homepage — Interactions
// ============================================================

// 禁用右键菜单（个人主页常见做法，可注释掉）
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

// ----- 按钮按下态 -----
function handlePress(event) { this.classList.add('pressed'); }
function handleRelease(event) { this.classList.remove('pressed'); }
function handleCancel(event) { this.classList.remove('pressed'); }

document.querySelectorAll('.projectItem').forEach(function (button) {
  button.addEventListener('mousedown', handlePress);
  button.addEventListener('mouseup', handleRelease);
  button.addEventListener('mouseleave', handleCancel);
  button.addEventListener('touchstart', handlePress);
  button.addEventListener('touchend', handleRelease);
  button.addEventListener('touchcancel', handleCancel);
});

// ----- 工具函数 -----
function toggleClass(selector, className) {
  document.querySelectorAll(selector).forEach(function (element) {
    element.classList.toggle(className);
  });
}

function pop(imageURL) {
  var tcMainElement = document.querySelector('.tc-img');
  if (imageURL) {
    tcMainElement.src = imageURL;
  }
  toggleClass('.tc-main', 'active');
  toggleClass('.tc', 'active');
}

var tc = document.getElementsByClassName('tc');
var tc_main = document.getElementsByClassName('tc-main');
if (tc[0]) {
  tc[0].addEventListener('click', function () { pop(); });
}
if (tc_main[0]) {
  tc_main[0].addEventListener('click', function (event) {
    event.stopPropagation();
  });
}

// ----- Cookie 工具 -----
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(name) {
  var nameEQ = name + '=';
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

// ----- 主题切换 -----
document.addEventListener('DOMContentLoaded', function () {
  var html = document.querySelector('html');
  // 暗色为主题1（默认），亮色为主题2
  var themeState = getCookie('themeState') || 'Dark';
  var Checkbox = document.getElementById('myonoffswitch');

  function changeTheme(theme) {
    html.dataset.theme = theme;
    setCookie('themeState', theme, 365);
    themeState = theme;
  }

  if (Checkbox) {
    Checkbox.addEventListener('change', function () {
      changeTheme(themeState === 'Dark' ? 'Light' : 'Dark');
    });
  }

  // 初始化开关状态：Dark 模式开关为关（显示月亮），Light 模式开关为开（显示太阳）
  if (Checkbox) {
    Checkbox.checked = (themeState === 'Light');
  }

  changeTheme(themeState);

  // 标签悬浮轻微高亮
  document.querySelectorAll('.left-tag-item').forEach(function (tag) {
    tag.addEventListener('click', function () {
      // 占位：后续可绑定跳转
    });
  });
});

// ----- 页面加载渐隐 -----
var pageLoading = document.querySelector('#webliert-loading');
window.addEventListener('load', function () {
  setTimeout(function () {
    if (pageLoading) pageLoading.style.opacity = '0';
  }, 100);
});