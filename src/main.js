if (document.referrer.includes('github.com')) {
  window.alert('비정상적인 접근입니다. 설치 방법을 다시 읽어 주세요.')
  window.history.back()
}

import('./App.js').then(({ App }) =>
  new App(document.getElementById('app')))